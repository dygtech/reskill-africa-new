import Image from "next/image";
import { SectionLabel, ArrowLink, RedButton } from "@/components/ui/SharedUI";

const pipeline = [
  { label: "LEARN", color: "bg-rsa-red" },
  { label: "PRODUCE", color: "bg-rsa-red" },
  { label: "EARN", color: "bg-rsa-red" },
  { label: "BUILD", color: "bg-rsa-red" },
];

const statements = [
  "Industry is the classroom.",
  "Production is the test.",
  "Income is an outcome.",
  "Enterprise is a pathway.",
];

export function SkildustrySection() {
  return (
    <section className="w-full bg-[#111111] py-20 md:py-28 overflow-hidden text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
        {/* Top area: text + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Left: text */}
          <div>
            <SectionLabel number="03" className="!text-white/50">SKILDUSTRY™</SectionLabel>
            <h2 className="text-white text-[40px] sm:text-[48px] md:text-[56px] font-bold leading-[1.05] tracking-[-0.02em] mb-6">
              Where Industry<br />Becomes the<br />
              <span className="text-rsa-red">Classroom.</span>
            </h2>
            <p className="text-white/90 text-[16px] leading-relaxed max-w-md mb-6">
              Skildustry™ is Re-Skill Africa&apos;s proprietary model for building
              productive people through real industry.
            </p>
            <p className="text-white/60 text-[14px] leading-relaxed max-w-md mb-10">
              People don&apos;t simply train for work. They learn by producing, prove
              capability through real work, earn from productive activity, and gain a pathway to build enterprises of their own.
            </p>
            <RedButton href="/skildustry" variant="outline" className="!text-white !border-white/30 hover:!border-white hover:!bg-white/10">
              EXPLORE SKILDUSTRY ↗
            </RedButton>
          </div>

          {/* Right: image */}
          <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden bg-rsa-gray-800">
            <Image
              src="/images/about-section-2.webp"
              alt="Industry classroom"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Statements row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mb-8 border-y border-white/10">
          {statements.map((s, i) => (
            <div
              key={i}
              className={`px-5 py-6 text-[15px] font-bold text-white text-center ${i < 3 ? 'border-b sm:border-b-0 sm:border-r border-white/10' : ''}`}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Pipeline flow */}
        <div className="flex items-center justify-between px-10 gap-2 md:gap-4 flex-wrap">
          {pipeline.map((step, i) => (
            <div key={step.label} className="flex items-center gap-4 w-full md:w-auto flex-1 justify-between md:justify-center">
              <span className="text-white text-[14px] md:text-[16px] font-bold tracking-[0.1em] uppercase">
                {step.label}
              </span>
              {i < pipeline.length - 1 && (
                <div className="flex-1 md:flex-none md:w-20 mx-4 h-[1px] bg-rsa-red/50 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-rsa-red border-b-[4px] border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
