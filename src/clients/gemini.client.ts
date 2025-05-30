import { GoogleGenerativeAI } from "@google/generative-ai";
import config from "../config";
import { GeminiResponse } from "../models/gemini.model";

const apiKey = config.google.geminiApiKey;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function geminiChat(history: any[], msg: string) {
  const chat = model.startChat({
    history,
    generationConfig: {
      maxOutputTokens: 350,
    },
  });

  try {
    const result = await chat.sendMessage(msg);
    const resultResponse = result.response;
    const responseText = resultResponse.text();
    const extracted = extractJSONFromResponse(responseText);
    const { text, json } = extracted;

    return {
      text,
      json,
    };
  } catch (error) {
    console.error("[geminiClient][geminiChat] Error al iniciar chat:", error);

    throw new Error("Error al iniciar chat con Gemini");
  }
}

export function extractJSONFromResponse(response: string): GeminiResponse {
  const jsonRegex = /```(?:json)?\s*({[\s\S]*?})\s*```/i;
  const match = response.match(jsonRegex);

  if (!match || match.length < 2) {
    console.warn("[extractJSONFromResponse] No se encontró bloque JSON válido");
    return {
      json: {},
      text: "Hubo un error al procesar la respuesta del bot.",
    };
  }

  let json: any = null;

  try {
    json = JSON.parse(match[1]);
    console.log("[extractJSONFromResponse] JSON extraído:", json);
    const text =
      json && json.message_text ? json.message_text : response.trim();

    return {
      json,
      text,
    };
  } catch (err) {
    console.error("[extractJSONFromResponse] Error al parsear JSON:", err);
    return {
      json: {},
      text: "Hubo un error al procesar la respuesta del bot.",
    };
  }
}
