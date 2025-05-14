import { Router } from "express";
import { verifyWebhook } from "../../controllers/webhook.controller";

const router = Router();

router.get("/webhook", verifyWebhook);

export default router;
