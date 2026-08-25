"use client";

import { motion } from "framer-motion";

const topics = [
  {
    title: "Une digestion qui vous complique la vie ?",
    description:
      "Ballonnements, lourdeurs, transit irrégulier, inconfort après les repas... Chaque ajustement compte pour retrouver un quotidien plus léger.",
    color: "bg-primary",
  },
  {
    title: "Envie de reprendre le sport sereinement ?",
    description:
      "Manque d'énergie, récupération difficile, alimentation qui ne suit pas le rythme des entraînements... Mangeons juste, pour progresser durablement.",
    color: "bg-accent",
  },
  {
    title: "Une alimentation qui manque de repères ?",
    description:
      "Trop de règles contradictoires, culpabilité, difficulté à s'organiser au quotidien... Reconstruisons ensemble des habitudes simples et durables.",
    color: "bg-gold",
  },
];

export default function TopicsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Ça vous parle ?
          </span>
          <h2 className="text-balance mt-3 font-display text-3xl text-ink md:text-4xl">
            On parle de quoi, ici ?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
            Votre alimentation répond à des besoins physiologiques, mais
            aussi psychologiques et sociaux. Manger équilibré, ce n&apos;est
            pas supprimer le plaisir : c&apos;est trouver votre propre
            équilibre.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {topics.map((topic, i) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="rounded-2xl border border-line bg-surface p-7"
            >
              <span
                aria-hidden
                className={`inline-block h-2.5 w-2.5 rounded-full ${topic.color}`}
              />
              <h3 className="mt-4 font-display text-xl text-ink">
                {topic.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}