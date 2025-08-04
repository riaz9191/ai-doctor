import Link from 'next/link';
import dynamic from 'next/dynamic';

const DoctorRobot = dynamic(() => import('@/components/DoctorRobot'), { ssr: false });

export default function LandingPage() {
  return (
    <div className="flex flex-row items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="w-1/2 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white">Welcome to AI Doctor</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Your personal AI health assistant.</p>
        <Link href="/consultation" className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition">
          Start Consultation
        </Link>
      </div>
      <div className="w-1/2 h-screen flex items-center justify-center">
        <DoctorRobot />
      </div>
    </div>
  );
}

        