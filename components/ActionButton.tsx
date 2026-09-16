import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function ActionButton({ variant = 'primary', children, className = '', ...props }: ActionButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <button
      className={`group flex items-center justify-between gap-6 px-1.5 py-1.5 pl-6 rounded-full hover:gap-12 font-sans text-[15px] font-medium transition-all duration-300 shadow-lg w-full sm:w-auto ${
        isPrimary ? 'bg-white text-black' : 'bg-[#9c2525] text-white hover:bg-[#8B2121]'
      } ${className}`}
      {...props}
    >
      <span>{children}</span>
      <div
        className={`p-2.5 rounded-full flex items-center justify-center ${
          isPrimary ? 'bg-[#9c2525] text-white' : 'bg-white text-black'
        }`}
      >
        <ArrowRight
          size={18}
          strokeWidth={1}
          className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0"
        />
      </div>
    </button>
  );
}
