export const processIncomingMessage = async (body: any) => {
  const phoneNumberId =
    body?.entry?.[0]?.changes?.[0]?.value?.metadata?.phone_number_id;
  if (!phoneNumberId) {
    throw new Error("phone_number_id not found in webhook payload");
  }

  // Lógica para identificar el tenant y procesar el mensaje
  // ...
};
