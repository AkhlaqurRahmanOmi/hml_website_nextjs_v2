"use client";

import Image from "next/image";
import Link from "next/link";
import { newsEvents } from "@/data/newsEvents";
import { Footer } from "@/components/Global/footer";
import { useMemo, useState } from "react";

const PAGE_SIZE = 10;
const MONTH_ORDER: Record<string, number> = {
  JAN: 1,
  FEB: 2,
  MAR: 3,
  APR: 4,
  MAY: 5,
  JUN: 6,
  JUL: 7,
  AUG: 8,
  SEP: 9,
  OCT: 10,
  NOV: 11,
  DEC: 12,
};

const NextProject = () => {
  const events = newsEvents.slice(0, PAGE_SIZE);
  const [view, setView] = useState<"list" | "month">("list");

  const sortedEvents = useMemo(() => {
    return [...events].sort((a, b) => {
      const aMonth = MONTH_ORDER[a.date.month] ?? 0;
      const bMonth = MONTH_ORDER[b.date.month] ?? 0;
      const aDay = Number(a.date.day) || 0;
      const bDay = Number(b.date.day) || 0;
      if (aMonth !== bMonth) return bMonth - aMonth;
      return bDay - aDay;
    });
  }, [events]);

  const groupedByMonth = useMemo(() => {
    return sortedEvents.reduce<Record<string, typeof sortedEvents>>((acc, ev) => {
      const key = ev.date.month;
      acc[key] = acc[key] ? [...acc[key], ev] : [ev];
      return acc;
    }, {});
  }, [sortedEvents]);

  return (
    <section className="font-helveticaneue">
      <div className="mx-auto w-[95%] px-4 sm:px-6 lg:px-8 py-10 pt-24 sm:pt-28 lg:pt-32 lg:pb-12">
        <div className="flex items-start justify-between">
          <h1 className="text-3xl sm:text-4xl font-black tracking-wide text-[#094d82] uppercase">
            LATEST NEWS
          </h1>

          <div className="flex items-center gap-6 text-[#7a8ea3] text-xs font-semibold">
            <button
              type="button"
              onClick={() => setView("list")}
              className={`flex items-center gap-2 transition-colors ${view === "list" ? "text-[#0b4b73]" : ""}`}
              aria-pressed={view === "list"}
            >
              <span className="inline-flex h-4 w-4 flex-col justify-between">
                <span className="block h-[2px] bg-current" />
                <span className="block h-[2px] bg-current" />
                <span className="block h-[2px] bg-current" />
              </span>
              LIST
            </button>
            <button
              type="button"
              onClick={() => setView("month")}
              className={`flex items-center gap-2 transition-colors ${view === "month" ? "text-[#0b4b73]" : ""}`}
              aria-pressed={view === "month"}
            >
              <span className="grid h-4 w-4 grid-cols-2 gap-[2px]">
                <span className="block h-[5px] w-[5px] bg-current" />
                <span className="block h-[5px] w-[5px] bg-current" />
                <span className="block h-[5px] w-[5px] bg-current" />
                <span className="block h-[5px] w-[5px] bg-current" />
              </span>
              MONTH
            </button>
          </div>
        </div>

        <div className="relative mt-6 border border-slate-200 border-l-0 bg-white p-2">
          <div className="absolute inset-0 bg-[url('/images/world-map-dots.jpeg')] bg-no-repeat bg-center [background-size:115%_115%] opacity-80 pointer-events-none" />

          <div className="relative divide-y divide-slate-200 max-h-[70vh] overflow-y-auto pr-4 -mr-4 sm:pr-6 sm:-mr-6 lg:pr-2 lg:-mr-2 custom-scrollbar">
            {view === "list" ? (
              sortedEvents.map((event) => {
                const imageSrc = event.image || event.images?.[0];
                const hasImage =
                  typeof imageSrc === "string"
                    ? imageSrc !== "/placeholder.svg"
                    : Boolean(imageSrc);
                const imageAlt = event.title;
                const preview = event.body.replace(/\s+/g, " ").slice(0, 220).trim();
                return (
                  <article
                    key={event.id}
                    className="grid grid-cols-1 gap-y-4 gap-x-6 py-4 sm:gap-y-4 sm:gap-x-6 lg:grid-cols-[12%_23%_60%] lg:items-start"
                  >
                    <div className="text-[#0b4b73] text-left lg:text-center my-auto">
                      <div className="text-xl font-extrabold uppercase">{event.date.month}</div>
                      <div className="text-lg font-light leading-none">{event.date.day}</div>
                    </div>

                    <div className="relative w-full h-32 sm:h-36 overflow-hidden border border-slate-200 bg-white">
                      {hasImage ? (
                        <Image
                          src={imageSrc as string}
                          alt={imageAlt}
                          fill
                          sizes="(min-width:1024px) 220px, (min-width:640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gray-200 px-2 text-center text-[11px] font-semibold uppercase tracking-wide text-[#6b7d90] leading-tight">
                          {imageAlt}
                        </div>
                      )}
                    </div>

                    <div className="text-left lg:ml-12">
                      <h3 className="text-sm font-black uppercase text-[#094d82]">
                        {event.title}
                      </h3>
                      {event.subtitle && (
                        <p className="text-xs font-medium text-black">
                          {event.subtitle}
                        </p>
                      )}
                      {preview && (
                        <p className="mt-2 text-xs font-normal leading-relaxed text-[#2b3f52] text-justify">
                          {preview}...
                        </p>
                      )}
                      <Link
                        href={`/news-events/${event.id}`}
                        className="mt-2 inline-flex text-xs font-semibold text-[#2b3f52]"
                      >
                        Learn More
                      </Link>
                    </div>
                  </article>
                );
              })
            ) : (
              Object.entries(groupedByMonth).map(([month, monthEvents]) => (
                <div key={month} className="py-4">
                  <div className="text-sm font-bold uppercase text-[#0b4b73]">
                    {month}
                  </div>
                  <div className="mt-3 divide-y divide-slate-200">
                    {monthEvents.map((event) => {
                      const imageSrc = event.image || event.images?.[0];
                      const hasImage =
                        typeof imageSrc === "string"
                          ? imageSrc !== "/placeholder.svg"
                          : Boolean(imageSrc);
                      const imageAlt = event.title;
                      const preview = event.body.replace(/\s+/g, " ").slice(0, 220).trim();
                      return (
                        <article
                          key={event.id}
                          className="grid grid-cols-1 gap-y-4 gap-x-6 py-3 sm:gap-y-4 sm:gap-x-6 lg:grid-cols-[12%_23%_60%] lg:items-start"
                        >
                          <div className="text-[#0b4b73] text-left lg:text-center my-auto">
                            <div className="text-base font-bold uppercase">{event.date.month}</div>
                            <div className="text-lg font-light leading-none">{event.date.day}</div>
                          </div>

                          <div className="relative w-full h-32 sm:h-36 overflow-hidden border border-slate-200 bg-white">
                            {hasImage ? (
                              <Image
                                src={imageSrc as string}
                                alt={imageAlt}
                                fill
                                sizes="(min-width:1024px) 220px, (min-width:640px) 50vw, 100vw"
                                className="object-cover"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-gray-200 px-2 text-center text-[11px] font-semibold uppercase tracking-wide text-[#6b7d90] leading-tight">
                                {imageAlt}
                              </div>
                            )}
                          </div>

                          <div className="text-left lg:ml-12">
                            <h3 className="text-sm font-black uppercase text-[#094d82]">
                              {event.title}
                            </h3>
                            {event.subtitle && (
                              <p className="mt-1 text-xs font-medium text-black">
                                {event.subtitle}
                              </p>
                            )}
                            {preview && (
                              <p className="mt-2 text-xs font-normal leading-relaxed text-[#2b3f52] text-justify">
                                {preview}...
                              </p>
                            )}
                            <Link
                              href={`/news-events/${event.id}`}
                              className="mt-2 inline-flex text-xs font-semibold text-[#2b3f52]"
                            >
                              Learn More
                            </Link>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="mt-auto relative z-10">
        <Footer />
      </div>
    </section>
  );
};

export default NextProject;
