import PageShell from "../components/PageShell";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <PageShell
      title="Contact"
      subtitle="Reach out to discuss GIS projects, analytics needs, or development support."
    >
      <Contact />
    </PageShell>
  );
};

export default ContactPage;
