import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Legal policies",
  description: `Policies for customers of ${siteConfig.name}: refunds, terms, privacy, and service delivery.`,
  openGraph: {
    title: `Legal policies | ${siteConfig.name}`,
    description: `Refund, terms, privacy, and delivery policies for ${siteConfig.name}.`,
    url: new URL("/policies", siteConfig.url).toString(),
  },
};

export default function PoliciesHubPage() {
  return (
    <div className="bg-surface py-12 sm:py-16">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Legal policies
        </h1>
        <p className="mt-4 max-w-2xl text-ink-muted leading-relaxed">
          Customer-centric policies referenced at checkout and in contracts. Select a
          document below; each page shows the last updated date.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {siteConfig.policyLinks.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="block rounded-2xl border border-border bg-surface-muted p-6 font-medium text-ink transition hover:border-accent hover:text-accent"
              >
                {p.label} →
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
