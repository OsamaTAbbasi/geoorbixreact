import { CheckCircle, Globe, Zap, Shield, Award } from "lucide-react";

const About = () => {
  const reasons = [
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Worldwide experience with diverse projects across multiple industries and geographies.",
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "We leverage the latest tools and methodologies to deliver innovative solutions.",
    },
    {
      icon: Shield,
      title: "Reliable & Secure",
      description: "Enterprise-grade security and reliability you can count on for mission-critical projects.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of successful projects with measurable outcomes and satisfied clients.",
    },
  ];

  const highlights = [
    "Industry-leading expertise in GIS and geospatial technologies",
    "Transparent communication and collaborative approach",
    "Tailored solutions that fit your unique requirements",
    "Dedicated support throughout and beyond project completion",
    "Commitment to innovation and continuous improvement",
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative bg-secondary/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Why Geoorbix
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6">
              Your Partner in
              <span className="gradient-text block">Digital Transformation</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Geoorbix Technologies, we believe in the power of precision. Whether
              mapping the world or mapping your success online, our multidisciplinary
              team brings together expertise in geospatial intelligence, digital
              marketing, strategic consulting, and software development.
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
      </div>
    </section>
  );
};

export default About;
