import Link from "next/link";
import { FaAngleLeft, FaAngleRight, FaXmark } from "react-icons/fa6";
import { HOME_RETURN_QUERY_KEY } from "@/utils/homeSections";

type FleetDetailNavigationShellProps = {
  returnTo: string;
  prevFleetId?: string;
  nextFleetId?: string;
};

export default function FleetDetailNavigationShell({
  returnTo,
  prevFleetId,
  nextFleetId,
}: FleetDetailNavigationShellProps) {
  return (
    <>
      <Link
        href={returnTo}
        aria-label="Close fleet details"
        title="Close"
        className="fixed right-4 top-[15%] z-[60] inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#094d82]/20 bg-white text-[#094d82] shadow-md transition hover:bg-[#f3f8fc] md:right-[5%]"
      >
        <FaXmark className="text-xl" />
      </Link>

      <div className="flex justify-between px-[5%] pt-[5%]">
        {prevFleetId ? (
          <Link
            href={{
              pathname: `/fleet/${prevFleetId}`,
              query: {
                [HOME_RETURN_QUERY_KEY]: returnTo,
              },
            }}
            className="flex"
          >
            <FaAngleLeft className="text-3xl lg:text-7xl text-[#094e82be] wave" />
            <FaAngleLeft className="-ml-12 text-3xl lg:text-7xl text-[#094e827e] wave" />
            <FaAngleLeft className="-ml-12 text-3xl lg:text-7xl text-[#094e824d] wave" />
          </Link>
        ) : (
          <div />
        )}

        <div />

        {nextFleetId ? (
          <Link
            href={{
              pathname: `/fleet/${nextFleetId}`,
              query: {
                [HOME_RETURN_QUERY_KEY]: returnTo,
              },
            }}
            className="flex"
          >
            <FaAngleRight className="-mr-12 text-3xl lg:text-7xl text-[#094e824d] wave" />
            <FaAngleRight className="-mr-12 text-3xl lg:text-7xl text-[#094e827e] wave" />
            <FaAngleRight className="text-3xl lg:text-7xl text-[#094e82be] wave" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </>
  );
}
