import {
  extractMessageDetails,
  genericMessage,
  handleMessage,
  isValidMessage,
} from "../utils/messages";
import { Request } from "express";
import { handleSession, handleSessionState } from "../utils/sessions";
import { getTenantPrisma } from "../database/prismaClientFactory";
import { findCompanyByPhone } from "../utils/company";
import { handleCustomer } from "../utils/customer";
import config from "../config";

class BotService {
  async getBotResponse(req: Request): Promise<void> {
    const messageDetails = extractMessageDetails(req.body);

    if (!isValidMessage(messageDetails)) {
      console.warn("Is not valid message");

      return;
    }

    const { from, phoneNumberId, displayPhoneNumber, id, text } =
      messageDetails;

    const company = await findCompanyByPhone(displayPhoneNumber);

    const tenantDB = getTenantPrisma(`tenant_${company.database}`);

    const customer = await handleCustomer(from, tenantDB);

    const session = await handleSession(customer.id, messageDetails, tenantDB);

    console.log(`before run`);

    // this.run(messageBody, from, phoneNumberId);
    await this.runGemini(text, from, phoneNumberId);

    // validateSession

    //Ejemplo para consultar el wamId
    // tenantDB.customerSession.findUnique({
    //   where: { wamId: id },
    // });

    // const state = await handleSessionState(
    //   session,
    //   messageDetails,
    //   tenantDB,
    //   customer
    // );

    // const responseMessage = await handleMessage(state, messageDetails);

    // sendMessage()

    return;
  }

  async runGemini(content: any, from: string, phoneId: string) {
    // Importación dinámica de módulo ESM
    console.log("Importando el módulo de Google Gemini...");

    const genaiModule = await import("@google/genai");

    console.log("Módulo de Google Gemini importado.");

    // Obtenemos la clase directamente del módulo
    const GoogleGenerativeAI = (genaiModule as any).GoogleGenerativeAI;

    const ai = new GoogleGenerativeAI({
      apiKey: config.google.geminiApiKey,
    });

    const model = ai.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(content.text);
    const responseText = result.response.text();

    console.log("🔮 Gemini response:", responseText);

    // Aquí puedes enviar el texto por WhatsApp usando tu lógica
    // await sendMessageToWhatsApp(from, phoneId, responseText);
  }

  async run(thecontent: any, from: any, ph_id: any) {
    // For text-only input, use the gemini-pro model
    // const ai = new GoogleGenAI({ apiKey: config.google.geminiApiKey });
    // const aiGemini = ai.models.getModel("gemini-2.0-flash");
    // await this.geminiAI();
    // try {
    //   const url =
    //     "https://graph.facebook.com/v17.0/" +
    //     ph_id +
    //     "/messages?access_token=" +
    //     config.whatsapp.token;
    //   const data = {
    //     messaging_product: "whatsapp",
    //     to: from,
    //     text: {
    //       body: "hola",
    //     },
    //   };
    //   const headers = {
    //     "Content-Type": "application/json",
    //   };
    //   // axios.post(url, data, { headers: headers });
    //   fetch(url, {
    //     method: "POST",
    //     headers: headers,
    //     body: JSON.stringify(data),
    //   }).then((response) => {
    //     console.log("Response from WhatsApp API:", response);
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
  }
}

export default BotService;
