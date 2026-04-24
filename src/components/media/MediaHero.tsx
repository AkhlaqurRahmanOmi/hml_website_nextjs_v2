"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaDownload, FaPlay } from "react-icons/fa6";
import BrochureThumbnail from "../../assets/Contact/BrochureProfileImage.webp";
import BackgroundImage from "../../assets/Contact/HeroImage.webp";

const videoItems = [
  {
    url: "https://youtu.be/XvJzr7KGHGE?si=hPt-P-KnlSR5tGtf",
    caption: "Certified Excellent Shipping Company (CESS) by KOBC",
  },
  {
    url: "https://youtu.be/5_nIWxfYQFs?si=tEMxUCC-bsFBHmjG",
    caption: "Introducing Our Vessels—Mega Caravan & Mega Caravan 2",
  },
  {
    url: "https://youtu.be/VJfGfXICVGU?si=rYdYgfZRQKs-Vn4H",
    caption: "HML 16th Anniversary",
  },
  {
    url: "https://youtu.be/fzpXsJbiZnE?si=hn0PSlmEnkHbA6q2",
    caption: "Petrobras P78 FPSO Topside Module Transportation Project by HML",
  },
  {
    url: "https://youtu.be/npUCdVeALwM?si=5I647Mz0uRNK-riM",
    caption: "Successful completion of Marjan Project",
  },
  {
    url: "https://youtu.be/E2L_AYqTRyw?si=Fngs64ot7NKEBkAm",
    caption: "HI-MEGALINE New Logo Intro",
  },
  {
    url: "https://youtu.be/bPI7AO1OO6I?si=NtphxcNpPTczMy3z",
    caption: "New Logo Intro of HI-MEGALINE",
  },
];

const getYouTubeId = (url: string) => {
  const match = url.match(/youtu\.be\/([A-Za-z0-9_-]+)/);
  return match ? match[1] : "";
};

export const MediaHero = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const videos = useMemo(
    () =>
      videoItems.map((item) => {
        const id = getYouTubeId(item.url);
        return {
          ...item,
          id,
          thumbnail: id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "",
        };
      }),
    []
  );

  const getRowDividerClass = (index: number) => {
    const classes = ["pt-4"];

    if (index >= 1) {
      classes.push("border-t", "border-[#094d82]/20");
    }

    if (index < 2) {
      classes.push("sm:border-t-0", "sm:pt-0");
    }

    if (index >= 2) {
      classes.push("sm:border-t", "sm:border-[#094d82]/20", "sm:pt-4");
    }

    if (index < 3) {
      classes.push("lg:border-t-0", "lg:pt-0");
    }

    if (index >= 3) {
      classes.push("lg:border-t", "lg:border-[#094d82]/20", "lg:pt-4");
    }

    if (index < 4) {
      classes.push("xl:border-t-0", "xl:pt-0");
    }

    if (index >= 4) {
      classes.push("xl:border-t", "xl:border-[#094d82]/20", "xl:pt-4");
    }

    return classes.join(" ");
  };

  const mediaItems = [
    {
      type: "brochure" as const,
      key: "brochure",
      caption: "HML Brochure",
    },
    ...videos.map((video) => ({
      type: "video" as const,
      key: video.url,
      ...video,
    })),
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Image
        src={BackgroundImage}
        alt="Ship Blueprint"
        fill
        className="object-cover z-0"
        loading="lazy"
      />

      <div className="relative z-10 flex w-full flex-col items-start justify-between gap-6 px-4 py-24 md:px-10 lg:px-16">
        <motion.div
          className="w-full font-opensans"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-2 mt-2 xl:mt-10">
            <span className="text-2xl md:text-4xl lg:text-6xl font-semibold text-[#094d82] leading-tight text-nowrap">
              DISCOVER MORE <span className="font-extrabold">ABOUT US</span>
            </span>
          </h1>
        </motion.div>

        <div className="mt-2 w-full border-b border-[#094d82]/30 pb-6">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mediaItems.map((item, index) => {
              if (item.type === "brochure") {
                return (
                  <div key={item.key} className={`w-full ${getRowDividerClass(index)}`}>
                    <a
                      href="/HML Brochure.pdf"
                      target="_blank"
                      download
                      className="group block"
                    >
                      <div className="relative aspect-video w-full overflow-hidden shadow-lg">
                        <Image
                          src={BrochureThumbnail}
                          alt="HML Brochure"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/35 transition-colors group-hover:bg-black/45">
                          <span className="bg-white px-4 py-2 font-bold text-[#094d82] shadow-lg flex items-center gap-2">
                            <FaDownload />
                            Download Brochure
                          </span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm font-medium text-[#094d82]">
                        {item.caption}
                      </p>
                    </a>
                  </div>
                );
              }

              const isActive = item.id === activeVideoId;

              return (
                <div key={item.key} className={`w-full ${getRowDividerClass(index)}`}>
                  <button
                    type="button"
                    onClick={() => setActiveVideoId(item.id)}
                    className={`group relative aspect-video w-full overflow-hidden shadow-lg transition-colors ${
                      isActive ? "ring-2 ring-[#0b4b73]" : ""
                    }`}
                  >
                    {isActive ? (
                      <iframe
                        className="h-full w-full"
                        src={`https://www.youtube.com/embed/${item.id}?autoplay=1&rel=0`}
                        title={item.caption}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : item.thumbnail ? (
                      <>
                        <Image
                          src={item.thumbnail}
                          alt={item.caption}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/35 transition-colors group-hover:bg-black/45">
                          <FaPlay className="text-3xl text-white" />
                        </div>
                      </>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-200 text-xs font-semibold text-[#6b7d90]">
                        Video
                      </div>
                    )}
                  </button>

                  <p className="mt-2 text-sm font-medium text-[#094d82]">
                    {item.caption}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
