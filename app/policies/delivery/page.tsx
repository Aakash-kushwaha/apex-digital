import { PolicyLayout, buildPolicyMetadata } from "@/components/policy-layout";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPolicyMetadata(
  "Delivery & service policy",
  `How ${siteConfig.name} delivers digital IT services, timelines, and support.`,
  "/policies/delivery"
);

export default function DeliveryPolicyPage() {
  return (
    <PolicyLayout
      title="Delivery & service policy"
      description="Digital delivery of professional services—no physical shipping. Timelines, channels, and handover."
    >
      <p>
        {siteConfig.legalName} provides professional IT services through agreed delivery
        channels—such as secure repositories, file handover, documentation, and
        scheduled meetings—with on-site or in-person work where specified in your
        statement of work. We do not ship physical goods as part of standard offerings.
      </p>

      <h2>1. Delivery method</h2>
      <ul>
        <li>Source code, configuration, and artifacts via private Git repositories</li>
        <li>Documentation via shared drives or agreed formats (PDF/Markdown)</li>
        <li>Deployments to environments you designate, or handover packages for your team</li>
        <li>Workshops and reviews through scheduled meetings (format as agreed in the SOW)</li>
      </ul>

      <h2>2. Timelines</h2>
      <p>
        Delivery dates are estimates unless a SOW specifies fixed deadlines with
        dependencies listed. Timelines assume timely client feedback, access, and
        approvals. We communicate delays proactively when they arise.
      </p>

      <h2>3. Acceptance</h2>
      <p>
        Milestones are accepted per the defect notice window in your SOW (default:
        seven calendar days). If you do not respond within that window, the milestone
        may be deemed accepted for invoicing purposes unless the SOW states otherwise.
      </p>

      <h2>4. Access and environments</h2>
      <p>
        You are responsible for providing necessary accounts, VPNs, API keys, and
        approvals. We follow your security policies where documented and reasonable.
      </p>

      <h2>5. Support after delivery</h2>
      <p>
        Warranty or hypercare periods, if any, are defined in the SOW. Ongoing support
        is available through paid retainers with agreed response targets.
      </p>

      <h2>6. Business hours</h2>
      <p>
        Default coordination hours are Monday–Friday, 10:00–18:00 IST, excluding
        public holidays in India.
      </p>

      <h2>7. Force majeure</h2>
      <p>
        Neither party is liable for delays due to events outside reasonable control,
        including outages of third-party cloud providers, provided prompt notice is
        given.
      </p>

      <h2>8. Contact</h2>
      <p>
        {siteConfig.legalName} — {siteConfig.email}
      </p>
    </PolicyLayout>
  );
}
