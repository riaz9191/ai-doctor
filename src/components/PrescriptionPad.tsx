
'use client'

export default function PrescriptionPad({ report }: { report: string }) {
  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center border-b-2 pb-4">
        <div>
          <h1 className="text-2xl font-bold">Dr. AI</h1>
          <p>MBBS, FCPS (Medicine)</p>
          <p>Dhaka Medical College & Hospital</p>
        </div>
        <div className="text-right">
          <p>Date: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-bold">Patient Report</h2>
        <p>{report}</p>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-bold">Rx</h2>
        <div className="mt-4">
          <p>1. Medicine A - 1+0+1</p>
          <p>2. Medicine B - 0+1+0</p>
          <p>3. Medicine C - 1+1+1</p>
        </div>
      </div>
      <div className="mt-8 border-t-2 pt-4 text-center">
        <p>For any queries, please contact: 0123456789</p>
      </div>
    </div>
  )
}
