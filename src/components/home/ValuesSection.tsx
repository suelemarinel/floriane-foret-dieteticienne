"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Bienveillance",
    description:
      "Aucun jugement, aucune règle rigide. Vous êtes accueilli·e tel·le que vous êtes, avec votre histoire et votre rythme.",
  },
  {
    title: "Rigueur scientifique",
    description:
      "Une pratique basée sur les preuves (evidence-based), actualisée en continu au sein d'une communauté de professionnels de la nutrition.",
  },
  {
    title: "Sur-mesure",
    description:
      "Les aliments s'adaptent à ce que vous aimez : le meilleur plan est celui que vous appliquez avec plaisir, pas celui qu'on vous impose.",
  },
  {
    title: "Long terme",
    description:
      "L'équilibre se juge sur plusieurs semaines, pas sur un repas. On construit des habitudes durables, pas une solution éphémère.",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Mon approche
          </span>
          <h2 className="text-balance mt-3 font-display text-3xl text-ink md:text-4xl">
            Mes valeurs fondamentales
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
            Votre alimentation répond à des besoins physiologiques, mais
            aussi psychologiques et sociaux. Mon accompagnement tient compte
            des trois.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="rounded-2xl bg-surface-mint p-6"
            >
              <span className="font-display text-3xl text-primary/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg text-primary-dark">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}