import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import BrandMark from "./BrandMark";
import { brandName, contactEmail, whatsappUrl } from "../lib/site";

const Footer = () => {
  const links = {
    services: [
      { name: "GIS Solutions", href: "/#services" },
      { name: "Consultancy", href: "/#services" },
      { name: "Software Solutions", href: "/#services" },
      { name: "Development", href: "/#services" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    social: [
      {
        icon: Linkedin,
        href: "https://www.linkedin.com/company/geoorbix-technologies/",
        label: "LinkedIn",
      },
      { icon: Twitter, href: "#", label: "Twitter" },
      { icon: Github, href: "#", label: "GitHub" },
      { icon: Mail, href: "#", label: "Email" },
    ],
  };

  const renderInternalLink = (href: string, label: string, className: string) => (
    <Link to={href} className={className}>
      {label}
    </Link>
  );

  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link to="/" className="block mb-4 max-w-full">
              <BrandMark />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              GIS solutions, consultancy, and digital delivery support built to
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
              Chat on WhatsApp
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
                  {renderInternalLink(
                    link.href,
                    link.name,
                    "text-muted-foreground hover:text-primary transition-colors"
                  )}
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
                  {renderInternalLink(
                    link.href,
                    link.name,
                    "text-muted-foreground hover:text-primary transition-colors"
                  )}
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
            {renderInternalLink(
              "/privacy",
              "Privacy Policy",
              "text-muted-foreground hover:text-primary transition-colors"
            )}
            {renderInternalLink(
              "/terms",
              "Terms of Service",
              "text-muted-foreground hover:text-primary transition-colors"
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
