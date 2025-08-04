"use client";
import ReportPanel from "@/components/ReportPanel";
import { useChat } from "@/hooks/use-chat";

import { ThemeProvider } from "@/components/theme-provider";


export default function ConsultationPage() {
  const [report, setReport] = useState('');

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main className="flex h-screen">
        <div className="w-1/2 h-full">
          <ChatPanel onEndConsultation={setReport} />
        </div>
        <div className="w-1/2 h-full flex justify-center items-center bg-gray-100 dark:bg-gray-900">
          <PrescriptionPad report={report} />
        </div>
      </main>
    </ThemeProvider>
  );
}
