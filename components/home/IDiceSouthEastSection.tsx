import Image from "next/image";
import { SectionLabel, RedButton, ArrowLink } from "@/components/ui/SharedUI";

export function IDiceSouthEastSection() {
  return (
    <section className="w-full bg-[#fdfdfd] py-16 md:py-24 overflow-hidden border-y border-rsa-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <SectionLabel number="06">LIVE PROGRAMME</SectionLabel>
            <h2 className="text-rsa-black text-[36px] sm:text-[44px] md:text-[52px] font-bold leading-[1.05] tracking-[-0.03em] mb-1">
              iDICE
            </h2>
            <h3 className="text-rsa-red text-[36px] sm:text-[44px] md:text-[52px] font-bold leading-[1.1] tracking-[-0.02em] mb-6">
              SOUTH EAST
            </h3>
            <p className="text-rsa-black text-[18px] md:text-[22px] font-bold leading-snug mb-4 max-w-md">
              Creative or technology talent<br />in South-East Nigeria?
            </p>
            <p className="text-rsa-gray-600 text-[15px] leading-relaxed max-w-md mb-8">
              Access current opportunities across the creative and digital economy.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <RedButton href="/register" variant="filled" className="px-8 py-3 rounded-full">
                REGISTER NOW ↗
              </RedButton>
              <ArrowLink href="/partner-with-us" color="black" className="!text-[12px]">
                EMPLOYERS & PARTNERS ↗
              </ArrowLink>
            </div>
          </div>

          {/* Right: Map visual */}
          <div className="relative w-full aspect-[4/3]">
             <Image
              src="/images/map-nigeria.png" // User will need to provide this, but I'll use a placeholder structure
              alt="Map of Nigeria"
              fill
              className="object-contain"
            />
            {/* We can use a div to simulate the map if the image is missing, but relying on image is safer since user said "i will provide them" */}
          </div>
        </div>
      </div>
    </section>
  );
}
