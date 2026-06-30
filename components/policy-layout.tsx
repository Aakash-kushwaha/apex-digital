import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Container } from "./container";
import { siteConfig } from "@/lib/site-config";

export function buildPolicyMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
    },
  };
}

export function PolicyLayout({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-[60vh] bg-surface">
      <Container className="py-12 sm:py-16">
        <header className="mb-10 max-w-3xl border-b border-border pb-8">
          <p className="text-sm font-medium text-accent">Legal</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-ink-muted">{description}</p>
          <p className="mt-4 text-sm text-ink-subtle">
            Last updated: {siteConfig.policyLastUpdated}
          </p>
        </header>
        <article className="policy-prose max-w-3xl">{children}</article>
      </Container>
    </div>
  );
}
