import PageShell from "../components/PageShell";

const Careers = () => {
  return (
    <PageShell
      title="Careers"
      subtitle="We are building a team focused on GIS, analytics, and product delivery."
    >
      <div className="card-gradient rounded-2xl p-8 border border-border/50">
        <h2 className="text-xl font-display font-semibold mb-3">Open Roles</h2>
        <p className="text-muted-foreground">
          New opportunities will be posted here soon. Share your profile at
          <span className="text-primary"> geoorbix@gmail.com</span>.
        </p>
      </div>
    </PageShell>
  );
};

export default Careers;
