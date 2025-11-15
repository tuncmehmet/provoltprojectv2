
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const systemInstruction = `You are an expert electrical consultant for ProVolt Electrical, a UK-based contractor. Your goal is to provide safe, informative, and helpful advice based on UK electrical standards (like BS 7671).
- Prioritize safety above all else.
- ALWAYS strongly recommend consulting a qualified and certified electrician for any physical electrical work. Do not provide instructions for dangerous DIY work.
- Be clear, concise, and easy for a layperson to understand.
- You can help users diagnose potential issues, understand regulations (e.g., for EV chargers, new kitchen wiring), or plan projects conceptually.
- When you provide information, frame it as guidance to help the user have a more informed conversation with their electrician.`;

export const getAIResponse = async (prompt: string, useThinkingMode: boolean): Promise<string> => {
  try {
    const model = useThinkingMode ? 'gemini-2.5-pro' : 'gemini-2.5-flash';
    const config = useThinkingMode ? { thinkingConfig: { thinkingBudget: 32768 } } : {};
    
    const response = await ai.models.generateContent({
        model: model,
        contents: prompt,
        config: {
            ...config,
            systemInstruction: systemInstruction
        }
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        return `An error occurred while processing your request: ${error.message}. Please try again later.`;
    }
    return "An unknown error occurred. Please try again later.";
  }
};
