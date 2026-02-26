import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
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
    label: "Telefoon",
    value: "06-12345678",
    href: "tel:+31612345678",
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
    a: "We reageren binnen 4 uur op werkdagen. Voor urgente reparaties kun je ook bellen.",
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
      <main className="pt-32 pb-24">
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
              Heb je een vraag? Wil je een offerte aanvragen? 
              Of moet je tech gerepareerd worden? 
              We reageren binnen 4 uur.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((item) => (
                <div 
                  key={item.label}
                  className="flex items-start gap-4 p-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--text-muted)] mb-1">{item.label}</div>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-[var(--text-primary)] font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-[var(--text-primary)] font-medium">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}

              {/* FAQs */}
              <div className="mt-8 pt-8 border-t border-[var(--border)]">
                <h3 className="font-semibold text-[var(--text-primary)] mb-4">
                  Veelgestelde vragen
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.q}>
                      <div className="font-medium text-[var(--text-primary)] mb-1">{faq.q}</div>
                      <div className="text-sm text-[var(--text-secondary)]">{faq.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
