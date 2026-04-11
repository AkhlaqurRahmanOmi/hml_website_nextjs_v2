import Image from "next/image";
import { notFound } from "next/navigation";
import { newsEvents } from "@/data/newsEvents";
import { Footer } from "@/components/Global/footer";

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
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="flex items-start justify-between">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-wide text-[#094d82]">
            NEWS
          </h1>
        </div>

        <div className="relative mt-6 border border-slate-200 p-6 sm:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(#d7e5f2_1px,transparent_1px)] [background-size:10px_10px] opacity-70 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-[#0b4b73]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-6 items-start">
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <Image
                src={event.image || event.images?.[0] || "/placeholder.svg"}
                alt={event.title}
                fill
                sizes="(min-width:1024px) 60vw, 100vw"
                className="object-cover"
              />
              <div className="absolute left-0 top-0 bg-[#0b4b73] text-white text-xs font-semibold px-2 py-1">
                {event.date.month} {event.date.day}
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#094d82] uppercase">
                {event.title}
              </h2>
              {event.subtitle && (
                <p className="mt-2 text-sm text-[#2b3f52] font-semibold">
                  {event.subtitle}
                </p>
              )}
              <p className="mt-4 text-sm leading-relaxed text-[#2b3f52] whitespace-pre-line">
                {event.body}
              </p>
            </div>
          </div>

          {event.images && event.images.length > 1 && (
            <div className="relative mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {event.images.map((src, idx) => (
                <div key={`${event.id}-img-${idx}`} className="relative aspect-square overflow-hidden">
                  <Image
                    src={src}
                    alt={`${event.title} image ${idx + 1}`}
                    fill
                    sizes="(min-width:1024px) 12vw, (min-width:640px) 20vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
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
