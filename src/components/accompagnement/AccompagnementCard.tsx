"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type AccompagnementCardProps = {
  href: string;
  label: string;
  tagline: string;
  audience: string;
  color: "primary" | "accent" | "gold";
  index: number;
};

const badgeClasses: Record<AccompagnementCardProps["color"], string> = {
  primary: "bg-primary/10 text-primary-dark",
  accent: "bg-accent/20 text-accent-dark",
  gold: "bg-gold/20 text-ink",
};

export default function AccompagnementCard({
  href,
  label,
  tagline,
  audience,
  color,
  index,
}: AccompagnementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="h-full"
    >
      <Link
        href={href}
        className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-primary/40"
      >
        <span
          className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${badgeClasses[color]}`}
        >
          {audience}
        </span>
        <h3 className="mt-5 font-display text-2xl text-ink">{label}</h3>
        <p className="mt-3 grow text-sm leading-relaxed text-ink-soft">
          {tagline}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-dark transition-transform group-hover:translate-x-1">
          En savoir plus
          <span aria-hidden>↓</span>
        </span>
      </Link>
    </motion.div>
  );
}