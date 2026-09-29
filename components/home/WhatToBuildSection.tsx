import Image from "next/image";
import { SectionLabel, ArrowLink } from "@/components/ui/SharedUI";

const cards = [
  {
    image: "/images/blog-img-1.png",
    title: "BUILD A WORKFORCE",
    description:
      "Demand-led workforce systems for companies and industries.",
    href: "/skildustry",
  },
  {
    image: "/images/blog-img-2.png",
    title: "ACCESS AFRICAN TALENT",
    description:
      "Verified talent and a global-service standard for employers.",
    href: "/skill-passport",
  },
  {
    image: "/images/blog-img-3.png",
    title: "BUILD PRODUCTIVE ECOSYSTEMS",
    description:
      "Talent, enterprise and industry systems for governments and institutional partners.",
    href: "/partner-with-us",
  },
];

export function WhatToBuildSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
        <SectionLabel number="05">WE START WITH DEMAND</SectionLabel>
        <h2 className="text-rsa-black text-[36px] sm:text-[44px] md:text-[52px] font-bold leading-[1.05] tracking-[-0.03em] mb-14">
          What do you need to <span className="text-rsa-red">build?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group bg-white rounded-md overflow-hidden border border-rsa-gray-200"
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-rsa-black text-[16px] font-bold tracking-[0.02em] uppercase mb-3">
                  {card.title}
                </h3>
                <p className="text-rsa-gray-600 text-[14px] leading-relaxed mb-6 font-medium">
                  {card.description}
                </p>
                <ArrowLink href={card.href} color="red">
                  EXPLORE ↗
                </ArrowLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
