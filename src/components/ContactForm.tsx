"use client";

import { useRef, useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { contactSubjects, contactSubjectLabels, type ContactSubject } from "@/lib/contact-subjects";
import { trackSuccessfulContact } from "@/lib/contact-analytics";

export default function ContactForm({ initialSubject = "", initialPackage, sourcePage = "/contact" }: {
  initialSubject?: ContactSubject | "";
  initialPackage?: { id: string; name: string; subject: ContactSubject; priceLabel: string };
  sourcePage?: string;
}) {
  const [selectedPackage, setSelectedPackage] = useState(initialPackage);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: initialSubject,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sending = useRef(false);

  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending.current) return;
    sending.current = true;
    setIsSubmitting(true);
    setError("");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Stuur mee vanaf welke pagina de aanvraag komt, zodat zichtbaar wordt
        // welke stads- of dienstpagina daadwerkelijk klanten oplevert.
        body: JSON.stringify({
          ...formData,
          packageId: selectedPackage?.id,
          page: sourcePage,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success === true) {
        setIsSubmitted(true);
        trackSuccessfulContact(formData.subject, selectedPackage?.id);
      } else {
        setError(data.error || "Er is iets misgegaan. Probeer het opnieuw.");
      }
    } catch (err) {
      setError("Er is iets misgegaan. Probeer het later opnieuw.");
    } finally {
      sending.current = false;
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    if (e.target.name === "subject" && e.target.value !== selectedPackage?.subject) setSelectedPackage(undefined);
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-12 text-center">
        <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-success" />
        </div>
        <h3 className="text-2xl font-bold text-[var(--color-ink)] mb-4">
          Bedankt voor je bericht!
        </h3>
        <p className="text-[var(--color-muted)] mb-6">
          Ik neem zo snel mogelijk contact met je op om je aanvraag te bespreken.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setSelectedPackage(undefined);
            setFormData({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            });
          }}
          className="btn-secondary"
        >
          Nieuw bericht versturen
        </button>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-5 sm:p-8"
    >
      {selectedPackage && <div className="mb-7 rounded-lg border border-[#cad5d6] bg-[#edf5f3] p-5 text-[#071c3d]" aria-label="Gekozen pakket">
        <p className="text-sm">Je aanvraag gaat over</p>
        <p className="mt-1 text-xl font-bold">{selectedPackage.name}</p>
        <p className="mt-1 text-sm leading-relaxed">{selectedPackage.priceLabel}</p>
        <p className="mt-3 text-sm">Vrijblijvende aanvraag. De scope en eventuele extra kosten spreken we vooraf af.</p>
      </div>}
      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-red-400">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {/* Name */}
        <div>
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-[var(--color-ink)] mb-2"
          >
            Naam *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-ink)] placeholder-[var(--text-muted)] focus:outline-none focus:border-primary transition-colors"
            placeholder="Jouw naam"
          />
        </div>

        {/* Email */}
        <div>
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-[var(--color-ink)] mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-ink)] placeholder-[var(--text-muted)] focus:outline-none focus:border-primary transition-colors"
            placeholder="jouw@email.nl"
          />
        </div>

        {/* Phone */}
        <div>
          <label 
            htmlFor="phone" 
            className="block text-sm font-medium text-[var(--color-ink)] mb-2"
          >
            Telefoon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-ink)] placeholder-[var(--text-muted)] focus:outline-none focus:border-primary transition-colors"
            placeholder="06-12345678"
          />
        </div>

        {/* Subject */}
        <div>
          <label 
            htmlFor="subject" 
            className="block text-sm font-medium text-[var(--color-ink)] mb-2"
          >
            Onderwerp *
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full min-w-0 max-w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-ink)] focus:outline-none focus:border-primary transition-colors"
          >
            <option value="" disabled>Selecteer een onderwerp</option>
            {contactSubjects.map((subject) => (
              <option key={subject} value={subject}>{contactSubjectLabels[subject]}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="mt-6">
        <label 
          htmlFor="message" 
          className="block text-sm font-medium text-[var(--color-ink)] mb-2"
        >
          Bericht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-ink)] placeholder-[var(--text-muted)] focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder={selectedPackage?.id === "gratis-seo-scan" ? "Vermeld je websiteadres, wat je bedrijf doet en voor welke dienst je gevonden wilt worden." : "Vertel wat je bedrijf doet, welke website of functies je nodig hebt en wat je wilt bereiken."}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full mt-6 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
            Versturen...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Verstuur bericht
          </>
        )}
      </button>
    </form>
  );
}
