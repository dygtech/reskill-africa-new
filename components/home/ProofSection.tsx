import Image from "next/image";
import { ArrowLink, SectionLabel } from "@/components/ui/SharedUI";

export function ProofSection() {
  return (
    <section className="w-full bg-[#fdfdfd] py-20 relative overflow-hidden border-b border-rsa-gray-200">

      {/* Background Image on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[45%] z-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-[#fdfdfd] via-[#fdfdfd]/70 to-transparent z-10" />
        <Image
          src="/images/about-section-5.webp"
          alt="Construction worker"
          fill
          className="object-cover object-[center_30%]"
        />
      </div>

      <div className="max-w-360 mx-auto px-6 md:px-10 lg:px-14 relative z-10">
        <SectionLabel number="09">PROOF</SectionLabel>

        {/* Main Layout Row */}
        <div className="flex flex-col lg:flex-row w-full mt-8">

          {/* Left Block: Heading and 8,000 */}
          <div className="w-full lg:w-85 shrink-0">
            <h2 className="text-[36px] sm:text-[44px] font-bold text-rsa-black leading-[1.05] tracking-[-0.03em] mb-4">
              From proposition<br />
              to <span className="text-rsa-red">proof.</span>
            </h2>

            <div className="mt-8">
              <div className="text-[40px] font-bold text-rsa-black leading-none tracking-tight">
                8,000
              </div>
              <p className="text-[13px] text-rsa-gray-600 mt-2 font-medium leading-snug">
                Connected to work through<br />prior programme experience.*
              </p>
              <div className="mt-6">
                <ArrowLink href="/projects" color="red" className="text-[11px] font-bold">
                  VIEW OUR WORK ↗
                </ArrowLink>
              </div>
            </div>
          </div>

          {/* Right Block: 3 Stats Columns */}
          <div className="flex-1 flex flex-col sm:flex-row gap-10 lg:gap-8 lg:mt-[128px] mt-10">

            {/* 72% */}
            <div className="flex gap-8">
              <div className="w-[1px] h-12 bg-rsa-red/40 hidden sm:block mt-3"></div>
              <div>
                <div className="text-[32px] font-bold text-rsa-black leading-none tracking-tight">
                  72%
                </div>
                <p className="text-[13px] text-rsa-gray-600 mt-2 font-medium leading-snug">
                  Women among<br />those outcomes.*
                </p>
                <p className="text-[9px] text-rsa-gray-400 mt-8">
                  * Source and context to be supplied.
                </p>
              </div>
            </div>

            {/* iDICE */}
            <div className="flex gap-8">
              <div className="w-[1px] h-12 bg-rsa-red/40 hidden sm:block mt-3"></div>
              <div className="mt-1.5">
                <div className="text-[16px] font-extrabold text-rsa-black leading-tight tracking-tight uppercase">
                  iDICE<br />SOUTH EAST
                </div>
                <p className="text-[13px] text-rsa-gray-600 mt-3 font-medium">
                  Live implementation.
                </p>
              </div>
            </div>

            {/* KEBULANIA */}
            <div className="flex gap-8">
              <div className="mt-1.5 sm:pl-4">
                <div className="text-[16px] font-extrabold text-rsa-black leading-tight tracking-tight uppercase">
                  KEBULANIA
                </div>
                <p className="text-[13px] text-rsa-gray-600 mt-3 font-medium">
                  First RSA Proof Zone.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
