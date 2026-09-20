"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trophy, ArrowRight, MonitorPlay, Smartphone, HardHat, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tournaments = [
  {
    id: "01",
    title: "Del-York Creative Academy Innovation Tournament",
    sector: "Creative & Technical Production",
    anchor: "Del-York Creative Academy",
    icon: <MonitorPlay size={20} />,
    image: "/images/about-section-3.webp",
    description:
      "For creative technologists, production talent, and emerging studios competing on live production briefs. Winners exit into studio, screen, and platform deployment pathways within the Del-York production network and its partners.",
  },
  {
    id: "02",
    title: "iDICE Female Hackathon",
    sector: "Digital Enterprise",
    anchor: "iDICE (African Development Bank, IsDB, AFD)",
    icon: <Smartphone size={20} />,
    image: "/images/about-section-2.webp",
    description:
      "A women-focused hackathon deploying female founders and technical talent into digital ventures across South-East Nigeria — Abia, Anambra, Ebonyi, Enugu, and Imo. Delivered within the iDICE Skills-to-Jobs mandate held by Del-York Group.",
  },
  {
    id: "03",
    title: "ConstruPreneur Tournament",
    sector: "Construction",
    anchor: "Includes BuildHer Track — Women in Construction",
    icon: <HardHat size={20} />,
    image: "/images/about-section-4.webp",
    description:
      "For construction enterprise founders, tradespeople, and supervisory talent competing on live construction and enterprise briefs. Winners exit into contracted work and enterprise formation pathways. The BuildHer track advances women through every level of the construction value chain — from trades and supervision to enterprise ownership.",
  },
];

export const TournamentPortfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#f9f9f9] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

        {/* ── Left Side — Sticky ── */}
        <div className="w-full lg:w-[45%] lg:sticky top-[30vh] h-fit">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 mb-8">
            <Trophy size={16} className="text-primary" />
            <span className="text-[13px] font-medium text-brand-dark">Current Tournaments</span>
          </div>

          <p className="text-brand-gray text-[17px] leading-[1.6] max-w-sm font-light mb-3">
            The tournament portfolio.
          </p>

          {/* Animated tournament title */}
          <div className="h-[120px] md:h-[160px] overflow-visible relative" style={{ perspective: 1000 }}>
            <AnimatePresence mode="popLayout">
              <motion.h2
                key={activeIndex}
                initial={{ y: 50, opacity: 0, rotateX: -60 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: -50, opacity: 0, rotateX: 60 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="hidden md:block text-[34px] md:text-[42px] font-bold text-primary leading-[1.15] tracking-[-0.02em] absolute w-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                {tournaments[activeIndex].title}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Sector + Anchor tags */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="hidden md:flex flex-wrap gap-3 mt-4"
            >
              <span className="text-xs font-semibold bg-primary/10 text-primary rounded-full px-3 py-1.5">
                {tournaments[activeIndex].sector}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium bg-white border border-gray-200 text-brand-gray rounded-full px-3 py-1.5">
                <MapPin size={10} />
                {tournaments[activeIndex].anchor}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Apply CTA */}
          <div className="hidden md:block mt-10">
            <Link href="/contact">
              <button className="group/btn inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-4 transition-all duration-300">
                Apply to participate
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                />
              </button>
            </Link>
          </div>
        </div>

        {/* ── Right Side — Scrolling ── */}
        <div className="w-full lg:w-[55%] flex flex-col gap-16">
          {tournaments.map((t, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-6"
              onViewportEnter={() => setActiveIndex(index)}
              viewport={{ amount: 0.5, margin: "-20% 0px -20% 0px" }}
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] md:aspect-[1.2/1] rounded-[32px] overflow-hidden bg-gray-100 group">
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Icon badge */}
                <div className="absolute top-5 left-5 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary shadow-md">
                  {t.icon}
                </div>
              </div>

              {/* Text */}
              <div className="px-2">
                <h3 className="text-[20px] text-brand-dark mb-4 flex items-center gap-3">
                  <span
                    className={`font-bold transition-colors duration-500 ${
                      activeIndex >= index ? "text-primary" : "text-gray-300"
                    }`}
                  >
                    {t.id}
                  </span>
                  <span className="font-semibold tracking-tight">{t.title}</span>
                </h3>

                {/* Mobile-only tags */}
                <div className="flex flex-wrap gap-2 mb-4 md:hidden">
                  <span className="text-xs font-semibold bg-primary/10 text-primary rounded-full px-3 py-1.5">
                    {t.sector}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium bg-white border border-gray-200 text-brand-gray rounded-full px-3 py-1.5">
                    <MapPin size={10} /> {t.anchor}
                  </span>
                </div>

                <p className="text-brand-gray text-[15px] leading-[1.7] font-light">
                  {t.description}
                </p>

                {/* Mobile-only CTA */}
                <div className="mt-6 md:hidden">
                  <Link href="/contact">
                    <button className="group/btn inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-4 transition-all duration-300">
                      Apply to participate
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
