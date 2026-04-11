import { CompnayHistory } from "@/components/about/CompanyHistory";
import { AboutHero } from "@/components/about/Hero";
import MissionVision from "@/components/about/MissionVision";
import { Metadata } from "next";
import FullPageWrapper from "@/utils/FullPageWrapper";

export const metadata: Metadata = {
    title: "ABOUT - HML"
}

export default function aboutPage() {
    return (
        <FullPageWrapper>
            <div className="section">
                 <AboutHero />
            </div>
            <div className="section">
                <MissionVision />
            </div>
            <div className="section">
                <CompnayHistory />
            </div>
        </FullPageWrapper>
    )
}

