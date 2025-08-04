"use client";
import PrescriptionPad from "@/components/PrescriptionPad";
import { useSearchParams } from 'next/navigation';

export default function PrescriptionPage() {
  const searchParams = useSearchParams();
  const report = searchParams.get('report') || '';

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <PrescriptionPad report={report} />
    </div>
  );
}
