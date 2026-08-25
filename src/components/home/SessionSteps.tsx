"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Premier échange",
    description:
      "Un temps d'écoute pour comprendre votre quotidien, vos besoins, vos craintes et vos envies. Tout commence toujours par là.",
  },
  {
    title: "Bilan complet",
    description:
      "Habitudes alimentaires, mode de vie, antécédents : on pose les bases pour construire un accompagnement vraiment adapté à vous.",
  },
  {
    title: "Plan d'action sur-mesure",
    description:
      "Des pistes concrètes et réalistes, sans interdit ni liste rigide, à intégrer à votre rythme dans votre quotidien.",
  },
  {
    title: "Suivi & ajustements",
    description:
      "On avance ensemble, séance après séance, en ajustant ce qui doit l'être. L'équilibre se construit sur la durée.",
  },
];

export default function SessionSteps() {
  return (
    <section className="bg-surface-mint/40 py-20 md:py-28">
      <div className="container-site">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            En pratique
          </span>
          <h2 className="text-balance mt-3 font-display text-3xl text-ink md:text-4xl">
            Comment se déroule une séance ?
          </h2>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="flex gap-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary font-display text-lg text-cream">
                {i + 1}
              </div>
              <div>
                <h3 className="font-display text-xl text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}