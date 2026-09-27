import Image from "next/image";
import { RedButton, SectionLabel } from "@/components/ui/SharedUI";

export function FutureCTASection() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-rsa-black">
      <Image
        src="/images/about-section-5.webp"
        alt="Construction site"
        fill
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
        <SectionLabel number="10" className="!text-white/50">THE FUTURE</SectionLabel>
        <h2 className="text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-[1.05] tracking-[-0.03em] mb-4 max-w-2xl">
          The future of work will be global.
          <br />
          Africa must be ready to <span className="text-rsa-red">build it.</span>
        </h2>
        
        <div className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase mb-8">
          GOVERNMENTS • INDUSTRY • INTERNATIONAL PARTNERS • DFIS • TECHNOLOGY • CAPITAL
        </div>
        
        <p className="text-white/90 text-[18px] md:text-[20px] font-bold leading-relaxed max-w-2xl mb-10">
          Let&apos;s build the infrastructure for human productivity.
        </p>
        <RedButton href="/partner-with-us" variant="filled" className="px-8 py-4">
          PARTNER WITH RSA ↗
        </RedButton>
      </div>
    </section>
  );
}
