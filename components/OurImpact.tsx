"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TrendingUp, Users, Rocket, Briefcase, DollarSign } from "lucide-react";

const analytics = [
  {
    icon: Users,
    value: "10,000+",
    label: "High-capability participants engaged"
  },
  {
    icon: Rocket,
    value: "200+",
    label: "Ventures launched and supported"
  },
  {
    icon: Briefcase,
    value: "50,000+",
    label: "Jobs and income opportunities"
  },
  {
    icon: DollarSign,
    value: "$100M+",
    label: "In economic value generated"
  }
];

export function OurImpact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white pt-24 md:pt-32 pb-48 md:pb-100 w-full">
      <div
        ref={containerRef}
        className="max-w-300 mx-auto px-8 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
      >
        {/* Left Content */}
        <div className="flex-1 flex flex-col">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-light-2 mb-8 w-fit transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <TrendingUp size={16} className="text-primary" />
            <span className="text-[13px] font-medium text-brand-dark">Our Impact</span>
          </div>

          <h2 className={`text-[36px] md:text-[48px] font-bold text-brand-dark leading-[1.1] tracking-[-0.03em] mb-16 transition-all duration-700 delay-100 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            By 2030, Re-Skill Africa <br /> aims to deliver these transformative outcomes across the continent
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {analytics.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-4 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + idx * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-[#fdf3f3] border border-[#f5e6e6] flex items-center justify-center text-primary">
                  <item.icon size={20} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[32px] md:text-[38px] font-bold text-brand-dark leading-none tracking-tight">
                    {item.value}
                  </h3>
                  <p className="text-brand-gray text-[15px] font-light mt-1">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div
          className={`flex-1 w-full lg:w-[45%] lg:h-[20%] relative aspect-4/5 rounded-4xl overflow-hidden bg-gray-100 transition-all duration-1000 delay-300 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <Image
            src="/images/our-impact.png"
            alt="Our Impact"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
