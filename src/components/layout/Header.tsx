"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav, siteConfig } from "@/lib/site-config";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/90 backdrop-blur-sm">
      <div className="container-site flex items-center justify-between py-4">
        <Link
          href="/"
          className="font-display text-xl text-primary-dark tracking-tight"
          onClick={() => setOpen(false)}
        >
          Floriane Foret
        </Link>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="text-sm font-medium text-ink-soft transition-colors hover:text-primary"
          >
            {siteConfig.phoneDisplay}
          </a>
          <Link
            href={siteConfig.bookingUrl}
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
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
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

      {/* Nav mobile */}
      {open && (
        <nav className="border-t border-line bg-cream md:hidden">
          <div className="container-site flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-surface-mint"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={siteConfig.bookingUrl}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-cream"
            >
              Prendre RDV
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}