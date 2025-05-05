import { PrismaClient as CentralPrismaClient } from "../../prisma/central/generated";
import { PrismaClient as TenantPrismaClient } from "../../prisma/tenant/generated";

export const centralPrisma = new CentralPrismaClient();
export const tenantPrisma = new TenantPrismaClient();

const tenantClients: Record<string, TenantPrismaClient> = {};

export function getPrismaClient(databaseName: string): TenantPrismaClient {
  if (!tenantClients[databaseName]) {
    const url = process.env.TENANT_DATABASE_URL!.replace(
      "<DB_NAME>",
      databaseName
    );
    tenantClients[databaseName] = new TenantPrismaClient({
      datasources: { db: { url } },
    });
  }
  return tenantClients[databaseName];
}

export async function getTenantByPhoneNumberId(
  phoneNumberId: string
): Promise<TenantPrismaClient> {
  const tenant = await centralPrisma.company.findFirst({
    where: { phoneWhatsapp: phoneNumberId },
  });

  if (!tenant || !tenant.database) {
    throw new Error("Tenant not found or database is missing");
  }

  return getPrismaClient(tenant.database);
}
