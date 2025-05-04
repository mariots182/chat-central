import { Router } from "express";
import { handleCompany } from "../../controllers/companyController";

const router = Router();

router.post("/company", handleCompany);

export default router;
