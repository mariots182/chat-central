import { GoogleGenerativeAI } from "@google/generative-ai";

import config from "../config";
import { geminiFirstPrompt } from "../utils/gemini";

const apiKey = config.google.geminiApiKey;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function geminiChat(history: any[], msg: string) {
  const firstPrompt = geminiFirstPrompt();
  // Verifica si el primer prompt ya está en el historial
  const alreadyHasPrompt = history.some(
    (entry) =>
      entry.role === "model" &&
      entry.parts &&
      entry.parts.some((part: any) =>
        part.text?.includes("Eres un asistente virtual")
      )
  );

  // Si no está presente, lo agrega al inicio
  if (!alreadyHasPrompt) {
    history.unshift({
      role: "user",
      parts: [{ text: firstPrompt }],
    });
  }
  const chat = model.startChat({
    history,
    generationConfig: {
      maxOutputTokens: 100,
    },
  });

  const result = await chat.sendMessage(msg);
  const response = result.response;
  const text = response.text();

  console.log("[geminiClient][geminiChat] response:", text);

  return text;
}
