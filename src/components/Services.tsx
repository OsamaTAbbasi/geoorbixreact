import { MapPin, TrendingUp, MessageSquare, Code } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "GIS Solutions",
      description:
        "Advanced geographic information systems for spatial analysis, mapping, and location intelligence that transform complex data into actionable insights.",
      features: ["Spatial Analysis", "Custom Mapping", "Data Visualization", "Remote Sensing"],
    },
    {
      icon: TrendingUp,
      title: "SEO Optimization",
      description:
        "Data-driven search engine optimization strategies that boost your online visibility and drive organic traffic to your digital platforms.",
      features: ["Keyword Research", "Technical SEO", "Content Strategy", "Analytics"],
    },
    {
      icon: MessageSquare,
      title: "Consultancy",
      description:
        "Expert guidance and strategic planning to help organizations leverage technology for sustainable growth and competitive advantage.",
      features: ["Strategy Planning", "Process Optimization", "Digital Transformation", "Training"],
    },
    {
      icon: Code,
      title: "Development",
      description:
        "Full-stack development solutions from web applications to custom software, built with modern technologies and best practices.",
      features: ["Web Applications", "API Development", "Cloud Solutions", "Mobile Apps"],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 mesh-background opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6">
            Comprehensive Solutions for
            <span className="gradient-text block">Digital Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine cutting-edge technology with industry expertise to deliver
            solutions that drive measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative card-gradient rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground border border-border/50"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
