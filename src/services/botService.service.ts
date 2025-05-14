import { extractMessageDetails } from "../utils/messages";

class BotService {
  async getBotResponse(req: Request): Promise<void> {
    const messageDetails = extractMessageDetails(req.body);
    const { from, text, phoneNumberId, displayPhoneNumber, type, id } =
      messageDetails;

    // const isService
    console.table({
      from,
      text,
      phoneNumberId,
      displayPhoneNumber,
      type,
      id,
    });
  }
}

export default BotService;
