import Image from "next/image";
import { GitFork } from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "Talent Discovery at Scale",
    desc: "A structured system for identifying individuals and teams with strong execution potential across regions. The platform draws participants from diverse backgrounds and surfaces capability through competitive engagement rather than credentials alone.",
    image: "/images/hero-img.webp"
  },
  {
    num: "02",
    title: "Talent Discovery at Scale",
    desc: "A structured system for identifying individuals and teams with strong execution potential across regions. The platform draws participants from diverse backgrounds and surfaces capability through competitive engagement rather than credentials alone.",
    image: "/images/hero-img.webp"
  },
  {
    num: "03",
    title: "Talent Discovery at Scale",
    desc: "A structured system for identifying individuals and teams with strong execution potential across regions. The platform draws participants from diverse backgrounds and surfaces capability through competitive engagement rather than credentials alone.",
    image: "/images/hero-img.webp"
  },
  {
    num: "04",
    title: "Talent Discovery at Scale",
    desc: "A structured system for identifying individuals and teams with strong execution potential across regions. The platform draws participants from diverse backgrounds and surfaces capability through competitive engagement rather than credentials alone.",
    image: "/images/hero-img.webp"
  },
  {
    num: "05",
    title: "Talent Discovery at Scale",
    desc: "A structured system for identifying individuals and teams with strong execution potential across regions. The platform draws participants from diverse backgrounds and surfaces capability through competitive engagement rather than credentials alone.",
    image: "/images/hero-img.webp"
  }
];

export const StrategicPillars = () => {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

        {/* Left Side Sticky */}
        <div className="w-full lg:w-[45%] lg:sticky top-32 h-fit">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-light-2 mb-8">
            <GitFork size={16} className="text-primary transform rotate-180" />
            <span className="text-[13px] font-medium text-brand-dark">Core Foundations</span>
          </div>
          <h2 className="text-[42px] md:text-[54px] font-bold text-brand-dark mb-6 leading-[1.1] tracking-[-0.03em]">
            Strategic Pillars
          </h2>
          <p className="text-brand-gray text-[17px] leading-[1.6] max-w-100 font-light">
            Re-Skill Africa is built on a set of core pillars that guide how talent is identified, evaluated, and integrated into economic activity.
          </p>
        </div>

        {/* Right Side Scrolling */}
        <div className="w-full lg:w-[55%] flex flex-col gap-24">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex flex-col gap-6">
              <div className="relative w-full aspect-[4/3] md:aspect-[1.2/1] rounded-[32px] overflow-hidden bg-gray-100">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-2">
                <h3 className="text-[20px] text-brand-dark mb-4 flex items-center gap-3">
                  <span className="font-bold">{pillar.num}</span>
                  <span className="font-medium tracking-tight">{pillar.title}</span>
                </h3>
                <p className="text-brand-gray text-[15px] leading-[1.7] font-light">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
