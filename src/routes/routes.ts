import { Router } from "express";

import webhookRoutes from "./api/webhook";
import companyRoutes from "./api/company";
import botRoutes from "./api/bot";

const router = Router();

router.use("/api", botRoutes);
router.use("/api", webhookRoutes);
router.use("/api", companyRoutes);

export default router;
