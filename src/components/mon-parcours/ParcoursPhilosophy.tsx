"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "3 ans", label: "d'expérience" },
  { value: "+200", label: "patients accompagnés" },
  { value: "Membre de Nutriciens", label: "" },
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
            &laquo; Je crois en une alimentation équilibrée qui laisse toute sa
            place au plaisir. &raquo;
          </p>
        </motion.blockquote>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="flex flex-col items-center justify-center rounded-2xl border border-line bg-surface p-6 text-center"
            >
              <span className="text-balance font-display text-3xl text-primary-dark">
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