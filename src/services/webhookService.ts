export const processIncomingMessage = async (body: any) => {
  const phoneNumberId =
    body?.entry?.[0]?.changes?.[0]?.value?.metadata?.phone_number_id;

  console.log(
    " 📦 [webhookService][processIncomingMessage] phoneNumberId:",
    phoneNumberId
  );

  if (!phoneNumberId) {
    console.error(
      " 📦 ❌ [webhookService][processIncomingMessage] phoneNumberId not found in webhook payload"
    );

    throw new Error("phone_number_id not found in webhook payload");
  }
};
