"use client";

import { motion } from "framer-motion";

type Step = {
  year: string;
  title: string;
  description?: string;
  details?: string[];
};

const steps: Step[] = [
  {
    year: "2019 – 2022",
    title: "Bachelier en diététique",
  },
  {
    year: "2023 – 2024",
    title: "Diététicienne clinicienne",
    description:
      "Premier poste, au sein de l'Hôpital Universitaire de Bruxelles.",
  },
  {
    year: "2024 – Aujourd'hui",
    title: "Deux pratiques complémentaires",
    details: [
      "Diététicienne clinicienne au sein des Cliniques de l'Europe",
      "Diététicienne libérale dans un cabinet libéral à Bruxelles",
    ],
  },
  {
    year: "Aujourd'hui",
    title: "Spécialisation complémentaire",
    details: [
      "Nutrition du sportif",
      "Nutrition dans le cadre du syndrome de l'intestin irritable",
    ],
  },
];

export default function ParcoursTimeline() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-site relative">
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
              key={`${step.year}-${step.title}`}
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

              {step.description && (
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              )}

              {step.details && (
                <ul className="mt-3 max-w-xl space-y-2">
                  {step.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-dark"
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}