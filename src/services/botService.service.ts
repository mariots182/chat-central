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

class BotService {
  async getBotResponse(req: Request): Promise<void> {
    const messageDetails = extractMessageDetails(req.body);

    if (!isValidMessage(messageDetails)) {
      console.error("Is not valid message");

      return;
    }

    const { from, phoneNumberId, displayPhoneNumber } = messageDetails;

    const company = await findCompanyByPhone(displayPhoneNumber);

    const tenantDB = getTenantPrisma(`tenant_${company.database}`);

    const customer = await handleCustomer(from, tenantDB);

    const session = await handleSession(customer.id, phoneNumberId, tenantDB);

    // await handleSessionState(session, from, phoneNumberId, tenantDB, customer);

    await genericMessage(from, phoneNumberId, "hola");

    return;
  }
}

export default BotService;
