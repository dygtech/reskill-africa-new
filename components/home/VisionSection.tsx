import Image from "next/image";
import Link from "next/link";
import { User, Layers, BarChart2, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SharedUI";

export function VisionSection() {
    return (
        <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-10 lg:px-14 border-t border-white/10 font-sans relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
                {/* Left Column */}
                <div className="lg:w-[35%] flex flex-col space-y-10">
                    <SectionLabel number="10" className="!text-gray-400">OUR VISION</SectionLabel>

                    {/* Main Content */}
                    <div className="relative">
                        <div className="pl-4 mb-6">
                            <p className="text-[12px] tracking-[0.2em] text-gray-400 font-medium">2026 &mdash; 2029</p>
                        </div>
                        <h2 className="text-4xl md:text-[52px] font-black leading-[1] tracking-tight mb-4 uppercase">
                            Africa's Most<br />
                            <span className="text-rsa-red">Sought-after</span><br />
                            Talent<br />
                            <span className="font-serif font-normal text-[32px] md:text-[40px] lowercase">comes through us.</span>
                        </h2>
                        <p className="text-gray-400 text-[15px] leading-relaxed max-w-sm mt-6">
                            We begin with the opportunity, then build the people to capture it.
                        </p>
                    </div>

                    <div className="h-px w-full bg-white/10"></div>

                    {/* Stats */}
                    <div className="flex items-start justify-between gap-6">
                        <div>
                            <h3 className="text-5xl md:text-[56px] font-black mb-3">5,000</h3>
                            <p className="text-[10px] tracking-widest text-gray-400 uppercase leading-relaxed font-semibold">
                                PEOPLE PRODUCING,<br />EARNING AND OWNING
                            </p>
                        </div>
                        <div className="w-px h-16 bg-white/10 hidden sm:block"></div>
                        <div>
                            <h3 className="text-5xl md:text-[56px] font-black mb-3">20</h3>
                            <p className="text-[10px] tracking-widest text-gray-400 uppercase leading-relaxed font-semibold">
                                PRODUCTION LABS<br />BY 2029
                            </p>
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="mt-4">
                        <h4 className="font-serif italic text-3xl md:text-[34px] leading-tight mb-4 text-white font-medium">
                            “Hire RSA first.<br />Buy Made by RSA.”
                        </h4>
                        <p className="text-[10px] tracking-[0.15em] text-gray-400 uppercase font-semibold">
                            WHAT EMPLOYERS AND MARKETS WILL SAY
                        </p>
                    </div>

                    {/* Button */}
                    <Link href="/partner-with-us" className="mt-2 group flex items-center justify-between w-full max-w-sm px-6 py-5 border border-white/20 hover:border-white/50 transition-colors">
                        <span className="text-[11px] font-bold tracking-[0.15em] uppercase">BUILD SOMETHING MAGNIFICENT</span>
                        <ArrowRight className="w-4 h-4 text-rsa-red group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Right Column */}
                <div className="lg:w-[65%] flex flex-col space-y-16">

                    {/* Images row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { img: "/images/vb 1.png", num: "01", label: "OPPORTUNITY" },
                            { img: "/images/vb 2.png", num: "02", label: "PRODUCTION" },
                            { img: "/images/vb 3.png", num: "03", label: "INCOME" },
                            { img: "/images/vb 4.png", num: "04", label: "OWNERSHIP" }
                        ].map((card, i) => (
                            <div key={i} className="relative aspect-[3/4] w-full overflow-hidden group border border-white/5 bg-[#111]">
                                <Image
                                    src={card.img}
                                    alt={card.label}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                                <div className="absolute bottom-5 left-4 right-4 flex items-center gap-3">
                                    <span className="text-rsa-red text-[11px] font-bold">{card.num}</span>
                                    <div className="h-px flex-1 bg-white/20"></div>
                                    <span className="text-white text-[9px] tracking-widest uppercase font-semibold">{card.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Principles */}
                    <div>
                        <div className="flex items-center gap-6 mb-10">
                            <h3 className="text-[11px] tracking-[0.2em] text-gray-300 uppercase font-bold whitespace-nowrap">THE PRINCIPLES WE LEAD BY</h3>
                            <div className="h-px flex-1 bg-white/10"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="relative md:pr-6 md:border-r border-white/10">
                                <User className="w-6 h-6 text-rsa-red mb-5" strokeWidth={1.5} />
                                <h4 className="text-[17px] font-bold mb-3 leading-snug">Formation, not just<br />qualification</h4>
                                <p className="text-[13px] text-gray-400 leading-relaxed">We form whole people and give them a place in society.</p>
                            </div>
                            <div className="relative md:pr-6 md:border-r border-white/10">
                                <Layers className="w-6 h-6 text-rsa-red mb-5" strokeWidth={1.5} />
                                <h4 className="text-[17px] font-bold mb-3 leading-snug">Design as a problem-<br />solving method</h4>
                                <p className="text-[13px] text-gray-400 leading-relaxed">Every programme starts from a real human or industry problem.</p>
                            </div>
                            <div>
                                <BarChart2 className="w-6 h-6 text-rsa-red mb-5" strokeWidth={1.5} />
                                <h4 className="text-[17px] font-bold mb-3 leading-snug">Commercial discipline</h4>
                                <p className="text-[13px] text-gray-400 leading-relaxed">Skills lead to products, markets, income and ownership.</p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="pt-4">
                        <div className="flex items-center gap-6 mb-10">
                            <h3 className="text-[11px] tracking-[0.2em] text-gray-300 uppercase font-bold whitespace-nowrap">THE ROAD TO 2029</h3>
                            <div className="h-px flex-1 bg-white/10"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                            {/* 2026 */}
                            <div>
                                <h4 className="flex items-baseline gap-2 mb-6 border-b border-white/10 pb-4">
                                    <span className="text-[22px] font-black">2026</span>
                                    <span className="font-serif italic text-gray-400 text-[17px]">Scope</span>
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        "Lab blueprint designed",
                                        "Host partners and buyer's mapped",
                                        "First host agreements signed"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-3 h-[2px] bg-rsa-red mt-2 shrink-0"></div>
                                            <span className="text-[13px] text-gray-400 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* 2027 */}
                            <div className="lg:border-l border-white/10 lg:pl-6">
                                <h4 className="flex items-baseline gap-2 mb-6 border-b border-white/10 pb-4">
                                    <span className="text-[22px] font-black">2027</span>
                                    <span className="font-serif italic text-gray-400 text-[17px]">Prove</span>
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        "3 Production Labs live in Lagos",
                                        "First products sold to paying markets",
                                        "First cohort earning from real work"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-3 h-[2px] bg-rsa-red mt-2 shrink-0"></div>
                                            <span className="text-[13px] text-gray-400 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* 2028 */}
                            <div className="lg:border-l border-white/10 lg:pl-6">
                                <h4 className="flex items-baseline gap-2 mb-6 border-b border-white/10 pb-4">
                                    <span className="text-[22px] font-black">2028</span>
                                    <span className="font-serif italic text-gray-400 text-[17px]">Replicate</span>
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        "Production Labs beyond Lagos",
                                        "First graduate-owned enterprises, hiring graduates",
                                        "Employers on a waitlist for RSA talent"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-3 h-[2px] bg-rsa-red mt-2 shrink-0"></div>
                                            <span className="text-[13px] text-gray-400 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* 2029 */}
                            <div className="lg:border-l border-white/10 lg:pl-6">
                                <h4 className="flex items-baseline gap-2 mb-6 border-b border-white/10 pb-4">
                                    <span className="text-[22px] font-black">2029</span>
                                    <span className="font-serif italic text-gray-400 text-[17px]">Lead</span>
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        "20 Production Labs, 5,000 people",
                                        "Skill Passport nationally accredited",
                                        "RSA talent working across continents"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-3 h-[2px] bg-rsa-red mt-2 shrink-0"></div>
                                            <span className="text-[13px] text-gray-400 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Footer Bar */}
            <div className="max-w-[1440px] mx-auto mt-24 pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-4 text-[11px] tracking-[0.2em] text-gray-500 font-semibold uppercase">
                <span>OPPORTUNITY</span>
                <span className="hidden sm:inline">|</span>
                <span>PRODUCTION</span>
                <span className="hidden sm:inline">|</span>
                <span>INCOME</span>
                <span className="hidden sm:inline">|</span>
                <span>ENTERPRISE</span>
                <span className="hidden sm:inline">|</span>
                <span>OWNERSHIP</span>
            </div>
        </section>
    );
}
