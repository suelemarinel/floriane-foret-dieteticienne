"use client";

import { motion } from "framer-motion";

// Étapes à valider/compléter avec Floriane (années, intitulés exacts, écoles).
const steps = [
  {
    year: "[Année]",
    title: "Diplôme d'État de diététicienne-nutritionniste",
    description: "[École ou université, ville — à compléter]",
  },
  {
    year: "[Année]",
    title: "[Premier poste ou stage marquant — à compléter]",
    description: "[Ce que cette expérience lui a appris — à compléter]",
  },
  {
    year: "[Année]",
    title: "[Spécialisation ou formation complémentaire — à compléter]",
    description:
      "[Ex : nutrition végétale, diabète de type 2, troubles digestifs, sport... — à compléter]",
  },
  {
    year: "Aujourd'hui",
    title: "Cabinet libéral à Bruxelles",
    description: "[Type de patientèle accompagnée aujourd'hui — à compléter]",
  },
];

export default function ParcoursTimeline() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Étape par étape
          </span>
          <h2 className="text-balance mt-3 font-display text-3xl text-ink md:text-4xl">
            Les grandes étapes de mon parcours
          </h2>
        </div>

        <div className="relative mt-14 space-y-10 border-l-2 border-line pl-8 md:pl-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="relative"
            >
              <span
                aria-hidden
                className="absolute top-1.5 -left-[calc(2rem+5px)] h-2.5 w-2.5 rounded-full bg-primary md:-left-[calc(2.5rem+5px)]"
              />
              <p className="font-display text-lg text-primary-dark">
                {step.year}
              </p>
              <h3 className="mt-1 font-display text-xl text-ink">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}