import redis from "../clients/redis.client";
import { WhatsAppMessageDetails } from "../models/whatsapp.model";

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
