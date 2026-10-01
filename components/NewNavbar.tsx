"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { label: "What We Do", href: "/about" },
  { label: "Skildustry™", href: "/skildustry" },
  { label: "Live Programmes", href: "/training-tracks" },
  { label: "Proof", href: "/projects" },
  { label: "Partner", href: "/partner-with-us" },
];

export function NewNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const { scrollY } = useScroll();

  useEffect(() => {
    if (pathname !== "/") return;

    const updateHomeNavigation = () => {
      const mainContent = document.getElementById("home-main");
      if (!mainContent) return;

      const hasReachedMainContent = mainContent.getBoundingClientRect().top <= 0;
      setIsVisible(hasReachedMainContent);
      setScrolled(hasReachedMainContent);
    };

    updateHomeNavigation();
    window.addEventListener("resize", updateHomeNavigation);
    return () => window.removeEventListener("resize", updateHomeNavigation);
  }, [pathname]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (pathname === "/") {
      // The storyboard length changes with content and viewport size, so use
      // the main content boundary instead of a fixed number of viewports.
      const mainContent = document.getElementById("home-main");
      const hasReachedMainContent = mainContent
        ? mainContent.getBoundingClientRect().top <= 0
        : false;

      setIsVisible(hasReachedMainContent);
      setScrolled(hasReachedMainContent);
    } else {
      // Standard behavior for other pages
      setIsVisible(true);
      setScrolled(latest > 40);
    }
  });

  // Hide on auth pages
  if (["/login", "/register"].includes(pathname)) return null;

  // Pages where the nav sits on a white background (not over a hero)
  const lightPages = ["/about", "/skildustry", "/projects"];
  const isLightPage = lightPages.includes(pathname);

  const showSolid = scrolled || isLightPage;
  const textColor = "text-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${!isVisible && pathname === "/" ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
          } ${showSolid
            ? "bg-rsa-black/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-360 mx-auto flex items-center justify-between px-6 md:px-10 lg:px-14 h-[72px]">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src='/images/logo.png'
              width={110}
              height={32}
              alt="Re-Skill Africa"
              className="h-7 w-auto"
            />
          </Link>

          {/* Right side: Nav + CTA */}
          <div className="flex items-center gap-6 lg:gap-10">
            {/* Desktop Nav Links */}
            <div className={`hidden lg:flex items-center gap-8 ${textColor}`}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-[13px] font-medium tracking-[0.02em] transition-colors hover:opacity-70 ${isActive ? "opacity-100" : "opacity-80"
                      }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-rsa-red rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="https://idice.ng/skills-training-to-jobs"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-rsa-red text-white text-[12px] font-bold uppercase px-5 py-2.5 rounded-sm hover:bg-rsa-red-dark transition-colors"
              >
                <span><span className="lowercase">i</span>DICE REGISTER ↗</span>
              </a>

              {/* Mobile hamburger */}
              <button
                className={`lg:hidden p-1 ${textColor}`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[49] bg-white flex flex-col pt-[80px] px-8 pb-10 lg:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-rsa-black text-[18px] font-medium tracking-tight border-b border-rsa-gray-200 pb-4"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="https://idice.ng/skills-training-to-jobs"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center w-full bg-rsa-red text-white text-[13px] font-bold uppercase px-6 py-4 rounded-sm hover:bg-rsa-red-dark transition-colors"
            >
              <span><span className="lowercase">i</span>DICE REGISTER ↗</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
