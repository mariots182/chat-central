import { Request, Response } from "express";
import { getRedisKey } from "../utils/redis";

export const user = async (req: Request, res: Response) => {
  const phoneUser = req.query.from;

  try {
    const redisResponse = await getRedisKey(`${phoneUser}`);

    // Example URL: /user?from=1234567890
    return res.status(200).json({
      message: "User data retrieved successfully",
      data: redisResponse,
    });
  } catch (error) {
    console.error("📦 ❌ [webhookController][verifyWebhook] Error:", error);
    return res.sendStatus(500);
  }
};
