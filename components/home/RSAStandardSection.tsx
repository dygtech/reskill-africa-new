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
    <section className="w-full bg-[#fdfdfd] py-20 md:py-28 overflow-hidden border-b border-rsa-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left: Content */}
          <div>
            <SectionLabel number="04">THE RSA STANDARD</SectionLabel>
            <h2 className="text-rsa-black text-[40px] sm:text-[48px] md:text-[56px] font-bold leading-[1.05] tracking-[-0.02em] mb-6">
              Skills alone are<br />
              <span className="text-rsa-red">not enough.</span>
            </h2>
          </div>

          <div className="pt-8">
            <p className="text-rsa-gray-600 text-[16px] leading-relaxed max-w-md mb-6 font-medium">
              Africa&apos;s productivity challenge is not only a skills gap. It is also a mindset,
              discipline and standards gap.
            </p>
            <p className="text-rsa-gray-500 text-[15px] leading-relaxed max-w-md mb-10">
              Every RSA Fellow is developed to think, work and <strong>perform</strong> differently — with
              agency, discipline, integrity, resilience, problem-solving and an uncompromising
              standard of excellence.
            </p>
          </div>
        </div>

        {/* Attributes row + Image right */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
          <div className="flex-1 w-full grid grid-cols-3 sm:grid-cols-6 gap-4 border-y border-rsa-gray-200 py-6">
            {attributes.map((attr) => (
              <span
                key={attr}
                className="text-[14px] font-bold tracking-[0.02em] text-rsa-gray-500 text-center uppercase"
              >
                {attr}
              </span>
            ))}
          </div>

          <div className="w-full lg:w-[350px] aspect-[4/3] relative rounded-md overflow-hidden bg-rsa-gray-100">
            <Image
              src="/images/about-section-3.webp"
              alt="RSA Standard"
              fill
              sizes="(max-width: 1024px) 100vw, 350px"
              className="object-cover"
            />
            {/* Fade edge */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#fdfdfd] to-transparent"></div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="text-center mt-16">
          <p className="text-rsa-black text-[22px] md:text-[28px] font-bold leading-snug">
            We don&apos;t only build what people can do.
            <br />
            We build how they show up.
          </p>
        </div>
      </div>
    </section>
  );
}
