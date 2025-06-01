import { Request, Response } from "express";
import BotService from "../services/botService.service";

export const handleBot = async (req: Request, res: Response) => {
  const botService = new BotService();
  const body = req.body;

  console.log("handleBot se activa");

  const change = body?.entry?.[0]?.changes?.[0]?.value;

  if (!change) {
    console.warn("⚠️ Payload mal formado:", JSON.stringify(body, null, 2));
    return res.sendStatus(400);
  }

  if (change.statuses) {
    const status = change.statuses[0];
    console.log(
      `📦 [botController][handleBot] Estado del mensaje: ${status.status}`
    );

    return res.sendStatus(200);
  }

  if (req.body.entry[0]?.changes[0]?.value?.messages) {
    req.body.entry[0].changes[0].value.messages =
      req.body.entry[0].changes[0].value.messages.filter(
        (message: any) =>
          message.timestamp > (Date.now() - 1000 * 60 * 60 * 0.2) / 1000
      );
  }

  try {
    await botService.getBotResponse(req);

    console.log(
      "📦 [botController][handleBot] Respuesta del bot enviada, mandando 200"
    );
    return res.sendStatus(200);
  } catch (error) {
    console.error("📦 ❌ [botController][handleBot] error:", error);

    return res.sendStatus(400);
  }
};
