"use client";

import Image from "next/image";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const leaders = [
  {
    name: "Linus Idahosa",
    prefix: "Mr.",
    role: "Founder and Group Chairman / Chief Executive, Del-York Group",
    bio: "Founder of Del-York Group and the architect of Re-Skill Africa’s Skildustry doctrine. His conviction - that Africa’s human productivity is the continent’s most under-industrialised asset - shapes the operating logic of every Re-Skill Africa’s mechanism.",
    image: "/images/linus-idahosa.png",
    theme: { bg: "bg-[#0a0a0a]", text: "text-white", accent: "text-primary", outline: "text-white/5" }
  },
  {
    name: "Benjamin Okonkwo",
    prefix: "",
    role: "Chief Operating Officer, Del-York Group",
    bio: "Group Chief Operating Officer of Del-York Group, with oversight across the Group’s operating business units including Re-Skill Africa. Convenes the strategic and operational alignments that let the RSA doctrine translate into delivery across sectors.",
    image: "/images/ben-okonkwo.jpg",
    theme: { bg: "bg-[#e5e5e5]", text: "text-[#111]", accent: "text-primary", outline: "text-black/5" }
  },
  {
    name: "Godsgift Obi",
    prefix: "",
    role: "Program Lead, Re-Skill Africa",
    bio: "Program Lead at Re-Skill Africa, holding operational leadership across the RSA programme portfolio, and responsible for the strategic architecture of RSA’s partnership pipeline, doctrine translation into partner-facing mechanisms, and the sequencing of sectoral tournaments toward the National Flagship AIT.",
    image: "/images/godsgift-obi.png",
    theme: { bg: "bg-primary-dark", text: "text-white", accent: "text-white/70", outline: "text-white/5" }
  }
];

const SplitText = ({ text, className }: { text: string; className?: string }) => {
  if (!text) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className={className}
    >
      {text}
    </motion.div>
  );
};

const LeaderSection = ({ leader, index }: { leader: any; index: number }) => {
  const num = `0${index + 1}`;

  return (
    <section className={`relative md:sticky top-0 w-full min-h-screen md:h-screen ${leader.theme.bg} ${leader.theme.text} flex items-center justify-center overflow-hidden`}>
      {/* Huge Background Number */}
      <div className={`absolute right-[-5%] top-1/2 -translate-y-1/2 text-[40vw] font-bold leading-none ${leader.theme.outline} select-none pointer-events-none tracking-tighter`}>
        {num}
      </div>

      <div className="w-full max-w-350 mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10 h-full py-24 md:py-0">

        {/* Left: Typography & Bio */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center h-full pt-12 lg:pt-0">
          <div className="mb-2">
            {leader.prefix && (
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className={`text-lg md:text-xl font-medium tracking-widest uppercase ${leader.theme.accent} mb-2 block`}
              >
                {leader.prefix}
              </motion.span>
            )}
            <SplitText
              text={leader.name.split(' ')[0]}
              className="text-[60px] md:text-[90px] lg:text-[120px] font-bold leading-[0.85] tracking-tighter uppercase"
            />
            <SplitText
              text={leader.name.split(' ')[1] || ''}
              className="text-[60px] md:text-[90px] lg:text-[120px] font-bold leading-[0.85] tracking-tighter uppercase"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false }}
            className={`h-0.5 w-24 ${leader.theme.accent} mt-8 mb-6 origin-left`}
          />

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
            className={`text-[16px] md:text-[20px] font-semibold tracking-wide uppercase max-w-md ${leader.theme.accent} mb-8`}
          >
            {leader.role}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: false }}
            className="text-[15px] md:text-[17px] leading-[1.8] font-light max-w-lg opacity-80"
          >
            {leader.bio}
          </motion.p>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2 aspect-4/5 md:aspect-auto md:h-[75vh] relative flex items-center justify-center pb-12 md:pb-0">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "50px" }}
            className="w-full max-w-125 h-full relative rounded-none md:rounded-[40px] overflow-hidden group shadow-2xl"
          >
            <motion.div
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: false }}
              className="w-full h-full"
            >
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-700" />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default function LeadershipPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="bg-[#0a0a0a] min-h-screen relative">
      {/* ── HERO ──────────────────────────────── */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">
        {/* Abstract Background Noise */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/noise.png')] mix-blend-overlay pointer-events-none"></div>

        <div className="relative z-10 w-full px-4 md:px-12 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <h1 className="text-white text-[48px] md:text-[64px] lg:text-[80px] font-bold tracking-tighter leading-none uppercase mix-blend-difference">
              Leadership
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white/50 text-[14px] md:text-[18px] uppercase tracking-[0.3em] mt-8"
          >
            The architects of Re-Skill Africa
          </motion.p>
        </div>
      </section>

      {/* ── STICKY LEADERS STACK ──────────────── */}
      <div className="relative w-full">
        {leaders.map((leader, idx) => (
          <LeaderSection key={idx} leader={leader} index={idx} />
        ))}
      </div>

      {/* ── CTA SECTION ────────────────────────── */}
      <section className="relative z-10 bg-white">
        <Footer showCta={false} />
      </section>
    </div>
  );
}
