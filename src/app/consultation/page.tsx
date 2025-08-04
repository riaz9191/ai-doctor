

"use client";
import ConversationPanel from "@/components/ConversationPanel";
import ReportPanel from "@/components/ReportPanel";
import { ThemeProvider } from "@/components/theme-provider";
import { useChat } from "@/hooks/use-chat";

export default function ConsultationPage() {
  const { userReport } = useChat();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main className="flex h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 p-4">
        <div className="flex w-full h-full space-x-4">
          <div className="w-1/2 h-full">
            <ConversationPanel />
          </div>
          <div className="w-1/2 h-full flex justify-center items-center">
            <ReportPanel report={userReport} />
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
