"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { accompagnements } from "@/lib/site-config";

const topics = [
  {
    title: "Une alimentation qui manque de repères ?",
    description:
      "Envie de changer vos habitudes, sortir des régimes à répétition, ou simplement mieux comprendre vos besoins... Reconstruisons ensemble des habitudes simples et durables.",
    keyword: "équilibr",
    accent: "bg-primary",
  },
  {
    title: "Envie de mieux nourrir votre pratique sportive ?",
    description:
      "Que vous débutiez, cherchiez à optimiser votre récupération ou souhaitiez simplement mieux comprendre les liens entre alimentation et performance... Une alimentation ajustée à vos besoins, pour progresser sur la durée.",
    keyword: "sport",
    accent: "bg-ink",
  },
  {
    title: "Une digestion qui vous complique la vie ?",
    description:
      "Trop de règles contradictoires, culpabilité, transit irrégulier, ballonnements occasionnels, inconfort chronique, SII, SIBO ou autre trouble digestif... Chaque situation mérite une approche adaptée pour retrouver un quotidien plus léger.",
    keyword: "digest",
    accent: "bg-accent",
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
            Prendre soin de vous, à travers votre assiette
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
            Votre alimentation répond à des besoins physiologiques, mais
            aussi psychologiques et sociaux. Peu importe votre point de
            départ, l&apos;accompagnement s&apos;adapte à vous — pas
            l&apos;inverse.
          </p>
        </div>

        <div className="mt-14 border-t border-line">
          {topics.map((topic, i) => {
            const match = accompagnements.find((a) =>
              `${a.label} ${a.audience} ${a.tagline}`
                .toLowerCase()
                .includes(topic.keyword)
            );

            return (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="flex flex-col gap-5 border-b border-line py-10 md:flex-row md:items-start md:justify-between md:gap-12"
              >
                <div className="flex gap-5 md:max-w-xl">
                  <span
                    className={`mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full ${topic.accent}`}
                    aria-hidden
                  />
                  <div>
                    <h3 className="font-display text-xl text-ink md:text-2xl">
                      {topic.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
                      {topic.description}
                    </p>
                  </div>
                </div>

                {match && (
                  <Link
                    href={match.href}
                    className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary-dark transition-all hover:border-primary-dark hover:bg-primary-dark hover:text-cream md:mt-1"
                  >
                    {match.label}
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}