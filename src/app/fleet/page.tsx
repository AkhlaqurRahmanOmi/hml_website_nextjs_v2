import { FleetPage } from "@/components/fleet/Fleet"
import { Metadata } from "next"
import FullPageWrapper from "@/utils/FullPageWrapper"

export const metadata: Metadata = {
    title: "FLEET - HML"
}
export default function fleetpage() {
    return (
        <FullPageWrapper>
            <div className="section">
                <FleetPage />
            </div>
        </FullPageWrapper>
    )
}