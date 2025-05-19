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

    // TODO Guadar el ultimo estado del ultimo mensaje
    // (sent, delivered, read (el read se activa si el usuario tiene habilitada la funcion)), validacion del wamid
    return res.sendStatus(200); // Muy importante para evitar reintentos
  }

  //Ejemplo para consultar el wamId
  // tenantDB.customerSession.findUnique({
  //   where: { wamId: id },
  // });

  try {
    await botService.getBotResponse(req);

    res.sendStatus(200);
  } catch (error) {
    console.error("📦 ❌ [botController][handleBot] error:", error);

    res.sendStatus(500);
  }
};
