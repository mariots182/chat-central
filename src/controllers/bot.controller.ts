import { Request, Response } from "express";
import BotService from "../services/botService.service";

export const handleBot = async (req: Request, res: Response) => {
  const botService = new BotService();

  try {
    console.log("req.body", req.body);

    await botService.getBotResponse(req);

    res.status(200);
  } catch (error) {
    console.error("📦 ❌ [botController][handleBot] error:", error);

    res.status(500);
  }
};
