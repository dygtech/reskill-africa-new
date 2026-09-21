import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { ArrowRight, MonitorPlay, HardHat, Sprout } from "lucide-react";
import { ActionButton } from "@/components/ActionButton";

export default function SectorsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] flex items-end pb-24 pt-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/reskill-sector-hero.webp"
            alt="Re-Skill Africa Sectors"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-4 md:px-12 flex justify-end">
          <div className="max-w-2xl text-white text-right md:text-left flex flex-col md:items-end">
            <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-sans font-bold leading-[1.05] tracking-tight mb-6 text-right w-full">
              Re-Skill Africa&apos;s Sectors
            </h1>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans font-medium leading-relaxed text-right text-white/90 max-w-xl">
              Africa&apos;s productive future rests on a small number of sectors where demand is deep,
              structural, and largely unmet by domestic supply.
              <br className="mt-4" />
              Re-Skill Africa operates across three - building Skildustry enterprises inside each.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="w-full pt-24 pb-32 px-4 md:px-12 flex flex-col items-center">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

          {/* Sector 1: Creative & Technical Production */}
          <div className="flex flex-col group">
            <div className="relative h-[360px] rounded-3xl overflow-hidden mb-8">
              <Image src="/images/about-section-3.webp" alt="Creative Production" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-primary shadow-lg">
                <MonitorPlay size={24} />
              </div>
            </div>
            <h2 className="text-[24px] md:text-[28px] font-sans font-bold text-brand-dark mb-4">
              Creative &amp; Technical Production
            </h2>
            <p className="text-brand-gray text-[16px] leading-relaxed mb-4">
              Africa&apos;s creative economy is expanding faster than its production capacity. Studios,
              platforms, and content pipelines carry demand that domestic talent cannot yet fully
              supply.
            </p>
            <p className="text-brand-gray text-[16px] leading-relaxed">
              Skildustry enterprises in this sector operate as commercial studios, production houses,
              and technical services businesses - with cohorts developing inside live productions and
              progressing toward the ownership of independent creative ventures.
            </p>
          </div>

          {/* Sector 2: Construction */}
          <div className="flex flex-col group">
            <div className="relative h-[360px] rounded-3xl overflow-hidden mb-8">
              <Image src="/images/about-section-5.webp" alt="Construction" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-primary shadow-lg">
                <HardHat size={24} />
              </div>
            </div>
            <h2 className="text-[24px] md:text-[28px] font-sans font-bold text-brand-dark mb-4">
              Construction
            </h2>
            <p className="text-brand-gray text-[16px] leading-relaxed mb-4">
              The continent&apos;s infrastructure ambition outpaces its skilled-labour supply by an order of
              magnitude.
            </p>
            <p className="text-brand-gray text-[16px] leading-relaxed">
              Skildustry enterprises in construction operate as contracting firms, trade shops, and
              enterprise-formation networks - with cohorts developing inside live projects and
              progressing toward enterprise ownership at every level of the value chain.
            </p>
          </div>

          {/* Sector 3: Agriculture & Food Processing */}
          <div className="flex flex-col group">
            <div className="relative h-[360px] rounded-3xl overflow-hidden mb-8">
              <Image src="/images/about-section-1.webp" alt="Agriculture" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-primary shadow-lg">
                <Sprout size={24} />
              </div>
            </div>
            <h2 className="text-[24px] md:text-[28px] font-sans font-bold text-brand-dark mb-4">
              Agriculture &amp; Food Processing
            </h2>
            <p className="text-brand-gray text-[16px] leading-relaxed mb-4">
              Food security is Africa&apos;s largest structural demand.
            </p>
            <p className="text-brand-gray text-[16px] leading-relaxed">
              Skildustry enterprises in agriculture operate as processors, off-take aggregators, and
              integrated agribusinesses - with cohorts developing inside contracted supply chains and
              progressing into enterprise formation across the value chain.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-primary pt-24 pb-70 px-4 md:px-12 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <h2 className="text-[32px] md:text-[44px] font-sans font-bold leading-[1.1] tracking-tight text-white mb-10 max-w-3xl">
            See the doctrine&apos;s discovery engine at the Africa Innovation Tournament
          </h2>
          <Link href="/tournament">
            <ActionButton variant="primary" >
              Africa Innovation Tournament
            </ActionButton>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
