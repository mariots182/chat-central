import config from "../config";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { RedisSessionContext } from "../models/sessions.model";
const apiKey = config.google.geminiApiKey;

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function handleGeminiChat(history: any, msg: string) {
  console.log("history", history.toISOString);
}

export async function geminiChat(history: any[], msg: string) {
  console.log("history", history[0]);
  // console.log("history", history[1]);
  // console.log("history", history[2]);
  // console.log("history", history[3]);

  // history: [
  //   {
  //     role: "user",
  //     parts: [{ text: "Hello, I have 2 dogs in my house." }],
  //   },
  //   {
  //     role: "model",
  //     parts: [{ text: "Great to meet you. What would you like to know?" }],
  //   },
  // ],

  const chat = model.startChat({
    history,
    generationConfig: {
      maxOutputTokens: 100,
    },
  });

  const result = await chat.sendMessage(msg);
  const response = result.response;
  const text = response.text();
  console.log(text);

  return text;
}

async function runGeminiLib(prompt: string) {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // const prompt = "Write a story about a magic backpack.";

  model.startChat;

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  console.log(text);
}

export async function runGemini(content: string) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  const payload = {
    contents: [
      {
        parts: [
          {
            text: content,
          },
        ],
      },
    ],
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log("Gemini response:", data);

    console.log(
      "Response from Gemini2:",
      data.candidates[0].content.parts[0].text
    );

    const message = data.candidates[0].content.parts[0].text;

    return message;
  } catch (error) {
    console.error("Error fetching Gemini response:", error);
    throw error;
  }
}
