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

            {/* CEO */}
            <div className="mt-10 rounded-2xl border border-border/60 bg-background/60 p-6 md:p-7">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <img
                  src="/hassan image.jpg"
                  alt="Hassan Maqsood Abbasi"
                  className="h-28 w-28 rounded-xl border border-border/60 object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm uppercase tracking-widest text-primary/80">
                    Founder & CEO
                  </p>
                  <h3 className="mt-2 text-2xl font-display font-semibold text-foreground">
                    Hassan Maqsood Abbasi
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    GIS specialist with 6+ years of experience delivering national-scale
                    telecom coverage analysis and geospatial data solutions. Focused on
                    remote sensing, data-informed planning, and GIS-driven digital
                    connectivity across Pakistan. Founder of GeoOrbix, building GIS and
                    web platforms for better visualization and decision-making.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
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
                      hassanmaqsoodabbasi@gmail.com
                    </a>
                    <a href="tel:+923058998428" className="text-primary hover:underline">
                      +92 305 8998428
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
      </div>
    </section>
  );
};

export default About;
