import PageShell from "../components/PageShell";

const PrivacyPolicy = () => {
  return (
    <PageShell
      title="Privacy Policy"
      subtitle="Your information is handled responsibly and used only to support service delivery."
    >
      <div className="card-gradient rounded-2xl p-8 border border-border/50 space-y-4 text-muted-foreground">
        <p>
          We collect only the information required to respond to inquiries and
          deliver services. Data is not sold or shared with third parties without
          consent.
        </p>
        <p>
          For questions about data handling, please email hello@geoorbix.com.
        </p>
      </div>
    </PageShell>
  );
};

export default PrivacyPolicy;
