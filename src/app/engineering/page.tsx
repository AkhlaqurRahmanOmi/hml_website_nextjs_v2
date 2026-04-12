
import { EngineeringStandards } from "@/components/engineering/EngineeringStandards";
import { EngineeringWorkGallary } from "@/components/engineering/EngineeringWorkGallary";
import { EngineeringHero } from "@/components/engineering/Hero";
import { EngineeringWorkFlow } from "@/components/engineering/WorkFlow";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ENGINEERING - HML"
}
export default function engineeringPage() {
    return (
        <main className="flex flex-col">
            <EngineeringHero />
            <div className="-mt-6 md:-mt-12">
                <EngineeringWorkFlow />
            </div>
            <EngineeringWorkGallary />
            <EngineeringStandards />
        </main>
    )
}

