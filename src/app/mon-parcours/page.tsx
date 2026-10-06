import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ParcoursHero from "@/components/mon-parcours/ParcoursHero";
import ParcoursTimeline from "@/components/mon-parcours/ParcoursTimeline";
import ParcoursPhilosophy from "@/components/mon-parcours/ParcoursPhilosophy";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Mon parcours",
  description:
    "Parcours de Floriane Foret, diététicienne-nutritionniste à Bruxelles : milieu hospitalier et cabinet, nutrition du sportif et syndrome de l'intestin irritable.",
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