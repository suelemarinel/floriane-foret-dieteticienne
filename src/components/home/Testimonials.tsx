"use client";

import { motion } from "framer-motion";
import { doctoranytimeRating, testimonials } from "@/data/testimonials";

function Stars() {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-gold">
          <path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.8l-5.2 2.7 1-5.8L1.6 7.6l5.8-.8z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
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
            className="flex shrink-0 items-center gap-4 rounded-2xl border border-line bg-surface px-5 py-4 transition-colors hover:border-primary"
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

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name + t.date}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="flex flex-col justify-between rounded-2xl border border-line bg-surface p-6"
            >
              <div>
                <Stars />
                <blockquote className="mt-4 text-sm leading-relaxed text-ink">
                  &laquo; {t.text} &raquo;
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center justify-between text-xs text-ink-soft">
                <span className="font-semibold text-primary-dark">
                  {t.name}
                </span>
                <span>{t.date}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}