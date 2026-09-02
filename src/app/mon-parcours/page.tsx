import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ParcoursHero from "@/components/mon-parcours/ParcoursHero";
import ParcoursTimeline from "@/components/mon-parcours/ParcoursTimeline";
import ParcoursPhilosophy from "@/components/mon-parcours/ParcoursPhilosophy";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Mon parcours",
  description:
    "Découvrez le parcours de Floriane Foret, diététicienne-nutritionniste à Bruxelles : formation, expériences et philosophie d'accompagnement.",
  path: "/mon-parcours",
});

export default function MonParcoursPage() {
  return (
    <>
      <ParcoursHero />
      <ParcoursTimeline />
      <ParcoursPhilosophy />
      <CTASection />
    </>
  );
}