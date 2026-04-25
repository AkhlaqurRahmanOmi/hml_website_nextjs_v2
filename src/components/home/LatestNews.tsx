"use client";

import { Footer } from "@/components/Global/footer";
import { newsEvents } from "@/data/newsEvents";
import {
  getHomeSectionHref,
  HOME_LATEST_NEWS_SECTION,
  HOME_RETURN_QUERY_KEY,
  HOME_SECTION_STORAGE_KEY,
} from "@/utils/homeSections";
import Image from "next/image";
import Link from "next/link";
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

const LatestNews = () => {
  const events = newsEvents.slice(0, PAGE_SIZE);
  const [view, setView] = useState<"list" | "month">("list");
  const returnTo = getHomeSectionHref(HOME_LATEST_NEWS_SECTION);

  const handleNewsClick = () => {
    window.sessionStorage.setItem(HOME_SECTION_STORAGE_KEY, HOME_LATEST_NEWS_SECTION);
  };

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
    <section id={HOME_LATEST_NEWS_SECTION} className="font-helveticaneue">
      <div className="mx-auto w-[95%] px-4 py-10 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32 lg:pb-12">
        {/* <div className="block md:flex items-start justify-between ">
          <h1 className="text-2xl md:text-3xl font-black tracking-wide text-[#094d82] uppercase ">
            LATEST NEWS
          </h1>

          <div className="flex items-center gap-6 text-xs font-semibold text-[#7a8ea3]">
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
        </div> */}
        <div className="block md:flex items-start justify-between">
  {/* Heading: বড় স্ক্রিনে যেমন ছিল তেমনই থাকবে */}
  <h1 className="text-2xl md:text-3xl font-black tracking-wide text-[#094d82] uppercase">
    LATEST NEWS
  </h1>

  
  <div className="flex items-center justify-end md:justify-start gap-5 text-xs font-semibold text-[#7a8ea3] mt-6  md:mt-0">
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
          <div className="pointer-events-none absolute inset-0 bg-[url('/images/world-map-dots.jpeg')] bg-center bg-no-repeat opacity-80 [background-size:115%_115%]" />

          <div className="relative custom-scrollbar max-h-[70vh] divide-y divide-slate-200 overflow-y-auto pr-4 -mr-4 sm:pr-6 sm:-mr-6 lg:pr-2 lg:-mr-2">
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
                    className="grid grid-cols-1 gap-x-6 gap-y-4 py-4 sm:gap-x-6 sm:gap-y-4 lg:grid-cols-[12%_23%_60%] lg:items-start"
                  >
                    <div className="my-auto text-left text-[#0b4b73] lg:text-center">
                      <div className="text-xl font-extrabold uppercase">{event.date.month}</div>
                      <div className="text-lg font-light leading-none">{event.date.day}</div>
                    </div>

                    <div className="relative h-32 w-full overflow-hidden border border-slate-200 bg-white sm:h-36">
                      {hasImage ? (
                        <Image
                          src={imageSrc as string}
                          alt={imageAlt}
                          fill
                          sizes="(min-width:1024px) 220px, (min-width:640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gray-200 px-2 text-center text-[11px] font-semibold uppercase tracking-wide leading-tight text-[#6b7d90]">
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
                        href={{
                          pathname: `/news-events/${event.id}`,
                          query: {
                            [HOME_RETURN_QUERY_KEY]: returnTo,
                          },
                        }}
                        onClick={handleNewsClick}
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
                          className="grid grid-cols-1 gap-x-6 gap-y-4 py-3 sm:gap-x-6 sm:gap-y-4 lg:grid-cols-[12%_23%_60%] lg:items-start"
                        >
                          <div className="my-auto text-left text-[#0b4b73] lg:text-center">
                            <div className="text-base font-bold uppercase">{event.date.month}</div>
                            <div className="text-lg font-light leading-none">{event.date.day}</div>
                          </div>

                          <div className="relative h-32 w-full overflow-hidden border border-slate-200 bg-white sm:h-36">
                            {hasImage ? (
                              <Image
                                src={imageSrc as string}
                                alt={imageAlt}
                                fill
                                sizes="(min-width:1024px) 220px, (min-width:640px) 50vw, 100vw"
                                className="object-cover"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-gray-200 px-2 text-center text-[11px] font-semibold uppercase tracking-wide leading-tight text-[#6b7d90]">
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
                              href={{
                                pathname: `/news-events/${event.id}`,
                                query: {
                                  [HOME_RETURN_QUERY_KEY]: returnTo,
                                },
                              }}
                              onClick={handleNewsClick}
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

      <div className="relative z-10 mt-auto">
        <Footer />
      </div>
    </section>
  );
};

export default LatestNews;
