"use client";

import { motion } from "framer-motion";

// Chiffres et affiliations à valider avec Floriane avant mise en ligne.
const stats = [
  { value: "[X]", label: "Années d'expérience" },
  { value: "[X]", label: "Patients accompagnés" },
  { value: "[Membre de l'Ordre / association]", label: "" },
];

export default function ParcoursPhilosophy() {
  return (
    <section className="bg-surface-mint/40 py-20 md:py-28">
      <div className="container-site">
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-balance font-display text-2xl leading-snug text-primary-dark md:text-3xl">
            &laquo; [Citation personnelle de Floriane sur sa vision de
            l&apos;accompagnement — à compléter] &raquo;
          </p>
          <cite className="mt-4 block text-sm not-italic text-ink-soft">
            Floriane Foret
          </cite>
        </motion.blockquote>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="flex flex-col items-center justify-center rounded-2xl border border-line bg-surface p-6 text-center"
            >
              <span className="font-display text-3xl text-primary-dark">
                {stat.value}
              </span>
              {stat.label && (
                <span className="mt-1 text-sm text-ink-soft">
                  {stat.label}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}