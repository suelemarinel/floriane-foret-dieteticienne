import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { accompagnements } from "@/lib/site-config";
import { accompagnementDetails } from "@/data/accompagnements-content";
import AccompagnementCard from "@/components/accompagnement/AccompagnementCard";
import AccompagnementDetailSection from "@/components/accompagnement/AccompagnementDetailSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Accompagnement",
  description:
    "Découvrez les accompagnements proposés par Floriane Foret, diététicienne-nutritionniste à Bruxelles : alimentation équilibrée, troubles digestifs, nutrition sportive.",
  path: "/accompagnement",
});

export default function AccompagnementPage() {
  return (
    <>
      <section className="bg-primary-dark pb-16 pt-40 md:pb-20 md:pt-48">
        <div className="container-site">
          <span className="inline-flex items-center rounded-full border border-cream/30 bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream backdrop-blur-sm">
            Accompagnement
          </span>
          <h1 className="text-balance mt-6 max-w-2xl font-display text-4xl leading-[1.12] text-cream sm:text-5xl md:text-[3.2rem]">
            Un accompagnement qui s&apos;adapte à vous
          </h1>
          <p className="text-balance mt-6 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg">
            Peu importe votre point de départ, on construit ensemble une
            approche sur-mesure — pas l&apos;inverse.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-site">
          <div className="grid gap-6 md:grid-cols-3">
            {accompagnements.map((item, i) => (
              <AccompagnementCard key={item.slug} index={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      {accompagnements.map((item) => {
        const details = accompagnementDetails[item.slug];
        return (
          <AccompagnementDetailSection
            key={item.slug}
            id={item.slug}
            label={item.label}
            audience={item.audience}
            color={item.color}
            intro={details.intro}
            forWho={details.forWho}
            includes={details.includes}
          />
        );
      })}

      <CTASection />
    </>
  );
}