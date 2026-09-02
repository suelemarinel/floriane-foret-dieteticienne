"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ParcoursHero() {
  return (
    <section className="relative overflow-hidden bg-primary-dark pb-20 pt-40 md:pb-28 md:pt-48">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="container-site relative grid gap-12 md:grid-cols-12 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:col-span-7"
        >
          <span className="inline-flex items-center rounded-full border border-cream/30 bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream backdrop-blur-sm">
            Mon parcours
          </span>

          <h1 className="text-balance mt-6 font-display text-4xl leading-[1.12] text-cream sm:text-5xl md:text-[3.2rem]">
            De la théorie <span className="text-accent italic">à votre assiette</span>
          </h1>

          <p className="text-balance mt-6 max-w-md text-base leading-relaxed text-cream/85 md:text-lg">
            [À compléter avec Floriane : ce qui l&apos;a amenée à devenir
            diététicienne-nutritionniste.]
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="md:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-[2rem] shadow-xl shadow-primary-dark/30 md:max-w-sm">
            <Image
              src="/images/floriane-portrait.jpg"
              alt="Floriane Foret, diététicienne-nutritionniste à Bruxelles"
              fill
              sizes="(min-width: 768px) 22rem, 20rem"
              className="object-cover object-[center_25%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}