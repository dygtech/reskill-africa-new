import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, className = '', ...props }: ButtonProps) => {
  return (
    <button
      className={`font-sans font-normal text-[14px] leading-4.5 tracking-[-0.04em] align-middle px-8 py-2.5 rounded-full bg-[#9c2525] text-white shadow-[0px_4px_10px_rgba(0,0,0,0.25),inset_0px_4px_8px_rgba(255,100,100,0.4),inset_0px_-6px_12px_rgba(0,0,0,0.6)] hover:bg-[#a62b2b] hover:shadow-[0px_6px_12px_rgba(0,0,0,0.3),inset_0px_4px_8px_rgba(255,120,120,0.5),inset_0px_-6px_12px_rgba(0,0,0,0.6)] hover:-translate-y-[1px] active:translate-y-0 active:shadow-[0px_2px_4px_rgba(0,0,0,0.25),inset_0px_2px_4px_rgba(255,100,100,0.3),inset_0px_-2px_6px_rgba(0,0,0,0.5)] transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
