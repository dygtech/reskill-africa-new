import React from "react";
import Link from "next/link";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  number?: string;
}

export function SectionLabel({ children, className = "", number }: SectionLabelProps) {
  return (
    <div className="relative mb-6">
      {number && (
        <div className="absolute -left-6 md:-left-10 lg:-left-14 top-1 flex flex-col items-center w-6 md:w-10 lg:w-14">
          <span className="text-[10px] md:text-[11px] font-bold text-rsa-gray-400 mb-2 block">{number}</span>
          <div className="w-[1.5px] h-12 bg-rsa-red"></div>
        </div>
      )}
      <span
        className={`inline-flex items-center text-[11px] md:text-[12px] font-bold tracking-[0.15em] uppercase text-rsa-gray-500 ${className}`}
      >
        <span className="text-[14px] mr-1.5 leading-none">○</span>
        <span className="text-rsa-red font-extrabold mr-2 leading-none">-</span>
        {children}
      </span>
    </div>
  );
}

/* ════════════════════════════════════════ */

interface RedButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  variant?: "filled" | "outline" | "white";
}

export function RedButton({
  children,
  href,
  className = "",
  onClick,
  variant = "filled",
}: RedButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-sans font-semibold text-[13px] tracking-[0.06em] uppercase transition-all duration-300";

  const variants = {
    filled:
      "bg-rsa-red text-white px-7 py-3.5 rounded-sm hover:bg-rsa-red-dark",
    outline:
      "border-2 border-rsa-black text-rsa-black px-7 py-3.5 rounded-sm hover:bg-rsa-black hover:text-white",
    white:
      "bg-white text-rsa-black px-7 py-3.5 rounded-sm hover:bg-rsa-gray-100",
  };

  const style = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={style}>
        {children}
      </Link>
    );
  }

  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
}

/* ════════════════════════════════════════ */

interface ArrowLinkProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  color?: "red" | "black" | "white";
}

export function ArrowLink({
  children,
  href = "#",
  className = "",
  color = "red",
}: ArrowLinkProps) {
  const colorMap = {
    red: "text-rsa-red hover:text-rsa-red-dark",
    black: "text-rsa-black hover:text-rsa-gray-700",
    white: "text-white hover:text-rsa-gray-200",
  };

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 font-semibold text-[13px] tracking-[0.06em] uppercase transition-colors ${colorMap[color]} ${className}`}
    >
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        <path
          d="M3 8H13M13 8L9 4M13 8L9 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
