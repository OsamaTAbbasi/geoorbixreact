import { CheckCircle, Globe, Zap, Shield, Award } from "lucide-react";

const About = () => {
  const reasons = [
    {
      icon: Globe,
      title: "Geo-Spatial Focus",
      description: "Deep expertise in spatial data, mapping, and analysis for mission-critical work.",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Efficient delivery and crisp communication for complex project timelines.",
    },
    {
      icon: Shield,
      title: "Reliable & Secure",
      description: "Sensitive client information is handled carefully with a focus on trust and privacy.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "A growing record of successful GIS projects and strategic engagements.",
    },
  ];

  const highlights = [
    "GIS project delivery with practical reporting",
    "Transparent communication and quick responses",
    "Tailored advice for individuals and businesses",
    "Dedicated support throughout the engagement",
  ];

  const advisors = [
    {
      name: "Naqash Ghaffar",
      role: "Advisor, AI & Technology",
      bio: "Naqash Ghaffar is a technology entrepreneur and product leader with extensive experience in artificial intelligence, product development, and digital innovation. As Co-Founder and CPTO at Dost AI, he has successfully led the development of technology-driven products and scalable solutions. At GeoOrbix, he provides strategic guidance on AI integration, intelligent geospatial systems, product strategy, and technology architecture, helping the company stay at the forefront of innovation.",
    },
    {
      name: "Sikander Abbasi",
      role: "Advisor, Software Engineering",
      bio: "Sikander Abbasi is a software developer with expertise in web technologies, e-commerce platforms, and scalable digital solutions. His practical experience in designing and developing user-centric applications enables GeoOrbix to strengthen its software capabilities and product ecosystem. He advises the company on software architecture, application development, system scalability, and technology implementation to support sustainable growth.",
    },
    {
      name: "Abdul Basit",
      role: "Advisor, Marketing & Growth",
      bio: "Abdul Basit is a marketing professional with experience in brand development, growth strategy, and customer engagement. As CMO at Snapp! Box, he has played an important role in driving business growth and strengthening brand visibility. At GeoOrbix, he provides guidance on market positioning, branding, customer acquisition, strategic partnerships, and business development initiatives, helping the company expand its reach and market presence.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative bg-secondary/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Why Geo Orbix
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6">
              Your Partner in
              <span className="gradient-text block">GIS & Software Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Geo Orbix Technologies, we deliver GIS projects and software solutions
              with clarity. Our team combines geospatial insight, engineering, and
              hands-on support so clients get results without the usual noise.
            </p>

            {/* Highlights */}
            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{highlight}</span>
                </li>
              ))}
            </ul>

          </div>

          {/* Right Column - Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group card-gradient rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 mb-4 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-8 text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold">
              Leadership & Advisors
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-border/60 bg-background/60 p-6">
              <img
                src="/hassan image.jpg"
                alt="Hassan Maqsood Abbasi"
                className="mb-5 h-24 w-24 rounded-xl border border-border/60 object-cover"
                loading="lazy"
              />
              <p className="text-sm uppercase tracking-widest text-primary/80">
                Founder & CEO
              </p>
              <h3 className="mt-2 text-xl font-display font-semibold text-foreground">
                Hassan Maqsood Abbasi
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                GIS specialist with 6+ years of experience delivering national-scale
                telecom coverage analysis and geospatial data solutions. Focused on
                remote sensing, data-informed planning, and GIS-driven digital
                connectivity across Pakistan. Founder of GeoOrbix, building GIS and
                web platforms for better visualization and decision-making.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a
                  href="https://www.linkedin.com/in/hassan-maqsood-abbasi-53275418b"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:hassanmaqsoodabbasi@gmail.com"
                  className="text-primary hover:underline"
                >
                  Email
                </a>
                <a href="tel:+923058998428" className="text-primary hover:underline">
                  Phone
                </a>
              </div>
            </div>
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                className="rounded-2xl border border-border/60 bg-background/60 p-6"
              >
                <p className="text-sm uppercase tracking-widest text-primary/80">
                  {advisor.role}
                </p>
                <h3 className="mt-2 text-xl font-display font-semibold text-foreground">
                  {advisor.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {advisor.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
