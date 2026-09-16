"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const pillars = [
  { title: "Demand", desc: "we scope for real market appetite. Jobs, contracts, off-takes, or productive gaps we can name. No cohort begins without a validated demand signal.", image: "/images/hero-img.webp" },
  { title: "Enterprise", desc: "we build or partner with a commercially credible operating environment where the sector's work actually happens.", image: "/images/about-section-1.webp" },
  { title: "Production", desc: "we run real production inside that enterprise. Real customers. Real deadlines. Real standards decide what ships.", image: "/images/about-section-2.webp" },
  { title: "Learning through Work", desc: "we develop cohorts inside the live production system. People acquire competence by doing the work, not by simulating it.", image: "/images/about-section-3.webp" },
  { title: "Verified Competence", desc: "we assess capability against observable output and capture the evidence on the Digital Skill Passport.", image: "/images/about-section-5.webp" },
  { title: "Income", desc: "we pay cohorts from the first day of production, tied to what they produce, making learning and earning the same act.", image: "/images/hero-img.webp" },
  { title: "Enterprise Creation", desc: "we progress proven talent through Venture Labs into new enterprises.", image: "/images/about-section-1.webp" },
  { title: "Scale", desc: "we replicate the loop across sectors, geographies, and partners. With every new node generating new demand, and compounding the doctrine.", image: "/images/about-section-2.webp" },
];

export const TheFullLoop = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-gray-50 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

        {/* Left Side Sticky */}
        <div className="w-full lg:w-[45%] lg:sticky top-[30vh] h-fit">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-light mb-8">
            <RefreshCcw size={16} className="text-primary" />
            <span className="text-[13px] font-medium text-text-dark">The Full Loop</span>
          </div>

          {/* Bank Vault Number Spin Title */}
          <div className="h-[60px] md:h-[80px] overflow-visible relative" style={{ perspective: 1000 }}>
            <p className="text-text-gray text-[17px] leading-[1.6] max-w-100 font-light mb-2">
              Skildustry operates as a compounding system. Every stage creates the conditions for the next.
            </p>
            <AnimatePresence mode="popLayout">
              <motion.h2
                key={activeIndex}
                initial={{ y: 50, opacity: 0, rotateX: -60 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: -50, opacity: 0, rotateX: 60 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-[42px] md:text-[54px] font-bold text-primary leading-[1.1] tracking-[-0.03em] absolute w-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                {pillars[activeIndex].title}
              </motion.h2>
            </AnimatePresence>
          </div>


        </div>

        {/* Right Side Scrolling */}
        <div className="w-full lg:w-[55%] flex flex-col gap-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-6"
              onViewportEnter={() => setActiveIndex(index)}
              viewport={{ amount: 0.5, margin: "-20% 0px -20% 0px" }}
            >
              <div className="relative w-full aspect-[4/3] md:aspect-[1.2/1] rounded-[32px] overflow-hidden bg-gray-100">
                <Image src={pillar.image} alt={pillar.title} fill className="object-cover" />
              </div>
              <div className="px-2">
                <h3 className="text-[20px] text-text-dark mb-4 flex items-center gap-3">
                  <span className={`font-bold transition-colors duration-500 ${activeIndex >= index ? 'text-primary' : 'text-gray-300'}`}>
                    0{index + 1}
                  </span>
                  <span className="font-semibold tracking-tight">{pillar.title}</span>
                </h3>
                <p className="text-text-gray text-[15px] leading-[1.7] font-light">
                  <span className="capitalize font-medium text-text-dark">{pillar.desc.split(" ")[0]}</span> {pillar.desc.substring(pillar.desc.indexOf(" ") + 1)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
