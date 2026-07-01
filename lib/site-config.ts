/**
 * Central copy and business details — apexdgsolution.
 * Source: company banner / statutory records.
 */
export const siteConfig = {
  /** Trading / short name (header, metadata) */
  name: "apexdgsolution",
  legalName: "apexdgsolution",
  /** Logo icon mark (see /public/logo.png). */
  logoSrc: "/logo.png",
  logoAlt: "apexdgsolution logo",
  tagline: "INNOVATE. DIGITALIZE. ELEVATE.",
  description:
    "apexdgsolution delivers website and app design, IT support, consultancy, and SEO for businesses across India.",
  url: "https://apexdgsolution.com",

  email: "apexdigitalsolution48@gmail.com",
  phone: "",
  phoneTel: "",

  address: {
    line1: "102, Bussiness Center",
    line2: "Sector 46",
    city: "Gurgaon",
    state: "Haryana",
    postalCode: "122003",
    country: "India",
  },

  gstin: "",
  tan: "",

  /** Typical project value range for custom engagements */
  ticketSizeLabel: "Typical engagement value",
  ticketSizeRange: "₹25,000 – ₹5,00,000 per project or milestone (excluding taxes)",

  businessModel:
    "apexdgsolution provides fixed-scope and ongoing IT services: website design, application design, IT support, consultancy, and SEO. Clients pay per project milestone, monthly retainer, or as agreed in a written quote or statement of work. Online payments are accepted against invoices we issue after confirmation of scope.",

  policyLastUpdated: "2025-09-14",

  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services & pricing" },
    { href: "/contact", label: "Contact" },
  ],

  policyLinks: [
    { href: "/policies/refund", label: "Refund & cancellation" },
    { href: "/policies/terms", label: "Terms & conditions" },
    { href: "/policies/privacy", label: "Privacy policy" },
    { href: "/policies/delivery", label: "Delivery & service policy" },
  ],

  services: [
    {
      id: "website-design",
      title: "Website design",
      description:
        "Responsive, fast-loading sites aligned with your brand—from landing pages to multi-section business sites—with clear structure and maintainable delivery.",
      priceFrom: "From ₹25,000",
      note: "Scoped by pages, integrations, and content needs",
    },
    {
      id: "app-design",
      title: "App design",
      description:
        "UX/UI for web and mobile applications: user flows, wireframes, and high-fidelity screens ready for your development team or vendor.",
      priceFrom: "From ₹35,000",
      note: "Priced by platforms and feature depth",
    },
    {
      id: "it-support",
      title: "IT support",
      description:
        "Helpdesk-style support for devices, email, connectivity, and day-to-day IT issues—by phone, email, scheduled visits, or other channels agreed in your support plan.",
      priceFrom: "From ₹5,000 / month",
      note: "Or per-ticket / ad-hoc packages on request",
    },
    {
      id: "consultant",
      title: "IT consultancy",
      description:
        "Advisory on tooling, security basics, vendor selection, cloud and office setup, and roadmaps so you invest in the right technology.",
      priceFrom: "From ₹2,500 / hour",
      note: "Workshop and fixed-scope audits available",
    },
    {
      id: "seo",
      title: "SEO",
      description:
        "Technical and on-page SEO foundations, content structure guidance, and performance checks to improve discoverability in search.",
      priceFrom: "From ₹15,000 / month",
      note: "Minimum term may apply for ongoing SEO",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
