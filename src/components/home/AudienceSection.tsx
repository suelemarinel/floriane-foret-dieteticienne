"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { accompagnements } from "@/lib/site-config";

const colorMap: Record<string, { bg: string; text: string; dot: string }> = {
  primary: { bg: "bg-surface-mint", text: "text-primary-dark", dot: "bg-primary" },
  accent: { bg: "bg-surface-pink", text: "text-accent-dark", dot: "bg-accent" },
  gold: { bg: "bg-gold/10", text: "text-ink", dot: "bg-gold" },
};

export default function AudienceSection() {
  return (
    <section className="bg-surface-mint/40 py-20 md:py-28">
      <div className="container-site">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Chaque situation est unique
          </span>
          <h2 className="text-balance mt-3 font-display text-3xl text-ink md:text-4xl">
            On parle à qui, ici ?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
            Peu importe votre point de départ, l&apos;accompagnement
            s&apos;adapte à vous — pas l&apos;inverse.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {accompagnements.map((item, i) => {
            const c = colorMap[item.color] ?? colorMap.primary;
            return (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              >
                <Link
                  href={item.href}
                  className={`group flex flex-col gap-4 rounded-2xl border border-line p-6 transition-all hover:shadow-md md:flex-row md:items-center md:justify-between md:p-8 ${c.bg}`}
                >
                  <div className="flex items-start gap-4 md:items-center">
                    <span
                      aria-hidden
                      className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full md:mt-0 ${c.dot}`}
                    />
                    <div>
                      <p className={`font-display text-xl ${c.text}`}>
                        {item.audience}
                      </p>
                      <p className="mt-1 text-sm text-ink-soft">
                        {item.tagline}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-transform group-hover:translate-x-1">
                    {item.label}
                    <span aria-hidden>→</span>
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}