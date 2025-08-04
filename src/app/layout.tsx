import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Doctor",
  description: "Your personal AI health assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
