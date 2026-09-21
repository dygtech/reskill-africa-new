"use client";

import Image from "next/image";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const councils = [
  {
    num: "01",
    title: "Founding Partners",
    desc: "Del-York Group and the institutions that seeded the doctrine. Custodians of Skildustry and stewards of its continental evolution.",
  },
  {
    num: "02",
    title: "Capital Partners",
    desc: "Investors and blended-finance vehicles funding cohort deployment, Africa Innovation Tournament infrastructure, and the growing Skildustry enterprise portfolio.",
  },
  {
    num: "03",
    title: "Government & Multilateral Partners",
    desc: "Federal ministries, state governments, and multilateral finance institutions co-designing sector-scale deployments and policy integration.",
  },
  {
    num: "04",
    title: "Academic & Knowledge Partners",
    desc: "Universities, research institutions, and doctrinal partners strengthening the evidence base for demand-led skilling.",
  },
  {
    num: "05",
    title: "Innovation Partners",
    desc: "Industry, platform, and ecosystem partners providing the demand signals against which cohorts are trained - and co-creators of the enterprises that emerge from Venture Labs.",
  }
];

export default function PartnerWithUsPage() {
  return (
    <div className="bg-[#1A1A1A] min-h-screen">
      {/* ── HERO ──────────────────────────────── */}
      <section className="relative w-full min-h-[85vh] flex flex-col justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero-img.webp"
          alt="Partnership Architecture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-layout-overlay/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12 mt-12 md:mt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/80 text-[14px] md:text-[16px] font-medium tracking-[0.2em] uppercase mb-4"
          >
            Partner with Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-[44px] md:text-[64px] lg:text-[74px] font-bold tracking-tight drop-shadow-md leading-[1.05] max-w-4xl"
          >
            A council architecture built for co-creation.
          </motion.h1>
        </div>
      </section>

      <div className="bg-[#F8F9FA]">
        {/* ── INTRO TEXT ────────────────────────── */}
        <section className="w-full pt-24 pb-16 px-4 md:px-12 flex flex-col items-center">
          <div className="max-w-4xl mx-auto w-full text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-brand-gray text-[18px] md:text-[22px] leading-relaxed font-light mb-8"
            >
              Re-Skill Africa invites partners to shape the mechanisms that industrialise skill across the continent. Every council is a co-creation table - a seat at the design of the doctrine, its enterprises, and its deployments.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-brand-gray text-[16px] md:text-[18px] leading-relaxed font-light"
            >
              The partnership architecture is organised into five councils. Each answers a different question about how the doctrine gets built, financed, deployed, evidenced, connected to demand - and, increasingly, how new demand is created.
            </motion.p>
          </div>
        </section>

        {/* ── COUNCILS SECTION ────────────────── */}
        <section className="w-full pb-64 md:pb-80 px-4 md:px-12 flex flex-col items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8">
              {councils.map((council, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`bg-white rounded-[32px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 md:col-span-3 ${
                    idx < 3 ? "lg:col-span-2" : "lg:col-span-3"
                  }`}
                >
                  <div className="text-primary/20 text-[56px] md:text-[72px] font-bold leading-none mb-4 md:mb-6 tracking-tighter">
                    {council.num}
                  </div>
                  <h3 className="text-[22px] md:text-[26px] font-bold text-brand-dark mb-4 leading-tight tracking-tight">
                    {council.title}
                  </h3>
                  <p className="text-brand-gray text-[15px] font-light leading-relaxed">
                    {council.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ────────────────────────── */}
        <Footer
          ctaTitle="Shape a council role with us"
          ctaDescription="Join the council architecture built for co-creation. Partner with Re-Skill Africa to industrialize skills and build the continent's economic future."
          ctaButtons={
            <>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full bg-white text-[#992828] px-8 py-4 rounded-full font-medium text-[15px] flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300 shadow-lg">
                  Contact Us
                  <div className="w-6 h-6 rounded-full bg-[#992828] text-white flex items-center justify-center shrink-0">
                    <ArrowRight size={14} strokeWidth={3} />
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
