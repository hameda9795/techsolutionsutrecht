"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

const footerLinks = {
  diensten: [
    { href: "/diensten/wordpress", label: "WordPress Websites" },
    { href: "/diensten/webshop", label: "WooCommerce Webshops" },
    { href: "/diensten/maatwerk", label: "Maatwerk Development" },
    { href: "/diensten/seo", label: "SEO Optimalisatie" },
  ],
  reparaties: [
    { href: "/reparaties/laptop", label: "Laptop Reparatie" },
    { href: "/reparaties/computer", label: "Computer Reparatie" },
    { href: "/reparaties/mac", label: "Mac Reparatie" },
    { href: "/reparaties/telefoon", label: "Telefoon & Tablet" },
  ],
  company: [
    { href: "/over-ons", label: "Over Ons" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
};

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border)]">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="font-bold text-xl text-[var(--text-primary)]">
                TechSolutions
                <span className="text-primary">Utrecht</span>
              </span>
            </Link>
            <p className="text-[var(--text-secondary)] mb-6 max-w-sm">
              Jouw tech-partner in Utrecht sinds 2012. Professionele websites 
              en betrouwbare reparaties onder één dak.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4">Diensten</h4>
            <ul className="space-y-3">
              {footerLinks.diensten.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reparaties */}
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4">Reparaties</h4>
            <ul className="space-y-3">
              {footerLinks.reparaties.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-[var(--text-secondary)] text-sm">
                  Utrecht, Nederland
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+31612345678"
                  className="text-[var(--text-secondary)] hover:text-primary transition-colors text-sm"
                >
                  06-12345678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@techsolutionsutrecht.nl"
                  className="text-[var(--text-secondary)] hover:text-primary transition-colors text-sm"
                >
                  info@techsolutionsutrecht.nl
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-[var(--text-secondary)] text-sm">
                  Ma-Vr: 09:00-18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-muted)] text-sm">
            © {new Date().getFullYear()} TechSolutionsUtrecht. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.company.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--text-muted)] hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
