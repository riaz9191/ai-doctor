
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "You are an AI doctor. Your goal is to have a conversation with a patient and provide a preliminary report and suggestions. Ask questions to understand the patient's symptoms. Be kind, empathetic, and professional." }],
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
