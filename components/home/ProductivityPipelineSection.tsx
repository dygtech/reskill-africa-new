import React from "react";
import { SectionLabel } from "@/components/ui/SharedUI";
import { 
  Search, Activity, Monitor, Rocket, Target, CircleDollarSign, Blocks, TrendingUp,
  Trophy, Settings, FileText, BarChart 
} from "lucide-react";

const steps = [
  { label: "DISCOVER", icon: Search },
  { label: "DIAGNOSE", icon: Activity },
  { label: "DEVELOP", icon: Monitor },
  { label: "DEPLOY", icon: Rocket },
  { label: "TRACK", icon: Target },
  { label: "FINANCE", icon: CircleDollarSign },
  { label: "BUILD", icon: Blocks },
  { label: "SCALE", icon: TrendingUp },
];

const cards = [
  { title: "AFRICA\nINNOVATION TOURNAMENT", desc: "Discover talent, problems\nand ideas.", icon: Trophy },
  { title: "SKILDUSTRY™", desc: "Build capability through\nreal production.", icon: Settings },
  { title: "SKILL PASSPORT", desc: "Make competence visible\nand verifiable.", icon: FileText },
  { title: "VENTURE LABS", desc: "Turn capability and demand\ninto enterprise.", icon: BarChart }
];

export function ProductivityPipelineSection() {
  return (
    <section className="w-full bg-[#fdfdfd] py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 text-center">
        <div className="text-left w-full"><SectionLabel number="08">THE RSA SYSTEM</SectionLabel></div>
        <h2 className="text-rsa-black text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.03em] mb-16 mx-auto">
          One system. From potential to <span className="text-rsa-red">productivity.</span>
        </h2>

        {/* Pipeline steps */}
        <div className="relative mb-10 md:mb-2">
          <div className="grid grid-cols-4 gap-y-6 md:flex md:items-start md:justify-between relative z-10 max-w-[1050px] mx-auto w-full">
            {steps.map((step, i) => (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center relative z-10 w-full md:w-16 shrink-0">
                  {/* Circle with icon */}
                  <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] rounded-full border-[1.5px] border-rsa-red bg-white flex items-center justify-center mb-2 md:mb-3">
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-rsa-red" strokeWidth={1.5} />
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-extrabold tracking-wider md:tracking-[0.1em] uppercase text-rsa-black text-center leading-tight">
                    {step.label}
                  </span>
                </div>
                {/* Arrow between steps */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex flex-1 items-center justify-center mt-[25px] px-1 lg:px-2 min-w-[16px]">
                    <div className="w-full h-[1px] bg-rsa-red/50 relative">
                      <div className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3.5px] border-t-transparent border-l-[5px] border-l-rsa-red/80 border-b-[3.5px] border-b-transparent"></div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Tree Bracket SVG */}
        <div className="hidden md:block w-full max-w-[1050px] mx-auto h-[40px] relative mb-2 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 40" preserveAspectRatio="none">
            {/* Vertical drop exactly from the center (between DEPLOY and TRACK) */}
            <line x1="500" y1="0" x2="500" y2="20" stroke="#a40000" strokeWidth="1.5" className="opacity-40" />
            {/* Horizontal line connecting the 4 cards */}
            <line x1="125" y1="20" x2="875" y2="20" stroke="#a40000" strokeWidth="1.5" className="opacity-40" />
            {/* 4 down arrows to the 4 cards */}
            <g className="opacity-70 text-rsa-red" fill="currentColor">
              {/* Drop 1 */}
              <line x1="125" y1="20" x2="125" y2="35" stroke="currentColor" strokeWidth="1.5" />
              <polygon points="122,35 128,35 125,40" />
              
              {/* Drop 2 */}
              <line x1="375" y1="20" x2="375" y2="35" stroke="currentColor" strokeWidth="1.5" />
              <polygon points="372,35 378,35 375,40" />

              {/* Drop 3 */}
              <line x1="625" y1="20" x2="625" y2="35" stroke="currentColor" strokeWidth="1.5" />
              <polygon points="622,35 628,35 625,40" />

              {/* Drop 4 */}
              <line x1="875" y1="20" x2="875" y2="35" stroke="currentColor" strokeWidth="1.5" />
              <polygon points="872,35 878,35 875,40" />
            </g>
          </svg>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-[1050px] mx-auto text-left relative z-10">
          {cards.map((card, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 lg:p-5 bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] rounded-sm">
              <div className="shrink-0 pt-0.5">
                <card.icon className="w-[30px] h-[30px] text-rsa-red" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-rsa-black whitespace-pre-line leading-[1.4]">{card.title}</h4>
                <p className="text-[12px] text-rsa-gray-500 whitespace-pre-line leading-snug">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
