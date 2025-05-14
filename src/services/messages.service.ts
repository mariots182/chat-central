import {
  sendInteractiveListMessage,
  sendInteractiveReplyButtonMessage,
  sendInteractiveRequestLocationMessage,
  sendMessage,
} from "../utils/whatsapp";

export function messageNotText() {
  console.log("⚠️ [messageService][messageNotText] Message is not text");

  return;
}

export function messageNotSupported() {
  console.log("⚠️ [messageService][messageNotSupported] Message not supported");

  return;
}

export function notTheAnswerMessage() {
  console.log("⚠️ [messageService][notTheAnswerMessage] Not the answer");

  return;
}

export async function genericMessage(
  to: string,
  phoneNumberId: string,
  message: string
) {
  console.log("📦 [messageService][genericMessage] Generic message");

  await sendMessage({
    to,
    phoneNumberId,
    message,
  });

  console.log(
    `📦 [webhookService][genericMessage] Sent generic message to ${to}`
  );

  return;
}

export async function sendMessageWelcome(to: string, phoneNumberId: string) {
  console.log("📦 [messageService][sendMessageWelcome] Welcome message");

  // const message = `👋 Hola y bienvenido! vemos que es tu primera vez por aqui \n ¿Cómo podemos ayudarte?`;
  const message = `👋 ¡Bienvenido a [Tienda]!\nSoy tu asistente virtual 🤖\n\nAl continuar con la conversación estás de acuerdo con nuestras políticas de privacidad y las puedes consultar en: 👇\n\nhttps://bonafont.com.mx/aviso-y-politicas-de-privacidad`;
  const message2 = `👋 ¡Hola! Soy Boty 🤖\nPor favor indícame en qué te puedo ayudar:\n\n1️⃣ Hacer un pedido 🛒\n2️⃣ Consulta de precios 💲\n3️⃣ Consulta tu cobertura 🚚\n4️⃣ Necesito ayuda 🆘`;

  const messages = [message, message2];

  for (const message of messages) {
    console.log(`📦 [messageService][sendMessageWelcome] message: ${message}`);
    await sendMessage({
      to,
      phoneNumberId,
      message,
    });
  }

  console.log(
    `📦 [webhookService][sendMessageWelcome] Sent welcome message to ${to}`
  );

  return;
}

// const interactive = {
//   type: "button",
//   body: { text: message },
//   header: {
//     type: "Boty",
//     text: messageInteractive,
//   },
//   footer: {
//     text: "Selecciona una opción:",
//   },
//   action: {
//     buttons: [
//       {
//         type: "reply",
//         reply: {
//           id: "1",
//           title: "First Buttons Title",
//         },
//       },
//       {
//         type: "reply",
//         reply: {
//           id: "2",
//           title: "Second Buttons Title",
//         },
//       },
//     ],
//   },
// };

export async function sendMessageCampaign(to: string, phoneNumberId: string) {
  console.log("📦 [webhookService][sendMessageCampaign] Campaign message");
  const message = `👋 Hola! Bienvenido a la tienda de ropa. ¿Cómo puedo ayudarte?`;
  console.log(`📦 [webhookService][sendMessageCampaign] campaign: ${message}`);
  await sendMessage({
    to,
    phoneNumberId,
    message,
  });
  console.log(
    `📦 [webhookService][sendMessageCampaign] Sent campaign message to ${to}`
  );
  return;
}

export async function sendMessageMainMenu(to: string, phoneNumberId: string) {
  console.log("📦 [webhookService][sendMessageMainMenu] Main menu");
  const message = `👋 Hola! ¿Qué deseas hacer?\n\n1️⃣ Ver catálogo\n2️⃣ Hacer un pedido\n3️⃣ Estado de pedido\n4️⃣ Hablar con un asesor`;
  console.log(`📦 [webhookService][sendMessageMainMenu] menu: ${message}`);

  const interactive = {
    type: "button",
    body: {
      text: message,
    },
    action: {
      buttons: [
        {
          type: "reply",
          reply: {
            id: "view_catalog",
            title: "Ver catálogo",
          },
        },
        {
          type: "reply",
          reply: {
            id: "make_order",
            title: "Hacer un pedido",
          },
        },
        {
          type: "reply",
          reply: {
            id: "order_status",
            title: "Estado de pedido",
          },
        },
        {
          type: "reply",
          reply: {
            id: "talk_to_agent",
            title: "Hablar con un asesor",
          },
        },
      ],
    },
  };

  await sendInteractiveRequestLocationMessage({
    to,
    phoneNumberId,
    message,
    interactive,
  });

  console.log(
    `📦 [webhookService][sendMessageMainMenu] Sent main menu to ${to}`
  );
  return;
}
