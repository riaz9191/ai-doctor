'use client'

import { useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import ChatPanel from '../components/ChatPanel'
import PrescriptionPad from '../components/PrescriptionPad'

const PatientModel = dynamic(() => import('../components/PatientModel'), { 
  ssr: false,
  loading: () => <p>Loading 3D Model...</p>
})

export default function Home() {
  const [step, setStep] = useState('gender') // 'gender', 'chat', 'prescription'
  const [report, setReport] = useState('')

  const handleGenderSelect = () => {
    setStep('chat')
  }

  const handleEndConsultation = (finalReport: string) => {
    setReport(finalReport)
    setStep('prescription')
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {step === 'gender' && (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-white">
          <h1 className="text-5xl font-bold mb-4 text-gray-700">Welcome to AI Doctor</h1>
          <p className="text-xl mb-12 text-gray-600">Your Personal AI Health Assistant</p>
          <div className="w-full max-w-4xl h-96 rounded-lg shadow-2xl overflow-hidden">
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center bg-gray-200"><p>Loading 3D Models...</p></div>}>
              <PatientModel />
            </Suspense>
          </div>
          <div className="mt-12 flex space-x-8">
            <button onClick={handleGenderSelect} className="px-10 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">Start Consultation</button>
          </div>
        </div>
      )}

      {step === 'chat' && (
        <div className="flex w-full h-screen">
          <div className="w-1/3 bg-gray-100 p-4">
            <h2 className="text-2xl font-bold mb-4">3D Patient View</h2>
            <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
              <Suspense fallback={<div className="w-full h-full flex items-center justify-center bg-gray-200"><p>Loading 3D Model...</p></div>}>
                <PatientModel />
              </Suspense>
            </div>
          </div>
          <div className="w-2/3">
            <ChatPanel onEndConsultation={handleEndConsultation} />
          </div>
        </div>
      )}

      {step === 'prescription' && (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
          <PrescriptionPad report={report} />
        </div>
      )}
    </main>
  )
}