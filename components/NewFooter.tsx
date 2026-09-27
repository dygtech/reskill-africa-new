"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NewFooter() {
  const pathname = usePathname();
  if (["/login", "/register"].includes(pathname)) return null;

  return (
    <footer className="w-full bg-rsa-black py-5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.svg"
            width={90}
            height={24}
            alt="Re-Skill Africa"
            className="h-5 w-auto"
          />
        </Link>
        <p className="hidden sm:block text-white/50 text-[12px] font-medium tracking-wide">
          People. Work. Enterprise. Industry.
        </p>
      </div>
    </footer>
  );
}
