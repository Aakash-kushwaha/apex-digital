import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About us",
  description: `Learn about ${siteConfig.name}: IT services, delivery philosophy, and who we serve.`,
  openGraph: {
    title: `About us | ${siteConfig.name}`,
    description: `Learn about ${siteConfig.name} and how we deliver IT services.`,
    url: new URL("/about", siteConfig.url).toString(),
  },
};

export default function AboutPage() {
  return (
    <>
      <Section
        className="!pt-12 sm:!pt-16"
        eyebrow="About us"
        title={`Who ${siteConfig.name} is`}
        description="We are a Gurgaon-based IT services and consultancy focused on practical delivery: websites, apps, support, and SEO—with clear communication from Sector 46."
      >
        <div className="max-w-3xl space-y-6 text-ink-muted leading-relaxed">
          <p>
            {siteConfig.name} partners with startups, SMEs, and internal product teams
            that need senior execution without building a large in-house engineering
            org overnight. Our work spans web applications, cloud infrastructure,
            integrations, and long-term care retainers.
          </p>
          <p>
            Every engagement starts with understanding constraints—timeline, budget,
            compliance, and existing systems. We propose a clear statement of work,
            milestone plan, and communication rhythm so stakeholders always know what
            is in scope and what ships next.
          </p>
          <p>
            We are committed to transparent delivery, documented handovers, and support
            that scales with client needs—from one-off projects to long-term retainers.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface-muted p-6">
            <h2 className="text-lg font-semibold text-ink">What we optimize for</h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-ink-muted">
              <li>Measurable outcomes per milestone</li>
              <li>Operable systems—logging, backups, runbooks</li>
              <li>Knowledge transfer to your team</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface-muted p-6">
            <h2 className="text-lg font-semibold text-ink">Who we work with</h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-ink-muted">
              <li>Founders launching digital products</li>
              <li>Operations teams automating workflows</li>
              <li>IT leaders modernizing legacy stacks</li>
            </ul>
          </div>
        </div>
        <p className="mt-12">
          <Link href="/contact" className="font-semibold text-accent hover:text-accent-hover">
            Contact us →
          </Link>
        </p>
      </Section>
    </>
  );
}
