"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

type SiteLogoProps = {
  /** Tailwind size classes for the logo icon */
  className?: string;
  priority?: boolean;
};

/** Apex Digital Solution icon mark from /public/logo.png */
export function SiteLogo({
  className = "h-11 w-11 sm:h-14 sm:w-14",
  priority = false,
}: SiteLogoProps) {
  return (
    <Image
      src={siteConfig.logoSrc}
      alt={siteConfig.logoAlt}
      width={194}
      height={180}
      className={`shrink-0 object-contain object-left ${className}`}
      priority={priority}
    />
  );
}
