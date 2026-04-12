import { ContactMap } from "@/components/contact/ContactMap";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "CONTACT - HML"
}

export default function contactpage() {
    return (
        <main className="pt-16 md:pt-20">
            <ContactMap />
        </main>
    )
}