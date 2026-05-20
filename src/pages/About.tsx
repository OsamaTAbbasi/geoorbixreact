import PageShell from "../components/PageShell";
import AboutSection from "../components/About";

const About = () => {
  return (
    <PageShell
      title="About Us"
      subtitle="Geo Orbix Technologies delivers GIS intelligence, spatial analytics, and digital solutions that help organizations make better decisions."
    >
      <AboutSection />
    </PageShell>
  );
};

export default About;
