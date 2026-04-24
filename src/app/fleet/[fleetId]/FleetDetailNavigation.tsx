"use client";

import { useSearchParams } from "next/navigation";
import FleetDetailNavigationShell from "./FleetDetailNavigationShell";
import { HOME_RETURN_QUERY_KEY } from "@/utils/homeSections";

type FleetDetailNavigationProps = {
  prevFleetId?: string;
  nextFleetId?: string;
};

const getSafeReturnTo = (returnTo?: string | null) => {
  if (!returnTo || !returnTo.startsWith("/") || returnTo.startsWith("//")) {
    return "/fleet";
  }

  return returnTo;
};

export default function FleetDetailNavigation({
  prevFleetId,
  nextFleetId,
}: FleetDetailNavigationProps) {
  const searchParams = useSearchParams();
  const returnTo = getSafeReturnTo(searchParams.get(HOME_RETURN_QUERY_KEY));

  return (
    <FleetDetailNavigationShell
      returnTo={returnTo}
      prevFleetId={prevFleetId}
      nextFleetId={nextFleetId}
    />
  );
}
