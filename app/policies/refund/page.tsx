import { PolicyLayout, buildPolicyMetadata } from "@/components/policy-layout";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPolicyMetadata(
  "Refund & cancellation policy",
  `Refund and cancellation terms for services purchased from ${siteConfig.name}.`,
  "/policies/refund"
);

export default function RefundPolicyPage() {
  return (
    <PolicyLayout
      title="Refund & cancellation policy"
      description="How cancellations, deposits, and refunds work for our IT services and retainers."
    >
      <p>
        This policy applies to professional services, consulting, implementation work,
        and recurring retainers sold by {siteConfig.legalName} (“we”, “us”).
      </p>

      <h2>1. Nature of services</h2>
      <p>
        We provide intangible, custom professional services. Deliverables are specified
        in a statement of work (SOW), order form, or written agreement signed before
        work begins.
      </p>

      <h2>2. Deposits and milestone billing</h2>
      <p>
        Unless otherwise agreed in writing, projects may require an upfront deposit or
        advance invoice before scheduling or procurement. Subsequent invoices are tied
        to agreed milestones. Payment of an invoice constitutes acceptance of the
        associated milestone scope as delivered, subject to any written defect notice
        within the period stated in your SOW (default: seven calendar days if not
        specified).
      </p>

      <h2>3. Cancellation by you</h2>
      <p>
        You may cancel future milestones by written notice. Cancellation does not
        remove obligation to pay for work already performed, expenses already incurred
        with your approval, or non-refundable third-party costs (e.g., licenses,
        cloud spend prepaid on your behalf) as itemized in the SOW or invoice.
      </p>
      <ul>
        <li>
          <strong>Before work starts:</strong> Deposits may be refundable minus
          administrative and planning costs if stated in your quote.
        </li>
        <li>
          <strong>After work starts:</strong> Fees earned to date, including partial
          milestones, are due. We may issue a final invoice for time and materials at
          agreed rates for incomplete phases.
        </li>
      </ul>

      <h2>4. Cancellation or suspension by us</h2>
      <p>
        We may suspend or terminate services for material breach (including non-payment)
        or force majeure. If we terminate for convenience (rare), we will refund any
        prepaid fees for milestones not yet started, unless otherwise agreed.
      </p>

      <h2>5. Retainers</h2>
      <p>
        Monthly or quarterly retainers renew per the agreement. Notice periods for
        cancellation of retainers are as specified in the SOW (default: thirty days
        before the next renewal). Fees for the current period are not prorated unless
        the SOW says otherwise.
      </p>

      <h2>6. Refund requests</h2>
      <p>
        Refund requests must be emailed to {siteConfig.email} with invoice numbers and
        a description of the issue. We acknowledge receipt within three business days
        and respond with a decision or request for additional information within
        fifteen business days unless a longer period is required by complexity.
      </p>

      <h2>7. Chargebacks</h2>
      <p>
        Please contact us before initiating a chargeback so we can resolve billing
        questions. Chargebacks may delay delivery and may incur administrative fees
        where permitted by law and your agreement.
      </p>

      <h2>8. Contact</h2>
      <p>
        {siteConfig.legalName} — {siteConfig.email}
      </p>
    </PolicyLayout>
  );
}
