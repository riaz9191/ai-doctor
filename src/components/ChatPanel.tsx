
'use client'

import { useChat } from '@/hooks/use-chat'

export default function ChatPanel({ onEndConsultation }: { onEndConsultation: (report: string) => void }) {
  const { message, setMessage, chatHistory, report, chatContainerRef, handleSendMessage } = useChat()

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex-grow p-6 overflow-y-auto" ref={chatContainerRef}>
        <div className="flex flex-col space-y-4">
          {chatHistory.map((chat, i) => (
            <div key={i} className={`flex items-start ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`px-4 py-2 rounded-lg max-w-lg ${chat.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                {chat.parts[0].text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 bg-gray-100 border-t">
        <div className="flex items-center">
          <input
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="flex-grow p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
            onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
          />
          <button onClick={handleSendMessage} className="ml-4 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition">Send</button>
        </div>
      </div>
      <div className="p-4 bg-gray-50 border-t">
        <h2 className="text-xl font-bold text-gray-700">Live Preliminary Report</h2>
        <textarea value={report} readOnly className="w-full h-32 p-3 border rounded-lg mt-2 bg-gray-100 focus:outline-none" />
        <button onClick={() => onEndConsultation(report)} className="mt-4 px-6 py-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition">End Consultation & Generate Prescription</button>
      </div>
    </div>
  )
}

