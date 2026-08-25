import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Hero from "@/components/home/Hero";
import TopicsSection from "@/components/home/TopicsSection";
import AudienceSection from "@/components/home/AudienceSection";
import ValuesSection from "@/components/home/ValuesSection";
import SessionSteps from "@/components/home/SessionSteps";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

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
      <TopicsSection />
      <AudienceSection />
      <ValuesSection />
      <SessionSteps />
      <Testimonials />
      <CTASection />
    </>
  );
}
