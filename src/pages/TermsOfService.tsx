import PageShell from "../components/PageShell";

const TermsOfService = () => {
  return (
    <PageShell
      title="Terms of Service"
      subtitle="Clear engagement terms focused on transparency and delivery."
    >
      <div className="card-gradient rounded-2xl p-8 border border-border/50 space-y-4 text-muted-foreground">
        <p>
          Services are scoped by written agreement, including timelines and
          deliverables. Changes are confirmed before execution.
        </p>
        <p>
          For full contract terms or service inquiries, contact hello@geoorbix.com.
        </p>
      </div>
    </PageShell>
  );
};

export default TermsOfService;
