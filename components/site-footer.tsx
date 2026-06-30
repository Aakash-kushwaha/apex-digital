import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Container } from "./container";
import { SiteLogo } from "./site-logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-brand-navy text-white/75">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-white/10">
              <SiteLogo className="h-12 w-12 sm:h-14 sm:w-14" />
              <span className="leading-tight">
                <span className="block text-base font-bold tracking-tight text-brand-navy sm:text-lg">
                  APEX
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-widest text-accent sm:text-xs">
                  Digital Solution
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              {siteConfig.description}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
              Company
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
              Legal & policies
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/policies"
                  className="text-white/70 transition hover:text-white"
                >
                  All policies
                </Link>
              </li>
              {siteConfig.policyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 space-y-3 border-t border-white/10 pt-8 text-xs text-white/55">
          {siteConfig.gstin && siteConfig.tan && (
            <p className="font-mono text-[11px] leading-relaxed text-white/50">
              GSTIN {siteConfig.gstin} · TAN {siteConfig.tan}
            </p>
          )}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
            </p>
            <p className="text-white/45">
              Policies last updated {siteConfig.policyLastUpdated}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
