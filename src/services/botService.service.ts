import { extractMessageDetails } from "../utils/messages";
import { Request, Response } from "express";
import { handleSessionState } from "../utils/sessions";
import { getTenantPrisma } from "../database/prismaClientFactory";

class BotService {
  async getBotResponse(req: Request): Promise<void> {
    const messageDetails = extractMessageDetails(req.body);
    const { from, text, phoneNumberId, displayPhoneNumber, type, id } =
      messageDetails;
    const customer = req.body.customer;
    const session = req.body.session;
    const company = req.body.company;
    const tenantDB = getTenantPrisma(`tenant_${company.database}`);

    // const isService
    console.table({
      from,
      text,
      phoneNumberId,
      displayPhoneNumber,
      type,
      id,
    });
    await handleSessionState(session, from, phoneNumberId, tenantDB, customer);
  }
}

export default BotService;
