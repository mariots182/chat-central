import { RedisSessionContext, sessionFlowMap } from "../models/sessions.model";
import { WhatsAppMessageDetails } from "../models/whatsapp.model";
import { genericMessage, sendMessageWelcome } from "../utils/messages";
import { buildCustomerInfoPrompt, getCustomerContextData } from "./customer";
import { geminiFirstPrompt, userInfoPrompt } from "./gemini";
import { getRedisKey, setRedisKey } from "./redis";

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

    throw new Error("Error getting session");
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
        sessionId: messageDetails.from,
        previousState: "",
        state: "",
        wamId: messageDetails.wamid,
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
    throw new Error("Error creating new session");
  }
}

export async function handleSession(
  customerId: number,
  messageDetails: WhatsAppMessageDetails,
  tenantDB: any
) {
  try {
    let session = await getSessionByCustomerId(customerId, tenantDB);

    if (!session) {
      session = await createNewSession(customerId, messageDetails, tenantDB);
    }

    return session;
  } catch (error) {
    console.error(
      `[sessionsUtils][handleSession] Error handling session: ${error}`
    );
    throw new Error("Error handling session");
  }
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
  messageDetails: WhatsAppMessageDetails,
  tenantDB: any,
  customer: any
) {
  let prevState = "";
  let newState = "";

  switch (session.state) {
    case "":
      prevState = session.state;
      newState = sessionFlowMap.WELCOME_FLOW[0];

      break;
    case sessionFlowMap.WELCOME_FLOW[0]:
      prevState = session.state;
      newState = sessionFlowMap.WELCOME_FLOW[2];
      break;

    case sessionFlowMap.WELCOME_FLOW[2]:
      prevState = session.state;
      handleMainMenu(messageDetails);

      break;

    default:
      prevState = session.state;
      newState = sessionFlowMap.WELCOME_FLOW[0];
      break;
  }

  await updateSession(customer.id, prevState, newState, tenantDB);

  return newState;
}

function handleMainMenu(messageDetails: WhatsAppMessageDetails) {
  const { from, phoneNumberId, text } = messageDetails;

  switch (text) {
    case "1":
      console.log(
        "[sessionsUtils][handleMainMenu] Sending main menu - Option 1"
      );
      sendMessageWelcome(from, phoneNumberId);
      break;
    case "2":
      console.log(
        "[sessionsUtils][handleMainMenu] Sending main menu - Option 2"
      );
      break;
    case "3":
      console.log(
        "[sessionsUtils][handleMainMenu] Sending main menu - Option 3"
      );
      break;
    case "4":
      console.log(
        "[sessionsUtils][handleMainMenu] Sending main menu - Option 4"
      );
      break;
    default:
      console.log(
        "[sessionsUtils][handleMainMenu] Unknown option, sending main menu"
      );
      sendMessageWelcome(from, phoneNumberId);
      break;
  }
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

export async function handleSessionCache(
  messageDetails: WhatsAppMessageDetails,
  tenantDB: any
) {
  let sessionCache: RedisSessionContext = await getRedisKey(
    `${messageDetails.from}`
  );

  if (!sessionCache) {
    await createSessionCache(messageDetails, tenantDB);
    sessionCache = await getRedisKey(`${messageDetails.from}`);
  }

  return sessionCache;
}

export async function createSessionCache(
  messageDetails: WhatsAppMessageDetails,
  tenantDB: any
) {
  const { from, text, wamid } = messageDetails;
  const firstPrompt = geminiFirstPrompt();
  const customerContext = await getCustomerContextData(from, tenantDB);
  const customerInfo = buildCustomerInfoPrompt(customerContext);

  console.log(
    `[sessionsUtils][createSessionCache] prompt: ${firstPrompt}\n\n${customerInfo}`
  );

  const newSession: RedisSessionContext = {
    customerId: 15,
    sessionId: from,
    wamId: wamid,
    conversation: [
      {
        role: "user",
        parts: [{ text: `${firstPrompt}\n\n${customerInfo}` }],
      },
      {
        role: "user",
        parts: [{ text }],
      },
    ],
    state: "",
    data: {},
    expiresAt: new Date(Date.now() + 1000 * 60 * 60).toISOString(),
  };

  (await setRedisKey(`${from}`, newSession)) as any;
}

export async function setSessionCache(
  from: string,
  sessionCache: RedisSessionContext
) {
  (await setRedisKey(`${from}`, sessionCache)) as any;
}
