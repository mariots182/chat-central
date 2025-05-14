import { Request, Response, NextFunction } from "express";
import { extractMessageDetails } from "../utils/messages";
import { findCompanyByPhone } from "../utils/company";
import { getTenantPrisma } from "../database/prismaClientFactory";
import { createCustomer, findCustomerByPhone } from "../utils/customer";
import { createNewSession, getSessionByCustomerId } from "../utils/sessions";

export const sessionMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Middleware logic here
  console.log("Session middleware executed");
  const messageDetails = extractMessageDetails(req.body);
  const { from, phoneNumberId, displayPhoneNumber, type, id } = messageDetails;

  const company = req.body.company;

  const tenantDB = getTenantPrisma(`tenant_${company.database}`);

  let customer = req.body.customer;

  let session = await getSessionByCustomerId(customer.id, tenantDB);

  try {
    if (!session) {
      session = await createNewSession(customer.id, phoneNumberId, tenantDB);
    }

    req.body.session = session;

    next();
  } catch (error) {
    console.error("Error in session middleware:", error);
    next(error);
  }
};
