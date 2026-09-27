"use client";

import { Button } from './Button';
import { ChevronDown, Languages } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();

  if (['/login', '/register'].includes(pathname)) return null;

  // Add any other routes that have a white background here
  const lightModeRoutes = ['/about', '/skildustry', '/projects'];
  const isLightMode = lightModeRoutes.includes(pathname);

  const navTextColor = isLightMode ? 'text-black' : 'text-white';
  const navHoverColor = isLightMode ? 'hover:text-primary' : 'hover:text-white/80';
  const logoSrc = isLightMode ? '/images/logo_alt.svg' : '/images/logo.svg';

  const isDarkAccent = ['/training-tracks', '/tournament', '/skill-passport'].includes(pathname);
  const themeText = isDarkAccent ? 'text-[#232323]' : 'text-primary';
  const themeHoverText = isDarkAccent ? 'hover:text-[#232323]' : 'hover:text-primary';

  const activeColor = `${themeText} font-semibold`;
  const getLinkStyle = (path: string) =>
    `${navHoverColor} transition-colors ${pathname === path ? activeColor : ''}`;

  return (
    <nav className={`w-full flex items-center justify-between px-12 py-5 absolute top-0 left-0 z-50 ${navTextColor}`}>
      <div className="flex items-center gap-2 font-sans text-[20px] select-none">
        <Link href="/">
          <Image src={logoSrc} width={100} height={35} alt="Logo" />
        </Link>
      </div>

      <div className='flex items-center lg:gap-14'>

        <div className="hidden lg:flex items-center gap-10 text-[14px] leading-4.5 tracking-[-0.04em] font-normal">
          {/* About Dropdown Menu */}
          <div className="relative group py-2">
            <Link href="/about" className={`flex items-center gap-1.5 ${navHoverColor} transition-colors ${['/about', '/partner-with-us', '/leadership'].includes(pathname) ? activeColor : ''}`}>
              About <ChevronDown size={14} className="mt-0.5 opacity-80 group-hover:rotate-180 transition-transform duration-200" />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 mt-1">
              <Link href="/about" className={`px-4 py-2.5 hover:bg-gray-50 ${themeHoverText} transition-colors text-[13px] font-medium text-center ${pathname === '/about' ? `${themeText} bg-gray-50` : 'text-brand-dark'}`}>
                Overview
              </Link>
              <Link href="/leadership" className={`px-4 py-2.5 hover:bg-gray-50 ${themeHoverText} transition-colors text-[13px] font-medium text-center border-t border-gray-50 ${pathname === '/leadership' ? `${themeText} bg-gray-50` : 'text-brand-dark'}`}>
                Leadership
              </Link>
              <Link href="/partner-with-us" className={`px-4 py-2.5 hover:bg-gray-50 ${themeHoverText} transition-colors text-[13px] font-medium text-center border-t border-gray-50 ${pathname === '/partner-with-us' ? `${themeText} bg-gray-50` : 'text-brand-dark'}`}>
                Our Partners
              </Link>
            </div>
          </div>

          <Link href="/sectors" className={getLinkStyle('/sectors')}>Sectors</Link>

          {/* Skildustry Dropdown Menu */}
          <div className="relative group py-2">
            <Link href="/skildustry" className={`flex items-center gap-1.5 ${navHoverColor} transition-colors ${pathname.startsWith('/skildustry') || pathname === '/skill-passport' ? activeColor : ''}`}>
              Skildustry <ChevronDown size={14} className="mt-0.5 opacity-80 group-hover:rotate-180 transition-transform duration-200" />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 mt-1">
              <Link href="/skildustry" className={`px-4 py-2.5 hover:bg-gray-50 ${themeHoverText} transition-colors text-[13px] font-medium text-center ${pathname === '/skildustry' ? `${themeText} bg-gray-50` : 'text-brand-dark'}`}>
                Overview
              </Link>
              <Link href="/skill-passport" className={`px-4 py-2.5 hover:bg-gray-50 ${themeHoverText} transition-colors text-[13px] font-medium text-center border-t border-gray-50 ${pathname === '/skill-passport' ? `${themeText} bg-gray-50` : 'text-brand-dark'}`}>
                Skill Passport
              </Link>
            </div>
          </div>

          <Link href="/training-tracks" className={getLinkStyle('/training-tracks')}>Training Tracks</Link>
          <Link href="/projects" className={getLinkStyle('/projects')}>Projects</Link>
          <Link href='/tournament' className={`${getLinkStyle('/tournament')}`}>
            Tournament
          </Link>
          <Link href='/get-involved' className={`${getLinkStyle('/get-involved')}`}>
            Get Involved
          </Link>
        </div>

        <div className="flex items-center gap-8">
          <button className={`flex items-center gap-2 font-sans font-normal text-[14px] leading-4.5 tracking-[-0.04em] ${navHoverColor} transition-colors`}>
            <Languages size={20} className="opacity-90" strokeWidth={1.5} /> English
          </button>
          <Link href="/login">
            <Button 
              className={['/training-tracks', '/tournament', '/skill-passport'].includes(pathname) 
                ? "!bg-[#232323] hover:!bg-[#111] !shadow-[0px_4px_10px_rgba(0,0,0,0.25),inset_0px_4px_8px_rgba(255,255,255,0.1),inset_0px_-6px_12px_rgba(0,0,0,0.6)] hover:!shadow-[0px_6px_12px_rgba(0,0,0,0.3),inset_0px_4px_8px_rgba(255,255,255,0.15),inset_0px_-6px_12px_rgba(0,0,0,0.6)] active:!shadow-[0px_2px_4px_rgba(0,0,0,0.25),inset_0px_2px_4px_rgba(255,255,255,0.1),inset_0px_-2px_6px_rgba(0,0,0,0.5)]"
                : ""}
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
