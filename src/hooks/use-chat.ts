'use client'

import { useState, useEffect, useRef } from 'react'

export function useChat() {
  const [message, setMessage] = useState('')
  const [chatHistory, setChatHistory] = useState<{ role: string, parts: { text: string }[] }>([])
  const [modelResponse, setModelResponse] = useState('')
  const [userReport, setUserReport] = useState('')
  const [medicines, setMedicines] = useState<{ name: string, dosage: string }[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [chatHistory])

  const handleSendMessage = async () => {
    if (!message.trim()) return

    const newHistory = [...chatHistory, { role: 'user', parts: [{ text: message }] }]
    setChatHistory(newHistory)
    setUserReport(prev => prev + '\n' + message);
    setMessage('')

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
    const { text } = await response.json()

    setChatHistory(prev => [...prev, { role: 'model', parts: [{ text }] }])
    setModelResponse(prev => prev + '\n' + text)

    try {
      const parsedResponse = JSON.parse(text);
      if (parsedResponse.medicine) {
        setMedicines(parsedResponse.medicine);
      }
    } catch (e) {
      // Not a JSON response, continue as normal
    }

    const utterance = new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(utterance)
  }

  return { message, setMessage, chatHistory, userReport, modelResponse, medicines, chatContainerRef, handleSendMessage }
}
