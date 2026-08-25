import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Hero from "@/components/home/Hero";

export const metadata: Metadata = buildMetadata({
  title: "Diététicienne-nutritionniste à Bruxelles",
  description:
    "Floriane Foret, diététicienne-nutritionniste à Bruxelles, vous accompagne avec bienveillance vers une alimentation équilibrée et durable : sport, troubles digestifs, rééquilibrage alimentaire.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
    </>
  );
}
