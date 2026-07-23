import { Quote, Star } from "lucide-react";
import { getGoogleReviewSummary } from "@/lib/google-reviews";

const dateFormatter = new Intl.DateTimeFormat("nl-NL", {
  month: "long",
  year: "numeric",
});

export default async function Testimonials() {
  const summary = await getGoogleReviewSummary();
  if (!summary) return null;

  return (
    <section
      className="section bg-[var(--color-surface)]"
      aria-labelledby="google-reviews-heading"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-wider">
            Google-reviews
          </span>
          <h2
            id="google-reviews-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-ink)] mt-4 mb-4"
          >
            Beoordeeld door{" "}
            <span className="text-[var(--color-primary)]">
              {summary.totalReviewCount} klanten
            </span>{" "}
            op Google
          </h2>
          <p className="text-[var(--color-muted)]">
            Gemiddeld {summary.averageRating.toLocaleString("nl-NL", {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })}{" "}
            van 5 sterren
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {summary.reviews.map((review, index) => (
            <div
              key={review.id}
              className="relative bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-[var(--color-primary)]/20" />
              </div>

              {/* Stars */}
              <div
                className="flex gap-1 mb-4"
                aria-label={`${review.rating} van 5 sterren`}
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    aria-hidden="true"
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? "text-yellow-500 fill-current"
                        : "text-[var(--color-border)]"
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[var(--color-ink)] text-lg mb-6 leading-relaxed">
                “{review.comment}”
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-bold">
                  {review.author[0]?.toUpperCase()}
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-ink)]">
                    {review.author}
                  </div>
                  <div className="text-sm text-[var(--color-muted)]">
                    {review.date
                      ? `Google-review · ${dateFormatter.format(
                          new Date(review.date),
                        )}`
                      : "Google-review"}
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
