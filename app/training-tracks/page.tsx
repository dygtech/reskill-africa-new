"use client";

import Image from "next/image";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TrainingTracksPage() {
  return (
    <div className="bg-[#1A1A1A] min-h-screen">
      {/* ── HERO ──────────────────────────────── */}
      <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/about-section-4.webp"
          alt="Training Tracks Workers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-layout-overlay/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-[44px] md:text-[64px] lg:text-[74px] font-bold tracking-tight drop-shadow-md"
          >
            Training Tracks
          </motion.h1>
        </div>
      </section>

      <div className="bg-white">
        {/* ── INTRO TEXT ────────────────────────── */}
        <section className="w-full pt-20 pb-16 px-4 md:px-12 flex flex-col items-center">
          <div className="max-w-4xl mx-auto w-full text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-brand-gray text-[16px] md:text-[20px] leading-relaxed font-medium"
            >
              Our sector-specific and industry-aligned training tracks will form the next layer of this system, providing defined pathways for individuals to develop capability and progress into the Africa Innovation Tournament and Venture Lab.
            </motion.p>
          </div>
        </section>

        {/* ── COMING SOON SECTION ────────────────── */}
        <section className="w-full pb-32 px-4 md:px-12 flex flex-col items-center">
          <div className="max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full aspect-[21/9] min-h-[400px] relative rounded-[40px] overflow-hidden group flex flex-col items-center justify-center text-center p-8 shadow-2xl"
            >
              <Image
                src="/images/training-track-coming-soon.png"
                alt="City skyline"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />

              <div className="relative z-10 flex flex-col items-center">
                <p className="text-white text-[14px] md:text-[15px] font-medium tracking-wider mb-1 drop-shadow-md">
                  Re-Skill Africa training tracks
                </p>
                <h2 className="text-white text-[32px] md:text-[64px] font-bold tracking-tight drop-shadow-md">
                  LAUNCHING SOON
                </h2>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA SECTION ────────────────────────── */}
        <Footer 
          ctaTitle="Ready to Build Africa's Future?"
          ctaDescription="Join thousands of learners who are already part of Africa's industrial transformation through our Skildustry training tracks."
          ctaButtons={
            <>
              <Link href="/skildustry" className="w-full sm:w-auto">
                <button className="w-full bg-white text-[#992828] px-6 py-3.5 rounded-full font-medium text-[14px] flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300 shadow-md">
                  Apply Now
                  <div className="w-5 h-5 rounded-full bg-[#992828] text-white flex items-center justify-center shrink-0">
                    <ArrowRight size={12} strokeWidth={3} />
                  </div>
                </button>
              </Link>
              
              <Link href="/skill-passport" className="w-full sm:w-auto">
                <button className="w-full bg-white text-[#992828] px-6 py-3.5 rounded-full font-medium text-[14px] flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300 shadow-md">
                  Learn About Skill Passport
                  <div className="w-5 h-5 rounded-full bg-[#992828] text-white flex items-center justify-center shrink-0">
                    <ArrowRight size={12} strokeWidth={3} />
                  </div>
                </button>
              </Link>
            </>
          }
        />
      </div>
    </div>
  );
}
