
'use client'

import { useState } from 'react'
import PatientModel from '../components/PatientModel'
import ChatPanel from '../components/ChatPanel'
import PrescriptionPad from '../components/PrescriptionPad'

export default function Home() {
  const [gender, setGender] = useState('')
  const [report, setReport] = useState('')
  const [showPrescription, setShowPrescription] = useState(false)

  const handleGenderSelect = (selectedGender: string) => {
    setGender(selectedGender)
  }

  const handleEndConsultation = (finalReport: string) => {
    setReport(finalReport)
    setShowPrescription(true)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {!gender && (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Select Patient</h1>
          <div className="flex justify-center space-x-8">
            <button onClick={() => handleGenderSelect('male')} className="px-8 py-4 bg-blue-500 text-white rounded-lg">Male</button>
            <button onClick={() => handleGenderSelect('female')} className="px-8 py-4 bg-pink-500 text-white rounded-lg">Female</button>
          </div>
        </div>
      )}

      {gender && !showPrescription && (
        <div className="flex w-full h-full">
          <div className="w-1/2">
            <PatientModel />
          </div>
          <div className="w-1/2">
            <ChatPanel />
          </div>
        </div>
      )}

      {showPrescription && (
        <PrescriptionPad report={report} />
      )}
    </main>
  )
}
