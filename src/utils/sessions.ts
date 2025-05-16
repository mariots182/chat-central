import { sessionFlowMap } from "../models/sessions.model";
import { genericMessage, sendMessageWelcome } from "../utils/messages";

export async function getSessionByCustomerId(
  customerId: number,
  tenantDB: any
) {
  return await tenantDB.customerSession.findFirst({
    where: { customerId },
  });
}

export async function createNewSession(
  customerId: number,
  phoneNumberId: string,
  tenantDB: any
) {
  return await tenantDB.customerSession.create({
    data: {
      customerId,
      sessionId: phoneNumberId,
      state: "",
      lastMessage: "",
      lastMessageDate: new Date(),
      lastMessageType: "",
      lastMessageStatus: "",
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      lastAccess: new Date(),
      previousState: "",
      deviceId: "",
      ipAddress: "",
    },
  });
}

export async function handleSession(
  customerId: number,
  phoneNumberId: string,
  tenantDB: any
) {
  let session = getSessionByCustomerId(customerId, tenantDB);

  if (!session) {
    session = createNewSession(customerId, phoneNumberId, tenantDB);
  }

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
