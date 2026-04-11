// components/home/FleetOverview.tsx
"use client";

import { PiLineVertical } from "react-icons/pi";
import Link from "next/link";
import { FaShip } from "react-icons/fa6";
import HeroVideoWithFallback from "../../utils/HeroVideoWithFallback";

export const FleetData = [
  {
    title: "OUR \nVESSELS",
    vessels: [
      { vesselName: "MEGA CARAVAN", vecelID: "megacaravan" },
      { vesselName: "MEGA CARAVAN2", vecelID: "megacaravan2" },
    ],
  },
  {
    title: "OUR \nPARTNER VESSELS",
    vessels: [
      { vesselName: "MEGA TRUST", vecelID: "megatrust" },
      { vesselName: "MEGA PASSION", vecelID: "megapassion" },
    ],
  },
  {
    title: "OUR LONG-TERM \nCHARTERING VESSEL",
    vessels: [{ vesselName: "Chang Yang Dong Fang", vecelID: "changYangDongFang" }],
  },
];

export const HomeFleetOverview = () => {
  return (
    <section className="relative h-screen">
      <div className="relative h-full w-full overflow-hidden">
        {/* Full-bleed background video */}
        <HeroVideoWithFallback
          mp4Url="https://res.cloudinary.com/druseaf0p/video/upload/q_auto/f_auto/v1775795290/fleet_background_video_xrhzqb.mp4"
          webmUrl="https://res.cloudinary.com/druseaf0p/video/upload/q_auto/f_auto/v1775795290/fleet_background_video_xrhzqb.mp4"
          posterImage="https://res.cloudinary.com/dkxoyiqfj/video/upload/so_1,c_fill,w_1280,h_720/Fleet_Video2_alxqmb.jpg"
          className="-z-10"
          overlayClassName="bg-black/20"
        />

        {/* Foreground content */}
        <div className="absolute inset-0 flex flex-col items-start justify-between z-20 mt-16">
          <div className="w-full max-w-full px-4 md:px-[5%] text-center">
            <h1 className="mb-8 mt-28">
              <span
                className="font-roboto text-4xl lg:text-5xl text-white block text-start uppercase"
                style={{
                  textShadow:
                    "2px 2px 2px rgba(0, 0, 0, 1), 4px 4px 6px rgba(0, 0, 0, 0.85)",
                }}
              >
                Fleet
              </span>
              <span
                className="font-roboto text-6xl lg:text-7xl text-white block text-start uppercase"
                style={{
                  textShadow:
                    "2px 2px 2px rgba(0, 0, 0, 1), 4px 4px 8px rgba(0, 0, 0, 0.85)",
                }}
              >
                Overview
              </span>
            </h1>
          </div>

          <div className="w-full">
            <div className="flex w-full justify-center items-center">
              {FleetData.map((fleet, i) => (
                <div className="w-full" key={i}>
                  <div className="flex flex-col md:flex-row items-center space-y-2 justify-evenly w-full px-4">
                    <div className="bg-white text-white bg-opacity-20 backdrop-blur-sm rounded-t-xl px-4 py-2 w-[250px] text-center uppercase whitespace-pre-line">
                      {fleet.title}
                    </div>
                  </div>

                  <div className="w-full justify-evenly items-center flex flex-col md:flex-row space-y-2 md:space-y-0 bg-[#094d82] text-white px-4 py-4 h-16">
                    {fleet.vessels.map((vessel) => (
                      <div className="flex gap-2 lg:gap-10 justify-between" key={vessel.vecelID}>
                        <Link
                          className="uppercase flex font-normal text-base lg:text-md text-nowrap"
                          href={`/fleet/${vessel.vecelID}`}
                        >
                          <FaShip className="size-4 mt-1 mr-2" />
                          {vessel.vesselName}
                        </Link>
                      </div>
                    ))}
                    {i < FleetData.length - 1 ? (
                      <PiLineVertical className="hidden md:block size-10 font-extralight" />
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
