import React from "react";
import { SectionLabel } from "@/components/ui/SharedUI";

const pillars = [
  {
    tag: "PEOPLE",
    heading: "Millions seeking productive opportunity.",
  },
  {
    tag: "INDUSTRIES",
    heading: "Industries searching for capability.",
  },
  {
    tag: "SYSTEM",
    heading: "The bridge between them, built to scale.",
  },
];

export function ConnectionSection() {
  return (
    <section className="w-full bg-layout-bg py-20 overflow-hidden relative">
      <div className="max-w-360 mx-auto px-6 md:px-10 lg:px-14">
        <SectionLabel number="02">THE CONNECTION</SectionLabel>
      </div>
      <div className="max-w-300 mx-auto px-6 md:px-10 lg:px-14 text-center">

        {/* Main headline */}
        <h2 className="text-rsa-black text-[32px] sm:text-[40px] md:text-[50px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.03em] mb-4 max-w-3xl mx-auto">
          Africa has the talent.
          <br />
          The breakthrough is <span className="text-rsa-red">connection.</span>
        </h2>

        {/* 3 pillars with arrows */}
        <div className="flex flex-col md:flex-row items-stretch justify-between w-full mt-20 mb-16">
          {pillars.map((pillar, index) => (
            <React.Fragment key={pillar.tag}>
              <div className="flex flex-col items-center flex-1 border-t border-rsa-gray-200 pt-8">
                <span className="text-[12px] font-bold tracking-widest uppercase text-rsa-red mb-4">
                  {pillar.tag}
                </span>
                <p className="text-rsa-black text-[18px] md:text-[22px] font-bold leading-snug max-w-70">
                  {pillar.heading}
                </p>
              </div>

              {/* Arrow */}
              {index < pillars.length - 1 && (
                <>
                  {/* Desktop Arrow */}
                  <div className="hidden md:flex flex-col items-center w-[12%] px-2 pt-24">
                    <div className="w-full h-[1px] bg-rsa-red relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-rsa-red border-b-[4px] border-b-transparent"></div>
                    </div>
                  </div>
                  {/* Mobile Arrow */}
                  <div className="flex md:hidden flex-col items-center justify-center py-8 w-full">
                    <div className="h-[40px] w-[1px] bg-rsa-red relative">
                      <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-t-[7px] border-t-rsa-red border-r-[5px] border-r-transparent"></div>
                    </div>
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="border-t border-rsa-gray-200 pt-10">
          <p className="text-rsa-black text-[20px] font-bold tracking-wide">
            RSA builds the connection.
          </p>
        </div>
      </div>
    </section>
  );
}
