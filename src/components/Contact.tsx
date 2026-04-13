import { Button } from "../components/ui/button";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email Us",
      value: "hello@geoorbix.com",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+1 (555) 123-4567",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "123 Tech Hub, Innovation City",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 mesh-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6">
              Ready to Start Your
              <span className="gradient-text block">Next Project?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Let's discuss how Geoorbix Technologies can help transform your ideas
              into reality. Reach out today for a free consultation.
            </p>
          </div>

          {/* CTA Card */}
          <div className="card-gradient rounded-2xl p-8 md:p-12 border border-border/50 text-center glow-effect">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Schedule a Free Consultation
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Our experts are ready to understand your challenges and propose
              tailored solutions that drive results.
            </p>
            <Button variant="hero" size="xl">
              Book a Meeting
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <info.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{info.label}</div>
                  <div className="font-medium text-foreground">{info.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
