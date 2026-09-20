"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function TournamentConnected() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white pt-8 pb-32 px-4 md:px-12 flex flex-col items-center"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-16 items-center">
        {/* Left: text */}
        <div className="flex-1">
          {/* "It's All Connected" badge — reveal wipe */}
          <div className="overflow-hidden inline-block mb-6">
            <motion.div
              className="inline-flex items-center gap-2 border border-primary text-primary rounded-full px-4 py-1.5 text-sm font-medium"
              initial={{ y: "110%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ArrowRight size={15} />
              It&apos;s All Connected
            </motion.div>
          </div>
          {/* h2 — reveal wipe, slightly delayed */}
          <div className="overflow-hidden mb-6">
            <motion.h2
              className="text-[30px] md:text-[40px] font-sans font-bold leading-[1.1] tracking-tight text-brand-dark"
              initial={{ y: "100%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              The doctrine&apos;s compounding engine begins here.
            </motion.h2>
          </div>
          <p className="text-brand-gray text-[16px] leading-relaxed mb-5">
            AIT runs in parallel to Skildustry&apos;s enterprise pathways as a
            discovery mechanism for the next generation of Skildustry founders
            and enterprises.
          </p>
          <p className="text-brand-gray text-[16px] leading-relaxed">
            Winners exit AIT into Venture Labs — our enterprise-formation studio
            that shapes them into commercially credible businesses. The Venture
            Lab graduates become Skildustry enterprises in their own right —
            holding their own cohorts, generating their own demand, and
            contributing to the portfolio of the wider doctrine.
          </p>

          {/* Flow indicator */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {["AIT", "Venture Labs", "Skildustry Enterprise", "New Demand"].map(
              (step, i, arr) => (
                <motion.div
                  key={step}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1, ease: "easeOut" }}
                >
                  <span className="bg-primary text-white text-xs font-semibold px-4 py-2 rounded-full">
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <ArrowRight size={14} className="text-brand-gray" />
                  )}
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* Right: image — slides in from the right */}
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, x: 80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
        >
          <div className="relative h-[420px] md:h-[500px] rounded-3xl overflow-hidden group">
            <Image
              src="/images/about-section-1.webp"
              alt="AIT Discovery Engine"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-semibold text-[15px]">Enterprise Creation</p>
              <p className="text-sm text-white/80">Doctrine becomes deployment</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
