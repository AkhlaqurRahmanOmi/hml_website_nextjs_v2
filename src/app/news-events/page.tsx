"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { newsEvents } from "@/data/newsEvents";
import { Footer } from "@/components/Global/footer";
// import { ContactHero } from "@/components/contact/ContactHero";

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

export default function NewsEventsPage() {
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
    <main className="min-h-screen bg-white">
      <section className="mx-auto w-[95%] px-4 sm:px-6 lg:px-8 py-10 pt-24 sm:pt-28 lg:pt-32 lg:pb-12 font-helveticaneue">
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

        <div className="relative mt-6 border border-slate-200 border-l-0 border-t-0 border-b-0 p-6 sm:p-8">
          <div className="absolute inset-0 bg-[url('/images/world-map-dots.jpeg')] bg-no-repeat bg-center [background-size:115%_115%] opacity-80 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[6px] bg-[#c9d6e3]" />
          <div className="absolute right-[1px] top-6 h-14 w-[4px] rounded-full bg-[#0b4b73]" />

          <div className="relative">
            {view === "list" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {sortedEvents.map((event) => {
                  const imageSrc = event.image || event.images?.[0];
                  const hasImage =
                    typeof imageSrc === "string"
                      ? imageSrc !== "/placeholder.svg"
                      : Boolean(imageSrc);
                  const imageAlt = event.title;
                  return (
                    <article key={event.id} className="text-center">
                      <div className="relative w-full aspect-[3/2] overflow-hidden">
                        {hasImage ? (
                          <Image
                            src={imageSrc as string}
                            alt={imageAlt}
                            fill
                            sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gray-200 px-2 text-center text-[11px] font-semibold uppercase tracking-wide text-[#6b7d90] leading-tight">
                            {imageAlt}
                          </div>
                        )}
                        <div className="absolute left-0 top-0 bg-[#0b4b73] text-white text-base px-3.5 py-2">
                          <span className="font-black">{event.date.month}</span>{" "}
                          <span className="font-normal">{event.date.day}</span>
                        </div>
                      </div>

                      <h3 className="mt-3 text-sm font-black text-[#094d82] uppercase">
                        {event.title}
                      </h3>
                      {event.subtitle && (
                        <p className="mt-1 text-xs font-medium text-black">
                          {event.subtitle}
                        </p>
                      )}
                      <Link
                        href={`/news-events/${event.id}`}
                        className="inline-flex mt-2 text-xs font-semibold text-[#2b3f52]"
                      >
                        Learn More
                      </Link>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-6">
                {Object.entries(groupedByMonth).map(([month, monthEvents]) => (
                  <div key={month}>
                    <div className="text-sm font-bold uppercase text-[#0b4b73]">
                      {month}
                    </div>
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                      {monthEvents.map((event) => {
                        const imageSrc = event.image || event.images?.[0];
                        const hasImage =
                          typeof imageSrc === "string"
                            ? imageSrc !== "/placeholder.svg"
                            : Boolean(imageSrc);
                        const imageAlt = event.title;
                        return (
                          <article key={event.id} className="text-center">
                            <div className="relative w-full aspect-[3/2] overflow-hidden">
                              {hasImage ? (
                                <Image
                                  src={imageSrc as string}
                                  alt={imageAlt}
                                  fill
                                  sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                                  className="object-cover"
                                />
                              ) : (
                                <div className="flex h-full w-full items-center justify-center bg-gray-200 px-2 text-center text-[11px] font-semibold uppercase tracking-wide text-[#6b7d90] leading-tight">
                                  {imageAlt}
                                </div>
                              )}
                              <div className="absolute left-0 top-0 bg-[#0b4b73] text-white text-base px-3.5 py-2">
                                <span className="font-black">{event.date.month}</span>{" "}
                                <span className="font-normal">{event.date.day}</span>
                              </div>
                            </div>

                            <h3 className="mt-3 text-sm font-black text-[#094d82] uppercase">
                              {event.title}
                            </h3>
                            {event.subtitle && (
                              <p className="mt-1 text-xs font-medium text-black">
                                {event.subtitle}
                              </p>
                            )}
                            <Link
                              href={`/news-events/${event.id}`}
                              className="inline-flex mt-2 text-xs font-semibold text-[#2b3f52]"
                            >
                              Learn More
                            </Link>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
