"use client";

import { HomeHero } from "@/components/home/Hero";
import { HomeFleetOverview } from "@/components/home/FleetOverview";
import { HomeCrossMarketReachSection } from "@/components/home/CrossMarketReach";
import { HomeProjectOverview } from "@/components/home/ProjectOverview";
import LatestNews from "@/components/home/LatestNews";
import FullPageWrapper from "@/utils/FullPageWrapper";
import {
  HOME_FLEET_SECTION,
  HOME_LATEST_NEWS_SECTION,
  HOME_PROJECT_SECTION,
} from "@/utils/homeSections";

const homeRestoreSections = {
  [HOME_FLEET_SECTION]: 2,
  [HOME_PROJECT_SECTION]: 4,
  [HOME_LATEST_NEWS_SECTION]: 5,
};

export default function Home() {
  return (
    <FullPageWrapper restoreSections={homeRestoreSections}>
      <div className="section">
        <HomeHero />
      </div>
      <div className="section">
        <HomeFleetOverview />
      </div>
      <div className="section">
        <HomeCrossMarketReachSection />
      </div>
      <div className="section">
        <HomeProjectOverview />
      </div>
      <div className="section">
        <LatestNews />
      </div>
    </FullPageWrapper>
  );
}
