import PageShell from "../components/PageShell";
import { brandName, contactEmail } from "../lib/site";

const TermsOfService = () => {
  return (
    <PageShell
      title="Terms of Service"
      subtitle="These terms govern use of our website and services."
    >
      <div className="card-gradient rounded-2xl p-8 border border-border/50 space-y-6 text-muted-foreground">
        <p className="text-sm uppercase tracking-wide text-foreground/70">
          Effective date: May 22, 2026
        </p>
        <p>
          By accessing or using {brandName} services or website, you agree to
          these Terms of Service and our Privacy Policy. If you do not agree,
          please do not use our services.
        </p>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">
            Services and engagement
          </h3>
          <p>
            Services are scoped by written agreement, including timelines,
            deliverables, and fees. Changes are confirmed in writing before
            execution.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">Payments</h3>
          <p>
            Payment schedules, invoicing, and late fees (if any) are defined in
            the applicable agreement or proposal.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">
            Intellectual property
          </h3>
          <p>
            Pre-existing intellectual property remains with its respective
            owner. Deliverables are licensed or assigned as described in the
            written agreement.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">
            Acceptable use
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Do not misuse the site or attempt to gain unauthorized access.</li>
            <li>Do not introduce malware or interfere with service operation.</li>
            <li>Comply with applicable laws and regulations.</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">
            Third-party links
          </h3>
          <p>
            Our website may link to third-party sites. We are not responsible
            for their content, policies, or practices.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">
            Disclaimers and limitation of liability
          </h3>
          <p>
            Services are provided on an "as is" basis to the extent permitted by
            law. We are not liable for indirect, incidental, or consequential
            damages. Total liability is limited to the amount paid for the
            specific services giving rise to the claim.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">Termination</h3>
          <p>
            We may suspend or terminate access if these terms are violated. Any
            termination terms in a written agreement will also apply.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">
            Changes to these terms
          </h3>
          <p>
            We may update these terms from time to time. Continued use of the
            services after updates constitutes acceptance.
          </p>
        </div>
        <p>
          For questions about these terms, contact us at{" "}
          <a className="text-primary hover:underline" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
          .
        </p>
      </div>
    </PageShell>
  );
};

export default TermsOfService;
