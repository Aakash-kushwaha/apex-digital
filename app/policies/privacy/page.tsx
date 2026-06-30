import { PolicyLayout, buildPolicyMetadata } from "@/components/policy-layout";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPolicyMetadata(
  "Privacy policy",
  `How ${siteConfig.name} collects, uses, and protects personal data.`,
  "/policies/privacy"
);

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy policy"
      description="What data we collect when you browse or contact us, and your choices."
    >
      <p>
        {siteConfig.legalName} (“we”, “us”) respects your privacy. This policy
        describes personal data we process through our website and sales process.
      </p>

      <h2>1. Who we are</h2>
      <p>
        Data controller: {siteConfig.legalName}. Contact: {siteConfig.email}.
      </p>

      <h2>2. Data we collect</h2>
      <ul>
        <li>
          <strong>Contact and inquiry data:</strong> name, email, phone, company, and
          message content when you email us or submit forms.
        </li>
        <li>
          <strong>Contract and billing data:</strong> billing contacts, tax identifiers,
          and payment references as required to perform services (processing of card
          data is handled by our payment partners under their policies).
        </li>
        <li>
          <strong>Technical data:</strong> IP address, device/browser type, and basic
          logs for security and reliability when you visit the site.
        </li>
      </ul>

      <h2>3. How we use data</h2>
      <ul>
        <li>To respond to inquiries and prepare quotes or SOWs</li>
        <li>To deliver services, invoice, and provide support</li>
        <li>To secure our systems and detect fraud or abuse</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>4. Legal bases (where applicable)</h2>
      <p>
        We rely on contract performance, legitimate interests (e.g., securing the site
        and business correspondence), and consent where required by law.
      </p>

      <h2>5. Cookies</h2>
      <p>
        This site uses essential cookies required for operation. We do not use
        non-essential analytics or advertising cookies on this website.
      </p>

      <h2>6. Sharing</h2>
      <p>
        We share data with subprocessors who help us run the business—e.g., email,
        hosting, payment gateways—under written agreements and only as needed. We do
        not sell personal data.
      </p>

      <h2>7. Retention</h2>
      <p>
        We keep inquiry records and contracts as long as needed for the relationship
        and for legal, tax, and accounting requirements, then delete or anonymize them
        per our internal schedule.
      </p>

      <h2>8. Security</h2>
      <p>
        We implement reasonable technical and organizational measures appropriate to
        the risk. No method of transmission over the Internet is completely secure.
      </p>

      <h2>9. Your rights</h2>
      <p>
        Depending on applicable law, you may have rights to access, correct, delete, or
        restrict processing of your personal data, or to object to certain processing.
        Contact {siteConfig.email} to exercise rights. You may also complain to a data
        protection authority where available.
      </p>

      <h2>10. International transfers</h2>
      <p>
        We process data primarily within India. When transfers outside India are
        necessary, we apply appropriate safeguards as required by applicable law.
      </p>

      <h2>11. Children</h2>
      <p>Our services are not directed to children under 16.</p>

      <h2>12. Updates</h2>
      <p>
        We may update this policy by posting changes here and revising the “last
        updated” date.
      </p>

      <h2>13. Contact</h2>
      <p>
        {siteConfig.legalName} — {siteConfig.email}
      </p>
    </PolicyLayout>
  );
}
