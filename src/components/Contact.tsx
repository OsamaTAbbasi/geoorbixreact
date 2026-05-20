import { Button } from "../components/ui/button";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { contactEmail, officeAddress, whatsappNumber, whatsappUrl } from "../lib/site";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email Us",
      value: contactEmail,
      href: `mailto:${contactEmail}`,
    },
    {
      icon: Phone,
      label: "WhatsApp Us",
      value: whatsappNumber,
      href: whatsappUrl,
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: officeAddress,
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
              Ready to discuss your
              <span className="gradient-text block">Next Project?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Let's discuss how Geo Orbix Technologies can support your GIS,
              analytics, or digital delivery needs.
            </p>
          </div>

          {/* CTA Card */}
          <div className="card-gradient rounded-2xl p-8 md:p-12 border border-border/50 text-center glow-effect">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Schedule a Free Consultation
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Our team is ready to understand your needs and provide clear next steps
              for GIS projects, analytics, or development support.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Chat with us on WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <div className="mt-4">
              <Button variant="heroOutline" size="xl" asChild>
                <a href={`mailto:${contactEmail}`}>
                  Mail Us
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {contactInfo.map((info, index) => (
              info.href ? (
                <a
                  key={index}
                  href={info.href}
                  target={info.label === "WhatsApp Us" ? "_blank" : undefined}
                  rel={info.label === "WhatsApp Us" ? "noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="font-medium text-foreground">{info.value}</div>
                  </div>
                </a>
              ) : (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center transition-colors">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="font-medium text-foreground">{info.value}</div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
