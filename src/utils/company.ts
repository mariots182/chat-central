import { centralPrisma } from "../database/prismaClientFactory";
import { Company, CompanyProduct } from "../models/company.model";

export async function findCompanyByPhone(
  displayPhoneNumber: string
): Promise<Company> {
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

export async function getCompanyContextData(
  phone: string,
  tenantDB: any
): Promise<Company> {
  const productosArray = [];
  console.log(
    `[company][getCompanyContextData] Fetching company context data for phone: ${phone}`
  );

  const company = await centralPrisma.company.findUnique({
    where: { phoneWhatsapp: phone },
  });

  const products = await tenantDB.product.findMany();

  products.forEach((product: CompanyProduct) => {
    const obj = {
      id: product.id,
      name: product.name,
      price: product.price,
      stock: product.stock,
      description: product.description,
      imageUrl: product.imageUrl,
      category: product.category || null,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };

    productosArray.push(obj);
  });

  if (!company) {
    console.error(
      `[company][getCompanyContextData] Company not found for phone ${phone}`
    );
    throw new Error(
      `[company][getCompanyContextData] Company not found for phone ${phone}`
    );
  }

  return {
    id: company.id,
    name: company.name,
    database: `tenant_${company.database}`,
    active: company.active,
    activeCampaign: company.activeCampaign,
    phoneWhatsapp: company.phoneWhatsapp,
    promptInfo: company.promptInfo,
    catalog: products,
    createdAt: company.createdAt,
    updatedAt: company.updatedAt,
  };
}

export function buildCompanyInfoPrompt(contextData: Company): string {
  const { name, phoneWhatsapp, catalog }: Company = contextData;

  const products = (catalog as any[])
    .map((product) => {
      return `
      - id: ${product.id}
        nombre: ${product.name}
        precio: ${product.price}
        descripción: ${product.description}
        categoría: ${product.category ? product.category.name : "Sin categoría"}
    `.trim();
    })
    .join("\n");

  return `
    Esta es la información de la empresa/local actualmente:

    nombre: ${name},
    número de telefono: ${phoneWhatsapp},
    productos: 
      ${products}
  `.trim();

  // - Pedidos recientes:
  // ${
  //   orderSummaries.length
  //     ? orderSummaries.join("\n")
  //     : "Sin pedidos recientes"
  // }
}
