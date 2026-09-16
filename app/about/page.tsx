import Image from "next/image";
import { Footer } from "@/components/Footer";
import { ActionButton } from "@/components/ActionButton";
import { Building2, Globe2, MapPin, CheckCircle, Target, Users2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 px-4 md:px-12 flex flex-col items-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 border border-[#9c2525] text-[#9c2525] rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Target size={16} />
            About Re-Skill Africa
          </div>

          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-sans font-bold leading-[1.05] tracking-tight text-[#111111] mb-6">
            A continental institution for <br />
            human productivity.
          </h1>

          <p className="text-gray-600 text-[16px] md:text-[18px] font-sans font-normal mb-8 max-w-3xl leading-relaxed">
            Re-Skill Africa is a continental human productivity and industrialisation institution - the operating arm of Del-York Group’s Skildustry doctrine. It exists to close the gap between Africa’s talent and its productive demand, and to build the productive demand itself.
          </p>

          <p className="text-gray-600 text-[16px] md:text-[18px] font-sans font-normal mb-10 max-w-3xl leading-relaxed">
            The institution operates across multiple sectors - creative and technical production, construction, and agriculture and food processing. Its mechanisms apply the same doctrine at every scale: <strong>demand before training, always.</strong>
          </p>
        </div>

        {/* Masonry Image Grid */}
        <div className="max-w-6xl mx-auto w-full mt-12 mb-24 flex flex-col md:flex-row gap-4 h-auto md:h-150">
          {/* Left Column */}
          <div className="flex flex-col gap-4 w-full md:w-1/3">
            <div className="relative h-70 rounded-3xl overflow-hidden group">
              <Image src="/images/about-section-1.webp" alt="Creative Production" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative h-76 rounded-3xl overflow-hidden group">
              <Image src="/images/about-section-2.webp" alt="Technical Production" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-medium">
                <CheckCircle size={14} /> Multiple Sectors
              </div>
            </div>
          </div>

          {/* Center Column (Large Image) */}
          <div className="relative w-full md:w-1/3 h-100 md:h-full rounded-3xl overflow-hidden group">
            <Image src="/images/hero-img.webp" alt="Construction & Agriculture" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-semibold mb-1">Human Productivity</p>
              <p className="text-sm text-white/80">Building productive demand</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 w-full md:w-1/3">
            <div className="relative h-76 rounded-3xl overflow-hidden group">
              <Image src="/images/about-section-3.webp" alt="Innovation" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative h-68 rounded-3xl overflow-hidden group">
              <Image src="/images/about-section-5.webp" alt="Skildustry Enterprise" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-medium">
                <CheckCircle size={14} /> Skildustry Doctrine
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="w-full bg-white pt-24 pb-150 px-4 md:px-12 flex flex-col items-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-[#9c2525] text-[#9c2525] rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Users2 size={16} />
            The Methodology
          </div>
          <h2 className="text-[32px] md:text-[44px] font-sans font-bold leading-[1.1] tracking-tight text-[#111111] mb-6">
            Skildustry is Re-Skill Africa’s proprietary doctrine.
          </h2>
          <p className="text-gray-600 text-[16px] md:text-[18px] font-sans font-normal leading-relaxed">
            The operating logic that runs beneath every Re-Skill Africa’s mechanism. Its ambition is African-originated: an operating model for converting human potential into productive economic capacity, at continental scale and eventually beyond.
          </p>
        </div>

        {/* Info Cards (Red Theme like the screenshot) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

          {/* Card 1 */}
          <div className="bg-[#9c2525] rounded-4xl p-8 md:p-10 flex flex-col relative overflow-hidden group h-full">
            {/* Subtle zig-zag pattern overlay could go here, simulating it with gradient/opacity */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent"></div>

            <Building2 className="text-white/80 w-10 h-10 mb-8 relative z-10" />
            <h3 className="text-white text-xl font-bold mb-4 relative z-10">Within Del-York Group</h3>
            <p className="text-white/80 text-sm leading-relaxed relative z-10 grow">
              Founded within Del-York Group by Mr. Linus Idahosa. Del-York has spent over two decades building creative-industry and enterprise infrastructure across Africa, and holds delivery mandates on major continental programmes including the African Development Bank’s iDICE. Re-Skill Africa is the Group’s continental institution for translating that footprint into human productivity at scale.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#9c2525] rounded-4xl p-8 md:p-10 flex flex-col relative overflow-hidden group h-full">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent"></div>

            <Globe2 className="text-white/80 w-10 h-10 mb-8 relative z-10" />
            <h3 className="text-white text-xl font-bold mb-4 relative z-10">Kebulania</h3>
            <p className="text-white/80 text-sm leading-relaxed relative z-10 grow">
              Kebulania is the physical proof zone that Re-Skill Africa is developing as the eventual continental campus for the doctrine - a place where cohorts, productions, contracts, and deployments meet under one geography.
              <br /><br />
              It is aspirational and in development.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#9c2525] rounded-4xl p-8 md:p-10 flex flex-col relative overflow-hidden group h-full">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent"></div>

            <MapPin className="text-white/80 w-10 h-10 mb-8 relative z-10" />
            <h3 className="text-white text-xl font-bold mb-4 relative z-10">Headquarters and reach</h3>
            <p className="text-white/80 text-sm leading-relaxed relative z-10 grow">
              Headquartered in Lagos. Deployed across Africa.<br /><br />
              Currently anchored in Nigeria, with a continental partnership pipeline in development.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
