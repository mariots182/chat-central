import { Request } from "express";

import { geminiChat } from "../clients/gemini.client";
import {
  clearBuffer,
  extractMessageDetails,
  genericMessage,
  isValidMessage,
} from "../utils/messages";
import { handleSessionCache, setSessionCache } from "../utils/sessions";
import { deleteRedisKey } from "../utils/redis";

import { RedisSessionContext } from "../models/sessions.model";
import { WhatsAppMessageDetails } from "../models/whatsapp.model";
import { updateCustomer } from "../database/prismaClientFactory";

class BotService {
  async getBotResponse(req: Request): Promise<void> {
    const messageDetails = extractMessageDetails(req.body);

    if (!isValidMessage(messageDetails)) return;

    const { from, phoneNumberId } = messageDetails;

    const sessionCache: RedisSessionContext = await handleSessionCache(
      messageDetails
    );

    // TODO: trabajar los multiples mensajes en el buffer

    // const bufferResult = await messagesBuffer(from, text);

    // if (!bufferResult?.shouldRespond) {
    //   console.log(`[Buffer] Aún esperando más mensajes de ${from}`);
    //   return;
    // }

    // const fullText = bufferResult.fullText;

    const geminiResponse = await this.handleGeminiChat(
      sessionCache,
      messageDetails
    );

    await this.handleGeminiResponse(geminiResponse.json);

    await genericMessage(from, phoneNumberId, geminiResponse.text);

    // await clearBuffer(from);

    return;
  }

  async handleGeminiChat(
    sessionCache: RedisSessionContext,
    messageDetails: WhatsAppMessageDetails
  ) {
    const { from, text } = messageDetails;

    const geminiResponse = await geminiChat(sessionCache.conversation, text);

    await setSessionCache(`${from}`, sessionCache);

    return geminiResponse;
  }

  async handleGeminiResponse(json: any) {
    if (!json.update_bd) {
      console.warn(
        "[BotService][handleGeminiResponse] No se encontró update_bd en la respuesta JSON"
      );

      return;
    }

    switch (json.intent) {
      case "personal_info":
        console.log("[BotService][handleGeminiResponse] Intent: personal_info");
        updateCustomer(json.customer_info);
        break;

      default:
        break;
    }
  }
}

export default BotService;
