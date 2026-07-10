"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
      <div className="container-custom">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          <li>
            <Link 
              href="/" 
              className="flex items-center gap-1 text-[var(--color-muted)] hover:text-primary transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </li>
          
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-[var(--color-muted)]" />
              {index === items.length - 1 ? (
                <span className="text-[var(--color-ink)] font-medium">{item.label}</span>
              ) : (
                <Link 
                  href={item.href}
                  className="text-[var(--color-muted)] hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
