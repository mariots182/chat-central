import {
  centralPrisma,
  getTenantPrisma,
} from "../database/prismaClientFactory";
import { sessionFlowMap } from "../utils/sessions";
import { sendMessageMainMenu, sendMessageWelcome } from "./messages.service";

export const processIncomingMessage = async (body: any) => {
  const { from, text, phoneNumberId, displayPhoneNumber, type, id, statuses } =
    extractMessageDetails(body);

  console.table({
    from,
    text,
    phoneNumberId,
    displayPhoneNumber,
    type,
    id,
    // status,
  });

  if (
    (statuses !== undefined && statuses.status === "sent") ||
    (statuses !== undefined && statuses.status === "delivered")
  ) {
    console.warn(
      "[webhookService][processIncomingMessage] Message already sent or delivered"
    );

    return;
  }

  if (!from || !text || !displayPhoneNumber) {
    console.warn(
      "[webhookService][processIncomingMessage] Incomplete payload received"
    );

    return;
  }

  const company = await findCompanyByPhone(displayPhoneNumber);

  if (!company) {
    console.error(
      `[webhookService][processIncomingMessage] Company not found for ${displayPhoneNumber}`
    );
    return;
  }

  const tenantDB = getTenantPrisma(`tenant_${company.database}`);
  const customer = await findOrCreateCustomer(from, tenantDB);
  let session = await getSessionByCustomerId(customer.id, tenantDB);

  if (!session) {
    session = await createNewSession(customer.id, phoneNumberId, tenantDB);
  }

  await handleSessionState(
    session.state,
    from,
    phoneNumberId,
    tenantDB,
    customer
  );
};

function extractMessageDetails(body: any) {
  const entry = body?.entry?.[0];
  const changes = entry?.changes?.[0];
  const value = changes?.value;
  const metadata = value?.metadata;

  const phoneNumberId = metadata?.phone_number_id;
  const displayPhoneNumber = `+${metadata?.display_phone_number}`;
  const message = value?.messages?.[0];
  const statuses = value?.statuses?.[0];
  // const status = statuses?.status;

  const from = message?.from;
  const text = message?.text?.body;
  const type = message?.type;
  const timestamp = message?.timestamp;
  const id = message?.id;
  const location = message?.location;

  return {
    from,
    text,
    phoneNumberId,
    displayPhoneNumber,
    type,
    timestamp,
    id,
    location,
    statuses,
  };
}

async function findCompanyByPhone(displayPhoneNumber: string) {
  return await centralPrisma.company.findFirst({
    where: { phoneWhatsapp: displayPhoneNumber },
  });
}

async function findOrCreateCustomer(from: string, tenantDB: any) {
  let customer = await tenantDB.customer.findFirst({
    where: { phone: from },
  });

  if (!customer) {
    customer = await tenantDB.customer.create({
      data: {
        phone: String(from),
        name: "",
        address: "",
        email: "",
      },
    });
  }

  return customer;
}

async function getSessionByCustomerId(customerId: number, tenantDB: any) {
  return await tenantDB.customerSession.findFirst({
    where: { customerId },
  });
}

async function createNewSession(
  customerId: number,
  sessionId: string,
  tenantDB: any
) {
  return await tenantDB.customerSession.create({
    data: {
      customerId,
      sessionId,
      state: sessionFlowMap.WELCOME_FLOW[0],
      lastMessage: "",
      lastMessageDate: new Date(),
      lastMessageType: "text",
      lastMessageStatus: "sent",
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24h
    },
  });
}

async function updateSession(customerId: string, state: string, tenantDB: any) {
  return await tenantDB.customerSession.update({
    where: { customerId },
    data: { state },
  });
}

async function handleSessionState(
  state: string,
  from: string,
  phoneNumberId: string,
  tenantDB: any,
  customer: any
) {
  let newState = state;
  console.log(
    `[webhookService][handleSessionState] Sending message for state: ${state}`
  );
  switch (state) {
    case sessionFlowMap.WELCOME_FLOW[0]:
      await sendMessageWelcome(from, phoneNumberId);

      newState = sessionFlowMap.WELCOME_FLOW[1];

      break;

    case sessionFlowMap.WELCOME_FLOW[1]:
      await sendMessageMainMenu(from, phoneNumberId);

      break;

    default:
      console.log(
        "[webhookService][handleSessionState] Unknown session state, sending main menu"
      );
      // await sendMainMenu(from, process.env.WHATSAPP_TOKEN!, phoneNumberId);
      break;
  }

  await updateSession(customer.id, newState, tenantDB);
}
