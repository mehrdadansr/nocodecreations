import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { href: "/services#websites", label: "Custom Websites" },
    { href: "/services#webapps", label: "Web Applications" },
    { href: "/services#design", label: "UI/UX Design" },
    { href: "/services#nocode", label: "No-Code Solutions" },
    { href: "/services#ai", label: "AI Solutions" },
    { href: "/services#growth", label: "Growth & Marketing" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
    { href: "/get-a-quote", label: "Get a Quote" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">NC</span>
              </div>
              <span className="text-lg font-bold text-foreground">
                NoCode Creations
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Building custom digital products that drive growth for businesses
              across Australia and beyond.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@nocodecreations.com.au"
                className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
              >
                <Mail size={16} />
                hello@nocodecreations.com.au
              </a>
              <a
                href="tel:+61400000000"
                className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
              >
                <Phone size={16} />
                +61 400 000 000
              </a>
              <div className="flex items-center gap-2 text-sm text-muted">
                <MapPin size={16} />
                Sydney, Australia
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Ready to start?
            </h3>
            <p className="text-sm text-muted mb-4">
              Let&apos;s turn your idea into a product that drives results.
            </p>
            <Link
              href="/get-a-quote"
              className="inline-block px-6 py-3 text-sm font-semibold rounded-lg bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-opacity"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} NoCode Creations. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
