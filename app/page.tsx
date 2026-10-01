import StoryboardSection from "@/components/home/StoryboardSection";
import { ConnectionSection } from "@/components/home/ConnectionSection";
import { SkildustrySection } from "@/components/home/SkildustrySection";
import { RSAStandardSection } from "@/components/home/RSAStandardSection";
import { WhatToBuildSection } from "@/components/home/WhatToBuildSection";
import { IDiceSouthEastSection } from "@/components/home/IDiceSouthEastSection";
import { BuildOpportunitySection } from "@/components/home/BuildOpportunitySection";
import { ProductivityPipelineSection } from "@/components/home/ProductivityPipelineSection";
import { ProofSection } from "@/components/home/ProofSection";
import { FutureCTASection } from "@/components/home/FutureCTASection";
import { NewFooter } from "@/components/NewFooter";

export default function Home() {
  return (
    <>
      {/* StoryboardSection now internally handles HeroSection to ensure a perfectly seamless crossfade */}
      <StoryboardSection />
      
      <ConnectionSection />
      <SkildustrySection />
      <RSAStandardSection />
      <WhatToBuildSection />
      <IDiceSouthEastSection />
      <BuildOpportunitySection />
      <ProductivityPipelineSection />
      <ProofSection />
      <FutureCTASection />
      {/* <NewFooter /> */}
    </>
  );
}
