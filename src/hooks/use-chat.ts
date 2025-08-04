'use client'

import { useState, useEffect, useRef } from 'react'

export function useChat() {
  const [message, setMessage] = useState('')
  const [chatHistory, setChatHistory] = useState<{ role: string, parts: { text: string }[] }>([])
  const [report, setReport] = useState('')
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
    setReport(prev => prev + '\n' + text)

    const audio = new Audio(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=en&client=tw-ob`)
    audio.play()
  }

  return { message, setMessage, chatHistory, report, chatContainerRef, handleSendMessage }
}
