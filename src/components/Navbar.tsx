import { useState } from "react";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";
import BrandMark from "./BrandMark";
import { contactEmail, whatsappUrl } from "../lib/site";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="block group max-w-[70vw]">
            <BrandMark className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button variant="hero" size="default" asChild>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
            <Button variant="heroOutline" size="default" asChild>
              <a href={`mailto:${contactEmail}`}>
                Mail Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-2" asChild>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
                  Chat on WhatsApp
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href={`mailto:${contactEmail}`} onClick={() => setIsOpen(false)}>
                  Mail Us
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
