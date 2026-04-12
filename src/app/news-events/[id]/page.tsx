import { notFound } from "next/navigation";
import { newsEvents } from "@/data/newsEvents";
import { Footer } from "@/components/Global/footer";
import NewsEventDetailClient from "@/components/news-events/NewsEventDetailClient";

export const dynamicParams = false;

export async function generateStaticParams() {
  return newsEvents.map((event) => ({ id: event.id }));
}

export default async function NewsEventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = newsEvents.find((item) => item.id === id);

  if (!event) return notFound();

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 pt-24 sm:pt-28 lg:pt-32 lg:pb-12 font-helveticaneue">
        <div className="flex items-start justify-between">
          <h1 className="text-3xl sm:text-4xl font-black tracking-wide text-[#094d82] uppercase">
            LATEST NEWS
          </h1>
        </div>

        <div className="relative mt-2 border border-slate-200 border-l-0 border-t-0 border-b-0 border-r-0">
          <div className="absolute inset-0 bg-[url('/images/world-map-dots.jpeg')] bg-no-repeat bg-center [background-size:115%_115%] opacity-80 pointer-events-none" />

          <NewsEventDetailClient event={event} />
        </div>

        {/* <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-[#0b4b73]">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#0b4b73]">
            ‹
          </span>
          Previous Events
        </div> */}
      </section>

      <Footer />
    </main>
  );
}
