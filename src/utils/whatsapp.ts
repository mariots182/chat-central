export const sendMainMenu = async (
  to: string,
  token: string,
  phoneNumberId: string
) => {
  console.log(`📦 [whatsapp][sendMainMenu] Enviando menú principal a ${to}...`);

  const menu = `👋 Hola! ¿Qué deseas hacer?\n\n1️⃣ Ver catálogo\n2️⃣ Hacer un pedido\n3️⃣ Estado de pedido\n4️⃣ Hablar con un asesor`;

  const response = await fetch(
    `https://graph.facebook.com/v22.0/${phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        text: { body: menu },
        type: "template",
        template: {
          name: "hello_world",
          language: {
            code: "en_US",
          },
        },
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    console.error(
      `❌ [whatsapp][sendMainMenu] Error al enviar menú: ${response.status} - ${error}`
    );
  }
};
