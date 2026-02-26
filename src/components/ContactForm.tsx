"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const subjects = [
  "Website laten maken",
  "Webshop laten maken",
  "Reparatie laptop",
  "Reparatie computer",
  "Reparatie telefoon/tablet",
  "Anders",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-12 text-center">
        <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-success" />
        </div>
        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
          Bedankt voor je bericht!
        </h3>
        <p className="text-[var(--text-secondary)] mb-6">
          We nemen binnen 4 uur contact met je op.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
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
      className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8"
    >
      <div className="grid sm:grid-cols-2 gap-6"
      >
        {/* Name */}
        <div>
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-[var(--text-primary)] mb-2"
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
            className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-primary transition-colors"
            placeholder="Jouw naam"
          />
        </div>

        {/* Email */}
        <div>
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-[var(--text-primary)] mb-2"
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
            className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-primary transition-colors"
            placeholder="jouw@email.nl"
          />
        </div>

        {/* Phone */}
        <div>
          <label 
            htmlFor="phone" 
            className="block text-sm font-medium text-[var(--text-primary)] mb-2"
          >
            Telefoon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-primary transition-colors"
            placeholder="06-12345678"
          />
        </div>

        {/* Subject */}
        <div>
          <label 
            htmlFor="subject" 
            className="block text-sm font-medium text-[var(--text-primary)] mb-2"
          >
            Onderwerp
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-primary transition-colors"
          >
            <option value="">Selecteer een onderwerp</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="mt-6">
        <label 
          htmlFor="message" 
          className="block text-sm font-medium text-[var(--text-primary)] mb-2"
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
          className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="Vertel ons over je project of probleem..."
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
