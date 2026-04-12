"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { NewsEvent } from "@/data/newsEvents";

type Props = {
  event: NewsEvent;
};

const NewsEventDetailClient = ({ event }: Props) => {
  const images = useMemo(
    () => (event.images && event.images.length ? event.images : event.image ? [event.image] : []),
    [event.images, event.image]
  );

  const [activeImage, setActiveImage] = useState(images[0] ?? null);

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-6 items-start">
      <div className="relative w-full aspect-[3/2] overflow-hidden lg:top-6">
        {(() => {
          const imageSrc = activeImage ?? event.image ?? event.images?.[0];
          const hasImage =
            typeof imageSrc === "string"
              ? imageSrc !== "/placeholder.svg"
              : Boolean(imageSrc);
          return hasImage ? (
            <Image
              src={imageSrc as string}
              alt={event.title}
              fill
              sizes="(min-width:1024px) 60vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-200 px-2 text-center text-[11px] font-semibold uppercase tracking-wide text-[#6b7d90] leading-tight">
              {event.title}
            </div>
          );
        })()}
        <div className="absolute left-0 top-0 bg-[#0b4b73] text-white text-base px-3.5 py-2">
          <span className="font-black">{event.date.month}</span>{" "}
          <span className="font-normal">{event.date.day}</span>
        </div>
      </div>

      <div>
        <h2 className="text-2xl mt-4 sm:text-3xl font-black text-[#094d82] uppercase">
          {event.title}
        </h2>
        <div className="mt-2 max-h-[60vh] overflow-y-auto pr-6 sm:pr-8 -mr-6 sm:-mr-8 custom-scrollbar">
          {event.subtitle && (
            <p className="text-sm text-black font-medium">
              {event.subtitle}
            </p>
          )}
          <p className="mt-4 text-sm font-normal leading-relaxed text-[#2b3f52] whitespace-pre-line text-justify">
            {event.body}
          </p>
        </div>
      </div>

      {images.length > 1 && (
        <div className="relative z-0 mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:col-span-2">
          {images.map((src, idx) => {
            const isActive = activeImage === src;
            return (
              <button
                key={`${event.id}-img-${idx}`}
                type="button"
                onClick={() => setActiveImage(src)}
                className={`relative aspect-square overflow-hidden border transition-colors ${isActive ? "border-[#0b4b73]" : "border-transparent"}`}
                aria-label={`Show image ${idx + 1}`}
              >
                <Image
                  src={src}
                  alt={`${event.title} image ${idx + 1}`}
                  fill
                  sizes="(min-width:1024px) 12vw, (min-width:640px) 20vw, 50vw"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NewsEventDetailClient;
