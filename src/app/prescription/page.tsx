"use client";
import PrescriptionPad from "@/components/PrescriptionPad";
import { useSearchParams } from 'next/navigation';

export default function PrescriptionPage() {
  const searchParams = useSearchParams();
  const report = searchParams.get('report') || '';
  const medicinesParam = searchParams.get('medicines');
  const medicines = medicinesParam ? JSON.parse(medicinesParam) : [];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <PrescriptionPad report={report} medicines={medicines} />
    </div>
  );
}
