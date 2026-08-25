"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-end overflow-hidden">
      <Image
        src="/images/floriane-portrait.jpg"
        alt="Floriane Foret, diététicienne-nutritionniste à Bruxelles"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_25%]"
      />

      {/* Dégradés pour la lisibilité du texte et de la nav */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/5"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/50 to-transparent"
      />

      <div className="container-site relative pb-16 pt-40 md:pb-24 md:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl"
        >
          <span className="inline-flex items-center rounded-full border border-cream/30 bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream backdrop-blur-sm">
            Diététicienne-nutritionniste à {siteConfig.city}
          </span>

          <h1 className="text-balance mt-6 font-display text-4xl leading-[1.12] text-cream sm:text-5xl md:text-[3.4rem]">
            Retrouvez du plaisir à manger,{" "}
            <span className="text-accent italic">sans culpabilité</span>
          </h1>

          <p className="text-balance mt-6 max-w-md text-base leading-relaxed text-cream/85 md:text-lg">
            Pas de calcul, pas de régime. Un accompagnement bienveillant et
            basé sur les preuves, pour composer une alimentation qui vous
            ressemble, à votre rythme.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-primary-dark shadow-lg transition-colors hover:bg-primary-dark hover:text-cream"
            >
              Prendre rendez-vous
            </Link>
           </div> 
        </motion.div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        aria-hidden
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1 },
          y: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="text-cream/70"
        >
          <path
            d="M6 9l6 6 6-6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}