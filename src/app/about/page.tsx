import { CompnayHistory } from "@/components/about/CompanyHistory";
import { AboutHero } from "@/components/about/Hero";
import MissionVision from "@/components/about/MissionVision";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ABOUT - HML"
}

export default function aboutPage() {
    return (
        <main className="flex flex-col">
            <AboutHero />
            <MissionVision />
            <CompnayHistory />
        </main>
    )
}

