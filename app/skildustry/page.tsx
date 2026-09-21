import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Target, CheckCircle, Scale, ShieldCheck, Briefcase } from "lucide-react";
import { TheFullLoop } from "@/components/TheFullLoop";

export default function SkildustryPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 px-4 md:px-12 flex flex-col items-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 border border-primary text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Target size={16} />
            Skildustry
          </div>

          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-sans font-bold leading-[1.05] tracking-tight text-brand-dark mb-4">
            Where skills meet industry.
          </h1>

          <h2 className="text-[20px] md:text-[28px] font-sans font-semibold text-primary mb-6">
            Industry becomes the classroom. Production becomes the curriculum. Economic productivity becomes the proof of learning.
          </h2>

          <p className="text-brand-gray text-[16px] md:text-[18px] font-sans font-normal mb-10 max-w-3xl leading-relaxed">
            Skildustry is a doctrine - the operating logic by which Re-Skill Africa converts skill into productivity, and productivity into industrial output. The anchor holds: <strong>demand before training, always.</strong> And the doctrine goes further. Where possible, enterprise itself comes before training - because real production is the only environment in which economic-grade competence forms at market standard.
          </p>
        </div>

        {/* Masonry Image Grid */}
        <div className="max-w-6xl mx-auto w-full mt-12 mb-24 flex flex-col md:flex-row gap-4 h-auto md:h-150">
          {/* Left Column */}
          <div className="flex flex-col gap-4 w-full md:w-1/3">
            <div className="relative h-70 rounded-3xl overflow-hidden group">
              <Image src="/images/about-section-3.webp" alt="Creative Production" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative h-76 rounded-3xl overflow-hidden group">
              <Image src="/images/about-section-5.webp" alt="Technical Production" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-medium">
                <CheckCircle size={14} /> Market Standard
              </div>
            </div>
          </div>

          {/* Center Column (Large Image) */}
          <div className="relative w-full md:w-1/3 h-100 md:h-full rounded-3xl overflow-hidden group">
            <Image src="/images/hero-img.webp" alt="Construction & Agriculture" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-semibold mb-1">Industrial Output</p>
              <p className="text-sm text-white/80">Converting skill into productivity</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 w-full md:w-1/3">
            <div className="relative h-76 rounded-3xl overflow-hidden group">
              <Image src="/images/about-section-1.webp" alt="Innovation" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative h-68 rounded-3xl overflow-hidden group">
              <Image src="/images/about-section-2.webp" alt="Skildustry Enterprise" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-medium">
                <CheckCircle size={14} /> Skildustry Doctrine
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Laws Section */}
      <section className="w-full bg-white pt-24 pb-32 px-4 md:px-12 flex flex-col items-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-primary text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Scale size={16} />
            Re-Skill Africa's Operating Laws
          </div>
          <h2 className="text-[32px] md:text-[44px] font-sans font-bold leading-[1.1] tracking-tight text-brand-dark mb-6">
            Three laws hold our system together.
          </h2>
        </div>

        {/* Info Cards (Red Theme like the screenshot) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

          {/* Law I */}
          <div className="bg-primary rounded-4xl p-8 md:p-10 flex flex-col relative overflow-hidden group h-full">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent"></div>

            <Briefcase className="text-white/80 w-10 h-10 mb-8 relative z-10" />
            <h3 className="text-white text-xl font-bold mb-4 relative z-10">Law I: No training without demand.</h3>
            <p className="text-white/80 text-sm leading-relaxed relative z-10 grow">
              Every cohort begins with a validated demand signal, and training is commissioned by demand, not sold in advance of it.
            </p>
          </div>

          {/* Law II */}
          <div className="bg-primary rounded-4xl p-8 md:p-10 flex flex-col relative overflow-hidden group h-full">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent"></div>

            <ShieldCheck className="text-white/80 w-10 h-10 mb-8 relative z-10" />
            <h3 className="text-white text-xl font-bold mb-4 relative z-10">Law II: No certification without competence.</h3>
            <p className="text-white/80 text-sm leading-relaxed relative z-10 grow">
              Our assessment is grounded in real-world production. Certification is not just a passing grade; it is proof of economic-grade competence formed at market standard.
            </p>
          </div>

          {/* Law III Placeholder (Assuming there is a third law) */}
          <div className="bg-primary rounded-4xl p-8 md:p-10 flex flex-col relative overflow-hidden group h-full">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent"></div>

            <CheckCircle className="text-white/80 w-10 h-10 mb-8 relative z-10" />
            <h3 className="text-white text-xl font-bold mb-4 relative z-10">Law III: Enterprise before training.</h3>
            <p className="text-white/80 text-sm leading-relaxed relative z-10 grow">
              Where possible, enterprise itself comes before training - because real production is the only environment in which economic-grade competence forms at market standard.
            </p>
          </div>

        </div>
      </section>

      {/* The Full Loop Section (Interactive Client Component) */}
      <TheFullLoop />

      {/* The Loop Reinforces Itself */}
      <section className="w-full bg-primary py-24 px-4 md:px-12 flex flex-col items-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-[32px] md:text-[44px] font-sans font-bold leading-[1.1] tracking-tight text-white mb-12">
            The loop reinforces itself.
          </h2>

          <div className="flex flex-col md:flex-row gap-8 w-full">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 flex-1 border border-white/20 text-left relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-white font-bold text-xl mb-4 relative z-10">Loop A: Skills-to-Jobs</h3>
              <p className="text-white/80 font-medium text-[15px] leading-relaxed mb-4 relative z-10">
                Demand &rarr; Skills &rarr; Competence &rarr; Work and Income.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 flex-1 border border-white/20 text-left relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-white font-bold text-xl mb-4 relative z-10">Loop B: Enterprise Creation</h3>
              <p className="text-white/80 font-medium text-[15px] leading-relaxed mb-4 relative z-10">
                Problems and Opportunities &rarr; AIT &rarr; Venture Labs &rarr; Enterprise &rarr; New Demand &rarr; Skills &rarr; Work.
              </p>
            </div>
          </div>

          <p className="text-white/90 text-[16px] md:text-[18px] font-sans font-normal mt-10 leading-relaxed text-left max-w-3xl">
            Loop B is the compounding engine. It is how Skildustry generates its own future demand - and how the doctrine becomes self-reinforcing at scale.
          </p>
        </div>
      </section>

      {/* Final Note */}
      <section className="w-full bg-white py-24 px-4 md:px-12 flex flex-col items-center text-center  relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-sans font-bold leading-[1.2] tracking-tight text-brand-dark mb-8">
            Africa's productive future does not come from more training. <span className="text-primary">It comes from more production.</span>
          </h2>
          <p className="text-brand-gray text-[16px] md:text-[18px] font-sans font-normal leading-relaxed max-w-3xl mx-auto">
            Skildustry designs the enterprise, the production system, the learning architecture, the competence framework, and the economic outcomes as one integrated whole. <br className="hidden md:block mt-4" />
            <strong className="font-semibold text-brand-dark mt-4 block">Industry becomes the classroom. Production becomes the curriculum. Economic productivity becomes the proof of learning.</strong>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
