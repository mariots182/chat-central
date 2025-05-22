import { Request } from "express";

import {
  clearBuffer,
  extractMessageDetails,
  genericMessage,
  isValidMessage,
  messagesBuffer,
} from "../utils/messages";
import {
  handleSession,
  handleSessionCache,
  setSessionCache,
} from "../utils/sessions";
import { getTenantPrisma } from "../database/prismaClientFactory";
import { findCompanyByPhone } from "../utils/company";
import { handleCustomer } from "../utils/customer";
import { geminiChat } from "../clients/gemini.client";
import { RedisSessionContext } from "../models/sessions.model";
import { WhatsAppMessageDetails } from "../models/whatsapp.model";
import redis from "../clients/redis.client";
import { deleteRedisKey } from "../utils/redis";

class BotService {
  async getBotResponse(req: Request): Promise<void> {
    const messageDetails = extractMessageDetails(req.body);
    const { from, text, phoneNumberId } = messageDetails;

    await deleteRedisKey(`${from}`);

    const userInfo = await this.handleUserInfo(req);

    if (!userInfo) return;

    const { tenantDB } = userInfo;
    const sessionCache: RedisSessionContext = await handleSessionCache(
      messageDetails,
      tenantDB
    );

    const bufferResult = await messagesBuffer(from, text);

    if (!bufferResult?.shouldRespond) {
      console.log(`[Buffer] Aún esperando más mensajes de ${from}`);
      return;
    }

    const fullText = bufferResult.fullText;

    sessionCache.conversation.push({
      role: "user",
      parts: [{ text }],
    });

    const geminiMessage = await this.handleGeminiChat(
      sessionCache,
      messageDetails
    );

    await genericMessage(from, phoneNumberId, geminiMessage);
    await clearBuffer(from);

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

  async handleGeminiChat(
    sessionCache: RedisSessionContext,
    messageDetails: WhatsAppMessageDetails
  ) {
    const { from, text } = messageDetails;

    const geminiMessage = await geminiChat(sessionCache.conversation, text);

    sessionCache.conversation.push({
      role: "user",
      parts: [{ text: text }],
    });

    await setSessionCache(`${from}`, sessionCache);

    return geminiMessage;
  }
}

export default BotService;
