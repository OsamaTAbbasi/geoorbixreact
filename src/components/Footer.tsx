import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import BrandMark from "./BrandMark";
import { brandName, contactEmail, whatsappUrl } from "../lib/site";

const Footer = () => {
  const links = {
    services: [
      { name: "GIS Solutions", href: "/#services" },
      { name: "Spatial Analytics", href: "/#services" },
      { name: "Consultancy", href: "/#services" },
      { name: "Development", href: "/#services" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    social: [
      { icon: Linkedin, href: "#", label: "LinkedIn" },
      { icon: Twitter, href: "#", label: "Twitter" },
      { icon: Github, href: "#", label: "GitHub" },
      { icon: Mail, href: "#", label: "Email" },
    ],
  };

  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <a href="#" className="block mb-4 max-w-full">
              <BrandMark />
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              GIS solutions, spatial analytics, and digital delivery support built to
              help teams move from data to outcomes.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {links.social.map((social, index) => (
                <a
                  key={index}
                  href={social.label === "Email" ? `mailto:${contactEmail}` : social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm text-primary hover:underline"
            >
              WhatsApp support available
            </a>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">
              Services
            </h4>
            <ul className="space-y-3">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">
              Company
            </h4>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {brandName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
