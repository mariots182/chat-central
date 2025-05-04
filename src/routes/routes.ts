import { Router } from "express";

import webhookRoutes from "./api/webhook";
import companyRoutes from "./api/company";

const router = Router();

router.use("/api", webhookRoutes);
router.use("/api", companyRoutes);

export default router;
