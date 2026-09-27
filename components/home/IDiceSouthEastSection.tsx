import Image from "next/image";
import { SectionLabel, RedButton, ArrowLink } from "@/components/ui/SharedUI";
import { NigeriaMap } from "@/components/ui/NigeriaMap";

export function IDiceSouthEastSection() {
  return (
    <section className="relative w-full bg-[#fdfdfd] py-16 md:py-24 overflow-hidden border-y border-rsa-gray-200">
      
      {/* Background Image on far right */}
      <div className="absolute inset-y-0 right-0 w-[45%] lg:w-[40%] z-0 hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdfdfd] via-[#fdfdfd]/80 to-transparent z-10" />
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#fdfdfd] via-[#fdfdfd]/90 to-transparent z-10" />
        <Image
          src="/images/classroom.png" // Using existing image for now until replaced
          alt="Live programme"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover object-left"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-5">
            <SectionLabel number="06">LIVE PROGRAMME</SectionLabel>
            <h2 className="text-rsa-black text-[36px] sm:text-[44px] md:text-[52px] font-bold leading-none tracking-[-0.03em]">
              iDICE
            </h2>
            <h3 className="text-rsa-red text-[36px] sm:text-[44px] md:text-[52px] font-bold leading-none tracking-[-0.02em] mb-4 whitespace-nowrap">
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

          {/* Middle: Map visual */}
          <div className="lg:col-span-7 flex items-center justify-center lg:justify-start">
             <NigeriaMap className="w-[350px] md:w-[450px] h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
