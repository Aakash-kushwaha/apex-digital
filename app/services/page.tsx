import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services & pricing",
  description: `${siteConfig.name} service catalog with indicative pricing for website design, app design, IT support, consultancy, and SEO.`,
  openGraph: {
    title: `Services & pricing | ${siteConfig.name}`,
    description: `Full service list and starting prices for ${siteConfig.name} offerings.`,
    url: new URL("/services", siteConfig.url).toString(),
  },
};

export default function ServicesPage() {
  return (
    <>
      <Section
        className="!pt-12 sm:!pt-16"
        eyebrow="Services & pricing"
        title="What we deliver—and what it costs to start"
        description="Prices below are indicative starting points; final fees depend on scope, integrations, and timelines. We always confirm pricing in a written quote or statement of work before work begins."
      >
        <div className="space-y-6">
          {siteConfig.services.map((s) => (
            <article
              key={s.id}
              className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-3xl">
                  <h2 className="text-xl font-semibold text-ink">{s.title}</h2>
                  <p className="mt-3 text-ink-muted leading-relaxed">{s.description}</p>
                  <p className="mt-3 text-sm text-ink-subtle">{s.note}</p>
                </div>
                <div className="shrink-0 rounded-xl bg-surface-muted px-4 py-3 text-center sm:text-right">
                  <p className="text-sm font-medium text-ink-subtle">Starting at</p>
                  <p className="text-lg font-semibold text-accent">{s.priceFrom}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-border bg-surface-muted p-6">
          <h2 className="text-lg font-semibold text-ink">Custom engagements</h2>
          <p className="mt-2 text-sm text-ink-muted leading-relaxed">
            For programs outside the packages above, we prepare a fixed-fee or T&M
            proposal with milestones. {siteConfig.ticketSizeLabel}:{" "}
            <strong className="text-ink">{siteConfig.ticketSizeRange}</strong>
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block font-semibold text-accent hover:text-accent-hover"
          >
            Request a quote →
          </Link>
        </div>
      </Section>
    </>
  );
}
