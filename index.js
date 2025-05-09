import 'dotenv/config';
import Vapi from "@vapi-ai/web";
import { createAssistantOptions } from "./config/assistantConfig.js";

async function startAssistant() {
  try {
    const vapi = new Vapi(process.env.VAPI_KEY);
    const assistantOptions = await createAssistantOptions();
    vapi.start(assistantOptions);
  } catch (error) {
    console.error("Error starting assistant:", error);
  }
}