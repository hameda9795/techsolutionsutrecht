"use client";

import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Mijn website staat nu op #1 in Google. Super service en het resultaat is echt top!",
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
    <section className="section bg-[var(--bg-secondary)]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mt-4 mb-6">
            Vertrouwd door{" "}
            <span className="gradient-text">500+ klanten</span> in Utrecht
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-primary/20" />
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
              <blockquote className="text-[var(--text-primary)] text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="font-semibold text-[var(--text-primary)]">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-[var(--text-secondary)]">
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
