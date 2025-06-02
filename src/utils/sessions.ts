import { getTenantPrisma } from "../database/prismaClientFactory";
import { RedisSessionContext } from "../models/sessions.model";
import { WhatsAppMessageDetails } from "../models/whatsapp.model";
import {
  buildCompanyInfoPrompt,
  findCompanyByPhone,
  getCompanyContextData,
} from "./company";
import { buildCustomerInfoPrompt, getCustomerContextData } from "./customer";
import {
  customerAddressPrompt,
  customerCatalogPrompt,
  customerInfoPrompt,
  geminiFirstPrompt,
  orderDeliveryPrompt,
  orderPickupPrompt,
} from "./gemini";
import { getRedisKey, setRedisKey } from "./redis";
import { handleGeocodingAddress } from "./utils";

export async function handleSessionCache(
  messageDetails: WhatsAppMessageDetails
) {
  const { from, displayPhoneNumber, location } = messageDetails;
  const company = await findCompanyByPhone(displayPhoneNumber);
  const tenantDB = getTenantPrisma(`tenant_${company.database}`);

  const companyContext = await getCompanyContextData(
    displayPhoneNumber,
    tenantDB
  );
  const companyInfo = buildCompanyInfoPrompt(companyContext);

  console.log(
    `[sessions][handleSessionCache] companyInfo: ${JSON.stringify(companyInfo)}`
  );

  const customerContext = await getCustomerContextData(from, tenantDB);
  const customerInfo = buildCustomerInfoPrompt(customerContext);

  let sessionCache: RedisSessionContext = await getRedisKey(
    `${messageDetails.from}`
  );

  if (!sessionCache) {
    await createSessionCache(messageDetails);
    sessionCache = await getRedisKey(`${messageDetails.from}`);
  }

  sessionCache.customerId = Number(customerContext.customerId);
  sessionCache.company = company.database;
  sessionCache.conversation.push(
    {
      role: "user",
      parts: [{ text: `${companyInfo}` }],
    },
    {
      role: "user",
      parts: [{ text: `${customerInfo}` }],
    },
    {
      role: "user",
      parts: [{ text: `${company.promptInfo}` }],
    }
  );

  return sessionCache;
}

export async function createSessionCache(
  messageDetails: WhatsAppMessageDetails
) {
  const { from, wamid } = messageDetails;
  const firstPrompt = geminiFirstPrompt();
  const customerInfo = customerInfoPrompt();
  const customerAddressInfo = await customerAddressPrompt();
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
        parts: [{ text: `${customerAddressInfo}` }],
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
