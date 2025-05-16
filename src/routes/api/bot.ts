import { Router } from "express";
import { handleBot } from "../../controllers/bot.controller";

const router = Router();

// router.post("/bot", handleBot);
router.post("/webhook", handleBot);

export default router;
