import { Router } from "express";
import { handleBot } from "../../controllers/bot.controller";
import { userMiddleware } from "../../middlewares/user.middleware";
import { sessionMiddleware } from "../../middlewares/sessions.middleware";
import { companyMiddleware } from "../../middlewares/company.middleware";
import { messageMiddleware } from "../../middlewares/message.middleware";

const router = Router();

// router.post("/bot", handleBot);
router.post(
  "/webhook",
  messageMiddleware,
  companyMiddleware,
  userMiddleware,
  sessionMiddleware,
  handleBot
);

export default router;
