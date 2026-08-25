"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNav, siteConfig } from "@/lib/site-config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
            className="font-display text-lg text-primary-dark tracking-tight md:text-xl"
            onClick={() => setOpen(false)}
          >
            Floriane Foret
          </Link>

          {/* Nav desktop */}
          <nav className="hidden items-center gap-7 md:flex">
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

          <div className="hidden md:block">
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

      {/* Nav mobile */}
      {open && (
        <div className="container-site mt-2 md:hidden">
          <nav className="rounded-2xl border border-line bg-cream shadow-lg">
            <div className="flex flex-col gap-1 p-4">
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
        </div>
      )}
    </header>
  );
}