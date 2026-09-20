"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ActionButton } from "@/components/ActionButton";
import { motion } from "framer-motion";

export function TournamentSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Trigger a bit earlier so the sequence starts smoothly
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const slideUpClass = (delay: string) =>
    `transition-all duration-[1000ms] ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
    } ${delay}`;

  return (
    <section className="w-full bg-[#fdfdfd] py-32 px-6 md:px-12 text-black overflow-hidden flex flex-col items-center">
      <div ref={containerRef} className="max-w-300 w-full flex flex-col items-center">

        {/* Top Tag */}
        <div className="flex items-center gap-2 border border-black/15 rounded-full px-5 py-2 mb-10 bg-white shadow-sm">
          <Image src={"/images/brain-icon.svg"} alt="brain" width={18} height={18} className="text-primary" />
          <span className="text-[14px] font-medium text-black/80 tracking-tight">Discovering Talent & Driving Industry</span>
        </div>

        {/* Headings */}
        <div className="text-center mb-16 flex flex-col gap-1">
          {/* "The Africa Innovation" — reveal wipe */}
          <div className="overflow-hidden">
            <motion.h2
              className="text-[42px] md:text-[56px] lg:text-[64px] font-sans font-bold leading-[1.05] tracking-[-8%] text-black"
              initial={{ y: "100%" }}
              animate={isVisible ? { y: "0%" } : {}}
              transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              The Africa Innovation
            </motion.h2>
          </div>
          <h2 className={`text-[42px] md:text-[48px] lg:text-[64px] font-sans font-bold leading-[1.05] tracking-[-8%] text-brand-light ${slideUpClass("delay-300")}`}>
            Tournament
          </h2>
        </div>

        {/* Large Image */}
        <div className={`relative w-full h-75 md:h-116 lg:h-116 rounded-3xl overflow-hidden mb-24 shadow-2xl ${slideUpClass("delay-500")}`}>
          <Image
            src="/images/tournament-bg.webp"
            alt="Tournament Image"
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 w-full items-start">
          {/* Left: Heading */}
          <div className={slideUpClass("delay-700")}>
            <h3 className="text-[32px] md:text-[42px] font-sans font-bold tracking-[-8%] pr-4">
              The entry point to Re-Skill Africa, built around real industry challenges.
            </h3>
          </div>

          {/* Right: Paragraph and Button */}
          <div className="flex flex-col gap-10 justify-start pt-2">
            <p className="text-[17px] leading-[1.6] text-black/60 font-light pr-4">
              Participants are evaluated on their ability to deliver viable solutions under real-world conditions. High performers progress into pathways connecting them with employment, supplier opportunities, and venture development, creating a live system for identifying execution-ready talent at scale.
            </p>
            <div>
              <ActionButton variant="secondary">
                Explore the tournament
              </ActionButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
