import PageShell from "../components/PageShell";
import { brandName, contactEmail } from "../lib/site";

const PrivacyPolicy = () => {
  return (
    <PageShell
      title="Privacy Policy"
      subtitle="This policy explains what we collect, how we use it, and the choices you have."
    >
      <div className="card-gradient rounded-2xl p-8 border border-border/50 space-y-6 text-muted-foreground">
        <p className="text-sm uppercase tracking-wide text-foreground/70">
          Effective date: May 22, 2026
        </p>
        <p>
          {brandName} ("we", "us", "our") collects and uses information to
          deliver requested services, respond to inquiries, and improve our
          website experience.
        </p>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">
            Information we collect
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Contact details you submit (name, email, phone, message).</li>
            <li>Project or service details you share with us.</li>
            <li>
              Usage data such as pages visited, device information, and browser
              type collected via cookies or analytics.
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">
            How we use information
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide and manage services you request.</li>
            <li>Communicate about proposals, updates, and support.</li>
            <li>Improve site performance, content, and user experience.</li>
            <li>Comply with legal obligations and enforce agreements.</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">
            Sharing and disclosures
          </h3>
          <p>
            We do not sell personal data. We may share information with service
            providers who support our operations (e.g., hosting or analytics)
            under confidentiality obligations, or when required by law.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">
            Cookies and analytics
          </h3>
          <p>
            We use cookies and similar technologies to remember preferences and
            understand usage. You can control cookies through your browser
            settings.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">
            Data retention and security
          </h3>
          <p>
            We retain information only as long as needed for the purposes
            described above and take reasonable measures to protect it. No
            method of transmission or storage is 100% secure.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">
            Your choices and rights
          </h3>
          <p>
            You may request access, correction, or deletion of your information,
            or opt out of marketing communications, subject to legal
            requirements.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">Children</h3>
          <p>
            Our services are not directed to children under 13, and we do not
            knowingly collect personal information from them.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">
            Policy updates
          </h3>
          <p>
            We may update this policy from time to time. We will post the
            updated version with a revised effective date.
          </p>
        </div>
        <p>
          For questions about this policy or your data, contact us at{" "}
          <a className="text-primary hover:underline" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
          .
        </p>
      </div>
    </PageShell>
  );
};

export default PrivacyPolicy;
