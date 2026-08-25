"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import PlateGraphic from "@/components/shared/PlateGraphic";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      {/* Halo décoratif en fond */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-accent/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-15%] left-[-10%] h-[380px] w-[380px] rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container-site relative grid items-center gap-12 md:grid-cols-2 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center rounded-full bg-surface-mint px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-dark">
            Diététicienne-nutritionniste à {siteConfig.city}
          </span>

          <h1 className="text-balance mt-6 font-display text-4xl leading-[1.12] text-ink sm:text-5xl md:text-[3.4rem]">
            Retrouvez du plaisir à manger,{" "}
            <span className="text-accent-dark italic">sans culpabilité</span>
          </h1>

          <p className="text-balance mt-6 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
            Pas de calcul, pas de régime. Un accompagnement bienveillant et
            basé sur les preuves, pour composer une alimentation qui vous
            ressemble, à votre rythme.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={siteConfig.bookingUrl}
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-primary/20 transition-colors hover:bg-primary-dark"
            >
              Prendre rendez-vous
            </Link>
            <Link
              href="/mon-parcours"
              className="rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              Mon parcours
            </Link>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-line pt-6">
            <div>
              <dt className="sr-only">Approche</dt>
              <dd className="font-display text-xl text-primary-dark">100%</dd>
              <p className="text-xs text-ink-soft">Sur-mesure</p>
            </div>
            <div>
              <dt className="sr-only">Méthode</dt>
              <dd className="font-display text-xl text-primary-dark">0</dd>
              <p className="text-xs text-ink-soft">Régime imposé</p>
            </div>
            <div>
              <dt className="sr-only">Approche</dt>
              <dd className="font-display text-xl text-primary-dark">Evidence</dd>
              <p className="text-xs text-ink-soft">Based practice</p>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm md:max-w-md"
        >
          <PlateGraphic className="aspect-square w-full drop-shadow-xl" />

          <div className="absolute -bottom-4 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-line bg-surface/95 px-5 py-3 text-center shadow-lg backdrop-blur-sm">
            <p className="font-display text-base text-primary-dark">
              La méthode de l&apos;assiette équilibrée
            </p>
            <p className="mt-0.5 text-xs text-ink-soft">
              ½ légumes · ¼ protéines · ¼ féculents
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}