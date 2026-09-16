"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export function CardsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Keeping it visible once scrolled into view
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cardBaseStyle = "absolute w-[320px] md:w-[380px] h-[480px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-[1200ms] cubic-bezier(0.22, 1, 0.36, 1) ease-out";

  const Logo = () => (
    <div className="absolute top-6 left-6 z-20 flex items-center">
      <span className="text-white font-bold text-lg tracking-tight">Re-Skill</span>
      <span className="w-px h-4 bg-white mx-2"></span>
      <span className="text-white font-light text-lg tracking-widest">AFRICA</span>
    </div>
  );

  return (
    <section className="w-full bg-white py-32 px-4 md:px-12 overflow-hidden flex flex-col items-center">
      <div
        ref={containerRef}
        className="relative w-full max-w-300 h-375 md:h-130 flex justify-center items-center"
      >
        {/* Left Card */}
        <div
          className={`${cardBaseStyle} z-10 ${isVisible ? "md:translate-x-[-105%] md:translate-y-0 translate-y-[-105%]" : "translate-x-0 translate-y-0"
            }`}
        >
          <Image
            src="/images/about-section-1.webp"
            alt="Learn By Doing"
            fill
            sizes="(min-width: 768px) 380px, 320px"
className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/30" />
          <Logo />

          <div className="absolute bottom-6 left-6 right-6 z-20">
            <h3 className="text-white text-2xl font-semibold mb-3">Learn By Doing</h3>
            <p className="text-white/80 text-sm font-light leading-relaxed">
              Hands-on training in real production environments, not classrooms.
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div
          className={`${cardBaseStyle} z-10 ${isVisible ? "md:translate-x-[105%] md:translate-y-0 translate-y-[105%]" : "translate-x-0 translate-y-0"
            }`}
        >
          <Image
            src="/images/about-section-3.webp"
            alt="Graduate With Experience"
            fill
            sizes="(min-width: 768px) 380px, 320px"
className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/30" />
          <Logo />

          <div className="absolute top-0 bottom-0 left-6 right-6 z-20 flex flex-col justify-center mt-12">
            <h3 className="text-white text-2xl font-semibold mb-3">Graduate With Experience</h3>
            <p className="text-white/80 text-sm font-light leading-relaxed mb-6">
              Exit with verifiable work experience, not just theoretical knowledge. Your Skill Passport documents every competency you've mastered.
            </p>

            {/* Profile Overlay Card */}
            <div className="w-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 shadow-xl flex flex-col sm:flex-row gap-4 mt-auto mb-6">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 hidden sm:block">
                <Image
                  src="/images/about-section-5.webp"
                  alt="Osinachi Chidoka"
                  fill
                  sizes="80px"
className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="text-white font-medium text-base mb-1">Osinachi Chidoka</h4>
                <p className="text-white/70 text-xs mb-1">Sector: Renewable Energy</p>
                <p className="text-white/70 text-xs mb-3">Experience: 1,240 hours verified work experience</p>

                <p className="text-white text-xs mb-2">Verified Skills</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="flex items-center gap-1 bg-white text-black px-2 py-1 rounded-full text-[10px] font-medium">
                    <CheckCircle size={10} /> Solar Installation
                  </span>
                  <span className="flex items-center gap-1 bg-white text-black px-2 py-1 rounded-full text-[10px] font-medium">
                    <CheckCircle size={10} /> System Design
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Card (Stack Top) */}
        <div className={`${cardBaseStyle} z-30`}>
          <Image
            src="/images/about-section-2.webp"
            alt="Produce While Learning"
            fill
            sizes="(min-width: 768px) 380px, 320px"
className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-black/30" />
          <Logo />

          <div className="absolute bottom-6 left-6 right-6 z-20">
            <h3 className="text-white text-2xl font-semibold mb-3">Produce While Learning</h3>
            <p className="text-white/80 text-sm font-light leading-relaxed">
              Create real products and services that generate value during training.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
