import Image from "next/image";
import { ArrowLink, SectionLabel } from "@/components/ui/SharedUI";

const proofCards = [
  {
    tag: "iDICE",
    tagSub: "SOUTH EAST",
    title: "Live Implementation",
    image: "/images/about-section-1.webp",
  },
  {
    tag: "KABILANA",
    tagSub: "",
    title: "Post RSA Proof Zone",
    image: "/images/about-section-5.webp",
  },
];

export function ProofSection() {
  return (
    <section className="w-full bg-[#fdfdfd] py-20 md:py-28 overflow-hidden border-b border-rsa-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
        <SectionLabel number="09">PROOF</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
          {/* Left: Stats */}
          <div>
            <h2 className="text-rsa-black text-[40px] sm:text-[48px] md:text-[56px] font-bold leading-[1.05] tracking-[-0.03em] mb-12">
              From proposition
              <br />
              to <span className="text-rsa-red">proof.</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-6">
              {/* Stat 1 */}
              <div>
                <span className="text-[48px] md:text-[56px] font-bold text-rsa-black leading-none tracking-tight">
                  8,000
                </span>
                <p className="text-rsa-black text-[14px] leading-relaxed mt-2 max-w-[200px] font-medium">
                  Connected to work through prior programme experience.*
                </p>
              </div>
              {/* Stat 2 */}
              <div>
                <span className="text-[48px] md:text-[56px] font-bold text-rsa-black leading-none tracking-tight">
                  72%
                </span>
                <p className="text-rsa-black text-[14px] leading-relaxed mt-2 max-w-[200px] font-medium">
                  Women among those outcomes.*
                </p>
              </div>
            </div>

            <ArrowLink href="/projects" color="red" className="!text-[12px] mb-4">
              VIEW OUR WORK ↗
            </ArrowLink>
            <p className="text-[10px] text-rsa-gray-400 mt-2">*Source and context to be supplied</p>
          </div>

          {/* Right: Proof cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-full items-end pb-8">
            <div className="relative rounded-md overflow-hidden bg-rsa-gray-100 aspect-square">
                {/* Simulated map background for iDICE */}
                <div className="absolute inset-0 bg-[#e8e8e8] flex items-center justify-center text-rsa-gray-300">
                   Map Placeholder
                </div>
                <div className="absolute top-5 left-5 right-5 z-10">
                  <span className="text-rsa-black text-[13px] font-bold tracking-[0.08em] uppercase block">
                    iDICE<br/>SOUTH EAST
                  </span>
                  <p className="text-rsa-gray-600 text-[12px] mt-1 font-medium">Live Implementation.</p>
                </div>
            </div>

            <div className="relative rounded-md overflow-hidden bg-rsa-gray-100 aspect-square">
                <Image
                  src="/images/about-section-5.webp"
                  alt="KEBULANIA"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <span className="text-white text-[13px] font-bold tracking-[0.08em] uppercase block">
                    KEBULANIA
                  </span>
                  <p className="text-white/90 text-[12px] mt-1 font-medium">First RSA Proof Zone.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
