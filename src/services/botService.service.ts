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
import redis from "../utils/redis";
import { runGemini } from "../utils/gemini";

class BotService {
  async getBotResponse(req: Request): Promise<void> {
    const userInfo = await this.handleUserInfo(req);
    if (!userInfo) {
      // Optionally handle the invalid message case here
      return;
    }
    const { company, tenantDB, customer, session } = userInfo;
    const { from, phoneNumberId, text } = extractMessageDetails(req.body);

    // await redis.set(`pedido:${from}`, JSON.stringify({ hola: "adios" }), {
    //   EX: 3600,
    // });

    // const data = await redis.get(`pedido:${from}`);
    // const pedido = data ? JSON.parse(data) : null;

    // console.log("[botService][getBotResponse] pedido", pedido);

    const geminiMessage = await runGemini(text);

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

    const company = await findCompanyByPhone(displayPhoneNumber);

    const tenantDB = getTenantPrisma(`tenant_${company.database}`);

    const customer = await handleCustomer(from, tenantDB);

    const session = await handleSession(customer.id, messageDetails, tenantDB);

    return {
      company,
      tenantDB,
      customer,
      session,
    };
  }
}

export default BotService;
