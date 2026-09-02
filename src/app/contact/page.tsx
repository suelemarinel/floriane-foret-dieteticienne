import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import ContactInfoCard from "@/components/contact/ContactInfoCard";
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
} from "@/components/shared/ContactIcons";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contactez Floriane Foret, diététicienne-nutritionniste à Bruxelles, ou prenez rendez-vous en ligne en quelques clics.",
  path: "/contact",
});

export default function ContactPage() {
  const hasAddress = Boolean(siteConfig.address.street);

  return (
    <>
      <section className="bg-primary-dark pb-16 pt-40 md:pb-20 md:pt-48">
        <div className="container-site">
          <span className="inline-flex items-center rounded-full border border-cream/30 bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream backdrop-blur-sm">
            Contact
          </span>
          <h1 className="text-balance mt-6 max-w-2xl font-display text-4xl leading-[1.12] text-cream sm:text-5xl md:text-[3.2rem]">
            Une question ? Discutons-en.
          </h1>
          <p className="text-balance mt-6 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg">
            Par téléphone, par mail, ou directement en ligne pour prendre
            rendez-vous — comme vous préférez.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            <ContactInfoCard icon={<PhoneIcon />} label="Téléphone">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="hover:text-primary"
              >
                {siteConfig.phoneDisplay}
              </a>
            </ContactInfoCard>

            <ContactInfoCard icon={<MailIcon />} label="Email">
             <a 
                href={`mailto:${siteConfig.email}`}
                className="hover:text-primary"
              >
                {siteConfig.email}
              </a>
            </ContactInfoCard>

            <ContactInfoCard icon={<PinIcon />} label="Cabinet">
              {hasAddress ? (
                <span>
                  {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
                  {siteConfig.address.city}
                </span>
              ) : (
                <span>
                  [Adresse du cabinet à compléter] · {siteConfig.city}
                </span>
              )}
            </ContactInfoCard>

            <ContactInfoCard icon={<ClockIcon />} label="Horaires">
              <span>[Jours et horaires de consultation à compléter]</span>
            </ContactInfoCard>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[2rem] bg-primary p-8 text-center md:p-10">
              <p className="font-display text-2xl text-cream md:text-3xl">
                Prendre rendez-vous en ligne
              </p>
              <p className="mt-3 text-sm text-cream/80">
                Choisissez le créneau qui vous convient, en quelques clics.
              </p>
              <Link
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-primary-dark transition-colors hover:bg-accent"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </section>

      {!hasAddress && (
        <section className="pb-20 md:pb-28">
          <div className="container-site">
            <div className="flex h-72 items-center justify-center rounded-2xl border border-line bg-surface-mint px-6 text-center text-sm font-medium text-ink-soft md:h-96">
              [Carte du cabinet à activer une fois l&apos;adresse confirmée]
            </div>
          </div>
        </section>
      )}
    </>
  );
}