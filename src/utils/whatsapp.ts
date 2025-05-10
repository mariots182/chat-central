export const sendMainMenu = async (
  to: string,
  token: string,
  phoneNumberId: string
) => {
  console.log(`📦 [whatsapp][sendMainMenu] Enviando menú principal a ${to}...`);

  console.log(`📦 [whatsapp][sendMainMenu] phoneNumberId: ${phoneNumberId}`);

  const menu = `👋 Hola! ¿Qué deseas hacer?\n\n1️⃣ Ver catálogo\n2️⃣ Hacer un pedido\n3️⃣ Estado de pedido\n4️⃣ Hablar con un asesor`;

  const enviarA = to.slice(0, 2) + to.slice(3);
  // 522292507583;
  console.log(`📦 [whatsapp][sendMainMenu] enviarA: ${enviarA}`);

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
        to: enviarA,
        type: "text",
        text: { body: menu },
        // template: {
        //   name: "test_template",
        //   language: {
        //     code: "en_US",
        //   },
        // },
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
