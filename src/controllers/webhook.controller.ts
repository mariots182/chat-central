import { Request, Response } from "express";

export const verifyWebhook = (req: Request, res: Response) => {
  const VERIFY_TOKEN = process.env.WHATSAPP_TOKEN;

  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  console.log("📦 [webhookController][verifyWebhook] mode:", mode);
  console.log("📦 [webhookController][verifyWebhook] token:", token);
  console.log("📦 [webhookController][verifyWebhook] challenge:", challenge);
  console.log("📦 [webhookController][verifyWebhook] VERIFY", VERIFY_TOKEN);

  if (mode && token) {
    console.log(
      "📦 [webhookController][verifyWebhook] mode and token are present"
    );

    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log(
        "📦 [webhookController][verifyWebhook] Webhook verified successfully"
      );

      res.status(200).send(challenge);
    } else {
      console.error(
        "📦 ❌ [webhookController][verifyWebhook] Webhook verification failed"
      );

      res.sendStatus(403);
    }
  }
};
