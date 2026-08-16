"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

// Lokale dienstverlening wordt vaak gewoon gebeld. Er stond nergens een
// klikbaar telefoonnummer op de site — alleen WhatsApp en e-mail.
const PHONE_DISPLAY = "06 25518708";
const PHONE_HREF = "tel:+31625518708";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/projecten", label: "Projecten" },
  { href: "/blog", label: "Blog" },
  { href: "/over-ons", label: "Over mij" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-all duration-200 border-b border-[var(--color-border)] ${
          isScrolled
            ? "bg-[var(--color-bg)] shadow-sm"
            : "bg-[var(--color-bg)]/95 backdrop-blur-md"
        }`}
      >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* Desktop Logo - Full logo with text */}
          <div className="hidden md:block">
            <Image
              src="/logo.png"
              alt="TechSolutionsUtrecht"
              width={240}
              height={60}
              className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
          </div>
          
          {/* Mobile Logo - Icon + Text */}
          <div className="flex md:hidden items-center gap-2">
            <Image
              src="/logo-icon.png"
              alt="TechSolutions"
              width={40}
              height={40}
              className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
              priority
            />
            <span className="font-semibold text-[var(--color-ink)] text-lg">
              TechSolutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          {/* Klikbaar telefoonnummer */}
          <a
            href={PHONE_HREF}
            className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            Offerte
          </Link>
        </nav>

        {/* Mobiel: belknop altijd zichtbaar, ook als het menu dicht is */}
        <a
          href={PHONE_HREF}
          aria-label={`Bel ${PHONE_DISPLAY}`}
          className="md:hidden ml-auto mr-1 p-2 rounded-lg text-[var(--color-ink)] hover:bg-[var(--color-surface)] transition-colors"
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-[var(--color-surface)] rounded-lg transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-[var(--color-ink)]" />
          ) : (
            <Menu className="w-6 h-6 text-[var(--color-ink)]" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--color-bg)]/95 border-t border-[var(--color-border)]">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[var(--color-ink)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)] px-4 py-3 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[var(--color-primary)] text-white px-4 py-3 rounded-lg font-medium hover:bg-[var(--color-primary-dark)] transition-colors text-center mt-2"
            >
              Offerte aanvragen
            </Link>

            <a
              href={PHONE_HREF}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium text-[var(--color-ink)] ring-1 ring-inset ring-[var(--color-border)] hover:bg-[var(--color-surface)] transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Bel {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
      </div>
    </header>
  );
}
