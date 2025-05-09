import { loadPrompt } from "../utils/loadPrompt.js";

export async function createAssistantOptions() {
  const systemPrompt = await loadPrompt();

  return {
    name: "Vapi’s Pizza Front Desk",
    firstMessage: "Vappy’s Pizzeria speaking, how can I help you?",
    transcriber: {
      provider: "deepgram",
      model: "nova-2",
      language: "en-US",
    },
    voice: {
      provider: "playht",
      voiceId: "jennifer",
    },
    model: {
      provider: "openai",
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
      ],
    },
  };
}