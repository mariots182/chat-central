import { Request, Response } from "express";
import BotService from "../services/botService.service";

export const handleBot = async (req: Request, res: Response) => {
  const botService = new BotService();

  try {
    // const response = await botService.getBotResponse(req.body);
    // res.status(200).send(response);

    await botService.getBotResponse(req.body);

    res.status(200);
  } catch (error) {
    console.error("📦 ❌ [botController][handleBot] error:", error);

    res.status(500);
  }
};
