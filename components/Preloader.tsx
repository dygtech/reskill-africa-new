"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size for responsive animation values
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint in Tailwind
    };

    // Set initial value
    checkMobile();

    // Add listener
    window.addEventListener("resize", checkMobile);
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // adjust timing as needed

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-60 flex items-center justify-center bg-white overflow-hidden"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="relative flex items-center justify-center">
            {/* The brand text container */}
            <div className="flex items-center justify-center font-sans text-black relative z-10 h-24">
              <motion.div
                className="font-bold text-4xl sm:text-7xl overflow-hidden flex tracking-tighter -mr-6 sm:-mr-11"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.8, duration: 0.5 }}
              >
                Re-Ski
              </motion.div>

              {/* The rotating rectangles / line */}
              <motion.div
                className="relative w-20 h-0.5 sm:w-32 sm:h-1 z-20"
                initial={{ rotate: 0 }}
                animate={{ rotate: 90 }}
                transition={{ delay: 1.5, duration: 0.6, ease: "easeInOut" }}
              >
                {/* Top/Left Rectangle */}
                <motion.div
                  className="absolute top-0 left-0 h-1.5 sm:h-2.5 bg-black mt-2"
                  initial={{ width: 0, x: 0 }}
                  animate={{ width: "65%", x: isMobile ? 25 : 40 }}
                  transition={{
                    width: { delay: 0.2, duration: 0.6, ease: "easeOut" },
                    x: { delay: 2.2, duration: 0.5, ease: "easeInOut" }
                  }}
                />
                {/* Bottom/Right Rectangle */}
                <motion.div
                  className="absolute bottom-0 right-0 h-1.5 sm:h-2.5 bg-black"
                  initial={{ width: 0, x: 0 }}
                  animate={{ width: "65%", x: isMobile ? -25 : -36 }}
                  transition={{
                    width: { delay: 0.2, duration: 0.6, ease: "easeOut" },
                    x: { delay: 2.2, duration: 0.5, ease: "easeInOut" }
                  }}
                />
              </motion.div>

              <motion.div
                className="font-light text-4xl sm:text-7xl overflow-hidden flex uppercase tracking-tighter -ml-7 sm:-ml-14"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.8, duration: 0.5 }}
              >
                AFRICA
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
