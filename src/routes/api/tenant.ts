import { Router } from "express";
import { tenant } from "../../controllers/tenant.controller";

const router = Router();

router.post("/migrate/", tenant);

export default router;
