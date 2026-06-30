import type { Metadata } from "next";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact us",
  description: `Contact ${siteConfig.name} for project inquiries, quotes, and support.`,
  openGraph: {
    title: `Contact us | ${siteConfig.name}`,
    description: `Reach ${siteConfig.name} by email.`,
    url: new URL("/contact", siteConfig.url).toString(),
  },
};

function formatAddress() {
  const a = siteConfig.address;
  return [a.line1, a.line2, a.city, a.state, a.postalCode, a.country]
    .filter((x) => x && String(x).trim() !== "")
    .join(", ");
}

export default function ContactPage() {
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    `Inquiry — ${siteConfig.name}`
  )}`;

  return (
    <Section
      className="!pt-12 sm:!pt-16"
      eyebrow="Contact"
      title="Let’s talk about your project"
      description="Share context, timelines, and links to any existing systems. We respond within two business days for new inquiries."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
          <h2 className="text-lg font-semibold text-ink">Direct contact</h2>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="font-medium text-ink-subtle">Email</dt>
              <dd className="mt-1">
                <a
                  href={mailto}
                  className="font-medium text-accent underline-offset-2 hover:underline"
                >
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            {siteConfig.phone && siteConfig.phoneTel && (
              <div>
                <dt className="font-medium text-ink-subtle">Phone</dt>
                <dd className="mt-1 text-ink-muted">
                  <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-accent">
                    {siteConfig.phone}
                  </a>
                  <span className="mt-1 block text-xs text-ink-subtle">
                    New enquiries: email is often fastest; call for urgent production issues.
                  </span>
                </dd>
              </div>
            )}
            <div>
              <dt className="font-medium text-ink-subtle">Website</dt>
              <dd className="mt-1">
                <a
                  href={siteConfig.url}
                  className="font-medium text-accent underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.url.replace(/^https?:\/\//, "")}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-ink-subtle">Registered address</dt>
              <dd className="mt-1 text-ink-muted leading-relaxed">{formatAddress()}</dd>
            </div>
            {siteConfig.gstin && (
              <div>
                <dt className="font-medium text-ink-subtle">GSTIN</dt>
                <dd className="mt-1 font-mono text-sm text-ink-muted">{siteConfig.gstin}</dd>
              </div>
            )}
            {siteConfig.tan && (
              <div>
                <dt className="font-medium text-ink-subtle">TAN</dt>
                <dd className="mt-1 font-mono text-sm text-ink-muted">{siteConfig.tan}</dd>
              </div>
            )}
          </dl>
        </div>

        <div className="rounded-2xl border border-border bg-surface-muted p-8">
          <h2 className="text-lg font-semibold text-ink">What to include</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-ink-muted">
            <li>Problem statement and desired outcomes</li>
            <li>Timeline or launch date constraints</li>
            <li>Budget band or approval process</li>
            <li>Relevant links (staging URLs, docs, designs)</li>
          </ul>
          <a
            href={mailto}
            className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-hover"
          >
            Email us
          </a>
        </div>
      </div>
    </Section>
  );
}
