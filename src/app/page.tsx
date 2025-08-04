'use client'

import { useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import ChatPanel from "@/components/ChatPanel";
import PrescriptionPad from "@/components/PrescriptionPad";
import { ThemeProvider } from "@/components/theme-provider";


export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main className="flex h-screen">
        <div className="w-1/2 h-full">
          <ChatPanel />
        </div>
        <div className="w-1/2 h-full flex justify-center items-center bg-gray-100 dark:bg-gray-900">
          <PrescriptionPad />
        </div>
      </main>
    </ThemeProvider>
  );
}