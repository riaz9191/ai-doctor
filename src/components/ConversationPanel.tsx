
'use client'

import { useChat } from '@/hooks/use-chat'
import ReactMarkdown from 'react-markdown'
import { useRouter } from 'next/navigation'

export default function ConversationPanel() {
  const { message, setMessage, chatHistory, userReport, medicines, chatContainerRef, handleSendMessage } = useChat();
  const router = useRouter();

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
      <div className="p-4 bg-blue-600 text-white text-center text-xl font-bold rounded-t-lg">AI Doctor Consultation</div>
      <div className="flex-grow p-6 overflow-y-auto bg-gray-50 dark:bg-gray-700" ref={chatContainerRef}>
        <div className="flex flex-col space-y-4">
          {chatHistory.map((chat, i) => (
            <div key={i} className={`flex items-start ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`px-4 py-2 rounded-lg max-w-lg ${chat.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                <ReactMarkdown>{chat.parts[0].text}</ReactMarkdown>
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
        <button
          onClick={() => {
            router.push(`/prescription?report=${encodeURIComponent(userReport)}&medicines=${encodeURIComponent(JSON.stringify(medicines))}`);
          }}
          className="mt-4 px-6 py-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition"
        >
          End Consultation & Generate Prescription
        </button>
      </div>
    </div>
  );
}

