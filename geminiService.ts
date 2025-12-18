
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getTradeAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are the Ethio Trade Venture AI Assistant. 
        You help B2B clients with inquiries about:
        1. Importing machinery and EVs to Ethiopia.
        2. Exporting Ethiopian agricultural goods (Coffee, Sesame).
        3. General contracting and construction in Ethiopia.
        Be professional, concise, and informative. Use a corporate tone.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again later or contact us directly.";
  }
};
