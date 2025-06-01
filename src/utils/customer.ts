import { create } from "qrcode";
import { Customer } from "../models/customer.model";

export async function findCustomerByPhone(from: string, tenantDB: any) {
  try {
    let customer = await tenantDB.customer.findFirst({
      where: { phone: from },
    });

    return customer;
  } catch (error) {
    console.error("error findCustomerByPhone");

    throw new Error("Error finding customer");
  }
}

export async function createCustomer(from: string, tenantDB: any) {
  console.log("[customer][createCustomer] createCustomer", from);
  // console.log("[customer][createCustomer] tenantDB", tenantDB);

  try {
    let customer = await tenantDB.customer.create({
      data: {
        name: "",
        phone: from,
        email: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return customer;
  } catch (error) {
    console.error("error createCustomer", error);

    throw new Error("Error creating customer");
  }
}

export async function handleCustomer(from: string, tenantDB: any) {
  try {
    let customer = await findCustomerByPhone(from, tenantDB);

    if (!customer) {
      customer = await createCustomer(from, tenantDB);
    }

    return customer;
  } catch (error) {
    console.error("error handleCustomer");

    throw new Error("Error handling customer");
  }
}

export async function getCustomerContextData(
  phone: string,
  tenantDB: any
): Promise<Customer> {
  await handleCustomer(phone, tenantDB);

  const customer = await tenantDB.customer.findUnique({
    where: { phone },
    include: {
      addresses: true,
      orders: {
        include: {
          orderItems: {
            include: { product: true },
          },
        },
        orderBy: { createdAt: "desc" },
        take: 3,
      },
    },
  });

  if (!customer) {
    throw new Error("Cliente no encontrado en la base de datos");
  }

  return {
    customerId: customer.id,
    name: customer.name,
    phone: customer.phone,
    email: customer.email,
    address: customer.addresses[0]?.address || customer.address,
    orders: customer.orders.map((order: any) => ({
      id: order.id,
      createdAt: order.createdAt,
      items: order.orderItems.map((item: any) => ({
        name: item.product.name,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        totalPrice: item.totalPrice,
        unit: item.unit,
      })),
    })),
  };
}

export function buildCustomerInfoPrompt(contextData: Customer): string {
  const { name, phone, address, email, orders } = contextData;

  const orderSummaries = orders.map((o: any) => {
    const itemList = o.items
      .map((i: any) => `${i.quantity}x ${i.name}`)
      .join(", ");
    return `- ${itemList} (${new Date(o.createdAt).toLocaleDateString()})`;
  });

  return `

    Esta es la información del cliente actualmente:
    - Nombre: ${name}
    - Teléfono: ${phone}
    - Dirección principal: ${address}
    - Email: ${email}
    - Pedidos recientes:
    ${
      orderSummaries.length
        ? orderSummaries.join("\n")
        : "Sin pedidos recientes"
    }
    
  `.trim();
}
