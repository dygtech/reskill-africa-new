import Image from "next/image";
import { Footer } from "@/components/Footer";
import { ActionButton } from "@/components/ActionButton";
import { Briefcase, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 px-4 md:px-12 flex flex-col items-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 text-primary px-4 py-1.5 text-sm font-medium mb-6">
            <Briefcase size={16} />
            Projects
          </div>

          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-sans font-bold leading-[1.05] tracking-tight text-brand-dark mb-6">
            Our work so far
          </h1>
        </div>
      </section>

      {/* Project Entry 01: iDICE */}
      <section className="w-full pb-24 px-4 md:px-12 flex flex-col items-center border-b border-gray-100">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-[32px] md:text-[40px] font-sans font-bold leading-[1.1] tracking-tight text-brand-dark mb-10 max-w-3xl">
            iDICE - Investment in Digital and Creative Enterprises
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Metadata */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-[11px] font-bold text-brand-gray uppercase tracking-wider mb-1">Initiative Of</p>
                    <p className="text-[14px] text-brand-dark font-medium">The Federal Government of Nigeria</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-brand-gray uppercase tracking-wider mb-1">Implemented By</p>
                    <p className="text-[14px] text-brand-dark font-medium">The Bank of Industry Nigeria</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-brand-gray uppercase tracking-wider mb-1">Lead Financier</p>
                    <p className="text-[14px] text-brand-dark font-medium">African Development Bank</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-brand-gray uppercase tracking-wider mb-1">Co-Financiers</p>
                    <p className="text-[14px] text-brand-dark font-medium">Islamic Development Bank, Agence Française de Développement</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-brand-gray uppercase tracking-wider mb-1">Delivery Lot</p>
                    <p className="text-[14px] text-brand-dark font-medium">Del-York Group - Skills-to-Jobs and BPO</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-brand-gray uppercase tracking-wider mb-1">Geography</p>
                    <p className="text-[14px] text-brand-dark font-medium">South-East Nigeria - Abia, Anambra, Ebonyi, Enugu, Imo</p>
                  </div>
                  <div className="mt-2">
                    <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold border border-green-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      In delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              {/* Image Banner */}
              <div className="relative w-full aspect-[2/1] rounded-3xl overflow-hidden mb-2">
                <Image src="/images/about-section-1.webp" alt="iDICE Project" fill className="object-cover" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">The mandate</h3>
                <p className="text-brand-gray text-[16px] leading-relaxed">
                  iDICE is a landmark programme by the Federal Government of Nigeria, implemented by the Bank of Industry and co-financed by the African Development Bank, the Islamic Development Bank and Agence Française de Développement, to build Nigeria’s digital and creative enterprise capacity.
                </p>
                <p className="text-brand-gray text-[16px] leading-relaxed mt-4">
                  Del-York Group holds the Skills-to-Jobs and BPO delivery lot across five South-East states.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Re-Skill Africa&apos;s role</h3>
                <p className="text-brand-gray text-[16px] leading-relaxed">
                  Re-Skill Africa is the cohort-to-deployment engine within the iDICE Skills-to-Jobs mandate. From demand aggregation across regional employers to Digital Skill Passport certification and confirmed deployment, RSA supplies the operational spine that turns iDICE ambition into placed and productive talent.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">The doctrine in this project</h3>
                <ul className="flex flex-col gap-4">
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                    <p className="text-brand-gray text-[15px] leading-relaxed">
                      <strong className="text-brand-dark">Law I.</strong> Demand is aggregated from South-East employers, BPO operators, and digital ventures before cohort intake.
                    </p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                    <p className="text-brand-gray text-[15px] leading-relaxed">
                      <strong className="text-brand-dark">Law II.</strong> Certification is issued only on demonstrated competence, captured on the Digital Skill Passport.
                    </p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                    <p className="text-brand-gray text-[15px] leading-relaxed">
                      <strong className="text-brand-dark">Law III.</strong> Cohorts are closed by confirmed deployment into contracted roles or enterprise formation.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                <h3 className="text-lg font-bold text-brand-dark mb-2">Featured mechanism</h3>
                <p className="text-brand-gray text-[15px] leading-relaxed mb-4">
                  The iDICE Female Hackathon - a women-focused tournament deploying female founders and technical talent into the region’s digital economy - runs within this mandate.
                </p>
                <Link href="/tournament" className="text-primary font-semibold hover:underline text-sm inline-flex items-center gap-1">
                  See the Africa Innovation Tournament page for more &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Projects Entry */}
      <section className="w-full py-24 px-4 md:px-12 flex flex-col items-center bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-gray text-[16px] md:text-[18px] leading-relaxed">
            Additional project entries will populate this page as they enter delivery - with the same header structure and the same doctrinal breakdown.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="w-full pt-32 pb-70 px-4 md:px-12 flex flex-col items-center">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-[32px] md:text-[44px] font-sans font-bold leading-[1.1] tracking-tight text-brand-dark mb-8">
            Ready to partner with us?
          </h2>
          <ActionButton variant="primary" href="/contact">
            Explore a project partnership &rarr;
          </ActionButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
