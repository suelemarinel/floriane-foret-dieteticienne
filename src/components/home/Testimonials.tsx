"use client";

import { useEffect, useRef } from "react";
import { doctoranytimeRating, testimonials } from "@/data/testimonials";

const avatarColors = [
  "bg-surface-mint text-primary-dark",
  "bg-surface-pink text-accent-dark",
  "bg-gold/15 text-ink",
];

function Stars() {
  return (
    <div className="text-sm tracking-tight" aria-hidden>
      ⭐️⭐️⭐️⭐️⭐️
    </div>
  );
}

function initials(name: string) {
  return name.replace(/\./g, "").split(" ").join("").slice(0, 2).toUpperCase();
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 ${direction === "left" ? "" : "rotate-180"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let frameId: number;
    const speed = 0.5;

    const step = () => {
      if (!pausedRef.current) {
        el.scrollLeft += speed;
        const halfWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        }
      }
      frameId = requestAnimationFrame(step);
    };
    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, []);

  const pauseThenResume = () => {
    pausedRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, 3000);
  };

  const scrollByCard = (direction: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    pauseThenResume();
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const amount = card ? card.offsetWidth + 20 : 320;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              Témoignages
            </span>
            <h2 className="text-balance mt-3 font-display text-3xl text-ink md:text-4xl">
              Leur avis compte plus que le mien
            </h2>
          </div>

          <a
            href={doctoranytimeRating.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-4 rounded-tl-2xl rounded-br-2xl border border-line bg-surface px-5 py-4 transition-colors hover:border-primary"
          >
            <div>
              <p className="font-display text-3xl text-primary-dark">
                {doctoranytimeRating.score}
                <span className="text-base text-ink-soft">/10</span>
              </p>
              <Stars />
            </div>
            <div className="text-sm text-ink-soft">
              <p className="font-semibold text-ink">Doctoranytime</p>
              <p>{doctoranytimeRating.count} avis vérifiés</p>
            </div>
          </a>
        </div>
      </div>

      {/* Carrousel */}
      <div className="container-site relative mt-14">
        <div
          ref={trackRef}
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <figure
              key={`${t.name}-${t.date}-${i}`}
              data-card
              className="flex w-[280px] shrink-0 flex-col rounded-tl-2xl rounded-br-2xl border border-line bg-surface p-6 md:w-[300px]"
            >
              <blockquote className="font-display text-xl leading-snug text-ink">
                &laquo; {t.text} &raquo;
              </blockquote>

              <div className="mt-auto">
                <Stars />
                <figcaption className="mt-2 flex items-center gap-3 border-t border-line pt-4">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${avatarColors[i % avatarColors.length]}`}
                    aria-hidden
                  >
                    {initials(t.name)}
                  </span>
                  <div className="text-xs text-ink-soft">
                    <p className="font-semibold text-ink">{t.name}</p>
                    <p>{t.date}</p>
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        {/* Flèches de navigation */}
        <button
          type="button"
          onClick={() => scrollByCard("left")}
          aria-label="Avis précédents"
          className="absolute -left-4 top-[42%] hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface text-ink shadow-lg transition-colors hover:border-primary lg:flex"
        >
          <ArrowIcon direction="left" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard("right")}
          aria-label="Avis suivants"
          className="absolute -right-4 top-[42%] hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface text-ink shadow-lg transition-colors hover:border-primary lg:flex"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>
    </section>
  );
}