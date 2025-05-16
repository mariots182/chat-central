import { WhatsAppMessageDetails } from "../models/whatsapp.model";
import {
  sendInteractiveListMessage,
  sendInteractiveReplyButtonMessage,
  sendInteractiveRequestLocationMessage,
  sendMessage,
} from "../utils/whatsapp";

export function extractMessageDetails(body: any): WhatsAppMessageDetails {
  const entry = body?.entry?.[0];
  const changes = entry?.changes?.[0];
  const value = changes?.value;
  const metadata = value?.metadata;

  const phoneNumberId = metadata?.phone_number_id;
  const displayPhoneNumber = `+${metadata?.display_phone_number}`;
  const message = value?.messages?.[0];
  const statuses = value?.statuses?.[0];
  // const status = statuses?.status;

  const from = message?.from;
  const text = message?.text?.body;
  const type = message?.type;
  const timestamp = message?.timestamp;
  const id = message?.id;
  const location = message?.location;

  console.table({
    from,
    text,
    phoneNumberId,
    displayPhoneNumber,
    type,
    timestamp,
    id,
    location,
  });

  return {
    from,
    text,
    phoneNumberId,
    displayPhoneNumber,
    type,
    timestamp,
    id,
    location,
    statuses,
  };
}

export function isValidMessage(
  messageDetails: WhatsAppMessageDetails
): boolean {
  const { from, text, displayPhoneNumber } = messageDetails;

  if (
    (messageDetails.statuses !== undefined &&
      messageDetails.statuses.status === "sent") ||
    (messageDetails.statuses !== undefined &&
      messageDetails.statuses.status === "delivered")
  ) {
    console.warn(
      "[messagesUtils][isValidMessage] Message already sent or delivered"
    );
    return false;
  }

  if (!from || !text || !displayPhoneNumber) {
    console.warn("[messageMiddleware] Incomplete payload received");
    return false;
  }

  return true;
}

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
    `📦 [messagesUtils][genericMessage] Sent generic message to ${to}`
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
    console.log(`📦 [messagesUtils][sendMessageWelcome] message: ${message}`);
    await sendMessage({
      to,
      phoneNumberId,
      message,
    });
  }

  console.log(
    `📦 [messagesUtils][sendMessageWelcome] Sent welcome message to ${to}`
  );

  return;
}

export async function sendMessageCampaign(to: string, phoneNumberId: string) {
  console.log("📦 [messagesUtils][sendMessageCampaign] Campaign message");
  const message = `👋 Hola! Bienvenido a la tienda de ropa. ¿Cómo puedo ayudarte?`;
  console.log(`📦 [messagesUtils][sendMessageCampaign] campaign: ${message}`);
  await sendMessage({
    to,
    phoneNumberId,
    message,
  });
  console.log(
    `📦 [messagesUtils][sendMessageCampaign] Sent campaign message to ${to}`
  );
  return;
}

export async function sendMessageMainMenu(to: string, phoneNumberId: string) {
  console.log("📦 [messagesUtils][sendMessageMainMenu] Main menu");
  const message = `👋 Hola! ¿Qué deseas hacer?\n\n1️⃣ Ver catálogo\n2️⃣ Hacer un pedido\n3️⃣ Estado de pedido\n4️⃣ Hablar con un asesor`;
  console.log(`📦 [messagesUtils][sendMessageMainMenu] menu: ${message}`);

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
    `📦 [messagesUtils][sendMessageMainMenu] Sent main menu to ${to}`
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
