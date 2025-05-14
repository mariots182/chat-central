import { centralPrisma } from "../database/prismaClientFactory";

export async function findCompanyByPhone(displayPhoneNumber: string) {
  return await centralPrisma.company.findFirst({
    where: { phoneWhatsapp: displayPhoneNumber },
  });
}
