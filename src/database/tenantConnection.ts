// src/database/tenantConnection.ts
import { PrismaClient } from "@prisma/client";

const tenantClients: Record<string, PrismaClient> = {};

/**
 * Obtiene (o crea) una conexión Prisma para un esquema de tenant.
 * @param schema Nombre del esquema (ej: "tenant_abarrotes")
 */
export const getTenantPrisma = (schema: string): PrismaClient => {
  if (!tenantClients[schema]) {
    tenantClients[schema] = new PrismaClient({
      datasources: {
        db: {
          url: `${process.env.TENANT_DATABASE_URL}?schema=${schema}`,
        },
      },
    });
  }

  return tenantClients[schema];
};
