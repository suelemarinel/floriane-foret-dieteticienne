"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-cream">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col lg:flex-row">
        {/* Texte */}
        <div className="flex w-full flex-col justify-center px-6 pb-24 pt-28 md:px-10 md:pt-32 lg:w-1/2 lg:px-16 lg:pt-32 xl:pl-24">
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
  className="max-w-xl"
>
  <div className="flex items-center gap-3 text-sm text-ink-soft">
    Diététicienne-nutritionniste à {siteConfig.city}
  </div>

  <h1 className="text-balance mt-7 font-display text-5xl leading-[1.08] text-ink sm:text-6xl md:text-[4rem]">
    Et si manger redevenait{" "}
    <span className="text-accent italic">simple</span> ?
  </h1>

  <p className="text-balance mt-7 text-base leading-relaxed text-ink-soft md:text-lg">
    Diététicienne-nutritionniste spécialisée en rééquilibrage
    alimentaire, nutrition du sport et troubles digestifs, je vous
    accompagne sans régime ni restriction, avec bienveillance, pour
    retrouver plaisir et sérénité dans votre assiette.
  </p>

  <div className="mt-9 flex justify-center lg:justify-start">
    <Link
      href={siteConfig.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full bg-primary px-8 py-4 text-sm font-semibold text-cream shadow-lg shadow-primary/20 transition-colors hover:bg-primary-dark"
    >
      Prendre rendez-vous
    </Link>
  </div>
</motion.div>
        </div>

      {/* Photo */}
<div className="relative w-full lg:w-1/2">
  {/* Panneau de couleur plein, décalé légèrement à gauche */}
  <div
    aria-hidden
    className="absolute -left-3 top-0 h-full w-full rounded-tl-[3rem] rounded-bl-[3rem] rounded-br-[3rem] bg-primary-dark md:-left-4"
  />

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
    className="relative h-[100svh] w-full overflow-hidden rounded-tl-[3rem] rounded-bl-[3rem]"
  >
    <Image
      src="/images/floriane-2.jpeg"
      alt="Floriane Foret, diététicienne-nutritionniste, dans sa cuisine"
      fill
      priority
      sizes="(min-width: 1024px) 50vw, 100vw"
      className="object-cover object-[65%_35%]"
    />
    {/* Voile pour la lisibilité de la nav qui chevauche la photo */}
    <div
      aria-hidden
      className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-ink/45 to-transparent"
    />
  </motion.div>
</div>
      </div>
    </section>
  );
}