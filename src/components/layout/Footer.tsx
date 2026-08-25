import Link from "next/link";
import { accompagnements, mainNav, siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface-mint">
      <div className="container-site grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl text-primary-dark">
            Floriane Foret
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
            Diététicienne-nutritionniste à {siteConfig.city}. Un accompagnement
            bienveillant, sans régime ni culpabilité, pour retrouver une
            alimentation qui vous fait du bien.
          </p>
          <div className="mt-4 space-y-1 text-sm text-ink-soft">
            <p>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                {siteConfig.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Navigation</p>
          <ul className="mt-3 space-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-ink-soft hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Accompagnements</p>
          <ul className="mt-3 space-y-2">
            {accompagnements.map((item) => (
              <li key={item.slug}>
                <Link href={item.href} className="text-sm text-ink-soft hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line/70">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-5 text-xs text-ink-soft md:flex-row">
          <p>© {year} {siteConfig.name} — Tous droits réservés.</p>
          <p>Diététicienne-nutritionniste à {siteConfig.city}</p>
        </div>
      </div>
    </footer>
  );
}