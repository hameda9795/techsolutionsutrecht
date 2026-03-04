import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | TechSolutionsUtrecht - Utrecht",
  description: "Neem contact op met TechSolutionsUtrecht. Website nodig? Tech kapot? Bel of mail, wij helpen je graag.",
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Adres",
    value: "Utrecht, Nederland",
    href: null,
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+31 6 25518708",
    href: "https://wa.me/31625518708",
    isWhatsApp: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@techsolutionsutrecht.nl",
    href: "mailto:info@techsolutionsutrecht.nl",
  },
  {
    icon: Clock,
    label: "Openingstijden",
    value: "Ma-Vr: 09:00-18:00",
    href: null,
  },
];

const faqs = [
  {
    q: "Hoe snel krijg ik reactie?",
    a: "We reageren binnen 4 uur op werkdagen. Voor urgente reparaties kun je ook WhatsAppen.",
  },
  {
    q: "Waar zitten jullie?",
    a: "Onze werkplaats is in Utrecht. Je bent welkom op afspraak.",
  },
  {
    q: "Kan ik langskomen?",
    a: "Ja, maar alleen op afspraak. Zo zorgen we dat we echt tijd voor je hebben.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      
      {/* Breadcrumb */}
      <nav className="py-4 bg-[var(--bg-secondary)] border-b border-[var(--border)]">
        <div className="container-custom">
          <ol className="flex items-center gap-2 text-sm flex-wrap">
            <li><Link href="/" className="text-[var(--text-muted)] hover:text-primary transition-colors">Home</Link></li>
            <li className="text-[var(--text-muted)]">/</li>
            <li><span className="text-[var(--text-primary)] font-medium">Contact</span></li>
          </ol>
        </div>
      </nav>

      <main className="pt-8 pb-24">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mt-4 mb-6">
              Neem{" "}
              <span className="gradient-text">Contact</span>{" "}
              Op
            </h1>
            <p className="text-[var(--text-secondary)] text-lg">
              Heb je een vraag of wil je een offerte aanvragen? 
              We helpen je graag. Vul het formulier in of neem direct contact op.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="card-hover bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-[var(--text-muted)] text-sm mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.isWhatsApp ? "_blank" : undefined}
                          rel={item.isWhatsApp ? "noopener noreferrer" : undefined}
                          className="text-[var(--text-primary)] font-semibold hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[var(--text-primary)] font-semibold">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* FAQ */}
              <div className="bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border)] mt-8">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">
                  Veelgestelde vragen
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.q}>
                      <p className="font-semibold text-[var(--text-primary)] mb-1">{faq.q}</p>
                      <p className="text-[var(--text-secondary)] text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-hover bg-[var(--bg-card)] rounded-xl p-8 border border-[var(--border)]">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
