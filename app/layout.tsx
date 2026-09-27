import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Old Navbar — kept for reference: import { Navbar } from "@/components/NavbarOld";
import { NewNavbar } from "@/components/NewNavbar";
import { Preloader } from "@/components/Preloader";

export const metadata: Metadata = {
  title: "Re-Skill Africa",
  description: "Re-Skill Africa Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased scroll-smooth ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-layout-bg text-rsa-black" suppressHydrationWarning>
        {/* <Preloader /> */}
        <NewNavbar />
        {children}
      </body>
    </html>
  );
}
