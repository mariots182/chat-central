import { Router } from "express";
import { handleCompany } from "../../controllers/company.controller";

const router = Router();

router.post("/company", handleCompany);

export default router;
