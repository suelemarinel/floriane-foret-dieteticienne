import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <div className="relative">
          {/* Panneau décalé en arrière-plan, écho du traitement photo du Hero */}
          <div
            aria-hidden
            className="absolute -left-3 -top-3 h-full w-full rounded-tl-[3rem] rounded-br-[3rem] bg-primary-dark/60 md:-left-4 md:-top-4"
          />

          <div className="relative overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] bg-primary px-8 py-16 text-center md:px-16 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-16 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
            />

            <h2 className="text-balance relative mx-auto max-w-xl font-display text-3xl text-cream md:text-4xl">
              Prêt·e à (re)trouver du{" "}
              <span className="text-accent italic">plaisir</span> à manger ?
            </h2>
            <p className="relative mt-4 text-base text-cream/80 md:text-lg">
              À votre rythme, avec le sourire.
            </p>
            <Link
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-8 inline-flex items-center justify-center rounded-full border-2 border-cream bg-cream px-8 py-3.5 text-sm font-semibold text-primary-dark transition-colors hover:bg-transparent hover:text-cream"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}