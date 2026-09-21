import type { Metadata } from "next";
import "@fontsource/mona-sans";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Preloader } from "@/components/Preloader";
export const metadata: Metadata = {
  title: "Re-Skill Africa",
  description: "Re-Skill Africa Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-layout-bg text-white" suppressHydrationWarning>
        <Preloader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
