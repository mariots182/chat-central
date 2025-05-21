import config from "../config";

export async function runGemini(content: string) {
  const apiKey = config.google.geminiApiKey;
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
