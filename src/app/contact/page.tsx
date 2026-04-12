import { ContactMap } from "@/components/contact/ContactMap";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "CONTACT - HML"
}

export default function contactpage() {
    return (
        <main className="pt-16 md:pt-20">
            <ContactMap />
            <Footer/> */}
            {/* <div className="min-w-full h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory flex flex-col hide-scrollbar">
                <section className="snap-always snap-start h-screen">
                    <ContactHero />
                </section>
                <section className="snap-always snap-start h-screen">
                    <ContactMap />
                </section>
            </div> */}
            <FullPageWrapper>
                {/* <div className="section">
                    <ContactHero />
                </div> */}
                <div className="section">
                    <ContactMap />
                </div>
            </FullPageWrapper>
        </>
    )
}
