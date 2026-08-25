"use client";

import type { ComponentType } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";
import {
  BreadIcon,
  BroccoliIcon,
  CarrotIcon,
  ChickpeasIcon,
  EggIcon,
  TomatoIcon,
} from "@/components/shared/IngredientIcons";

type Ingredient = {
  Icon: ComponentType;
  label: string;
  x: number; // position finale en pixels par rapport au centre
  y: number;
  rotate: number;
  delay: number; // décale le déclenchement dans la progression du scroll (0 à 1)
  size: number;
};

const ingredients: Ingredient[] = [
  { Icon: TomatoIcon, label: "Tomate", x: -150, y: -90, rotate: -18, delay: 0, size: 64 },
  { Icon: BroccoliIcon, label: "Brocoli", x: 140, y: -110, rotate: 14, delay: 0.05, size: 68 },
  { Icon: CarrotIcon, label: "Carotte", x: -170, y: 70, rotate: 20, delay: 0.1, size: 58 },
  { Icon: EggIcon, label: "Œuf", x: 160, y: 60, rotate: -12, delay: 0.05, size: 56 },
  { Icon: ChickpeasIcon, label: "Pois chiches", x: 190, y: -10, rotate: 8, delay: 0.15, size: 60 },
  { Icon: BreadIcon, label: "Pain", x: -190, y: -10, rotate: -10, delay: 0.15, size: 60 },
];

export default function ExplodingIngredients({
  progress,
}: {
  progress: MotionValue<number>;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {ingredients.map((item) => (
        <IngredientChip key={item.label} item={item} progress={progress} />
      ))}
    </div>
  );
}

function IngredientChip({
  item,
  progress,
}: {
  item: Ingredient;
  progress: MotionValue<number>;
}) {
  const start = item.delay;
  const end = Math.min(start + 0.55, 1);

  const x = useTransform(progress, [start, end], [0, item.x]);
  const y = useTransform(progress, [start, end], [0, item.y]);
  const rotate = useTransform(progress, [start, end], [0, item.rotate]);
  const scale = useTransform(progress, [0, start, end], [0.4, 0.4, 1]);
  const opacity = useTransform(progress, [0, start, start + 0.1], [0, 0, 1]);

  return (
    <motion.div
      style={{ x, y, rotate, scale, opacity, width: item.size, height: item.size }}
      className="absolute rounded-full bg-surface p-3 shadow-lg shadow-primary-dark/10"
      aria-hidden
    >
      <item.Icon />
    </motion.div>
  );
}