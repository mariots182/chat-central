import { PrismaClient as CentralPrismaClient } from "../../prisma/central/generated";
import { PrismaClient as TenantPrismaClient } from "../../prisma/tenant/generated";
import { Customer, CustomerAddress } from "../models/customer.model";
import { getRedisKey } from "../utils/redis";

export const centralPrisma = new CentralPrismaClient();
export const tenantPrisma = new TenantPrismaClient();

const tenantClients: Record<string, TenantPrismaClient> = {};

export function getPrismaClient(databaseName: string): TenantPrismaClient {
  console.log(
    `📦 [prismaClientFactory][getPrismaClient] databaseName: ${databaseName}`
  );

  if (!tenantClients[databaseName]) {
    const url = process.env.TENANT_DATABASE_URL!.replace(
      "<DB_NAME>",
      databaseName
    );
    tenantClients[databaseName] = new TenantPrismaClient({
      datasources: { db: { url } },
    });
  }
  console.log(
    `📦 [prismaClientFactory][getPrismaClient] tenantClients[${databaseName}]: ${tenantClients[databaseName]}`
  );

  return tenantClients[databaseName];
}

export async function getTenantByPhoneNumberId(
  phoneNumberId: string
): Promise<TenantPrismaClient> {
  console.log(
    `📦 [prismaClientFactory][getTenantByPhoneNumberId] phoneNumberId: ${phoneNumberId}`
  );

  const tenant = await centralPrisma.company.findFirst({
    where: { phoneWhatsapp: phoneNumberId },
  });

  if (!tenant || !tenant.database) {
    throw new Error("Tenant not found or database is missing");
  }

  return getPrismaClient(tenant.database);
}

export const getTenantPrisma = (databaseName: string): TenantPrismaClient => {
  try {
    const url = process.env.TENANT_DATABASE_URL!.replace(
      "<DB_NAME>",
      databaseName
    );

    console.log(
      `📦 [prismaClientFactory][getTenantPrisma] url: ${url}, databaseName: ${databaseName}   `
    );

    return new TenantPrismaClient({
      datasources: { db: { url } },
    });
  } catch (error) {
    console.error(`📦 [prismaClientFactory][getTenantPrisma] error: ${error}`);

    throw new Error("Error getting tenant Prisma client");
  }
};

export async function createCustomer(customer: Customer) {
  const sessionCache = await getRedisKey(`${customer.phone}`);
  const tenantDB = getTenantPrisma(`tenant_${sessionCache.company}`);

  try {
    return await tenantDB.customer.create({
      data: {
        name: customer.name,
        phone: customer.phone,
        email: customer.email ?? "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  } catch (error) {
    console.error("Error creating customer:", error);
    throw new Error("Error creating customer");
  }
}

export async function updateCustomer(customer: Customer) {
  const sessionCache = await getRedisKey(`${customer.phone}`);

  const tenantDB = getTenantPrisma(`tenant_${sessionCache.company}`);

  try {
    return await tenantDB.customer.update({
      where: { id: Number(sessionCache.customerId) },
      data: {
        name: customer.name,
        phone: customer.phone,
        email: customer.email ?? "",
        updatedAt: new Date(),
      },
    });
  } catch (error) {
    console.error("Error updating customer:", error);

    throw new Error("Error updating customer");
  }
}

export async function updateCustomerAddress(Address: CustomerAddress) {}
