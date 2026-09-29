import Image from "next/image";
import { SectionLabel } from "@/components/ui/SharedUI";

const attributes = [
  "Agency",
  "Discipline",
  "Integrity",
  "Resilience",
  "Problem-solving",
  "Excellence",
];

export function RSAStandardSection() {
  return (
    <section className="relative w-full bg-[#fdfdfd] py-12 md:py-16 overflow-hidden border-b border-rsa-gray-200 min-h-100 flex items-center">
      {/* Background Image on the right */}
      <div className="absolute inset-y-0 right-0 w-[45%] lg:w-[40%] z-0 hidden md:block">
        {/* Stronger gradient fade to ensure text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-[#fdfdfd] via-[#fdfdfd]/80 to-transparent z-10" />
        <div className="absolute inset-y-0 left-0 w-2/3 bg-linear-to-r from-[#fdfdfd] via-[#fdfdfd]/90 to-transparent z-10" />

        <Image
          src="/images/skill.png"
          alt="RSA Standard"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-contain object-right"
          priority
        />
      </div>

      <div className="relative z-10 max-w-360 mx-auto px-6 md:px-10 lg:px-14 w-full">
        {/* Top Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10">
          {/* Left Title */}
          <div className="lg:col-span-5">
            <SectionLabel number="04">THE RSA STANDARD™</SectionLabel>
            <h2 className="text-rsa-black text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.02em] mb-4 mt-2">
              Skills alone are<br />
              <span className="text-rsa-red">not enough.</span>
            </h2>
          </div>

          {/* Right Description (but still to the left of the image) */}
          <div className="lg:col-span-5 pt-2 lg:pt-4">
            <p className="text-rsa-gray-600 text-[16px] leading-relaxed mb-4 font-medium">
              Africa&apos;s productivity challenge is not only a skills gap. It is also a mindset,
              discipline and standards gap.
            </p>
            <p className="text-rsa-gray-500 text-[15px] leading-relaxed">
              Every RSA Fellow is developed to think, work and <strong>perform</strong> differently — with
              agency, discipline, integrity, resilience, problem-solving and an uncompromising
              standard of excellence.
            </p>
          </div>
        </div>

        {/* Attributes row */}
        <div className="w-full lg:w-[75%] grid grid-cols-3 sm:grid-cols-6 border border-rsa-gray-200 mb-10">
          {attributes.map((attr, i) => (
            <div
              key={attr}
              className={`py-3 lg:py-4 flex items-center justify-center text-[13px] lg:text-[14px] font-medium text-rsa-black text-center ${i < attributes.length - 1 ? 'border-r border-rsa-gray-200' : ''}`}
            >
              {attr}
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="w-full lg:w-[75%] text-center">
          <p className="text-rsa-black text-[20px] md:text-[24px] font-bold leading-snug">
            We don&apos;t only build what people can do.<br />
            We build how they show up.
          </p>
        </div>
      </div>
    </section>
  );
}
