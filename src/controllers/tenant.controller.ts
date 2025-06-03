import { Request, Response } from "express";
import { execSync } from "child_process";
import TenantService from "../services/tenant.service";
import fs from "fs";
import path from "path";

export const tenant = (req: Request, res: Response) => {
  const { tenant } = req.body;
  const tenantService = new TenantService();

  if (!tenant) {
    return res.status(400).json({
      success: false,
      error: "El tenant es requerido en el cuerpo de la petición.",
    });
  }

  console.log(`Procesando migración para el tenant: ${tenant}`);
  // const schemaPath = "prisma/tenant/schema.prisma";
  // --schema=prisma/tenant/schema.prisma
  const schemaPath = path.join(__dirname, "../../prisma/tenant/schema.prisma");

  // prisma/tenant/schema.prisma

  const migrationName = `auto_${Date.now()}`;
  const dbUrl = tenantService.getTenantUrl(tenant);

  console.log(`URL de la base de datos: ${dbUrl}`);
  console.log(`Creando migración: ${migrationName}`);

  try {
    // 1. Crear nueva migración si hay cambios en el schema
    execSync(`npx prisma db push --schema=${schemaPath}`, {
      stdio: "inherit",
      env: {
        ...process.env,
        DATABASE_URL: dbUrl,
      },
    });

    console.log(`Migración creada: ${migrationName}`);

    res.status(200).json({
      success: true,
      message: `Migración generada y aplicada para tenant: ${tenant}`,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error:
        error.stdout?.toString() ||
        error.message ||
        "Error al generar migración.",
    });
  }
};
