import React from "react";
import Image from "next/image";
import { RedButton, SectionLabel } from "@/components/ui/SharedUI";

const partnerTypes = [
  "GOVERNMENTS", "INDUSTRY", "INTERNATIONAL PARTNERS",
  "DFIS", "TECHNOLOGY", "CAPITAL"
];

export function FutureCTASection() {
  return (
    <section className="relative w-full py-8 md:py-10 overflow-hidden bg-rsa-black">

      {/* Background Image with horizontal fade */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/footer.png"
          alt="Construction site"
          fill
          className="object-cover object-right lg:object-[center_30%]"
        />
        {/* Gradient fading from black on the left to transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-rsa-black via-rsa-black/90 to-transparent" />
        {/* Subtle overall overlay to ensure text readability on smaller screens */}
        <div className="absolute inset-0 bg-rsa-black/40 lg:bg-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 flex flex-col justify-between">

        {/* Top Content */}
        <div>
          <SectionLabel number="12" className="!text-white/60 !border-rsa-red">THE FUTURE</SectionLabel>

          <h2 className="text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-[1.05] tracking-[-0.03em] mb-4 mt-6">
            The future of work will be global.<br />
            Africa must be ready to <span className="text-rsa-red">build it.</span>
          </h2>

          <div className="flex flex-wrap items-center gap-y-2 text-[10px] sm:text-[11px] font-bold tracking-[0.15em] text-white/80 uppercase mb-6 max-w-200">
            {partnerTypes.map((type, i) => (
              <React.Fragment key={type}>
                <span>{type}</span>
                {i < partnerTypes.length - 1 && (
                  <span className="text-rsa-red mx-2 text-[16px] leading-[0]">•</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="text-white/90 text-[15px] sm:text-[16px] font-medium leading-relaxed max-w-2xl mb-8">
            Let&apos;s build the infrastructure for human productivity.
          </p>

          <RedButton href="/partner-with-us" variant="filled" className="px-8 py-3.5 text-[12px] font-bold rounded-full border-none">
            PARTNER WITH RSA ↗
          </RedButton>
        </div>

        {/* Bottom Internal Footer */}
        <div className="mt-10 flex items-center gap-4">
          <div className="w-[3px] h-[34px] bg-rsa-red"></div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <span className="text-white font-extrabold text-[16px] tracking-wide uppercase">
              RE-SKILL AFRICA
            </span>
            <span className="text-white/70 text-[13px] font-medium">
              People, Work, Enterprise, Industry.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
