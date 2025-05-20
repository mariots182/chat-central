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
  try {
    let customer = await tenantDB.customer.create({
      data: {
        phone: String(from),
        name: "",
        address: "",
        email: "",
      },
    });

    return customer;
  } catch (error) {
    console.error("error createCustomer");

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
