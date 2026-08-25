"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { accompagnements } from "@/lib/site-config";

export default function AudienceSection() {
  return (
    <section className="py-20 md:py-28">
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

        <div className="mt-14 space-y-3">
          {accompagnements.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <Link
                href={item.href}
                className="group flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-primary/40 md:flex-row md:items-center md:justify-between md:p-7"
              >
                <div className="flex items-center gap-5">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-mint font-display text-base text-primary-dark"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display text-xl text-ink">
                      {item.audience}
                    </p>
                    <p className="mt-1 text-sm text-ink-soft">
                      {item.tagline}
                    </p>
                  </div>
                </div>
                <span className="ml-[60px] inline-flex items-center gap-2 text-sm font-semibold text-primary-dark transition-transform group-hover:translate-x-1 md:ml-0">
                  {item.label}
                  <span aria-hidden>→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}