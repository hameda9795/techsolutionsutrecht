"use client";

import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Binnen een week stond mijn nieuwe website online. Snelle communicatie en een resultaat waar ik trots op ben.",
    author: "Marie",
    location: "Utrecht",
    rating: 5,
  },
  {
    quote:
      "Laptop binnen een dag gerepareerd. Echt top service en eerlijke prijzen.",
    author: "Peter",
    location: "Nieuwegein",
    rating: 5,
  },
  {
    quote:
      "Webshop draait als een trein. Omzet verdubbeld sinds de lancering. Aanrader!",
    author: "Ahmed",
    location: "Houten",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-[var(--color-surface)]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-ink)] mt-4 mb-6">
            Vertrouwd door{" "}
            <span className="text-[var(--color-primary)]">20+ klanten</span> in Utrecht
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-[var(--color-primary)]/20" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-current"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[var(--color-ink)] text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-bold">
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-ink)]">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-[var(--color-muted)]">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
