"use client";

import { motion } from "framer-motion";
import { Salad, Dumbbell, Leaf } from "lucide-react";

type AccompagnementDetailSectionProps = {
  id: string;
  label: string;
  audience: string;
  color: "primary" | "accent" | "terracotta";
  intro: string;
  forWho: string[];
  includes: string[];
};

const iconMap: Record<AccompagnementDetailSectionProps["color"], typeof Salad> = {
  primary: Salad,
  terracotta: Dumbbell,
  accent: Leaf,
};

const badgeClasses: Record<AccompagnementDetailSectionProps["color"], string> = {
  primary: "bg-primary/10 text-primary",
  terracotta: "bg-terracotta/10 text-terracotta",
  accent: "bg-accent/15 text-primary-dark",
};

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <svg
            viewBox="0 0 20 20"
            aria-hidden
            className="mt-0.5 h-5 w-5 shrink-0 fill-primary"
          >
            <path d="M7.5 13.4 4.1 10l-1.4 1.4 4.8 4.8L17.3 6.4l-1.4-1.4z" />
          </svg>
          <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AccompagnementDetailSection({
  id,
  label,
  audience,
  color,
  intro,
  forWho,
  includes,
}: AccompagnementDetailSectionProps) {
  const Icon = iconMap[color];

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="scroll-mt-32 border-t border-line py-16 md:py-20"
    >
      <div className="container-site">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${badgeClasses[color]}`}
          aria-hidden
        >
          <Icon size={20} strokeWidth={1.5} />
        </span>

        <span className="mt-4 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
          {audience}
        </span>
        <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">
          {label}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          {intro}
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Pour qui ?
            </p>
            <div className="mt-4">
              <CheckList items={forWho} />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Ce que ça inclut
            </p>
            <div className="mt-4">
              <CheckList items={includes} />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}