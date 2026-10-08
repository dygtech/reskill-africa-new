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
  icons: {
    icon: [
      { url: '/images/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/favicon/apple-touch-icon.png' }
    ],
  },
  manifest: '/images/favicon/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased scroll-smooth ${inter.variable} ${inter.className}`}
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
