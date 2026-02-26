"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  {
    value: 12,
    suffix: "+",
    label: "jaar ervaring",
  },
  {
    value: 500,
    suffix: "+",
    label: "tevreden klanten",
  },
  {
    value: 4.9,
    suffix: "/5",
    label: "gemiddelde beoordeling",
  },
  {
    value: 24,
    suffix: "u",
    label: "gemiddelde reparatietijd",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Number(current.toFixed(1)));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] stat-glow">
      {value % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}
      <span className="text-primary">{suffix}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-[var(--bg-secondary)] border-y border-[var(--border)]">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="mt-2 text-[var(--text-secondary)] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
