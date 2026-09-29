"use client";

import React from 'react';
import { SectionLabel, RedButton } from "@/components/ui/SharedUI";
import { WorldMap } from "@/components/ui/WorldMap";

const tabs = [
  {
    id: "local",
    label: "LOCAL WORK",
  },
  {
    id: "remote",
    label: "GLOBAL REMOTE WORK",
  },
  {
    id: "enterprise",
    label: "ENTERPRISE",
  },
  {
    id: "mobility",
    label: "STRUCTURED TALENT MOBILITY",
  },
];

export function BuildOpportunitySection() {
  return (
    <section className="relative w-full bg-[#F9F8F6] py-16 overflow-hidden border-b border-rsa-gray-200 z-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 relative">

        <SectionLabel number="07">AFRICA + THE WORLD</SectionLabel>

        {/* Top Content Row */}
        <div className="flex flex-col lg:flex-row items-center lg:gap-8 relative z-10">

          {/* Left: Heading */}
          <div className="lg:w-[48%] shrink-0">
            <h2 className="text-rsa-black text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-[1.05] tracking-[-0.03em]">
              Build opportunity<br />where people are.<br />Connect capability<br /><span>wherever demand exists.</span>
            </h2>
          </div>

          {/* Middle: Text and Button */}
          <div className="lg:w-[22%] pt-6 lg:pt-8 shrink-0">
            <p className="text-rsa-gray-500 text-[14px] leading-relaxed font-medium max-w-[420px]">
              RSA works with governments, industry, and international partners to build demand-led pathways, connecting African capability to productive opportunity.
            </p>
            <RedButton href="/partner-with-us" variant="outline" className="text-rsa-red! border-transparent! hover:bg-transparent! hover:text-rsa-red-dark! px-0 py-0 text-[13px]!">
              BUILD A PARTNERSHIP ↗
            </RedButton>
          </div>

          {/* Right: World Map */}
          <div className="lg:w-[30%] w-full flex justify-end relative min-h-[250px] lg:min-h-[400px] items-center">
            <WorldMap className="w-full max-w-[450px] lg:max-w-[500px] lg:w-[500px] h-auto shrink-0 opacity-90 lg:-mr-12" />
          </div>
        </div>

        {/* Tab Links Row */}
        <div className="grid grid-cols-[auto_auto] gap-y-4 justify-center md:hidden border-t border-rsa-gray-200 pt-6">
          {tabs.map((tab) => (
            <div key={tab.id} className="text-[10px] sm:text-[12px] font-bold tracking-[0.05em] uppercase text-rsa-black whitespace-nowrap px-4 text-center">
              {tab.label}
            </div>
          ))}
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex items-center justify-between border-t border-rsa-gray-200/80 pt-6 relative z-10">
          {tabs.map((tab, i) => (
            <React.Fragment key={tab.id}>
              <div className="text-[11px] lg:text-[12px] font-bold tracking-[0.08em] uppercase text-rsa-black flex-1 text-center cursor-default">
                {tab.label}
              </div>
              {i < tabs.length - 1 && (
                <div className="w-[1px] h-[14px] bg-rsa-gray-300"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
