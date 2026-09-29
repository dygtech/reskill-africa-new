"use client";

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
    <section className="relative w-full bg-[#fcfcfb] py-12 md:py-16 overflow-hidden border-b border-rsa-gray-200 z-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 relative">
        <SectionLabel number="07">AFRICA + THE WORLD</SectionLabel>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 mb-6 md:mb-16 relative">

          {/* Ant line is now handled internally by WorldMap for perfect responsiveness */}

          {/* Left: Heading */}
          <div className="lg:w-[45%] shrink-0">
            <h2 className="text-rsa-black text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-[1.05] tracking-[-0.03em]">
              Build opportunity<br />where people are.<br />Connect capability<br /><span>wherever demand exists.</span>
            </h2>
          </div>

          {/* Middle: Text and Button */}
          <div className="lg:w-[25%] pt-4 lg:pt-0 shrink-0 self-center">
            <p className="text-rsa-gray-500 text-[14px] leading-relaxed mb-6 font-medium max-w-[420px]">
              RSA works with governments, industry, and international partners to build demand-led pathways,<br className="hidden 2xl:block" /> connecting African capability to productive opportunity.
            </p>
            <RedButton href="/partner-with-us" variant="outline" className="text-rsa-red! border-transparent! hover:bg-transparent! hover:text-rsa-red-dark! px-0 py-0 text-[13px]!">
              BUILD A PARTNERSHIP ↗
            </RedButton>
          </div>

          {/* Right: World Map */}
          <div className="lg:w-[35%] w-full flex justify-end">
            <WorldMap className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[650px] h-auto shrink-0 lg:-mr-12 opacity-90" />
          </div>
        </div>

        {/* Tab Links Row */}
        <div className="grid grid-cols-[auto_auto] justify-center md:flex md:flex-row md:items-center md:justify-between gap-y-1 gap-x-8 sm:gap-x-12 border-t border-rsa-gray-200 pt-6">
          {tabs.map((tab) => (
            <div key={tab.id} className="text-[9px] sm:text-[12px] font-bold tracking-normal sm:tracking-[0.08em] uppercase text-rsa-black whitespace-nowrap">
              {tab.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
