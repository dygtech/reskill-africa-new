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

  const cardBaseStyle = "absolute w-[320px] md:w-[380px] h-[440px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-[1200ms] cubic-bezier(0.22, 1, 0.36, 1) ease-out";

  const Logo = () => (
    <div className="absolute top-8 left-6 right-6 z-20 flex flex-col gap-3">
      <Image src="/images/logo.svg" alt="Re-Skill Africa" width={120} height={28} className="h-8 w-auto object-contain self-start" />
      <div className="w-full h-[1px] bg-white/40"></div>
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
          className={`${cardBaseStyle} z-10 ${isVisible ? "md:translate-x-[-110%] md:translate-y-0 translate-y-[-110%]" : "translate-x-0 translate-y-0"
            }`}
        >
          <Image
            src="/images/card-1.png"
            alt="Learn By Doing"
            fill
            sizes="(min-width: 768px) 380px, 320px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/30" />
          <Logo />

          <div className="absolute bottom-6 left-6 right-6 z-20">
            <h3 className="text-white text-lg font-semibold mb-3">Learn By Doing</h3>
            <p className="text-white/80 text-sm font-light leading-relaxed">
              Hands-on training in real production environments, not classrooms.
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div
          className={`${cardBaseStyle} z-10 ${isVisible ? "md:translate-x-[110%] md:translate-y-0 translate-y-[110%]" : "translate-x-0 translate-y-0"
            }`}
        >
          <Image
            src="/images/card-3.png"
            alt="Graduate With Experience"
            fill
            sizes="(min-width: 768px) 380px, 320px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/30" />

          <div className="absolute top-0 -bottom-2.5 left-6 right-6 z-20 flex flex-col pt-8 pb-8">
            <Image src="/images/logo.svg" alt="Re-Skill Africa" width={120} height={28} className="h-6 w-auto object-contain self-start mb-2" />
            <div className="w-full h-px bg-white/40 mb-3 shrink-0"></div>
            <h3 className="text-white text-lg font-medium mt-10 tracking-tight leading-tight">Graduate With Experience</h3>
            <p className="text-white/90 text-sm md:text-[15px] font-light leading-relaxed">
              Exit with verifiable work experience, not just theoretical knowledge. Your Skill Passport documents every competency you've mastered.
            </p>

            {/* Profile Overlay Card */}
            <div className="w-full rounded-3xl bg-white/15 backdrop-blur-md border border-white/30 p-3 shadow-xl flex flex-row gap-3 mt-auto mb-2 items-center">
              <div className="relative w-22.5 h-32.5 rounded-[14px] overflow-hidden shrink-0">
                <Image
                  src="/images/card-4.png"
                  alt="Osinachi Chidoka"
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center py-1 overflow-hidden">
                <h4 className="text-white font-medium text-[15px] mb-1 tracking-tight truncate">Osinachi Chidoka</h4>
                <p className="text-white/80 text-[10px] mb-1 font-light truncate">Sector: Renewable Energy</p>
                <p className="text-white/80 text-[10px] mb-2 font-light leading-snug">Experience: 1,240 hours verified<br />work experience</p>

                <p className="text-white/90 text-[10px] mb-1 font-light">Verified Skills</p>
                <div className="flex flex-row gap-1.5 items-center">
                  <div className="flex items-center gap-1 bg-white text-brand-dark px-1.5 py-1 rounded-full shrink-0">
                    <CheckCircle size={9} strokeWidth={2.5} className="shrink-0" />
                    <span className="text-[8px] font-medium whitespace-nowrap">Solar Installation</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white text-brand-dark px-1.5 py-1 rounded-full shrink-0">
                    <CheckCircle size={9} strokeWidth={2.5} className="shrink-0" />
                    <span className="text-[8px] font-medium whitespace-nowrap">System Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Card (Stack Top) */}
        <div className={`${cardBaseStyle} z-30`}>
          <Image
            src="/images/card-2.png"
            alt="Produce While Learning"
            fill
            sizes="(min-width: 768px) 380px, 320px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-black/30" />
          <Logo />

          <div className="absolute bottom-6 left-6 right-6 z-20">
            <h3 className="text-white text-lg font-semibold mb-3">Produce While Learning</h3>
            <p className="text-white/80 text-sm font-light leading-relaxed">
              Create real products and services that generate value during training.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
