

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
      <main className="flex h-screen">
        <div className="w-1/2 h-full">
          <ConversationPanel />
        </div>
        <div className="w-1/2 h-full flex justify-center items-center bg-gray-100 dark:bg-gray-900">
          <ReportPanel report={userReport} />
        </div>
      </main>
    </ThemeProvider>
  );
}
