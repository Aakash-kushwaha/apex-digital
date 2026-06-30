import { PolicyLayout, buildPolicyMetadata } from "@/components/policy-layout";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPolicyMetadata(
  "Terms & conditions",
  `Terms of service for using ${siteConfig.name} websites and purchasing professional services.`,
  "/policies/terms"
);

export default function TermsPolicyPage() {
  return (
    <PolicyLayout
      title="Terms & conditions"
      description="General terms governing use of our website and purchase of services."
    >
      <p>
        These terms (“Terms”) govern access to our website and the purchase of
        services from {siteConfig.legalName} (“Company”, “we”, “us”). By requesting a
        quote, signing an SOW, or paying an invoice, you agree to these Terms together
        with any project-specific agreement that expressly overrides them.
      </p>

      <h2>1. Services</h2>
      <p>
        We provide IT consulting, software development, cloud engineering, and related
        services as described in an executed SOW or order form. Website content is
        for general information and does not constitute a binding offer until
        confirmed in writing.
      </p>

      <h2>2. Client responsibilities</h2>
      <p>
        You will provide timely access, materials, decisions, and approvals needed for
        delivery. Delays on your side may shift timelines and may affect fees if the
        SOW includes time-based billing or change requests.
      </p>

      <h2>3. Fees and taxes</h2>
      <p>
        Fees are as quoted in INR unless stated otherwise. Applicable taxes (e.g., GST)
        are added per law. Late payments may incur interest or suspension of services
        as permitted in the SOW.
      </p>

      <h2>4. Intellectual property</h2>
      <p>
        Unless the SOW states differently, we grant you a license to use deliverables
        for your internal business purposes upon full payment of the applicable
        invoices. Pre-existing tools, libraries, and open-source components remain
        subject to their respective licenses. We may reuse general know-how that does
        not include your confidential information.
      </p>

      <h2>5. Confidentiality</h2>
      <p>
        Each party will protect the other’s confidential information with reasonable
        care and use it only for performing under the agreement.
      </p>

      <h2>6. Warranties and disclaimer</h2>
      <p>
        Services are provided professionally and in line with the SOW. Except as
        required by law, we disclaim implied warranties to the maximum extent
        permitted. Any warranty period or remedy limits are defined in the SOW.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the extent permitted by law, our aggregate liability arising from a
        project is capped at the fees paid to us for that project in the six months
        preceding the claim, unless the SOW specifies a different cap. We are not
        liable for indirect, consequential, or lost profits except where prohibited by
        law.
      </p>

      <h2>8. Indemnity</h2>
      <p>
        Each party will indemnify the other against third-party claims arising from
        its gross negligence, willful misconduct, or violation of law, subject to
        the procedures in the SOW.
      </p>

      <h2>9. Governing law</h2>
      <p>
        These Terms are governed by the laws of India, without regard to conflict-of-law
        rules. Courts at Gurgaon, Haryana shall have exclusive jurisdiction unless the
        SOW provides otherwise.
      </p>

      <h2>10. Changes</h2>
      <p>
        We may update these Terms by posting a new version on this page and updating the
        “last updated” date. Existing SOWs continue under their signed terms.
      </p>

      <h2>11. Contact</h2>
      <p>
        {siteConfig.legalName} — {siteConfig.email}
      </p>
    </PolicyLayout>
  );
}
