import { getTenantPrisma } from "../database/prismaClientFactory";
import { RedisSessionContext } from "../models/sessions.model";
import { WhatsAppMessageDetails } from "../models/whatsapp.model";
import { findCompanyByPhone } from "./company";
import { buildCustomerInfoPrompt, getCustomerContextData } from "./customer";
import {
  customerCatalogPrompt,
  customerInfoPrompt,
  geminiFirstPrompt,
  orderDeliveryPrompt,
  orderPickupPrompt,
} from "./gemini";
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

export async function handleSessionCache(
  messageDetails: WhatsAppMessageDetails
) {
  const { from, displayPhoneNumber } = messageDetails;
  const company = await findCompanyByPhone(displayPhoneNumber);
  const tenantDB = getTenantPrisma(`tenant_${company.database}`);
  const customerContext = await getCustomerContextData(from, tenantDB);
  const info = buildCustomerInfoPrompt(customerContext);

  let sessionCache: RedisSessionContext = await getRedisKey(
    `${messageDetails.from}`
  );
  if (!sessionCache) {
    await createSessionCache(messageDetails);
    sessionCache = await getRedisKey(`${messageDetails.from}`);
  }

  sessionCache.conversation.push({
    role: "user",
    parts: [{ text: `${info}` }],
  });

  return sessionCache;
}

export async function createSessionCache(
  messageDetails: WhatsAppMessageDetails
) {
  const { from, wamid } = messageDetails;
  const firstPrompt = geminiFirstPrompt();
  const customerInfo = customerInfoPrompt();
  const customerCatalog = customerCatalogPrompt();
  const orderPickup = orderPickupPrompt();
  const orderDelivery = orderDeliveryPrompt();

  const newSession: RedisSessionContext = {
    customerId: 0,
    sessionId: from,
    company: "",
    wamId: wamid,
    state: "",
    data: {},
    expiresAt: new Date(Date.now() + 1000 * 60 * 60).toISOString(),
    conversation: [
      {
        role: "user",
        parts: [{ text: `${firstPrompt}` }],
      },
      {
        role: "user",
        parts: [{ text: `${customerInfo}` }],
      },
      {
        role: "user",
        parts: [{ text: `${customerCatalog}` }],
      },
      {
        role: "user",
        parts: [{ text: `${orderPickup}` }],
      },
      {
        role: "user",
        parts: [{ text: `${orderDelivery}` }],
      },
    ],
  };

  await setRedisKey(`${from}`, newSession);
}

export async function setSessionCache(
  from: string,
  sessionCache: RedisSessionContext
) {
  await setRedisKey(`${from}`, sessionCache);
}
