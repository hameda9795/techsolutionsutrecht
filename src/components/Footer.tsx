"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

const footerLinks = {
  diensten: [
    { href: "/diensten/wordpress", label: "WordPress Websites" },
    { href: "/diensten/webshop", label: "WooCommerce Webshops" },
    { href: "/diensten/maatwerk", label: "Maatwerk Development" },
    { href: "/diensten/seo", label: "SEO Optimalisatie" },
    { href: "/diensten/ai", label: "AI Integraties" },
    { href: "/zzp-website-laten-maken", label: "Website voor ZZP'ers" },
  ],
  branches: [
    { href: "/website-laten-maken-kapper", label: "Kappers" },
    { href: "/website-laten-maken-restaurant", label: "Restaurants" },
    { href: "/website-laten-maken-coach", label: "Coaches" },
  ],
  company: [
    { href: "/over-ons", label: "Over mij" },
    { href: "/projecten", label: "Projecten" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/veelgestelde-vragen", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "#", label: "KvK: 99202301" },
  ],
  regio: [
    { href: "/utrecht", label: "Utrecht" },
    { href: "/nieuwegein", label: "Nieuwegein" },
    { href: "/zeist", label: "Zeist" },
    { href: "/houten", label: "Houten" },
    { href: "/amersfoort", label: "Amersfoort" },
    { href: "/ijsselstein", label: "IJsselstein" },
    { href: "/de-meern", label: "De Meern" },
    { href: "/vleuten", label: "Vleuten" },
    { href: "/veenendaal", label: "Veenendaal" },
    { href: "/woerden", label: "Woerden" },
    { href: "/culemborg", label: "Culemborg" },
  ],
};

const socialLinks = [
  { href: "https://facebook.com/techsolutionsutrecht", icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/techsolutionsutrecht/", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com/company/techsolutionsutrecht", icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-muted)] border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="font-semibold text-[var(--color-bg)]">
                TechSolutionsUtrecht
              </span>
            </Link>
            <p className="text-sm mb-4">
              Professionele websites, webapplicaties en AI-oplossingen in Utrecht.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[var(--color-surface)]/20 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="text-[var(--color-bg)] font-medium mb-4">Diensten</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.diensten.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[var(--color-bg)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[var(--color-bg)] font-medium mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Utrecht, Nederland</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="https://wa.me/31625518708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-bg)] transition-colors"
                >
                  +31 6 25518708
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:info@techsolutionsutrecht.nl"
                  className="hover:text-[var(--color-bg)] transition-colors"
                >
                  info@techsolutionsutrecht.nl
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Ma-Vr: 09:00-18:00</span>
              </li>
            </ul>
          </div>

          {/* Legal & Links */}
          <div>
            <h3 className="text-[var(--color-bg)] font-medium mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[var(--color-bg)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Branches */}
        <div className="pt-8 border-t border-[var(--color-border)] mb-6">
          <h3 className="text-[var(--color-bg)] font-medium mb-4">Website laten maken per branche</h3>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {footerLinks.branches.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[var(--color-bg)] transition-colors">
                  Website voor {link.label.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Regio / Steden */}
        <div className="mb-8">
          <h3 className="text-[var(--color-bg)] font-medium mb-4">Website laten maken in de regio Utrecht</h3>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {footerLinks.regio.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[var(--color-bg)] transition-colors">
                  Website laten maken {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© 2025 TechSolutionsUtrecht • KvK: 99202301</p>
          
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-[var(--color-bg)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg bg-[var(--color-surface)]/20 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
