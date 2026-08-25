"use client";

"use client";

import { motion } from "framer-motion";

const topics = [
  {
    title: "Une digestion qui vous complique la vie ?",
    description:
      "Ballonnements, lourdeurs, transit irrégulier, inconfort après les repas... Chaque ajustement compte pour retrouver un quotidien plus léger.",
  },
  {
    title: "Envie de reprendre le sport sereinement ?",
    description:
      "Manque d'énergie, récupération difficile, alimentation qui ne suit pas le rythme des entraînements... Mangeons juste, pour progresser durablement.",
  },
  {
    title: "Une alimentation qui manque de repères ?",
    description:
      "Trop de règles contradictoires, culpabilité, difficulté à s'organiser au quotidien... Reconstruisons ensemble des habitudes simples et durables.",
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
            Changer votre vie en changeant votre alimentation
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
            Votre alimentation répond à des besoins physiologiques, mais
            aussi psychologiques et sociaux. Manger équilibré, ce n&apos;est
            pas supprimer le plaisir : c&apos;est trouver votre propre
            équilibre.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Liste des situations */}
          <div className="space-y-3 lg:col-span-7">
            {topics.map((topic, i) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="flex gap-5 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-primary/40"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-mint font-display text-base text-primary-dark"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl text-ink">
                    {topic.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {topic.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Vidéo ancrée */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-xs lg:col-span-5 lg:max-w-none"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-primary/8" />
            <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-xl shadow-primary-dark/10">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/videos/hero-plate-poster.jpg"
                className="h-full w-full object-cover"
              >
                <source src="/videos/hero-plate.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="absolute -bottom-5 left-1/2 w-[80%] -translate-x-1/2 rounded-2xl border border-line bg-surface/95 px-5 py-3 text-center shadow-lg backdrop-blur-sm">
              <p className="font-display text-base text-primary-dark">
                La méthode de l&apos;assiette équilibrée
              </p>
              <p className="mt-0.5 text-xs text-ink-soft">
                ½ légumes · ¼ protéines · ¼ féculents
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}