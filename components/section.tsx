import type { ReactNode } from "react";
import { Container } from "./container";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  muted = false,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  muted?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 ${muted ? "bg-surface-muted" : ""} ${className}`}
    >
      <Container>
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-2xl">
            {eyebrow && (
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-lg text-ink-muted leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
