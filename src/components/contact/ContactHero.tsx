"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-primary-dark pb-16 pt-40 md:pb-20 md:pt-48">
      <div className="container-site relative grid gap-12 md:grid-cols-12 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:col-span-7"
        >
          <span className="inline-flex items-center rounded-full border border-cream/30 bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream backdrop-blur-sm">
            Contact
          </span>

          <h1 className="text-balance mt-6 max-w-2xl font-display text-4xl leading-[1.12] text-cream sm:text-5xl md:text-[3.2rem]">
            Une question ? Discutons-en.
          </h1>

          <p className="text-balance mt-6 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg">
            Par téléphone, par mail, ou directement en ligne pour prendre
            rendez-vous — comme vous préférez.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="md:col-span-5"
        >
          <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
            {/* Panneau décalé en arrière-plan, écho au traitement du Hero de la home */}
            <div
              aria-hidden
              className="absolute -bottom-3 -right-3 h-full w-full rounded-[2rem] bg-cream/10"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-black/30">
              <Image
                src="/images/floriane-5.jpeg"
                alt="Floriane Foret, diététicienne-nutritionniste, dans sa cuisine"
                fill
                sizes="(min-width: 768px) 22rem, 20rem"
                className="object-cover object-[62%_25%]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}