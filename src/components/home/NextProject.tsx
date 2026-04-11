import Image from "next/image";
import Link from "next/link";
import { newsEvents } from "@/data/newsEvents";
import { Footer } from "@/components/Global/footer";

const PAGE_SIZE = 10;

const NextProject = () => {
  const events = newsEvents.slice(0, PAGE_SIZE);

  return (
    <section className="relative  w-full mt-2 md:mt-0">
      <section className="mx-auto min-h-screen w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="flex items-start justify-between">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-wide text-[#094d82]">
            NEWS
          </h1>

          <div className="flex items-center gap-6 text-[#7a8ea3] text-xs font-semibold">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-4 w-4 flex-col justify-between">
                <span className="block h-[2px] bg-current" />
                <span className="block h-[2px] bg-current" />
                <span className="block h-[2px] bg-current" />
              </span>
              LIST
            </div>
            <div className="flex items-center gap-2">
              <span className="grid h-4 w-4 grid-cols-2 gap-[2px]">
                <span className="block h-[5px] w-[5px] bg-current" />
                <span className="block h-[5px] w-[5px] bg-current" />
                <span className="block h-[5px] w-[5px] bg-current" />
                <span className="block h-[5px] w-[5px] bg-current" />
              </span>
              MONTH
            </div>
          </div>
        </div>

        <div className="relative mt-6 border border-slate-200 p-6 sm:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(#d7e5f2_1px,transparent_1px)] [background-size:10px_10px] opacity-70 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-[#0b4b73]" />

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event) => (
              <article key={event.id} className="text-center">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={event.image || event.images?.[0] || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute left-0 top-0 bg-[#0b4b73] text-white text-xs font-semibold px-2 py-1">
                    {event.date.month} {event.date.day}
                  </div>
                </div>

                <h3 className="mt-3 text-sm font-bold text-[#094d82] uppercase">
                  {event.title}
                </h3>
                {event.subtitle && (
                  <p className="mt-1 text-xs text-[#63778b]">
                    {event.subtitle}
                  </p>
                )}
                <Link
                  href={`/news-events/${event.id}`}
                  className="inline-flex mt-2 text-xs font-semibold text-[#2b3f52] underline"
                >
                  View Event Details
                </Link>
              </article>
            ))}
          </div>
        </div>

      </section>

      <div className=" bottom-0 w-full z-0">
        <Footer />
      </div>
    </section>
  );
};

export default NextProject;
