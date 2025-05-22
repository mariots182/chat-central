import { create } from "qrcode";

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
        email: "1",
        address: "",
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

export async function getCustomerContextData(phone: string, tenantDB: any) {
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
    address: customer.addresses[0]?.address || customer.address,
    orders: customer.orders.map((order: any) => ({
      id: order.id,
      createdAt: order.createdAt,
      items: order.orderItems.map((item: any) => ({
        name: item.product.name,
        quantity: item.quantity,
      })),
    })),
  };
}

export function buildCustomerInfoPrompt(
  contextData: Awaited<ReturnType<typeof getCustomerContextData>>
) {
  const { name, phone, address, orders } = contextData;

  const orderSummaries = orders.map((o: any) => {
    const itemList = o.items
      .map((i: any) => `${i.quantity}x ${i.name}`)
      .join(", ");
    return `- ${itemList} (${new Date(o.createdAt).toLocaleDateString()})`;
  });

  return `
    Información del cliente:
    - Nombre: ${name}
    - Teléfono: ${phone}
    - Dirección principal: ${address}
    - Pedidos recientes:
    ${
      orderSummaries.length
        ? orderSummaries.join("\n")
        : "Sin pedidos recientes"
    }
  `.trim();
}
