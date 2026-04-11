"use client";
import Image from "next/image";
import React, { useMemo, useRef } from "react";

type ProjectItem = {
  id: string | number;
  title: string;
  imageUrl: string;
  onClick?: (id: ProjectItem["id"]) => void;
  href?: string;
};

type Props = {
  items: ProjectItem[];
  className?: string;
  cardWidth?: number;
  cardHeight?: number;
};

export default function ProjectThumbRail({
  items,
  className = "",
  cardWidth = 300,
  cardHeight = 120,
}: Props) {
  const railRef = useRef<HTMLDivElement>(null);

  const cardStyle = useMemo<React.CSSProperties>(
    () => ({ width: cardWidth, height: cardHeight }),
    [cardWidth, cardHeight]
  );

  function scrollByCards(direction: "left" | "right") {
    const rail = railRef.current;
    if (!rail) return;
    const amount = (cardWidth + 24) * 1.5;
    rail.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  }

  function TripleChevron({ direction = "left" }: { direction?: "left" | "right" }) {
    const rotate = direction === "right" ? "rotate-180" : "";
    return (
      <div
        className={`pointer-events-none select-none opacity-70 ${rotate}`}
        aria-hidden="true"
      >
        {/* three stacked chevrons */}
        <svg width="44" height="44" viewBox="0 0 24 24" className="block">
          <path d="M14.5 4L6.5 12L14.5 20" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        <svg width="44" height="44" viewBox="0 0 24 24" className="-mt-3 block">
          <path d="M14.5 4L6.5 12L14.5 20" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        <svg width="44" height="44" viewBox="0 0 24 24" className="-mt-3 block">
          <path d="M14.5 4L6.5 12L14.5 20" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </div>
    );
  }

  const Card = ({ item }: { item: ProjectItem }) => {
    const body = (
      <div
        className="group relative rounded-md overflow-hidden shadow-sm ring-1 ring-black/5 bg-white"
        style={cardStyle}
      >
        {/* Title bar */}
        <div className="absolute left-0 right-0 top-0 h-9 bg-blue-900/80 text-white flex items-center px-3 text-sm font-semibold tracking-wide">
          {item.title}
        </div>

        {/* Image */}
        <Image
          src={item.imageUrl}
          alt={item.title}
          width={300}
          height={200}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/20 to-transparent" />

        <div className="absolute inset-0 ring-inset ring-transparent group-focus-within:ring-2 group-focus-within:ring-blue-500 rounded-md" />
      </div>
    );

    if (item.href) {
      return (
        <a
          href={item.href}
          onClick={(e) => {
            if (item.onClick) {
              e.preventDefault();
              item.onClick(item.id);
            }
          }}
          className="outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
        >
          {body}
        </a>
      );
    }

    return (
      <button
        type="button"
        onClick={() => item.onClick?.(item.id)}
        className="outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
        aria-label={item.title}
      >
        {body}
      </button>
    );
  };

  return (
    <section
      className={`relative w-full py-6 px-6 sm:px-10 bg-gradient-to-b from-white to-zinc-100 ${className}`}
      aria-label="Project Showcase"
    >
      {/* Left control */}
      <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2">
        <button
          type="button"
          onClick={() => scrollByCards("left")}
          className="rounded-full p-1 text-zinc-700 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Scroll projects left"
        >
          <TripleChevron direction="left" />
        </button>
      </div>

      {/* Right control */}
      <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2">
        <button
          type="button"
          onClick={() => scrollByCards("right")}
          className="rounded-full p-1 text-zinc-700 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Scroll projects right"
        >
          <TripleChevron direction="right" />
        </button>
      </div>

      {/* Rail */}
      <div
        ref={railRef}
        className="mx-10 sm:mx-16 flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
        role="list"
        aria-label="Projects"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") scrollByCards("left");
          if (e.key === "ArrowRight") scrollByCards("right");
        }}
      >
        {items.map((it) => (
          <div key={it.id} role="listitem" className="shrink-0">
            <Card item={it} />
          </div>
        ))}
      </div>

      {/* tiny CSS utility to hide scrollbars cross-browser */}
      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
