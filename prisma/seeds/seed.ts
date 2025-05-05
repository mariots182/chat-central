import { PrismaClient as TenantPrismaClient } from "../../prisma/tenant/generated";

const prisma = new TenantPrismaClient();

async function main() {
  // Order Statuses
  await prisma.orderStatus.createMany({
    data: [
      { name: "PENDING" },
      { name: "PROCESSING" },
      { name: "SHIPPED" },
      { name: "DELIVERED" },
      { name: "CANCELLED" },
    ],
    skipDuplicates: true,
  });

  // Sample Customer
  const customer = await prisma.customer.create({
    data: {
      name: "Juan Pérez",
      phone: "+521234567890",
      email: "juan@example.com",
      address: "Calle Falsa 123",
    },
  });

  // Customer Address
  await prisma.customerAddress.create({
    data: {
      customerId: customer.id,
      address: "Avenida Siempre Viva 742",
    },
  });

  // Products
  const products = await prisma.product.createMany({
    data: [
      {
        name: "Camiseta Azul",
        price: 250.0,
        stock: 100,
        description: "Camiseta de algodón azul",
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        name: "Pantalón Negro",
        price: 450.0,
        stock: 50,
        description: "Pantalón de mezclilla negro",
        imageUrl: "https://via.placeholder.com/150",
      },
    ],
    skipDuplicates: true,
  });

  const productList = await prisma.product.findMany();

  // Create Order
  const order = await prisma.order.create({
    data: {
      customerId: customer.id,
      statusId: 1, // Assuming "PENDING" has id 1
      // quantity: 2,
      totalPrice: productList[0].price + productList[1].price,
      notes: "Entregar entre semana",
      items: {
        create: [
          {
            productId: productList[0].id,
            quantity: 1,
            price: productList[0].price,
            totalPrice: productList[0].price,
          },
          {
            productId: productList[1].id,
            quantity: 1,
            price: productList[1].price,
            totalPrice: productList[1].price,
          },
        ],
      },
    },
  });

  // Payment
  await prisma.payment.create({
    data: {
      orderId: order.id,
      amount: order.totalPrice,
      method: "card",
      status: "paid",
    },
  });

  // Delivery
  await prisma.delivery.create({
    data: {
      orderId: order.id,
      address: "Calle de entrega 456",
      status: "in transit",
    },
  });

  // Review
  await prisma.review.create({
    data: {
      customerId: customer.id,
      productId: productList[0].id,
      rating: 5,
      comment: "Muy buena calidad",
    },
  });

  console.log("Seed data created successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
