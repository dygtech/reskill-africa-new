import type { Metadata } from "next";
import "@fontsource/mona-sans";
import "./globals.css";

import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Re-Skill Africa",
  description: "Re-Skill Africa Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col bg-[#0f4b66] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
