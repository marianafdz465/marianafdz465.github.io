
import { GoogleGenAI } from "@google/genai";
import { BIO, PUBLICATIONS } from "../constants";

const getApiKey = () => process.env.API_KEY || "";

export const askAssistant = async (question: string) => {
  const ai = new GoogleGenAI({ apiKey: getApiKey() });
  
  const systemInstruction = `
    You are the AI Research Assistant for ${BIO.name}, a ${BIO.role} at ${BIO.university}.
    Background: ${BIO.description}
    Research Focus: ${BIO.focus}
    Publications: ${JSON.stringify(PUBLICATIONS.map(p => ({ title: p.title, venue: p.venue, year: p.year, abstract: p.abstract })))}
    
    Answer questions about Mariana's work, interests, and background in a friendly, professional, and slightly academic tone. 
    Use the user's name if provided. If you don't know something specifically about Mariana, frame it based on her research interests in human-centered AI and digital ethics.
    Keep responses concise and helpful.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a bit of trouble connecting to my brain right now. Please try again later!";
  }
};
