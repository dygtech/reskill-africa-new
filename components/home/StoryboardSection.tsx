'use client';

import { motion } from 'framer-motion';
import { type ReactNode, useEffect, useRef } from 'react';

export default function StoryboardSection({ children }: { children: ReactNode }) {
  const transitionFrameRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const updateSnapMode = () => {
      const transitionFrame = transitionFrameRef.current;
      if (!transitionFrame) return;

      // Keep the story frames precise, then release while the final transition
      // is next in line. This prevents the browser from snapping back to the
      // preceding SKILLDUSTRY frame before the transition can begin.
      root.classList.toggle(
        'storyboard-transition',
        transitionFrame.getBoundingClientRect().top <= window.innerHeight * 1.05,
      );
    };

    root.classList.add('storyboard-snap');
    updateSnapMode();
    window.addEventListener('scroll', updateSnapMode, { passive: true });

    return () => {
      root.classList.remove('storyboard-snap', 'storyboard-transition');
      window.removeEventListener('scroll', updateSnapMode);
    };
  }, []);

  return (
    <div className="w-full bg-[#FBFBF9] font-serif z-10 relative">

      {/* FRAME 01 & 02: Initial Ink Drop */}
      <section className="snap-start snap-always relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <a
          href="#home-main"
          className="absolute right-6 top-6 z-50 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]/70 transition-opacity hover:text-[#1A1A1A] md:right-12 md:top-10"
        >
          Skip intro ↓
        </a>
        {/* Scroller Indicator */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 2.5, ease: "easeOut" } }
          }}
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

        {/* Ink Drop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { duration: 1.5, delay: 1, ease: [0.25, 1, 0.5, 1] } }
          }}
          className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] relative flex items-center justify-center pointer-events-none"
        >
          <motion.img
            src="/images/storyboard/ink-drop.png"
            alt="Ink Splatter"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </motion.div>
      </section>

      {/* FRAME 03 (User's Frame 2): The First Truth */}
      <section className="snap-start snap-always relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1200px] px-8 gap-8 md:gap-16"
        >
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex justify-end overflow-hidden">
            <motion.img
              variants={{
                hidden: { scale: 0, opacity: 0 },
                visible: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } }
              }}
              style={{ transformOrigin: 'center' }}
              src="/images/storyboard/frame-3.png"
              alt="Talent without opportunity"
              className="w-full max-w-[600px] h-auto object-contain pointer-events-auto"
            />
          </div>
          {/* Right: Text */}
          <div className="w-full md:w-1/2 flex justify-start pointer-events-auto overflow-hidden">
            <motion.div
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.6, ease: "easeOut" } }
              }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.05] text-[#1A1A1A] font-serif tracking-tight">
                TALENT <br />
                WITHOUT <br />
                OPPORTUNITY <br />
                STAYS <br />
                POTENTIAL.
              </h2>
              <motion.div
                variants={{
                  hidden: { width: 0 },
                  visible: { width: "5rem", transition: { duration: 0.8, delay: 1.2, ease: "easeOut" } }
                }}
                className="h-1.5 bg-[#D32F2F] mt-6"
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Local Scroller Indicator */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1, delay: 2.0, ease: "easeOut" } }
          }}
          className="absolute bottom-12 right-12 z-50 pointer-events-none"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center text-[#1A1A1A]">
            <div className="w-[1px] h-12 bg-[#1A1A1A] mb-2"></div>
            <div className="w-2 h-2 rounded-full bg-[#1A1A1A] mb-2"></div>
            <span className="text-[10px] tracking-[0.3em] uppercase mb-2 font-sans font-semibold" style={{ writingMode: 'vertical-rl' }}>SCROLL</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
          </motion.div>
        </motion.div>
      </section>

      {/* FRAME 04: The Second Truth */}
      <section className="snap-start snap-always relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1200px] px-8 gap-8 md:gap-16"
        >
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex justify-end overflow-hidden">
            <motion.img
              variants={{
                hidden: { scale: 0, opacity: 0 },
                visible: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } }
              }}
              style={{ transformOrigin: 'center' }}
              src="/images/storyboard/frame-4.png"
              alt="Industry without talent"
              className="w-full max-w-[600px] h-auto object-contain pointer-events-auto"
            />
          </div>
          {/* Right: Text */}
          <div className="w-full md:w-1/2 flex justify-start pointer-events-auto overflow-hidden">
            <motion.div
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.6, ease: "easeOut" } }
              }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.05] text-[#1A1A1A] font-serif tracking-tight">
                INDUSTRY <br />
                WITHOUT <br />
                TALENT <br />
                STAYS <br />
                LIMITED.
              </h2>
              <motion.div
                variants={{
                  hidden: { width: 0 },
                  visible: { width: "5rem", transition: { duration: 0.8, delay: 1.2, ease: "easeOut" } }
                }}
                className="h-1.5 bg-[#D32F2F] mt-6"
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Local Scroller Indicator */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1, delay: 2.0, ease: "easeOut" } }
          }}
          className="absolute bottom-12 right-12 z-50 pointer-events-none"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center text-[#1A1A1A]">
            <div className="w-[1px] h-12 bg-[#1A1A1A] mb-2"></div>
            <div className="w-2 h-2 rounded-full bg-[#1A1A1A] mb-2"></div>
            <span className="text-[10px] tracking-[0.3em] uppercase mb-2 font-sans font-semibold" style={{ writingMode: 'vertical-rl' }}>SCROLL</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
          </motion.div>
        </motion.div>
      </section>

      {/* FRAME 05: The Solution */}
      <section className="snap-start snap-always relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-8 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center w-full"
        >
          <motion.div
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="flex flex-col items-center text-center pointer-events-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[5.5rem] leading-[1.05] text-[#1A1A1A] font-serif tracking-tight">
              WE CLOSE <br />
              THE GAP.
            </h2>
            <motion.div
              variants={{
                hidden: { width: 0 },
                visible: { width: "4rem", transition: { duration: 0.8, delay: 0.6, ease: "easeOut" } }
              }}
              className="h-1.5 bg-[#D32F2F] mt-8"
            ></motion.div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { scale: 1, opacity: 1, transition: { duration: 1.2, delay: 0.8, ease: "easeOut" } }
            }}
            className="w-full max-w-[1400px] flex justify-center pointer-events-auto mt-12"
          >
            <img
              src="/images/storyboard/frame-5.png"
              alt="We close the gap"
              className="w-full max-h-[50vh] object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Local Scroller Indicator */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1, delay: 2.0, ease: "easeOut" } }
          }}
          className="absolute bottom-12 right-12 z-50 pointer-events-none"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center text-[#1A1A1A]">
            <div className="w-[1px] h-12 bg-[#1A1A1A] mb-2"></div>
            <div className="w-2 h-2 rounded-full bg-[#1A1A1A] mb-2"></div>
            <span className="text-[10px] tracking-[0.3em] uppercase mb-2 font-sans font-semibold" style={{ writingMode: 'vertical-rl' }}>SCROLL</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
          </motion.div>
        </motion.div>
      </section>

      {/* FRAME 06: This is Skilldustry */}
      <section className="snap-start snap-always relative w-full min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden bg-[#FBFBF9]">


        {/* Text Container: Perfectly dead-center using the flex parent */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: { y: 40, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
          }}
          className="flex flex-col items-center text-center pointer-events-auto relative z-20 mb-60"
        >
          <p className="uppercase tracking-[0.4em] text-sm md:text-base text-[#1A1A1A] font-sans mb-8">
            T H I S &nbsp;&nbsp;&nbsp; I S
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-[7rem] leading-[1] text-[#1A1A1A] font-serif tracking-tight">
            SKILLDUSTRY.
          </h2>
          <motion.div
            variants={{
              hidden: { width: 0 },
              visible: { width: "6rem", transition: { duration: 0.8, delay: 0.8, ease: "easeOut" } }
            }}
            className="h-1.5 bg-[#D32F2F] mt-6"
          ></motion.div>
        </motion.div>

        {/* Smoke anchored to the bottom of the Section viewport */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 2, delay: 0.5, ease: "easeOut" } }
          }}
          className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none z-10"
        >
          <img
            src="/images/storyboard/smoke-1.png"
            alt="Smoke effect"
            className="w-full h-auto max-h-[40vh] object-cover object-bottom"
          />
        </motion.div>

        {/* Local Scroller Indicator */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1, delay: 2.5, ease: "easeOut" } }
          }}
          className="absolute bottom-12 right-12 z-50 pointer-events-none"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center text-[#1A1A1A]">
            <div className="w-[1px] h-12 bg-[#1A1A1A] mb-2"></div>
            <div className="w-2 h-2 rounded-full bg-[#1A1A1A] mb-2"></div>
            <span className="text-[10px] tracking-[0.3em] uppercase mb-2 font-sans font-semibold" style={{ writingMode: 'vertical-rl' }}>SCROLL</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
          </motion.div>
        </motion.div>
      </section>

      {/*
        The final frame stays in place as the homepage enters. Because the
        homepage is rendered below inside this same container, it scrolls up
        as a foreground layer and naturally covers this frame.
      */}
      <section ref={transitionFrameRef} className="sticky top-0 z-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#FBFBF9]">

        {/* Center Scroll Indicator */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1, delay: 0.5, ease: "easeOut" } }
          }}
          className="absolute top-[45%] left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
        >
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
        </motion.div>

        {/* Smoke at the true bottom of the Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 0.8, y: 0, transition: { duration: 2, delay: 0.5, ease: "easeOut" } }
          }}
          className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none mix-blend-multiply z-10"
        >
          <img
            src="/images/storyboard/smoke-2.png"
            alt="Smoke effect transition"
            className="w-full h-auto max-h-[60vh] object-cover object-bottom"
          />
        </motion.div>

        {/* Gradient Plunge Blend */}
        <div className="absolute bottom-0 left-0 w-full h-[38vh] bg-linear-to-b from-transparent via-[#0a0a0a]/75 to-[#0a0a0a] z-20 pointer-events-none" />
      </section>

      <div className="font-sans">
        {children}
      </div>

    </div>
  );
}
