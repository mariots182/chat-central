import { Router } from "express";
import { handleBot } from "../../controllers/bot.controller";

const router = Router();

router.post("/bot", handleBot);

export default router;
