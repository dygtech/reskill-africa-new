import Image from "next/image";
import { ArrowRight, Puzzle, CheckCircle, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="relative w-full h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-img.webp"
        alt="Industrial facility background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#072433]/50 mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/10" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full max-w-350 mx-auto px-8 md:px-12 flex flex-col justify-center">

        {/* Center Text Group */}
        <div className="flex flex-col items-center text-center max-w-225 mx-auto -mt-16">
          <h1 className="text-white text-[50px] md:text-[68px] lg:text-[80px] font-sans font-bold leading-[0.95] tracking-tight mb-6 drop-shadow-md">
            Africa's Talent must<br />power it's industries
          </h1>
          <p className="text-white/90 text-[16px] md:text-[18px] font-sans font-normal mb-10 tracking-wide max-w-2xl">
            Re-skill Africa is a national and continental platform for talent<br className="hidden md:block" /> discovery and industrial deployment.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="group flex items-center justify-between gap-6 hover:gap-12 bg-white text-black px-1.5 py-1.5 pl-6 rounded-full font-sans text-[15px] font-medium transition-all duration-300 shadow-lg w-full sm:w-auto">
              <span>Explore Skilldustry</span>
              <div className="bg-[#9c2525] text-white p-2.5 rounded-full flex items-center justify-center">
                <ArrowRight size={18} className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0" strokeWidth={1} />
              </div>
            </button>

            <button className="group flex items-center justify-between gap-6 hover:gap-12 bg-white text-black px-1.5 py-1.5 pl-6 rounded-full font-sans text-[15px] font-medium transition-all duration-300 shadow-lg w-full sm:w-auto">
              <span>Explore Skill Passport</span>
              <div className="bg-[#9c2525] text-white p-2.5 rounded-full flex items-center justify-center">
                <ArrowRight size={18} className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0" strokeWidth={1} />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Right Glassmorphism Cards */}
        <div className="absolute bottom-4 right-8 lg:right-12 hidden lg:flex flex-col gap-3 w-[400px]">

          {/* Card 1 */}
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl opacity-0 animate-[fade-in-up_0.6s_ease-out_0.6s_forwards]">
            <div className="text-white mt-0.5 opacity-90">
              <Puzzle size={22} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col text-left">
              <h3 className="text-white font-medium text-[15px] mb-0.5">Real-world challenges</h3>
              <p className="text-white/75 text-[13px] font-light">Tested against the demands of industry.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl opacity-0 animate-[fade-in-up_0.6s_ease-out_0.4s_forwards]">
            <div className="text-white mt-0.5 opacity-90">
              <CheckCircle size={22} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col text-left">
              <h3 className="text-white font-medium text-[15px] mb-0.5">Verified Capability</h3>
              <p className="text-white/75 text-[13px] font-light">Skills proven through measurable performance.</p>
            </div>
          </div>

          {/* Card 3 (Appears First) */}
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl opacity-0 animate-[fade-in-up_0.6s_ease-out_0.2s_forwards]">
            <div className="text-white mt-0.5 opacity-90">
              <Globe size={22} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col text-left">
              <h3 className="text-white font-medium text-[15px] mb-0.5">Direct Pathways</h3>
              <p className="text-white/75 text-[13px] font-light">Connecting proven talent to what comes next.</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
