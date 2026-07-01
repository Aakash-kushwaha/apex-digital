"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "./container";
import { SiteLogo } from "./site-logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <Container className="flex min-h-[4.25rem] items-center justify-between gap-4 py-2">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue"
          aria-label={`${siteConfig.name} home`}
        >
          <SiteLogo priority className="h-10 w-10 sm:h-11 sm:w-11" />
          <span className="hidden leading-tight sm:block">
            <span className="block text-base font-bold tracking-tight text-brand-navy sm:text-lg">
              APEXDG
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-widest text-accent sm:text-xs">
              solution
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-muted transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-hover"
          >
            Get in touch
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-surface md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-surface-muted"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-full bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
