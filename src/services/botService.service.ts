import { Request } from "express";

import {
  createCustomerAddress,
  updateCustomer,
  updateCustomerAddress,
} from "../database/prismaClientFactory";
import { geminiChat } from "../clients/gemini.client";
import {
  clearBuffer,
  extractMessageDetails,
  isValidMessage,
} from "../utils/messages";
import { handleSessionCache, setSessionCache } from "../utils/sessions";
import { RedisSessionContext } from "../models/sessions.model";
import {
  WhatsAppMessage,
  WhatsAppMessageDetails,
} from "../models/whatsapp.model";
import { GeminiResponse, GeminiResponseJson } from "../models/gemini.model";
import {
  sendFileMessage,
  sendInteractiveRequestLocationMessage,
  sendMessage,
} from "../utils/whatsapp";
import { handleGeocodingAddress } from "../utils/utils";

class BotService {
  async getBotResponse(req: Request): Promise<void> {
    const messageDetails = extractMessageDetails(req.body);

    if (!isValidMessage(messageDetails)) return;

    await this.handleRequest(req);

    // await clearBuffer(from);

    return;
  }

  async handleRequest(req: Request) {
    const messageDetails = extractMessageDetails(req.body);
    const { from, phoneNumberId, location } = messageDetails;
    const sessionCache: RedisSessionContext = await handleSessionCache(
      messageDetails
    );

    let geminiResponse;
    let messageDetailsToSend;

    /*
      -------------------------------------------------------
      -------------------------------------------------------
      TODO: trabajar los multiples mensajes en el buffer

      const bufferResult = await messagesBuffer(from, text);

      await this.handleGeminiResponse(geminiResponse.json as GeminiResponseJson);

      -------------------------------------------------------
      -------------------------------------------------------
    */

    if (location) {
      const messageAddresses = await handleGeocodingAddress(location);

      messageDetails.text = messageAddresses;
    }

    geminiResponse = await this.handleGeminiChat(sessionCache, messageDetails);

    await this.handleGeminiResponse(geminiResponse.json);

    await setSessionCache(`${from}`, sessionCache);

    messageDetailsToSend = {
      to: from,
      phoneNumberId,
      message: geminiResponse.text,
      typeMessage: geminiResponse.json?.wa_type_message || "text",
    };

    await this.handleTypeMessage(messageDetailsToSend);
  }

  async handleGeminiChat(
    sessionCache: RedisSessionContext,
    messageDetails: WhatsAppMessageDetails
  ): Promise<GeminiResponse> {
    const { text } = messageDetails;

    const geminiResponse = await geminiChat(sessionCache.conversation, text);

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
      case "personal_info_address":
        console.log("[BotService][handleGeminiResponse] Intent: personal_info");

        await this.handleCustomerAddress(
          json.db_operation,
          json.customer_info.address,
          json.customer_info.phone
        );
        break;

      default:
        break;
    }
  }

  async handleCustomerAddress(operation: string, address: any, phone: string) {
    if (operation === "none") {
      console.warn(
        "[BotService][handleCustomerAddress] No operation specified for customer address"
      );
      return;
    }

    if (operation === "create") {
      console.log(
        "[BotService][handleCustomerAddress] Creating customer address"
      );
      return await createCustomerAddress(phone, address[0]);
    }

    if (operation === "update") {
      console.log(
        "[BotService][handleCustomerAddress] Updating customer address"
      );
      // return await updateCustomerAddress(address);
    }
  }

  async handleIntent(intent: string, json: any) {
    switch (intent) {
      case "personal_info":
        console.log("[BotService][handleIntent] Intent: personal_info");

      case "personal_info_address":
        console.log("[BotService][handleIntent] Intent: personal_info_address");

      default:
        console.warn(`[BotService][handleIntent] Unhandled intent: ${intent}`);
        break;
    }
  }

  async handleTypeMessage(messageDetailsToSend: GeminiResponseJson) {
    const { to, phoneNumberId, message, typeMessage } = messageDetailsToSend;

    const whatsappMessage: WhatsAppMessage = {
      to,
      phoneNumberId,
      message,
    };

    if (typeMessage === "message") {
      console.log(
        "[BotService][handleTypeMessage] Enviando mensaje de ubicación interactivo"
      );

      return await sendMessage(whatsappMessage);
    }

    if (typeMessage === "message_catalog") {
      console.log(
        "[BotService][handleTypeMessage] Enviando mensaje de ubicación interactivo"
      );

      whatsappMessage.message = `Aqui tienes el catálogo de productos.`;

      await sendMessage(whatsappMessage);

      await sendFileMessage(whatsappMessage);

      return;
    }

    if (typeMessage === "interactive_reply_button_message") {
      console.log(
        "[BotService][handleTypeMessage] Enviando mensaje de boton interactivo"
      );
    }

    if (typeMessage === "interactive_request_location_message") {
      console.log(
        "[BotService][handleTypeMessage] Enviando mensaje de ubicación interactivo"
      );
      return await sendInteractiveRequestLocationMessage(whatsappMessage);
    }
  }
}

export default BotService;
