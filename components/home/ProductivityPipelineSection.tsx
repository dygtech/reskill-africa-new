import { SectionLabel } from "@/components/ui/SharedUI";

const steps = [
  { label: "DISCOVER", sublabel: "Africa Innovation\nTournament" },
  { label: "DIAGNOSE", sublabel: "" },
  { label: "DEVELOP", sublabel: "SKILDUSTRY™" },
  { label: "DEPLOY", sublabel: "" },
  { label: "FINANCE", sublabel: "Skill Passport" },
  { label: "SCALE", sublabel: "Venture Lab" },
];

export function ProductivityPipelineSection() {
  return (
    <section className="w-full bg-[#fdfdfd] py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 text-center">
        <div className="text-left w-full"><SectionLabel number="08">THE RSA SYSTEM</SectionLabel></div>
        <h2 className="text-rsa-black text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.03em] mb-16 max-w-2xl mx-auto">
          One system. From potential to <span className="text-rsa-red">productivity.</span>
        </h2>

        {/* Pipeline steps */}
        <div className="relative mb-20">
          {/* Connecting line */}
          <div className="absolute top-[24px] left-[5%] right-[5%] h-[1px] bg-rsa-red/30 z-0">
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-rsa-red border-b-[4px] border-b-transparent"></div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-y-10 gap-x-2 relative z-10 max-w-[1200px] mx-auto">
            {steps.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center">
                {/* Circle with icon (simulated with red border) */}
                <div className="w-12 h-12 rounded-full border border-rsa-red bg-white flex items-center justify-center mb-4 relative z-10">
                  <div className="w-4 h-4 bg-rsa-red/20 rounded-sm" /> {/* Placeholder for icon */}
                </div>
                <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-rsa-black text-center">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1200px] mx-auto text-left">
           {[
             { title: "AFRICA INNOVATION TOURNAMENT", desc: "Discover talent, problems and ideas." },
             { title: "SKILDUSTRY™", desc: "Build capability through real production." },
             { title: "SKILL PASSPORT", desc: "Make competence visible and verifiable." },
             { title: "VENTURE LABS", desc: "Turn capability and demand into enterprise." }
           ].map((card, idx) => (
             <div key={idx} className="flex flex-col gap-2 p-4 border border-rsa-gray-200 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-rsa-red/10 text-rsa-red flex items-center justify-center mb-2">✦</div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-rsa-black">{card.title}</h4>
                <p className="text-[12px] text-rsa-gray-500">{card.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
