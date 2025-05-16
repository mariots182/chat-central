export async function findCustomerByPhone(from: string, tenantDB: any) {
  let customer = await tenantDB.customer.findFirst({
    where: { phone: from },
  });

  return customer;
}

export async function createCustomer(from: string, tenantDB: any) {
  let customer = await tenantDB.customer.create({
    data: {
      phone: String(from),
      name: "",
      address: "",
      email: "",
    },
  });
  return customer;
}

export async function handleCustomer(from: string, tenantDB: any) {
  let customer = await findCustomerByPhone(from, tenantDB);

  if (!customer) {
    customer = await createCustomer(from, tenantDB);
  }

  return customer;
}
