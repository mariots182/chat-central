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
