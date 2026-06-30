import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: siteConfig.tagline,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 22%, rgb(46 125 50 / 0.18), transparent 42%), radial-gradient(circle at 82% 8%, rgb(0 119 182 / 0.14), transparent 38%)",
          }}
        />
        <Container className="relative py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
            {siteConfig.name}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl sm:leading-tight">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-brand-blue">
            Your vision, our digital expertise.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-hover"
            >
              Start a conversation
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-ink transition hover:border-brand-blue hover:text-brand-blue"
            >
              View services & pricing
            </Link>
          </div>
        </Container>
      </section>

      <Section
        eyebrow="How we work"
        title="Built for clarity and delivery"
        description="Fixed milestones, visible progress, and documentation you can hand to your internal team."
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Scope before code",
              body: "We align on outcomes, constraints, and acceptance criteria so billing matches value delivered.",
            },
            {
              title: "Transparent pricing",
              body: "Every offering on our site includes a starting price or rate card. Custom quotes reference the same structure.",
            },
            {
              title: "Ongoing support",
              body: "Optional retainers for maintenance, SLAs, and incremental improvements after go-live.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{card.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        muted
        eyebrow="Business model"
        title="What you pay for"
        description={siteConfig.businessModel}
      >
        <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
          <dl className="grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-ink-subtle">
                {siteConfig.ticketSizeLabel}
              </dt>
              <dd className="mt-2 text-xl font-semibold text-ink">
                {siteConfig.ticketSizeRange}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-ink-subtle">Payment methods</dt>
              <dd className="mt-2 text-base text-ink-muted">
                Invoices payable per agreed milestones. Online card payments and bank
                transfer where enabled on your invoice.
              </dd>
            </div>
          </dl>
          <p className="mt-8 text-sm text-ink-subtle">
            Larger programs are delivered in phased statements of work with milestones
            aligned to the engagement value range above.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Services"
        title="Popular offerings"
        description="Full catalog and price anchors are on the services page."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.slice(0, 3).map((s) => (
            <div
              key={s.id}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                {s.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-accent">{s.priceFrom}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
          >
            See all services & pricing
          </Link>
        </div>
      </Section>

      <Section
        muted
        eyebrow="Compliance"
        title="Policies for customers"
        description="Refund, privacy, delivery, and terms are published and linked in the footer for easy reference."
      >
        <ul className="flex flex-wrap gap-3">
          {siteConfig.policyLinks.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="inline-flex rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
              >
                {p.label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
