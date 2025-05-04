import { Router } from "express";
import {
  handleWebhook,
  verifyWebhook,
} from "../../controllers/webhookController";

const router = Router();

router.post("/webhook", handleWebhook);
router.get("/webhook", verifyWebhook);

export default router;
