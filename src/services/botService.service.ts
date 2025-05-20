import {
  extractMessageDetails,
  genericMessage,
  handleMessage,
  isValidMessage,
} from "../utils/messages";
import { Request } from "express";
import { handleSession, handleSessionState } from "../utils/sessions";
import { getTenantPrisma } from "../database/prismaClientFactory";
import { findCompanyByPhone } from "../utils/company";
import { handleCustomer } from "../utils/customer";
import config from "../config";
import { sendMessage } from "../utils/whatsapp";

class BotService {
  async getBotResponse(req: Request): Promise<void> {
    const messageDetails = extractMessageDetails(req.body);

    if (!isValidMessage(messageDetails)) {
      console.warn("Is not valid message");

      return;
    }

    const { from, phoneNumberId, displayPhoneNumber, id, text } =
      messageDetails;

    const company = await findCompanyByPhone(displayPhoneNumber);

    const tenantDB = getTenantPrisma(`tenant_${company.database}`);

    const customer = await handleCustomer(from, tenantDB);

    const session = await handleSession(customer.id, messageDetails, tenantDB);

    console.log(`before run`);

    const geminiMessage = await this.runGemini(text, from, phoneNumberId);

    console.log(`[botService][getBotResponse] geminiMessage:`, geminiMessage);

    await genericMessage(from, phoneNumberId, geminiMessage);

    return;
  }
  async runGemini(content: any, from: string, phoneId: string) {
    console.log("Importando módulo wrapper de Gemini...");
    const apiKey = config.google.geminiApiKey;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    console.log(`content: ${content}`);

    const payload = {
      contents: [
        {
          parts: [
            {
              text: content,
            },
          ],
        },
      ],
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Gemini response:", data);

      console.log("Response from Gemini:", data.candidates[0].content);
      console.log(
        "Response from Gemini2:",
        data.candidates[0].content.parts[0].text
      );

      const message = data.candidates[0].content.parts[0].text;

      return message;
    } catch (error) {
      console.error("Error fetching Gemini response:", error);
      throw error;
    }
  }
}

export default BotService;
