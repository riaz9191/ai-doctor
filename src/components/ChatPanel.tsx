'use client'

import { useState, useEffect, useRef } from 'react'

export default function ChatPanel() {
  const [message, setMessage] = useState('')
  const [chatHistory, setChatHistory] = useState<{ role: string, parts: { text: string }[] }[]>([])
  const [report, setReport] = useState('')
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleSendMessage = async () => {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
    const { text } = await response.json()

    setChatHistory(prev => [...prev, { role: 'user', parts: [{ text: message }] }, { role: 'model', parts: [{ text }] }])
    setReport(prev => prev + '\n' + text)
    setMessage('')

    const audio = new Audio(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=en&client=tw-ob`)
    audio.play()
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow p-4 bg-gray-100 overflow-y-auto">
        {chatHistory.map((chat, i) => (
          <div key={i} className={`my-2 p-2 rounded-lg ${chat.role === 'user' ? 'bg-blue-200 self-end' : 'bg-green-200 self-start'}`}>
            {chat.parts[0].text}
          </div>
        ))}
      </div>
      <div className="p-4 bg-white">
        <div className="flex">
          <input
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="flex-grow p-2 border rounded-lg"
            onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
          />
          <button onClick={handleSendMessage} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">Send</button>
        </div>
      </div>
      <div className="p-4 bg-gray-200">
        <h2 className="text-lg font-bold">Live Preliminary Report</h2>
        <textarea value={report} readOnly className="w-full h-48 p-2 border rounded-lg mt-2" />
      </div>
    </div>
  )
}