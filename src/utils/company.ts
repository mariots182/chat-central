import { centralPrisma } from "../database/prismaClientFactory";
import { CompanyModel } from "../models/company.model";

export async function findCompanyByPhone(
  displayPhoneNumber: string
): Promise<CompanyModel> {
  const company = await centralPrisma.company.findFirst({
    where: { phoneWhatsapp: displayPhoneNumber },
  });

  if (!company) {
    console.error(
      `[company][findCompanyByPhone] Company not found for ${displayPhoneNumber}`
    );
    throw new Error(
      `[company][findCompanyByPhone] Company not found for ${displayPhoneNumber}`
    );
  }

  return company;
}
