"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, siteConfig } from "@/lib/site-config";

// Pages avec un hero sombre plein cadre en haut (texte clair nécessaire tant qu'on n'a pas scrollé)
const FULL_DARK_HERO_PAGES = ["/accompagnement", "/contact"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isHomePage = pathname === "/";
  const isFullDarkHeroPage = FULL_DARK_HERO_PAGES.includes(pathname);
  const logoLightText = !scrolled && isFullDarkHeroPage;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`container-site transition-[padding] duration-300 ${
          scrolled ? "pt-3" : "pt-0"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "max-w-3xl rounded-full border border-line/70 bg-cream/90 px-5 py-2.5 shadow-lg shadow-primary-dark/5 backdrop-blur-md"
              : "max-w-none rounded-none border-transparent bg-transparent px-0 py-5"
          }`}
        >
          <Link
            href="/"
            className={`font-display text-lg tracking-tight transition-colors md:text-xl ${
              logoLightText ? "text-cream" : "text-primary-dark"
            }`}
            onClick={() => setOpen(false)}
          >
            Floriane Foret
          </Link>

          {/* Nav desktop */}
          <nav className="hidden items-center gap-10 md:flex">
            {mainNav.map((item, index) => {
              const active = isActive(item.href);
              const overPhoto =
                !scrolled && isHomePage && index >= 2; // home : seule la moitié droite est sombre
              const lightText =
                overPhoto || (!scrolled && isFullDarkHeroPage); // pages avec hero sombre plein cadre

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm transition-colors ${
                    active ? "font-semibold" : "font-medium"
                  } ${
                    lightText
                      ? "text-cream"
                      : active
                        ? "text-primary-dark"
                        : "text-ink-soft hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-primary-dark"
            >
              Prendre RDV
            </Link>
          </div>

          {/* Bouton burger mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Ouvrir le menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-cream/80 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-5 bg-primary-dark transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-primary-dark transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-primary-dark transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Nav mobile (toujours solide, peu importe le scroll) */}
      {open && (
        <div className="container-site mt-2 md:hidden">
          <nav className="rounded-2xl border border-line bg-cream shadow-lg">
            <div className="flex flex-col gap-1 p-4">
              {mainNav.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-lg px-3 py-3 text-base transition-colors ${
                      active
                        ? "bg-surface-mint font-semibold text-primary-dark"
                        : "font-medium text-ink hover:bg-surface-mint"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-cream"
              >
                Prendre RDV
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}