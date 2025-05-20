import { WhatsAppMessage } from "../models/whatsapp.model";

export const sendMessage = async (whatsappMessage: WhatsAppMessage) => {
  const { to, phoneNumberId, message } = whatsappMessage;
  const enviarA = to.slice(0, 2) + to.slice(3);

  console.log(`📦 [whatsapp][sendMessage] Enviando mensaje a ${to}...`);

  const response = await fetch(
    `${process.env.WHATSAPP_API_URL}${process.env.WHATSAPP_API_VERSION}/${phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: enviarA,
        type: "text",
        text: { body: message },
      }),
    }
  ).catch((error) => {
    console.error(
      `❌ [whatsapp][sendMessage] Error al enviar el mensaje: ${error}`
    );
    throw error;
  });

  console.log(
    `📦 [whatsapp][sendMessage] Respuesta de la API de WhatsApp: ${response.status}`
  );

  if (!response.ok) {
    const error = await response.text();
    console.error(
      `❌ [whatsapp][sendMessage] Error al enviar el mensaje: ${response.status} - ${error}`
    );

    throw error;
  }
};

export const sendInteractiveListMessage = async (
  whatsappMessage: WhatsAppMessage
) => {
  const { to, phoneNumberId, message, interactive } = whatsappMessage;
  const enviarA = to.slice(0, 2) + to.slice(3);

  console.log(
    `📦 [whatsapp][sendInteractiveListMessage] Enviando mensaje a ${to}...`
  );

  const response = await fetch(
    `${process.env.WHATSAPP_API_URL}${process.env.WHATSAPP_API_VERSION}/${phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipient_type: "individual",
        messaging_product: "whatsapp",
        to: enviarA,
        type: "interactive",
        interactive: {
          type: "list",
          body: { text: message },
          header: {
            type: "text",
            text: "¡Hola! ¿Qué deseas hacer?",
          },
          footer: {
            text: "Selecciona una opción:",
          },
          action: {
            button: "cta-button-content",
            sections: [
              {
                title: "section-title-content",
                rows: [
                  {
                    id: "unique-row-identifier",
                    title: "row-title-content",
                    description: "row-description-content",
                  },
                ],
              },
              {
                title: "section-title-content",
                rows: [
                  {
                    id: "unique-row-identifier",
                    title: "row-title-content",
                    description: "row-description-content",
                  },
                ],
              },
            ],
          },
        },
      }),
    }
  );

  console.log(
    `📦 [whatsapp][sendInteractiveListMessage] Respuesta de la API de WhatsApp: ${response.status}`
  );

  if (!response.ok) {
    const error = await response.text();
    console.error(
      `❌ [whatsapp][sendInteractiveListMessage] Error al enviar el mensaje: ${response.status} - ${error}`
    );
  }
};

export const sendInteractiveReplyButtonMessage = async (
  whatsappMessage: WhatsAppMessage
) => {
  const { to, phoneNumberId, message, interactive } = whatsappMessage;
  const enviarA = to.slice(0, 2) + to.slice(3);

  console.log(
    `📦 [whatsapp][sendInteractiveReplyButtonMessage] Enviando mensaje a ${to}...`
  );

  const response = await fetch(
    `${process.env.WHATSAPP_API_URL}${process.env.WHATSAPP_API_VERSION}/${phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipient_type: "individual",
        messaging_product: "whatsapp",
        to: enviarA,
        type: "interactive",
        interactive,
      }),
    }
  );

  console.log(
    `📦 [whatsapp][sendInteractiveReplyButtonMessage] Respuesta de la API de WhatsApp: ${response.status}`
  );

  if (!response.ok) {
    const error = await response.text();
    console.error(
      `❌ [whatsapp][sendInteractiveReplyButtonMessage] Error al enviar el mensaje: ${response.status} - ${error}`
    );
  }
};

export const sendInteractiveRequestLocationMessage = async (
  whatsappMessage: WhatsAppMessage
) => {
  const { to, phoneNumberId, message, interactive } = whatsappMessage;
  const enviarA = to.slice(0, 2) + to.slice(3);

  console.log(
    `📦 [whatsapp][sendInteractiveRequestLocationMessage] Enviando mensaje a ${to}...`
  );

  const response = await fetch(
    `${process.env.WHATSAPP_API_URL}${process.env.WHATSAPP_API_VERSION}/${phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipient_type: "individual",
        messaging_product: "whatsapp",
        to: enviarA,
        type: "interactive",
        interactive: {
          type: "location_request_message",
          body: {
            text: "¿Dónde estás?",
          },
          action: {
            name: "send_location",
          },
        },
      }),
    }
  );

  console.log(
    `📦 [whatsapp][sendInteractiveRequestLocationMessage] Respuesta de la API de WhatsApp: ${response.status}`
  );

  if (!response.ok) {
    const error = await response.text();
    console.error(
      `❌ [whatsapp][sendInteractiveRequestLocationMessage] Error al enviar el mensaje: ${response.status} - ${error}`
    );
  }

  await response.json().then((data) => {
    console.log(
      `📦 [whatsapp][sendInteractiveRequestLocationMessage] Respuesta de la API de WhatsApp: ${data}`
    );

    if (data?.messages) {
      console.log(
        `📦 [whatsapp][sendInteractiveRequestLocationMessage] Mensaje enviado: ${data.messages[0].id}`
      );
    } else {
      console.error(
        `❌ [whatsapp][sendInteractiveRequestLocationMessage] Error al enviar el mensaje: ${data.error.message}`
      );
    }
  });
};

// export const sendInteractiveFlowMessage = async (
//   whatsappMessage: WhatsAppMessage
// ) => {
//   const { to, phoneNumberId, message, interactive } = whatsappMessage;
//   const enviarA = to.slice(0, 2) + to.slice(3);

//   console.log(
//     `📦 [whatsapp][sendInteractiveRequestLocationMessage] Enviando mensaje a ${to}...`
//   );

//   const response = await fetch(
//     `${process.env.WHATSAPP_API_URL}${process.env.WHATSAPP_API_VERSION}/${phoneNumberId}/messages`,
//     {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         recipient_type: "individual",
//         messaging_product: "whatsapp",
//         to: enviarA,
//         type: "interactive",
//         interactive: {
//           type: "location_request_message",
//           body: {
//             text: "¿Dónde estás?",
//           },
//           action: {
//             name: "send_location",
//           },
//         },
//       }),
//     }
//   );

//   console.log(
//     `📦 [whatsapp][sendInteractiveRequestLocationMessage] Respuesta de la API de WhatsApp: ${response.status}`
//   );

//   if (!response.ok) {
//     const error = await response.text();
//     console.error(
//       `❌ [whatsapp][sendInteractiveRequestLocationMessage] Error al enviar el mensaje: ${response.status} - ${error}`
//     );
//   }
// };
