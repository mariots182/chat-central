import { Request, Response, NextFunction } from "express";
import { extractMessageDetails } from "../utils/messages";

export const messageMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Message Middleware executed");
  const messageDetails = extractMessageDetails(req.body);
  const { from, text, displayPhoneNumber } = messageDetails;

  try {
    if (
      (messageDetails.statuses !== undefined &&
        messageDetails.statuses.status === "sent") ||
      (messageDetails.statuses !== undefined &&
        messageDetails.statuses.status === "delivered")
    ) {
      console.warn("[messageMiddleware] Message already sent or delivered");
      next();
      return;
    }

    if (!from || !text || !displayPhoneNumber) {
      console.warn("[messageMiddleware] Incomplete payload received");
      next();
      return;
    }
    next();
  } catch (error) {
    console.error("[messageMiddleware] Error in session middleware:", error);
    next(error);
  }
};
