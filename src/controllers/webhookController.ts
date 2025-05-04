import { Request, Response } from "express";
import { processIncomingMessage } from "../services/webhookService";

export const handleWebhook = async (req: Request, res: Response) => {
  try {
    await processIncomingMessage(req.body);
    res.sendStatus(200);
  } catch (error) {
    console.error("Error processing webhook:", error);
    res.sendStatus(500);
  }
};
