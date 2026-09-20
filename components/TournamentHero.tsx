"use client";

import Image from "next/image";
import Link from "next/link";
import { Trophy } from "lucide-react";
import { ActionButton } from "@/components/ActionButton";
import { motion } from "framer-motion";

export function TournamentHero() {
  return (
    <section className="relative w-full h-screen min-h-[620px] flex items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tournament-hero.webp"
          alt="Africa Innovation Tournament"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/50 to-black/70" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto">
        {/* Trophy icon pill — fades in first */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 mb-6"
        >
          <Trophy className="text-white w-7 h-7" />
        </motion.div>

        {/* Headline — fades in */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-[44px] md:text-[62px] lg:text-[72px] font-sans font-bold leading-[1.02] tracking-tight text-white mb-5"
        >
          The Africa Innovation Tournament
        </motion.h1>

        {/* Subhead — fades in slightly after */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="text-[17px] md:text-[20px] font-sans font-medium text-white/85 leading-relaxed max-w-xl mb-10"
        >
          Re-Skill Africa&apos;s discovery engine.
        </motion.p>

        {/* CTAs — fade in last */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link href="/contact">
            <ActionButton variant="primary">Apply to participate</ActionButton>
          </Link>
          <Link href="/contact">
            <ActionButton variant="secondary">Partner with us</ActionButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
