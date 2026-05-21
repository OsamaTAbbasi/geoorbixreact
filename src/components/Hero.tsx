import { Button } from "../components/ui/button";
import { ArrowRight, MapPin, Users, Layers } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";
import { contactEmail, whatsappUrl } from "../lib/site";

const Hero = () => {
  const stats = [
    { icon: MapPin, value: "50+", label: "GIS Projects" },
    { icon: Users, value: "15-20", label: "Clients" },
    { icon: Layers, value: "3+", label: "Service Lines" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 mesh-background" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Animated Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Geo Orbix Technologies
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-slide-up">
            GIS Intelligence
            <span className="block gradient-text mt-2">and Software Solutions</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up animation-delay-200">
            We deliver GIS solutions and custom software development that help teams
            act on data with confidence and move faster.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up animation-delay-400">
            <Button variant="hero" size="xl" asChild>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Chat on WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href={`mailto:${contactEmail}`}>
                Mail Us
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 animate-slide-up animation-delay-600">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="card-gradient rounded-xl p-4 md:p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:glow-effect">
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl md:text-3xl font-display font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
