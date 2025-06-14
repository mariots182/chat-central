import { Router } from "express";

import webhookRoutes from "./api/webhook";
import companyRoutes from "./api/company";
import botRoutes from "./api/bot";
import userRoutes from "./api/user";
import tenantRoutes from "./api/tenant";

const router = Router();

router.use("/api", botRoutes);
router.use("/api", webhookRoutes);
router.use("/api", companyRoutes);
router.use("/api", userRoutes);
router.use("/api", tenantRoutes);

export default router;
