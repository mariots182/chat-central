import {
  centralPrisma,
  getTenantPrisma,
} from "../database/prismaClientFactory";
import { createCustomer, findCustomerByPhone } from "./customer.service";
import {
  createNewSession,
  getSessionByCustomerId,
  handleSessionState,
} from "./sessions.service";

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

  let customer = await findCustomerByPhone(from, tenantDB);

  if (!customer) {
    customer = await createCustomer(from, tenantDB);
  }

  let session = await getSessionByCustomerId(customer.id, tenantDB);

  if (!session) {
    session = await createNewSession(customer.id, phoneNumberId, tenantDB);
  }

  await handleSessionState(session, from, phoneNumberId, tenantDB, customer);
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
