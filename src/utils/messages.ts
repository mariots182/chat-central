import redis from "../clients/redis.client";
import { sessionFlowMap } from "../models/sessions.model";
import { WhatsAppMessageDetails } from "../models/whatsapp.model";
import {
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

  const from = message?.from;
  const text = message?.text?.body;
  const type = message?.type;
  const timestamp = message?.timestamp;
  const wamid = message?.id;
  const location = message?.location;

  console.table({
    from,
    text,
    phoneNumberId,
    displayPhoneNumber,
    type,
    timestamp,
    wamid,
    location,
    status: statuses?.status,
  });

  return {
    from,
    text,
    phoneNumberId,
    displayPhoneNumber,
    type,
    timestamp,
    wamid,
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
    console.warn("[messagesUtils][isValidMessage] Incomplete payload received");
    return false;
  }

  return true;
}

export function handleMessage(
  state: string,
  messageDetails: WhatsAppMessageDetails
) {
  const { from, phoneNumberId } = messageDetails;

  console.log(
    `📦 [messagesUtils][handleMessage] State: ${state} - Message: ${messageDetails.text}`
  );
  switch (state) {
    case sessionFlowMap.WELCOME_FLOW[2]:
      if (
        messageDetails.text === "1" ||
        messageDetails.text === "2" ||
        messageDetails.text === "3" ||
        messageDetails.text === "4"
      ) {
      }

      return "hola";
    default:
      break;
  }
  return;
}

export function isValidWamId(): boolean {
  return false;
}

export async function genericMessage(
  to: string,
  phoneNumberId: string,
  message: string
) {
  try {
    await sendMessage({
      to,
      phoneNumberId,
      message,
    });

    return;
  } catch (error) {
    console.error(
      `📦 [messagesUtils][genericMessage] Error sending generic message: ${error}`
    );
    throw new Error("Error sending generic message");
  }
}

export async function sendMessageWelcome(to: string, phoneNumberId: string) {
  console.log("📦 [messagesUtils][sendMessageWelcome] Welcome message");

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
export async function messagesBuffer(from: string, text: string) {
  const bufferKey = `msgBuffer:${from}`;
  const timestampKey = `${bufferKey}:lastTimestamp`;
  const currentTimestamp = Math.floor(Date.now() / 1000);

  // Obtener el último timestamp antes de agregar el mensaje al buffer
  const lastTimestampRaw = await redis.get(timestampKey);
  const lastTimestamp = lastTimestampRaw ? parseInt(lastTimestampRaw, 10) : 0;

  // Guardar el nuevo mensaje y actualizar expiración
  await redis.rPush(bufferKey, text);
  await redis.expire(bufferKey, 10); // TTL del buffer
  await redis.set(timestampKey, currentTimestamp); // timestamp actual

  // Si aún no ha pasado suficiente tiempo, no responder
  if (lastTimestamp && currentTimestamp - lastTimestamp < 10) {
    return {
      shouldRespond: false,
    };
  }

  // Obtener todos los mensajes acumulados
  const allMessagesRaw = await redis.lRange(bufferKey, 0, -1);
  const allMessages: string[] = Array.isArray(allMessagesRaw)
    ? allMessagesRaw.map(String)
    : [];
  const fullText = allMessages.join(" ");

  // Limpiar el buffer
  await redis.del(bufferKey);
  await redis.del(timestampKey);

  return {
    shouldRespond: true,
    fullText,
  };
}
export async function clearBuffer(from: string) {
  const bufferKey = `msgBuffer:${from}`;
  const timestampKey = `${bufferKey}:lastTimestamp`;

  await redis.del(bufferKey);
  await redis.del(timestampKey);
}
