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
}
