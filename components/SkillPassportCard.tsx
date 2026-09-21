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
      className="w-full relative max-w-90 bg-brand-dark rounded-3xl overflow-hidden shadow-2xl"
    >
      <div className="absolute inset-0 bg-[url('/images/passport_vector.svg')] bg-cover bg-center pointer-events-none z-0" />

      {/* Card top bar */}
      <div className="absolute z-50 top-0 flex items-center justify-between px-5 py-3 bg-transparent w-full">
        <div className="flex items-center gap-1.5">
          <Image src="/images/logo.svg" alt="Logo" width={100} height={100} />
        </div>
        <span className="text-black text-[10px] font-mono tracking-wider px-2 py-1 bg-white rounded-2xl w-fit h-fit">
          ID: RSA-SP-2025
        </span>
      </div>

      {/* Profile image */}
      <div className="relative w-full h-50">
        <Image
          src="/images/passport_img.png"
          alt="Osinachi Chidoka"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-brand-dark/10 to-transparent" />
      </div>

      {/* Card body */}
      <div className="px-5 pt-2 pb-6 relative z-10">
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
              className="flex items-center gap-1 bg-white text-black rounded-2xl w-fit h-fit px-3 py-1 text-[11px] font-medium"
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
