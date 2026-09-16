"use client";

import { Button } from './Button';
import { ChevronDown, Languages } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();

  // Add any other routes that have a white background here
  const lightModeRoutes = ['/about'];
  const isLightMode = lightModeRoutes.includes(pathname);

  const navTextColor = isLightMode ? 'text-black' : 'text-white';
  const navHoverColor = isLightMode ? 'hover:text-[#9c2525]' : 'hover:text-white/80';
  const logoSrc = isLightMode ? '/images/logo_alt.svg' : '/images/logo.svg';

  return (
    <nav className={`w-full flex items-center justify-between px-12 py-5 absolute top-0 left-0 z-50 ${navTextColor}`}>
      <div className="flex items-center gap-2 font-sans text-[20px] select-none">
        <Link href="/">
          <Image src={logoSrc} width={100} height={35} alt="Logo" />
        </Link>
      </div>

      <div className='flex items-center lg:gap-14'>

        <div className="hidden lg:flex items-center gap-10 text-[14px] leading-4.5 tracking-[-0.04em] font-normal">
          <Link href="/about" className={`${navHoverColor} transition-colors`}>About</Link>
          <Link href="#" className={`${navHoverColor} transition-colors`}>The Vision</Link>
          <Link href="#" className={`${navHoverColor} transition-colors`}>Skill Passport</Link>
          <Link href="#" className={`${navHoverColor} transition-colors`}>Training Tracks</Link>
          <Link href="#" className={`${navHoverColor} transition-colors`}>Our Partners</Link>
          <button className={`flex items-center gap-1.5 ${navHoverColor} transition-colors`}>
            Tournament <ChevronDown size={14} className="mt-0.5 opacity-80" />
          </button>
        </div>

        <div className="flex items-center gap-8">
          <button className={`flex items-center gap-2 font-sans font-normal text-[14px] leading-4.5 tracking-[-0.04em] ${navHoverColor} transition-colors`}>
            <Languages size={20} className="opacity-90" strokeWidth={1.5} /> English
          </button>
          <Button>Login</Button>
        </div>
      </div>
    </nav>
  );
};
