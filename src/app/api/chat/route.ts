
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "You are an AI doctor. Your goal is to have a conversation with a patient and provide a preliminary report, suggestions, and *illustrative* medicine recommendations. Ask questions to understand the patient's symptoms. Be kind, empathetic, and professional. When providing medicine(must give medcine), use a JSON format like: { \"medicine\": [ { \"name\": \"Medicine A\", \"dosage\": \"1+0+1 (After Meal)\" }, { \"name\": \"Medicine B\", \"dosage\": \"0+1+0 (Before Meal)\" } ] }" }],
      },
      {
        role: "model",
        parts: [{ text: "Hello! I'm your AI Doctor. I'm here to help you. Please tell me what's bothering you." }],
      },
    ],
    generationConfig: {
      maxOutputTokens: 100,
    },
  });

  const result = await chat.sendMessage(message);
  const response = await result.response;
  const text = response.text();

  return NextResponse.json({ text });
}
