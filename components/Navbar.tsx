import { Button } from './Button';
import { ChevronDown, Languages } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-12 py-5 text-white absolute top-0 left-0 z-50">
      <div className="flex items-center gap-2 font-sans text-[20px] select-none">
        <Image src="/images/logo.svg" width={100} height={35} alt="Logo" />
      </div>

      <div className='flex items-center lg:gap-14'>

        <div className="hidden lg:flex items-center gap-10 text-[14px] leading-4.5 tracking-[-0.04em] font-normal">
          <Link href="#" className="hover:text-white/80 transition-colors">The Vision</Link>
          <Link href="#" className="hover:text-white/80 transition-colors">Skill Passport</Link>
          <Link href="#" className="hover:text-white/80 transition-colors">Training Tracks</Link>
          <Link href="#" className="hover:text-white/80 transition-colors">Our Partners</Link>
          <button className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
            Tournament <ChevronDown size={14} className="mt-0.5 opacity-80" />
          </button>
        </div>

        <div className="flex items-center gap-8">
          <button className="flex items-center gap-2 font-sans font-normal text-[14px] leading-[18px] tracking-[-0.04em] hover:text-white/80 transition-colors">
            <Languages size={20} className="opacity-90" strokeWidth={1.5} /> English
          </button>
          <Button>Login</Button>
        </div>
      </div>
    </nav>
  );
};
