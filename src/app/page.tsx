"use client";

import { HomeHero } from "@/components/home/Hero";
import { HomeFleetOverview } from "@/components/home/FleetOverview";
import { HomeCrossMarketReachSection } from "@/components/home/CrossMarketReach";
import { HomeProjectOverview } from "@/components/home/ProjectOverview";
import NextProject from "@/components/home/NextProject";
import FullPageWrapper from "@/utils/FullPageWrapper";

export default function Home() {
  return (
    <FullPageWrapper>
      <div className="section">
        <HomeHero />
      </div>
      <div className="section">
        <HomeFleetOverview />
      </div>
      {/* this is a test */}
      <div className="section">
        <HomeCrossMarketReachSection />
      </div>
      <div className="section">
        <HomeProjectOverview />
      </div>
      <div className="section">
        <NextProject />
      </div>
    </FullPageWrapper>
  );
}
