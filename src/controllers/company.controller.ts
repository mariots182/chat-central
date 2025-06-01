import { Request, Response } from "express";

import { centralPrisma } from "../database/prismaClientFactory";
import { setupNewTenant } from "../database/setupNewTenant";

export const handleCompany = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, phoneWhatsapp, promptInfo } = req.body;

  if (!name || !promptInfo || !phoneWhatsapp) {
    console.warn(
      `⚠️ [companyRoute][handleCompany] Missing required fields: name, promptInfo, or phoneWhatsapp`
    );

    res.status(400).json({
      error: "Name | Info | phoneWhatsapp is required",
    });

    return;
  }

  const company = await centralPrisma.company.create({
    data: {
      name: name,
      database: name.replace(/[^a-zA-Z0-9_]/g, "_"),
      phoneWhatsapp: phoneWhatsapp,
      promptInfo: promptInfo,
      active: true,
      activeCampaign: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  if (!company) {
    res.status(500).json({ error: "Failed to create company" });

    return;
  }

  await setupNewTenant(company)
    .then(() => {
      console.log(
        `✅ [companyRoute] Tenant setup completed for company: ${company.name}`
      );
      console.info(
        `🏗️ [companyRoute] fullTenantUrl: ${process.env.PG_BASE_URL}${company.database}`
      );

      res.json({ message: "Company registered", company });
    })
    .catch((error) => {
      console.error(
        `❌ [companyRoute] Error setting up tenant for company: ${company.name}`,
        error
      );

      res.status(500).json({ error: "Failed to set up tenant" });

      return;
    });
};
