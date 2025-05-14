import { Request, Response, NextFunction } from "express";
import { extractMessageDetails } from "../utils/messages";
import { getTenantPrisma } from "../database/prismaClientFactory";
import { createCustomer, findCustomerByPhone } from "../utils/customer";
import { findCompanyByPhone } from "../utils/company";

export const userMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("User middleware executed");
  const messageDetails = extractMessageDetails(req.body);
  const { from } = messageDetails;
  const company = req.body.company;

  const tenantDB = getTenantPrisma(`tenant_${company.database}`);

  try {
    let customer = await findCustomerByPhone(from, tenantDB);

    if (!customer) {
      customer = await createCustomer(from, tenantDB);
    }

    req.body.customer = customer;

    next();
  } catch (error) {
    console.error("Error in session middleware:", error);
    next(error);
  }
};
