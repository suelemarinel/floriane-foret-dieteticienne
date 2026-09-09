"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ParcoursHero() {
  return (
    <section className="relative bg-cream pb-24 pt-40 md:pb-32 md:pt-48">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-0 h-72 w-72 rounded-full bg-accent/45 blur-3xl md:-top-24 md:right-24"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 -translate-y-8 rounded-full bg-primary/30 blur-3xl"
      />

      <div className="container-site relative grid gap-16 md:grid-cols-12 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:col-span-6 md:order-2"
        >
          <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-dark">
            Mon parcours
          </span>

          <h1 className="text-balance mt-6 font-display text-4xl leading-[1.12] text-ink sm:text-5xl md:text-[3.2rem]">
            De la théorie <span className="text-accent-dark italic">à votre assiette</span>
          </h1>

          <p className="text-balance mt-6 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
            [À compléter avec Floriane : ce qui l&apos;a amenée à devenir
            diététicienne-nutritionniste.]
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative md:col-span-6 md:order-1"
        >
          <div className="relative mx-auto w-full max-w-md md:-ml-6 lg:-ml-12">
            {/* Cadre polaroid */}
            <div className="rounded-sm bg-surface p-3 pb-14 shadow-2xl shadow-ink/20">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/images/floriane-4.jpeg"
                  alt="Floriane Foret, diététicienne-nutritionniste, en train de préparer de la pâte dans sa cuisine"
                  fill
                  sizes="(min-width: 768px) 28rem, 24rem"
                  className="object-cover object-[38%_25%]"
                />
              </div>
            </div>

            {/* Ruban adhésif décoratif */}
            <div
              aria-hidden
              className="absolute -top-3 left-1/2 h-8 w-20 -translate-x-1/2 -rotate-2 bg-accent/40 shadow-sm"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}