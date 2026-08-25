import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 text-center md:px-16 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-16 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
          />
          <h2 className="text-balance relative mx-auto max-w-xl font-display text-3xl text-cream md:text-4xl">
            Prêt·e à (re)trouver du plaisir à manger ?
          </h2>
          <p className="relative mt-4 text-base text-cream/80 md:text-lg">
            À votre rythme, avec le sourire.
          </p>
          <Link
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-8 inline-flex items-center justify-center rounded-full bg-cream px-8 py-3.5 text-sm font-semibold text-primary-dark transition-colors hover:bg-accent"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </section>
  );
}