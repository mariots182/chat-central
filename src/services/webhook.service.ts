import { getTenantByPhoneNumberId } from "../database/prismaClientFactory";
import { sendMainMenu } from "../utils/whatsapp";

export const processIncomingMessage = async (body: any) => {
  const entry = body?.entry?.[0];
  const changes = entry?.changes?.[0];
  const value = changes?.value;
  const metadata = value?.metadata;
  const phoneNumberId = metadata?.phone_number_id;
  const display_phone_number = `+${metadata?.display_phone_number}`;

  const messages = value?.messages;
  if (!messages || messages.length === 0) return;

  const message = messages[0];
  const from = message.from;
  const text = message?.text?.body;
  // const from = value?.messages?.[0]?.from;

  console.log(
    `📦 [webhookService][processIncomingMessage] phoneNumberId: ${phoneNumberId}`
  );
  console.log(
    `📦 [webhookService][processIncomingMessage] display_phone_number: ${display_phone_number}`
  );

  console.log(
    `📦 [webhookService][processIncomingMessage] from: ${from}, text: ${text}`
  );

  if (!from || !text || !display_phone_number) {
    console.warn(
      "⚠️ [webhookService][processIncomingMessage] Incomplete payload received"
    );

    return;
  }

  const tenant = await getTenantByPhoneNumberId(display_phone_number);

  if (!tenant) {
    console.error(
      `⚠️ [webhookService][processIncomingMessage] Tenant not found for phone_number_id: ${phoneNumberId}`
    );
    return;
  }

  // tenant.$connect();

  console.log(
    `📦 [webhookService][processIncomingMessage] Connected to tenant: ${tenant}`
  );

  // // 1. Verificar si el cliente existe
  let customer = await tenant.customer.findFirst({
    where: { phone: from, email: "" },
  });

  if (!customer) {
    console.log(
      `📦 [webhookService][processIncomingMessage] Customer not found, creating new customer`
    );

    customer = await tenant.customer.create({
      data: {
        phone: String(from),
        name: "",
        address: "",
        email: "",
      },
    });

    console.log(
      `📦 [webhookService][processIncomingMessage] New customer created, id: ${customer.id}, name: ${customer.name}, phone: ${customer.phone}`
    );
  }

  console.log(
    `📦 [webhookService][processIncomingMessage] Customer found, id: ${customer.id}, name: ${customer.name}, phone: ${customer.phone}`
  );

  // // 2. Verificar si existe una sesión activa
  let session = await tenant.customerSession.findFirst({
    // where: { customer_id: customer.id },
    // orderBy: { created_at: "desc" },
    where: {
      customerId: customer.id,
      state: "MAIN_MENU",
    },
  });

  // // 3. Si no existe sesión, crearla y mostrar menú
  if (!session) {
    session = await tenant.customerSession.create({
      data: {
        customerId: customer.id,
        state: "MAIN_MENU",
        lastMessage: "",
        lastMessageDate: new Date(),
        lastMessageType: "text",
        lastMessageStatus: "sent",
        sessionId: "generated-session-id",
        lastAccess: new Date(),
        deviceId: "unknown",
        ipAddress: "0.0.0.0",
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
    });

    await sendMainMenu(from, process.env.WHATSAPP_TOKEN!, phoneNumberId);

    console.log(
      `📦 [webhookService][processIncomingMessage] New session created, id: ${session.id}, state: ${session.state}`
    );

    return;
  }

  // // 4. Enviar menú principal si está en MAIN_MENU
  // if (session.state === "MAIN_MENU") {
  //   await sendMainMenu(from, process.env.WHATSAPP_TOKEN!, phoneNumberId);
  //   return;
  // }

  // // 5. Aquí irá el flujo para otros estados (ej: catálogo, pedido, estado)
  // console.log(`📌 Estado actual del usuario: ${session.state}`);
};

//Mensaje de prueba de usuario a compañía
// {
//   "id":"2156177544893332",
//   "changes":[
//     {
//       "value":{
//         "messaging_product":"whatsapp",
//       "metadata":{
//         "display_phone_number":"15556455135",
//         "phone_number_id":"669646609558342"},
//         "contacts":[
//           {
//             "profile":{
//             "name":"Mts"
//           },
//         "wa_id":"5212292507583"}],
//         "messages":[
//           {
//             "from":"5212292507583",
//             "id":"wamid.HBgNNTIxMjI5MjUwNzU4MxUCABIYFDNBODBFQjIyQ0I2ODRBMEVDQ0Y4AA==",
//             "timestamp":"1746422249",
//             "text":{
//             "body":"hola"},
//             "type":"text"
//           }
//         ]
//       },
//       "field":"messages"
//   }]}
