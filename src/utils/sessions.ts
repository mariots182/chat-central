import { CustomerSessionModel, sessionFlowMap } from "../models/sessions.model";
import { WhatsAppMessageDetails } from "../models/whatsapp.model";
import { genericMessage, sendMessageWelcome } from "../utils/messages";

export async function getSessionByCustomerId(
  customerId: number,
  tenantDB: any
) {
  console.log(
    `[sessionsUtils][getSessionByCustomerId] Getting session for customerId: ${customerId}`
  );

  try {
    let session = await tenantDB.customerSession.findFirst({
      where: { customerId },
    });

    return session;
  } catch (error) {
    console.error(
      `[sessionsUtils][getSessionByCustomerId] Error getting session: ${error}`
    );
  }
}

export async function createNewSession(
  customerId: number,
  messageDetails: WhatsAppMessageDetails,
  tenantDB: any
) {
  try {
    let session = await tenantDB.customerSession.create({
      data: {
        customerId,
        sessionId: messageDetails.phoneNumberId,
        previousState: "",
        state: "",
        wamId: messageDetails.id,
        lastMessage: messageDetails.text,
        lastMessageDate:
          new Date(Number(messageDetails.timestamp) * 1000) || new Date(),
        lastMessageType: messageDetails.type,
        lastMessageStatus: messageDetails.statuses?.status || "",
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
        lastAccess: new Date(),
        deviceId: "",
        ipAddress: "",
      },
    });

    return session;
  } catch (error) {
    console.error(
      `[sessionsUtils][createNewSession] Error creating new session: ${error}`
    );
  }
}

export async function handleSession(
  customerId: number,
  messageDetails: WhatsAppMessageDetails,
  tenantDB: any
) {
  console.log(
    `[sessionsUtils][handleSession] finding session for customerId: ${customerId}`
  );

  let session = await getSessionByCustomerId(customerId, tenantDB);

  if (!session) {
    console.log(
      `[sessionsUtils][handleSession] No session found for customerId: ${customerId}, creating new session`
    );

    console.log(
      `[sessionsUtils][handleSession] Creating new session for customerId: ${customerId}`
    );

    session = await createNewSession(customerId, messageDetails, tenantDB);
  }

  console.log(
    `[sessionsUtils][handleSession] Session ready for customerId: ${customerId}`
  );

  return session;
}

export async function updateSession(
  customerId: string,
  previousState: string,
  state: string,
  tenantDB: any
) {
  return await tenantDB.customerSession.update({
    where: { customerId },
    data: { state, previousState },
  });
}

export async function handleSessionState(
  session: any,
  from: string,
  phoneNumberId: string,
  tenantDB: any,
  customer: any
) {
  let prevState = "";
  let newState = "";

  console.log(
    `[sessionsUtils][handleSessionState] Sending message for state: ${session.state}`
  );

  switch (session.state) {
    case "":
      console.log(
        "[sessionsUtils][handleSessionState] Session state is empty, sending welcome message"
      );

      await sendMessageWelcome(from, phoneNumberId);

      prevState = session.state;

      // has campaign

      newState = sessionFlowMap.WELCOME_FLOW[0];

      break;
    case sessionFlowMap.WELCOME_FLOW[0]:
      console.log(
        "[sessionsUtils][handleSessionState] Session state is empty, sending welcome message"
      );

      await sendMessageWelcome(from, phoneNumberId);

      prevState = session.state;
      newState = sessionFlowMap.WELCOME_FLOW[0];
      break;

    case sessionFlowMap.WELCOME_FLOW[2]:
      handleWelcomeShowMainMenu(session.lastMessage, from, phoneNumberId).then(
        (newState) => {
          console.log(
            "[sessionsUtils][handleSessionState] Sending welcome message"
          );
        }
      );

      // await sendMessageWelcome(from, phoneNumberId);

      // newState = sessionFlowMap.WELCOME_FLOW[1];

      break;

    case sessionFlowMap.WELCOME_FLOW[1]:
      // await sendMessageMainMenu(from, phoneNumberId);

      break;

    default:
      console.log(
        "[sessionsUtils][handleSessionState] Unknown session state, sending main menu"
      );
      // await sendMainMenu(from, process.env.WHATSAPP_TOKEN!, phoneNumberId);
      break;
  }

  await updateSession(customer.id, prevState, newState, tenantDB);
}

async function handleWelcomeShowMainMenu(
  text: string,
  from: string,
  phoneNumberId: string
) {
  if (text === "1") {
    console.log("[sessionsUtils][handleWelcomeShowMainMenu] Sending main menu");

    let message = `👋 Hola! Para poder realizar tu pedido es necesario que te registres primero.`;

    await genericMessage(from, phoneNumberId, message);

    return sessionFlowMap.REGISTRATION_FLOW[0];
  } else if (text === "2") {
    console.log("[sessionsUtils][handleWelcomeShowMainMenu] Sending main menu");
    return sessionFlowMap.REGISTRATION_FLOW[1];
  } else {
    console.log(
      "[sessionsUtils][handleWelcomeShowMainMenu] Unknown option, sending main menu"
    );
    return sessionFlowMap.REGISTRATION_FLOW[0];
  }
}
