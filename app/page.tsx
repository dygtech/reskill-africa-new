import StoryboardSection from "@/components/home/StoryboardSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ConnectionSection } from "@/components/home/ConnectionSection";
import { SkildustrySection } from "@/components/home/SkildustrySection";
import { RSAStandardSection } from "@/components/home/RSAStandardSection";
import { WhatToBuildSection } from "@/components/home/WhatToBuildSection";
import { IDiceSouthEastSection } from "@/components/home/IDiceSouthEastSection";
import { BuildOpportunitySection } from "@/components/home/BuildOpportunitySection";
import { ProductivityPipelineSection } from "@/components/home/ProductivityPipelineSection";
import { ProofSection } from "@/components/home/ProofSection";
import { VisionSection } from "@/components/home/VisionSection";
import { FutureCTASection } from "@/components/home/FutureCTASection";
import { NewFooter } from "@/components/NewFooter";

export default function Home() {
  return (
    <main className="bg-rsa-black">
      <StoryboardSection>
        {/* This foreground layer scrolls over the final sticky storyboard frame. */}
        <div id="home-main" className="relative z-10 w-full bg-rsa-black shadow-[0_-24px_50px_rgba(0,0,0,0.35)]">
          <HeroSection />

          {/* 3. The rest of the site */}
          <div className="relative z-20 w-full bg-background">
            <ConnectionSection />
            <SkildustrySection />
            <RSAStandardSection />
            <WhatToBuildSection />
            <IDiceSouthEastSection />
            <BuildOpportunitySection />
            <ProductivityPipelineSection />
            <ProofSection />
            <VisionSection />
            <FutureCTASection />
            {/* <NewFooter /> */}
          </div>
        </div>
      </StoryboardSection>
    </main>
  );
}
