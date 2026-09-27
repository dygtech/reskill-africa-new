"use client";

import Image from "next/image";
import { RedButton } from "@/components/ui/SharedUI";

export function HeroSection() {
  return (
    <section className="relative w-full flex flex-col justify-center overflow-hidden bg-rsa-black">
      {/* Background Image */}
      <Image
        src="/images/home-hero-new.png"
        alt="Industrial facility"
        fill
        className="object-cover opacity-60"
        priority
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-360 mx-auto w-full px-6 md:px-10 lg:px-14 pt-24 pb-36 md:pb-24">
        {/* Top tag */}
        <span className="inline-block text-[12px] font-bold tracking-widest uppercase text-[#F2C94C] mb-4">
          RE-SKILL AFRICA
        </span>

        {/* Headline */}
        <h1 className="text-white text-[50px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-bold leading-none tracking-[-0.02em] mb-6 max-w-4xl">
          Africa&rsquo;s Talent.
          <br />
          Built for Real
          <br />
          Demand.
        </h1>

        {/* Subtitle */}
        <p className="text-white/90 text-[16px] md:text-[18px] font-normal leading-relaxed max-w-2xl mb-10">
          We build systems that connect African talent to work, enterprise <br />
          and industry — at home and across global markets.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <RedButton href="/partner-with-us" variant="filled">
            PARTNER WITH RSA ↗
          </RedButton>
          <RedButton href="/skildustry" variant="outline" className="!text-white !border-white/30 hover:!border-white hover:!bg-white/10">
            EXPLORE SKILDUSTRY™ ↗
          </RedButton>
        </div>
      </div>

      {/* Bottom banner */}
      <div className="absolute bottom-0 left-0 w-full bg-[#111111] border-t border-white/10 z-20">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between px-6 md:px-10 lg:px-14 py-4 gap-4">
          <div className="flex items-center gap-3 text-[12px] sm:text-[13px] font-medium tracking-wide">
            <span className="inline-flex items-center gap-2 text-white">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rsa-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rsa-red"></span>
              </span>
              NOW LIVE — iDICE SOUTH EAST
            </span>
            <span className="hidden md:inline text-white/50 px-2">|</span>
            <span className="hidden md:inline text-white/70">
              Creative and technology opportunities across South-East Nigeria.
            </span>
          </div>
          <a
            href="/register"
            className="text-white text-[12px] font-bold tracking-[0.06em] uppercase hover:text-rsa-red transition-colors flex items-center gap-1"
          >
            REGISTER NOW ↗
          </a>
        </div>
      </div>
    </section>
  );
}
