"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Factory, TrendingUp, Users } from "lucide-react";

export function AboutGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Triggers halfway
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const wordCount = 17; // Total words in the sentence
    const interval = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % wordCount);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Animation for items that slide in from the right
  const staggerClass = (delay: string) =>
    `transition-all duration-[1200ms] ease-out transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"
    } ${delay}`;

  // Simple fade-in for items that don't stagger
  const fadeClass = `transition-opacity duration-[1200ms] ease-out ${isVisible ? "opacity-100" : "opacity-0"
    }`;

  return (
    <section className="w-full bg-white py-40 px-6 md:px-12 text-black overflow-hidden">
      <div className="max-w-350 mx-auto">
        <div className="pb-14">
          <h1 className="text-[50px] md:text-[55px] lg:text-[60px] font-sans font-bold leading-[0.95] tracking-tight mb-6 drop-shadow-md">
            {"Africa’s greatest resource is its people, but it lacks the systems that convert people into productive capability."
              .split(" ")
              .map((word, index) => (
                <span
                  key={index}
                  className={`transition-colors duration-500 ${
                    index === activeWordIndex ? "text-primary" : "text-inherit"
                  }`}
                >
                  {word}{" "}
                </span>
              ))}
          </h1>
          <p className="text-2xl font-medium">Re-Skill Africa exists to close the gap between talent and demand - and, increasingly, to
            build the productive demand itself. We industrialise skill inside real enterprises, and grow
            new enterprises from the talent we develop.</p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-162.5 lg:h-187.5"
        >
          {/* Column 1 */}
          <div className="flex flex-col gap-4 w-full h-full">
            <div className={`relative w-full h-75 md:h-[45%] rounded-3xl overflow-hidden ${staggerClass("delay-100")}`}>
              <Image
                src="/images/about-section-1.webp"
                alt="Placeholder"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className={`relative w-full h-75 md:h-auto md:flex-1 rounded-3xl overflow-hidden ${staggerClass("delay-500")}`}>
              <Image
                src="/images/about-section-4.webp"
                alt="Placeholder"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute top-5 left-5 flex items-center gap-2 text-white font-sans font-medium text-[15px] drop-shadow-md">
                <Users size={20} strokeWidth={2} />
                <span>Pan-African Initiative</span>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 w-full h-full">
            <div className={`relative w-full h-100 md:h-full rounded-3xl overflow-hidden ${staggerClass("delay-300")}`}>
              <Image
                src="/images/about-section-2.webp"
                alt="Placeholder"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-5 left-5 flex items-center gap-2 text-white font-sans font-medium text-[15px] drop-shadow-md">
                <TrendingUp size={20} strokeWidth={2} />
                <span>5 Million Target Workforce by 2030</span>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 w-full h-full">
            <div className={`relative w-full h-75 md:h-[55%] rounded-3xl overflow-hidden ${fadeClass}`}>
              <Image
                src="/images/about-section-3.webp"
                alt="Placeholder"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-5 left-5 flex items-center gap-2 text-white font-sans font-medium text-[15px] drop-shadow-md">
                <Factory size={20} strokeWidth={2} />
                <span>6 Industrial Sectors</span>
              </div>
            </div>
            <div className={`relative w-full h-75 md:h-auto md:flex-1 rounded-3xl overflow-hidden ${fadeClass}`}>
              <Image
                src="/images/about-section-5.webp"
                alt="Placeholder"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
