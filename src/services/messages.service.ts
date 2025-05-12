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

export async function sendMessageWelcome(to: string, phoneNumberId: string) {
  console.log("📦 [messageService][sendMessageWelcome] Welcome message");

  const message = `👋 Hola y bienvenido! vemos que es tu primera vez por aqui \n ¿Cómo podemos ayudarte?`;

  console.log(`📦 [messageService][sendMessageWelcome] welcome: ${message}`);

  await sendMessage({
    to,
    phoneNumberId,
    message,
  });

  console.log(
    `📦 [webhookService][sendMessageWelcome] Sent welcome message to ${to}`
  );

  return;
}

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
