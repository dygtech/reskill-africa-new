'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { HeroSection } from "@/components/home/HeroSection";

export default function StoryboardSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // We'll still keep the scroll progress for future frames
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // State to trigger our initial mount animations safely on the client
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // SVG path for a more organic ink splatter shape
  const inkSplatterSvg = "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"black\" d=\"M44.7,-76.4C58.3,-69.2,70.1,-58.1,79.5,-45.3C88.8,-32.4,95.7,-16.2,95.3,-0.2C94.8,15.8,87,31.6,76.5,44.6C66,57.7,52.8,68.1,38.2,74.5C23.5,81,7.4,83.6,-8.1,81.4C-23.7,79.2,-38.7,72.2,-51.7,62.1C-64.7,52,-75.7,38.8,-82.1,23.5C-88.5,8.2,-90.4,-9.1,-85.4,-24.1C-80.4,-39.1,-68.5,-51.9,-54.6,-60.1C-40.7,-68.2,-25,-71.8,-9.6,-73.4C5.7,-74.9,21.5,-74.5,31.2,-83.6\" transform=\"translate(100 100)\" /></svg>')";

  // Fade in Frame 03
  const drop1Opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.25, 0.3], [0, 1, 1, 0]);

  // Fade in Frame 04
  const drop2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.45, 0.5], [0, 1, 1, 0]);

  // Fade in Frame 05
  const drop3Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.65, 0.7], [0, 1, 1, 0]);

  // Fade in Frame 06
  const drop4Opacity = useTransform(scrollYProgress, [0.7, 0.8, 0.85, 0.9], [0, 1, 1, 0]);

  // Fade in Frame 07 (Transition)
  const drop5Opacity = useTransform(scrollYProgress, [0.9, 0.95, 1, 1], [0, 1, 1, 1]);

  // Fade out the subtle bottom right scroll indicator at the end
  const scrollerOpacity = useTransform(scrollYProgress, [0.85, 0.9], [1, 0]);

  // Fade out the initial ink drop (Frame 02) completely before Frame 03 appears
  const drop0Opacity = useTransform(scrollYProgress, [0.0, 0.1], [1, 0]);
  const drop0Display = useTransform(scrollYProgress, (v) => v > 0.1 ? "none" : "flex");

  // Keep storyboard perfectly sticky and dissolve it at the very end
  const containerOpacity = useTransform(scrollYProgress, [0.95, 1], [1, 0]);
  const pointerEvents = useTransform(scrollYProgress, (v) => v >= 1 ? "none" : "auto");
  
  // Hero section fades in smoothly behind it
  const heroOpacity = useTransform(scrollYProgress, [0.95, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[800vh]">
      <div className="sticky top-0 w-full min-h-screen">
        
        {/* HERO SECTION (Background layer, statically revealed) */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-0 w-full">
          <HeroSection />
        </motion.div>

        {/* STORYBOARD OVERLAY (Foreground layer, fades out) */}
        <motion.div
          style={{ opacity: containerOpacity, pointerEvents }}
          className="absolute top-0 left-0 w-full h-screen overflow-hidden font-serif z-10 bg-[#FBFBF9]"
        >
        {/* Frame 01: The Subtle Scroll Indicator (Bottom Right) */}
        {/* Fades in AFTER the ink drop lands (delay: 2.5s) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
          style={{ opacity: scrollerOpacity }}
          className="absolute bottom-12 right-12 z-50 pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <div className="w-[1px] h-12 bg-[#1A1A1A] mb-2"></div>
            <div className="w-2 h-2 rounded-full bg-[#1A1A1A] mb-2"></div>
            <span
              className="text-[10px] tracking-[0.3em] uppercase text-[#1A1A1A] mb-2 font-sans font-semibold"
              style={{ writingMode: 'vertical-rl' }}
            >
              SCROLL
            </span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1A1A1A]">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Frame 02: First Drop Lands */}
        {/* Fades and scales in 1s AFTER the white canvas loads, then gets removed on scroll */}
        <motion.div
          style={{ opacity: drop0Opacity, display: drop0Display }}
          className="absolute inset-0 items-center justify-center pointer-events-none"
        >
          {/* Main Ink Drop */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isMounted ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{
              duration: 1.5,
              delay: 1,
              ease: [0.25, 1, 0.5, 1] // Custom spring-like easing for an organic "splat"
            }}
            className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] relative flex items-center justify-center"
          >
            {/* The actual organic black shape (Replaced SVG with an image tag for the exported asset) */}
            <motion.img
              src="/images/storyboard/ink-drop.png" // Replace this with the actual exported asset path
              alt="Ink Splatter"
              className="absolute inset-0 w-full h-full object-contain"
            // Adding a tiny bit of blur and contrast to the placeholder can sometimes help blend it
            />
          </motion.div>
        </motion.div>

        {/* Frame 03: The First Truth */}
        <motion.div
          style={{ opacity: drop1Opacity }}
          className="absolute inset-0 flex items-center justify-center w-full h-full pointer-events-none"
        >
          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1200px] px-8 gap-8 md:gap-16">

            {/* Left: Image */}
            <div className="w-full md:w-1/2 flex justify-end">
              <img
                src="/images/storyboard/frame-3.png"
                alt="Talent without opportunity"
                className="w-full max-w-[600px] h-auto object-contain pointer-events-auto"
              />
            </div>

            {/* Right: Text */}
            <div className="w-full md:w-1/2 flex justify-start pointer-events-auto">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.05] text-[#1A1A1A] font-serif tracking-tight">
                  TALENT <br />
                  WITHOUT <br />
                  OPPORTUNITY <br />
                  STAYS <br />
                  POTENTIAL.
                </h2>
                <div className="w-20 h-1.5 bg-[#D32F2F] mt-6"></div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Frame 04: The Second Truth */}
        <motion.div
          style={{ opacity: drop2Opacity }}
          className="absolute inset-0 flex items-center justify-center w-full h-full pointer-events-none"
        >
          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1200px] px-8 gap-8 md:gap-16">

            {/* Left: Image */}
            <div className="w-full md:w-1/2 flex justify-end">
              <img
                src="/images/storyboard/frame-4.png"
                alt="Industry without talent"
                className="w-full max-w-[600px] h-auto object-contain pointer-events-auto"
              />
            </div>

            {/* Right: Text */}
            <div className="w-full md:w-1/2 flex justify-start pointer-events-auto">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.05] text-[#1A1A1A] font-serif tracking-tight">
                  INDUSTRY <br />
                  WITHOUT <br />
                  TALENT <br />
                  STAYS <br />
                  LIMITED.
                </h2>
                <div className="w-20 h-1.5 bg-[#D32F2F] mt-6"></div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Frame 05: The Solution */}
        <motion.div
          style={{ opacity: drop3Opacity }}
          className="absolute inset-0 flex flex-col items-center justify-center w-full h-full pointer-events-none px-8"
        >
          <div className="flex flex-col items-center text-center pointer-events-auto">
            <h2 className="text-4xl md:text-5xl lg:text-[5.5rem] leading-[1.05] text-[#1A1A1A] font-serif tracking-tight">
              WE CLOSE <br />
              THE GAP.
            </h2>
            <div className="w-16 h-1.5 bg-[#D32F2F] mt-8"></div>
          </div>
          <div className="w-full max-w-[1400px] flex justify-center pointer-events-auto">
            <img
              src="/images/storyboard/frame-5.png"
              alt="We close the gap"
              className="w-full max-h-[60vh] object-contain"
            />
          </div>
        </motion.div>

        {/* Frame 06: This is Skilldustry */}
        <motion.div 
          style={{ opacity: drop4Opacity }}
          className="absolute inset-0 flex flex-col items-center justify-center w-full h-full pointer-events-none"
        >
          <div className="flex flex-col items-center text-center pointer-events-auto z-10 -mt-20">
            <p className="uppercase tracking-[0.4em] text-sm md:text-base text-[#1A1A1A] font-sans mb-4">
              T h i s &nbsp;&nbsp;&nbsp; i s
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-[7rem] leading-[1] text-[#1A1A1A] font-serif tracking-tight">
              SKILLDUSTRY.
            </h2>
            <div className="w-24 h-2 bg-[#D32F2F] mt-8"></div>
          </div>
          
          {/* Smoke at the bottom */}
          <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none opacity-80 mix-blend-multiply">
            <img 
              src="/images/storyboard/smoke-1.png" 
              alt="Smoke effect" 
              className="w-full h-auto max-h-[50vh] object-cover object-bottom"
            />
          </div>
        </motion.div>

        {/* Frame 07: Transition */}
        <motion.div 
          style={{ opacity: drop5Opacity }}
          className="absolute inset-0 flex flex-col items-center justify-center w-full h-full pointer-events-none"
        >
          {/* Center Scroll Indicator */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
            <div className="w-2 h-2 rounded-full bg-[#1A1A1A] mb-0"></div>
            <motion.div 
              animate={{ height: [0, 64, 64], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-[1px] bg-[#1A1A1A] my-1"
            ></motion.div>
            <motion.svg 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1A1A1A]"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </motion.svg>
          </div>

          {/* Smoke at the bottom */}
          <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none opacity-80 mix-blend-multiply">
            <img 
              src="/images/storyboard/smoke-2.png" 
              alt="Smoke effect transition" 
              className="w-full h-auto max-h-[60vh] object-cover object-bottom"
            />
          </div>
        </motion.div>
        
        </motion.div>
      </div>
    </section>
  );
}
