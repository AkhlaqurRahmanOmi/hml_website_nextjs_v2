import { ContactMap } from "@/components/contact/ContactMap";
import FullPageWrapper from "@/utils/FullPageWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "CONTACT - HML",
};

export default function contactpage() {
    return (
        <FullPageWrapper>
            <div className="section">
                <ContactMap />
            </div>
        </FullPageWrapper>
    );
}
