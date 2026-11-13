"use client";

import Link from "next/link";
import { useState } from "react";
import { estimateWebsiteCosts, type WebsiteCostPlan } from "@/lib/website-costs";

const euros = (amount: number) => new Intl.NumberFormat("nl-NL", {
  style: "currency", currency: "EUR", maximumFractionDigits: 0,
}).format(amount);

export default function WebsiteCostCalculator({ plans, maintenancePrice }: {
  plans: WebsiteCostPlan[];
  maintenancePrice: number;
}) {
  const [planId, setPlanId] = useState(plans[0].id);
  const [withMaintenance, setWithMaintenance] = useState(false);
  const plan = plans.find((item) => item.id === planId) || plans[0];
  const estimate = estimateWebsiteCosts(plan, withMaintenance ? maintenancePrice : 0);
  const contactHref = `/contact?${new URLSearchParams({
    pakket: plan.id,
    van: "/blog/wat-kost-website-laten-maken",
  })}`;

  return (
    <section id="websitekosten-berekenen" aria-labelledby="websitekosten-title"
      className="mb-12 scroll-mt-28 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-8">
      <h2 id="websitekosten-title" className="text-2xl font-bold text-[var(--color-ink)]">Bereken je websitekosten</h2>
      <p className="mt-3 leading-relaxed text-[var(--color-muted)]">
        Kies een WordPress-pakket en vergelijk de bouwkosten met het eerste en volgende jaar.
        Dit zijn de prijzen van TechSolutionsUtrecht, exclusief btw.
      </p>
      <fieldset className="mt-6">
        <legend className="font-semibold text-[var(--color-ink)]">Hoeveel inhoudspagina’s heb je nodig?</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {plans.map((item) => (
            <label key={item.id} className="flex cursor-pointer items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
              <input type="radio" name="website-pakket" value={item.id}
                checked={planId === item.id} onChange={() => setPlanId(item.id)}
                className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-primary)]" />
              <span className="min-w-0 text-sm text-[var(--color-muted)]">
                <span className="block font-semibold text-[var(--color-ink)]">{item.name}</span>
                <span className="mt-1 block">{item.scope}</span>
                <span className="mt-2 block font-semibold text-[var(--color-ink)]">{euros(item.price)} eenmalig</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-[var(--color-ink)]">
        <input type="checkbox" checked={withMaintenance}
          onChange={(event) => setWithMaintenance(event.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-primary)]" />
        <span>Reken optioneel WordPress onderhoud mee: {euros(maintenancePrice)} per maand.
          <span className="block text-[var(--color-muted)]">Updates, controles en maximaal 15 minuten kleine wijzigingen volgens het onderhoudspakket.</span>
        </span>
      </label>
      <div className="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5"
        role="status" aria-live="polite" aria-atomic="true">
        <p className="font-semibold text-[var(--color-ink)]">Bouw + gekozen onderhoud</p>
        <dl className="mt-4 grid gap-5 sm:grid-cols-2">
          <div><dt className="text-sm text-[var(--color-muted)]">Eerste jaar</dt>
            <dd className="mt-1 text-3xl font-bold text-[var(--color-ink)]" data-cost-first-year>{euros(estimate.firstYear)}</dd>
            <dd className="mt-1 text-sm text-[var(--color-muted)]">{euros(estimate.build)} bouw + 12 × {euros(estimate.maintenancePerMonth)} onderhoud</dd>
          </div>
          <div><dt className="text-sm text-[var(--color-muted)]">Volgend jaar, zonder nieuw bouwwerk</dt>
            <dd className="mt-1 text-3xl font-bold text-[var(--color-ink)]" data-cost-next-year>{euros(estimate.followingYear)}</dd>
            <dd className="mt-1 text-sm text-[var(--color-muted)]">Alleen het gekozen onderhoud</dd>
          </div>
        </dl>
        <p className="mt-5 text-sm font-semibold leading-relaxed text-[var(--color-ink)]">
          Dit is een subtotaal, geen volledige jaarprijs. Domein, hosting, betaalde licenties en extra werk komen erbij.
        </p>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
        Je levert teksten, foto’s en logo aan; een ontwerpbasis wordt aangepast aan je huisstijl.
        Boeken, betalen of andere koppelingen vallen buiten deze WordPress-pakketten.
        De berekening reserveert of bestelt niets; onderhoud spreken we apart af.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Link href={contactHref} className="btn-primary">Bespreek {plan.name}</Link>
        <Link href="/prijzen#onderhoud-pakketten" className="font-semibold text-[var(--color-primary)] underline underline-offset-4">Bekijk voorwaarden en onderhoud</Link>
      </div>
    </section>
  );
}
