"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function SkillPassportCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 60, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full max-w-[360px] bg-brand-dark rounded-3xl overflow-hidden shadow-2xl"
    >
      {/* Card top bar */}
      <div className="flex items-center justify-between px-5 py-3 bg-black/30">
        <div className="flex items-center gap-1.5">
          <span className="text-white font-bold text-sm tracking-tight">Re-Skill</span>
          <span className="w-px h-3.5 bg-white/40 mx-1"></span>
          <span className="text-white/80 font-light text-sm tracking-widest">AFRICA</span>
        </div>
        <span className="text-white/50 text-[10px] font-mono tracking-wider">
          ID: RSA-SP-2025
        </span>
      </div>

      {/* Profile image */}
      <div className="relative w-full h-[200px]">
        <Image
          src="/images/about-section-5.webp"
          alt="Osinachi Chidoka"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-brand-dark/10 to-transparent" />
      </div>

      {/* Card body */}
      <div className="px-5 pt-2 pb-6">
        <h4 className="text-white font-semibold text-[17px] mb-0.5">Osinachi Chidoka</h4>
        <p className="text-white/60 text-xs mb-0.5">Sector: Renewable Energy</p>
        <p className="text-white/60 text-xs mb-4">
          Experience: 1,240 hrs verified work experience
        </p>

        <p className="text-white/50 text-[11px] uppercase tracking-widest mb-2.5 font-medium">
          Verified Skills
        </p>
        <div className="flex flex-wrap gap-2">
          {["Solar Installation", "System Design", "Maintenance", "Energy Audit"].map((skill) => (
            <span
              key={skill}
              className="flex items-center gap-1 bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full text-[11px] font-medium"
            >
              <CheckCircle size={10} className="text-primary shrink-0" />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
