"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionLabel, RedButton } from "@/components/ui/SharedUI";

const tabs = [
  {
    id: "urban",
    label: "URBAN HUBS",
    description:
      "RSA establishes training and production hubs in major cities, connecting talent to local industries with hands-on programmes and direct employment pathways.",
  },
  {
    id: "remote",
    label: "GLOBAL REMOTE WORK",
    description:
      "Verified RSA talent is matched with remote opportunities at global companies, bringing income and skills development without relocation.",
  },
  {
    id: "enterprise",
    label: "ENTERPRISE",
    description:
      "RSA works with enterprises to build custom workforce solutions, deploying trained talent directly into production environments.",
  },
  {
    id: "mobility",
    label: "STRUCTURE TALENT MOBILITY",
    description:
      "Structured mobility pathways connect talent to opportunities across regions and borders, supported by verification and compliance systems.",
  },
];

export function BuildOpportunitySection() {
  return (
    <section className="w-full bg-white py-20 md:py-28 overflow-hidden border-b border-rsa-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
        <SectionLabel number="07">AFRICA + THE WORLD</SectionLabel>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          {/* Left: Heading */}
          <div>
            <h2 className="text-rsa-black text-[40px] sm:text-[48px] md:text-[56px] font-bold leading-[1.05] tracking-[-0.03em]">
              Build opportunity<br />where people are.<br />Connect capability<br />wherever demand exists.
            </h2>
          </div>

          {/* Right: Text and Button */}
          <div className="pt-4 lg:pt-10 relative">
            <p className="text-rsa-gray-500 text-[15px] leading-relaxed mb-6 max-w-md font-medium">
              RSA works with governments, industry, and international partners to build
              demand-led pathways, connecting African capability to productive opportunity.
            </p>
            <RedButton href="/partner-with-us" variant="outline" className="!text-rsa-red !border-transparent hover:!bg-transparent hover:!text-rsa-red-dark px-0 py-0">
              BUILD A PARTNERSHIP ↗
            </RedButton>
            
            {/* Map image overlaying right area */}
            <div className="absolute -right-20 top-0 w-[400px] h-[300px] opacity-30 pointer-events-none hidden lg:block">
              <Image
                src="/images/world-map.png" // Placeholder
                alt="World Map"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Tab Links Row */}
        <div className="flex flex-wrap items-center justify-between border-t border-rsa-gray-200 pt-6">
          {tabs.map((tab) => (
            <div key={tab.id} className="text-[12px] font-bold tracking-[0.08em] uppercase text-rsa-black cursor-pointer hover:text-rsa-red transition-colors">
              {tab.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
