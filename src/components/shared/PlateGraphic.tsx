"use client";

import { motion } from "framer-motion";

/**
 * Illustration signature : l'assiette équilibrée.
 * Reprend le repère visuel de la méthode de Floriane :
 * 1/2 légumes, 1/4 protéines, 1/4 féculents.
 * Les segments se dessinent au chargement pour un effet distinctif et léger.
 */
export default function PlateGraphic({ className = "" }: { className?: string }) {
  const segments = [
  // 1/2 légumes : moitié gauche (du haut, par la gauche, jusqu'en bas)
  {
    d: "M 100 100 L 100 4 A 96 96 0 0 0 100 196 Z",
    fill: "var(--color-primary)",
    label: "Légumes",
  },
  // 1/4 protéines : quart haut-droit
  {
    d: "M 100 100 L 100 4 A 96 96 0 0 1 196 100 Z",
    fill: "var(--color-accent)",
    label: "Protéines",
  },
  // 1/4 féculents : quart bas-droit
  {
    d: "M 100 100 L 196 100 A 96 96 0 0 1 100 196 Z",
    fill: "var(--color-gold)",
    label: "Féculents",
  },
];

  return (
    <div className={className}>
      <motion.svg
        viewBox="0 0 200 200"
        className="h-full w-full"
        role="img"
        aria-label="Illustration de l'assiette équilibrée : moitié légumes, un quart protéines, un quart féculents"
      >
        <circle cx="100" cy="100" r="98" fill="var(--color-surface)" />
        {segments.map((seg, i) => (
          <motion.path
            key={seg.label}
            d={seg.d}
            fill={seg.fill}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
            style={{ transformOrigin: "100px 100px" }}
          />
        ))}
        <circle
          cx="100"
          cy="100"
          r="96"
          fill="none"
          stroke="var(--color-cream)"
          strokeWidth="4"
        />
      </motion.svg>
    </div>
  );
}