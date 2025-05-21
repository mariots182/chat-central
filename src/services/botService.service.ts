import {
  extractMessageDetails,
  genericMessage,
  isValidMessage,
} from "../utils/messages";
import { Request } from "express";
import { handleSession } from "../utils/sessions";
import { getTenantPrisma } from "../database/prismaClientFactory";
import { findCompanyByPhone } from "../utils/company";
import { handleCustomer } from "../utils/customer";
import config from "../config";
import { sendMessage } from "../utils/whatsapp";
import redis from "../clients/redis.client";
import { geminiChat, runGemini } from "../clients/gemini.client";
import { deleteRedisKey, getRedisKey, setRedisKey } from "../utils/redis";
import { RedisSessionContext } from "../models/sessions.model";
import { WhatsAppMessageDetails } from "../models/whatsapp.model";

class BotService {
  async getBotResponse(req: Request): Promise<void> {
    const userInfo = await this.handleUserInfo(req);
    if (!userInfo) {
      return;
    }
    // const { company, tenantDB, customer, session } = userInfo;
    const messageDetails = extractMessageDetails(req.body);
    const { from, text, phoneNumberId, wamid } = messageDetails;

    const sessionCache: RedisSessionContext = await this.handleSessionCache(
      messageDetails
    );

    sessionCache.conversation.push({
      role: "user",
      parts: [{ text }],
    });

    const geminiMessage = await geminiChat(sessionCache.conversation, text);

    sessionCache.conversation.push({
      role: "model",
      parts: [{ text: geminiMessage }],
    });

    //TODO añadir el mensaje de gemini a la conversación en REDIS
    (await setRedisKey(`${from}`, sessionCache)) as any;

    console.log(`[botService][getBotResponse] geminiMessage:`, geminiMessage);

    await genericMessage(from, phoneNumberId, geminiMessage);

    return;
  }

  async handleUserInfo(req: Request) {
    const messageDetails = extractMessageDetails(req.body);

    if (!isValidMessage(messageDetails)) {
      console.warn("Is not valid message");

      return;
    }

    const { from, displayPhoneNumber } = messageDetails;

    console.log(
      `[botService][handleUserInfo] from: ${from}, displayPhoneNumber: ${displayPhoneNumber}`
    );
    const company = await findCompanyByPhone(displayPhoneNumber);

    const tenantDB = getTenantPrisma(`tenant_${company.database}`);

    console.log(`[botService][handleUserInfo] tenantDB: ${tenantDB}`);

    const customer = await handleCustomer(from, tenantDB);

    const session = await handleSession(customer.id, messageDetails, tenantDB);

    return {
      company,
      tenantDB,
      customer,
      session,
    };
  }

  async handleSessionCache(messageDetails: WhatsAppMessageDetails) {
    let sessionCache: RedisSessionContext = await getRedisKey(
      `${messageDetails.from}`
    );

    if (!sessionCache) {
      await this.createSessionCache(messageDetails);
      sessionCache = await getRedisKey(`${messageDetails.from}`);
    }

    return sessionCache;
  }

  async createSessionCache(messageDetails: WhatsAppMessageDetails) {
    const { from, text, wamid } = messageDetails;
    const newSession: RedisSessionContext = {
      customerId: 15,
      sessionId: from,
      wamId: wamid,
      conversation: [
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

  async getSessionCache(from: string) {
    const sessionCache: RedisSessionContext = await getRedisKey(`${from}`);

    if (!sessionCache) {
      console.log(
        `[botService][getSessionCache] No hay sesión activa para el número ${from}`
      );

      return null;
    }

    return sessionCache;
  }
}

export default BotService;
