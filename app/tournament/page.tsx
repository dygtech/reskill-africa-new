import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { ActionButton } from "@/components/ActionButton";
import { TournamentPortfolio } from "@/components/TournamentPortfolio";
import { TournamentHero } from "@/components/TournamentHero";
import { TournamentConnected } from "@/components/TournamentConnected";
import { Calendar, ExternalLink } from "lucide-react";

export const metadata = {
  title: "The Africa Innovation Tournament | Re-Skill Africa",
  description:
    "The Africa Innovation Tournament (AIT) is Re-Skill Africa's discovery engine — where we find our next enterprises and exceptional problem-solvers.",
};

export default function TournamentPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <TournamentHero />

      {/* ─── BODY INTRO ───────────────────────────────────────────────── */}
      <section className="w-full pt-24 pb-20 px-4 md:px-12 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-gray text-[16px] md:text-[18px] font-sans font-normal leading-relaxed">
            The Africa Innovation Tournament (AIT) is where we find our next
            enterprises. Through this discovery and enterprise-creation engine,
            we identify exceptional problem-solvers, ideas, and founders who
            progress through Venture Labs and eventually build the productive
            enterprises that make new demand.
          </p>
          <p className="text-brand-gray text-[16px] md:text-[18px] font-sans font-normal leading-relaxed mt-5 max-w-3xl mx-auto">
            A doorway to be walked through — where doctrine becomes deployment.
          </p>
        </div>
      </section>

      {/* ─── IT'S ALL CONNECTED ───────────────────────────────────────── */}
      <TournamentConnected />

      {/* ─── CURRENT TOURNAMENTS ──────────────────────────────────────── */}
      <TournamentPortfolio />



      {/* ─── UPCOMING ─────────────────────────────────────────────────── */}
      <section className="w-full bg-primary pt-24 pb-32 px-4 md:px-12 flex flex-col items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="flex flex-col items-center text-center mb-14">
            <div className="inline-flex items-center gap-2 border border-white/40 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Calendar size={15} />
              Upcoming
            </div>
            <h2 className="text-[30px] md:text-[44px] font-sans font-bold leading-[1.1] tracking-tight text-white">
              On the horizon.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-10 flex flex-col gap-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center justify-between relative z-10">
                <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">South-East Nigeria</span>
                <Calendar size={18} className="text-white/50" />
              </div>
              <h3 className="text-white font-bold text-[20px] leading-snug relative z-10">
                South-East Regional AIT
              </h3>
              <p className="text-white/75 text-sm leading-relaxed relative z-10">
                Sequenced ahead of the national flagship — building the regional
                pipeline that feeds the continental tournament.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-10 flex flex-col gap-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center justify-between relative z-10">
                <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">October 2027</span>
                <Calendar size={18} className="text-white/50" />
              </div>
              <h3 className="text-white font-bold text-[20px] leading-snug relative z-10">
                National Flagship AIT
              </h3>
              <p className="text-white/75 text-sm leading-relaxed relative z-10">
                The continental stage. The definitive tournament where
                Africa&apos;s best problem-solvers and founders compete on the
                national platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLOSING CTA ──────────────────────────────────────────────── */}
      <section className="w-full bg-white pt-24 pb-70 px-4 md:px-12 flex flex-col items-center text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 border border-primary text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <ExternalLink size={15} />
            Get Involved
          </div>
          <h2 className="text-[30px] md:text-[44px] font-sans font-bold leading-[1.1] tracking-tight text-brand-dark mb-6">
            Host, sponsor, or nominate a sector for the next tournament.
          </h2>
          <p className="text-brand-gray text-[16px] md:text-[18px] font-sans font-normal leading-relaxed mb-10 max-w-xl">
            Whether you&apos;re an institution, a sector anchor, or a programme
            funder — AIT is designed to be partnered with.
          </p>
          <Link href="/contact">
            <ActionButton variant="secondary">Contact us</ActionButton>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
