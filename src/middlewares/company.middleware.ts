import { Request, Response, NextFunction } from "express";
import { extractMessageDetails } from "../utils/messages";
import { findCompanyByPhone } from "../utils/company";

export const companyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("[companyMiddleware] Company middleware executed");
  const messageDetails = extractMessageDetails(req.body);
  const { from, text, displayPhoneNumber } = messageDetails;

  if (
    (messageDetails.statuses !== undefined &&
      messageDetails.statuses.status === "sent") ||
    (messageDetails.statuses !== undefined &&
      messageDetails.statuses.status === "delivered")
  ) {
    console.warn(
      "[webhookService][processIncomingMessage] Message already sent or delivered"
    );
    next();
    return;
  }

  if (!from || !text || !displayPhoneNumber) {
    console.warn(
      "[webhookService][processIncomingMessage] Incomplete payload received"
    );

    return;
  }

  try {
    const company = await findCompanyByPhone(displayPhoneNumber);

    if (!company) {
      console.error(
        `[webhookService][processIncomingMessage] Company not found for ${displayPhoneNumber}`
      );

      next();

      return;
    }

    req.body.company = company;

    next();
  } catch (error) {
    console.error("Error in session middleware:", error);
    next(error);
  }
};
