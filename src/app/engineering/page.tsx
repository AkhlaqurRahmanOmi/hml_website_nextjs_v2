
import { EngineeringStandards } from "@/components/engineering/EngineeringStandards";
import { EngineeringWorkGallary } from "@/components/engineering/EngineeringWorkGallary";
import { EngineeringHero } from "@/components/engineering/Hero";
import { EngineeringWorkFlow } from "@/components/engineering/WorkFlow";
import { Metadata } from "next";
import FullPageWrapper from "@/utils/FullPageWrapper";

export const metadata: Metadata = {
    title: "ENGINEERING - HML"
}
export default function engineeringPage() {
    return (
        <>
            {/* <EngineeringHero />
            <EngineeringWorkFlow />
            <EngineeringWorkGallary />
            <EngineeringStandards /> */}
            {/* <div className="min-w-full h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory flex flex-col hide-scrollbar">
                <section className="snap-always snap-start h-screen">
                    <EngineeringHero />
                </section>
                <section className="snap-always snap-start h-screen">
                    <EngineeringWorkFlow />
                </section>
                <section className="snap-always snap-start h-screen">
                    <EngineeringWorkGallary />
                </section>
                <section className="snap-always snap-start h-screen">
                    <EngineeringStandards />
                </section>
            </div> */}


            <FullPageWrapper>
                <div className="section">
                    <EngineeringHero />
                </div>
                <div className="section">
                    <EngineeringWorkFlow />
                </div>
                <div className="section">
                    <EngineeringWorkGallary />
                </div>
                <div className="section">
                    <EngineeringStandards />
                </div>
            </FullPageWrapper>
        </>
    )
}

