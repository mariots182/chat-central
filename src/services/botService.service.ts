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
  sendInteractiveRequestLocationMessage,
  sendMessage,
} from "../utils/whatsapp";

class BotService {
  async getBotResponse(req: Request): Promise<void> {
    const messageDetails = extractMessageDetails(req.body);
    const { from, phoneNumberId, location } = messageDetails;
    const sessionCache: RedisSessionContext = await handleSessionCache(
      messageDetails
    );

    if (location) {
      console.log(
        "[BotService][getBotResponse] Mensaje de ubicación recibido :",
        location
      );
      // https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
      let geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=4${location.latitude},${location.longitude}`;

      try {
        await fetch(`${geoUrl}&key=${process.env.GOOGLE_MAPS_API_KEY}`).then(
          (response) => {
            // response.json();
          }
        );
      } catch (error) {
        console.error(
          "[BotService][getBotResponse] Error al procesar la ubicación:",
          error
        );
        return;
      }

      return;
    }
    const geminiResponse = await this.handleGeminiChat(
      sessionCache,
      messageDetails
    );

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

    if (!isValidMessage(messageDetails)) return;

    await setSessionCache(`${from}`, sessionCache);

    await this.handleGeminiResponse(geminiResponse.json);

    messageDetailsToSend = {
      to: from,
      phoneNumberId,
      message: geminiResponse.text,
      typeMessage: geminiResponse.json?.wa_type_message || "text",
    };

    await this.handleTypeMessage(messageDetailsToSend);

    // await clearBuffer(from);

    return;
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
      return await createCustomerAddress(phone, address);
    }

    if (operation === "update") {
      console.log(
        "[BotService][handleCustomerAddress] Updating customer address"
      );
      // return await updateCustomerAddress(address);
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

    if (typeMessage === "interactive_list_message") {
      console.log(
        "[BotService][handleTypeMessage] Enviando mensaje de ubicación interactivo"
      );
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

    if (typeMessage === "interactive_list_message") {
      console.log(
        "[BotService][handleTypeMessage] Enviando mensaje de lista interactivo"
      );
    }
  }
}

export default BotService;
