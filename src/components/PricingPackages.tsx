import Link from "next/link";
import { ArrowRight, Check, Info } from "lucide-react";
import { formatPrice, packageContactHref, packageGroups, type PackageCategory } from "@/lib/packages";

export default function PricingPackages({ category, id, source, showIntro = true, showWebshopCostGuide = false }: {
  category: PackageCategory;
  id?: string;
  source?: string;
  showIntro?: boolean;
  showWebshopCostGuide?: boolean;
}) {
  const group = packageGroups[category];
  const sectionId = id ?? `${category}-pakketten`;
  const showMaintenanceCosts = category === "onderhoud" && sectionId === "pakketten";
  let heading = group.title;
  if (showWebshopCostGuide) heading = "Wat kost het om een WooCommerce-webshop te laten maken?";
  if (showMaintenanceCosts) heading = "Wat kost websiteonderhoud per maand en per jaar?";
  return (
    <section className={`package-section package-section--${category}`} id={sectionId} aria-labelledby={`${sectionId}-title`}>
      <div className="package-container">
        <header className="package-heading">
          <h2 id={`${sectionId}-title`}>{heading}</h2>
          {showMaintenanceCosts && (
            <p>Voor het onderhoud van een WordPress-website betaal je €39 per maand (€468 per jaar). Voor een WooCommerce-webshop betaal je €69 per maand (€828 per jaar). Bij dat pakket test ik ook de winkelwagen en het afrekenen. Alle bedragen zijn exclusief btw. Hosting en betaalde licenties komen er apart bij.</p>
          )}
          {showWebshopCostGuide && <>
            <p>Ik bouw je WooCommerce-webshop vanaf €950. Met Start voer ik tot 10 eenvoudige producten voor je in. Bij Business (€1.450) zijn dat er tot 30, ook met maten of kleuren. Met Plus (€2.100) voer ik tot 60 producten in en richt ik één standaardkoppeling in via een bestaande plugin. Dit zijn eenmalige prijzen, exclusief btw.</p>
            <p>Na de bouw betaal je apart voor hosting, je domeinnaam, eventuele pluginlicenties en de transactiekosten van je betaalprovider. Wil je dat ik je webshop ook onderhoud? Dat kan voor €69 per maand, exclusief btw.</p>
          </>}
          {showIntro && <p>{group.intro}</p>}
          <p className="package-tax">Alle prijzen exclusief btw · {category === "seo" ? "Eenmalige en maandelijkse pakketten" : category === "onderhoud" ? "Maandelijkse pakketten" : "Eenmalige bouwkosten"}</p>
        </header>
        {category === "seo" && <div className="package-free-scan">
          <div><h3>Gratis SEO scan</h3><p>Tot 3 pagina’s bekeken · 5 aandachtspunten · 3 zoekwoordkansen · kort advies</p></div>
          <Link href={`/contact?${new URLSearchParams({ pakket: "gratis-seo-scan", van: source ?? group.href })}`} className="package-button package-button--white">Vraag de gratis scan aan <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>}
        <div className={`package-grid${group.packages.length === 2 ? " package-grid--two" : ""}`}>
          {group.packages.map((plan) => (
            <article className="package-card" key={plan.id} id={plan.id}>
              <h3 className="package-name">{plan.name}</h3>
              <div className="package-card-body">
                <p className="package-price">{plan.from && <span className="package-from">vanaf</span>}<strong>{formatPrice(plan.price)}</strong><span>{plan.period}</span></p>
                <p className="package-tagline">{plan.tagline}</p>
                {plan.setupFee && <p className="package-setup">+ {formatPrice(plan.setupFee)} eenmalige start</p>}
                <ul className="package-features">
                  {plan.features.map((feature) => <li key={feature}><span className="package-check"><Check size={14} strokeWidth={3} aria-hidden="true" /></span><span>{feature}</span></li>)}
                </ul>
                <p className="package-audience">{plan.audience}</p>
                <Link href={packageContactHref(group, plan, source)} className="package-button" aria-label={`Bespreek ${plan.name}: ${plan.from ? "vanaf " : ""}${formatPrice(plan.price)} ${plan.period} exclusief btw${plan.setupFee ? ` plus ${formatPrice(plan.setupFee)} eenmalige start` : ""}`} data-package={plan.id}>Bespreek dit pakket <ArrowRight size={18} aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>
        <p className="package-included"><Check size={22} aria-hidden="true" /><span>{group.shared}</span></p>
        <div className="package-notes">{group.notes.map((note) => <p key={note}><Info size={18} aria-hidden="true" /><span>{note}</span></p>)}</div>
      </div>
    </section>
  );
}

export function WebsiteChoiceGuide() {
  return <section className="package-choice package-container" id="wordpress-of-maatwerk" aria-labelledby="website-choice-title">
    <header className="package-heading"><h2 id="website-choice-title">WordPress of een website zonder WordPress?</h2><p>Kies op basis van wat je website moet doen.</p></header>
    <div className="package-choice-grid">
      <div><h3>WordPress</h3><p>Voor een bedrijfswebsite, blog of webshop is WordPress vaak een passende keuze. Je wijzigt zelf teksten en afbeeldingen. Veel functies zijn beschikbaar als plugin.</p><Link href="/diensten/website-laten-maken">Bekijk WordPress-pakketten vanaf €300 <ArrowRight size={17} aria-hidden="true" /></Link></div>
      <div><h3>Zonder WordPress</h3><p>Bij bijzondere interacties of specifieke functies kan een andere technische opbouw passen. Zelf inhoud wijzigen vraagt om een apart CMS. Ontwikkeling en onderhoud worden op de toepassing afgestemd.</p><Link href="/diensten/maatwerk-website">Bekijk maatwerk vanaf €1.500 <ArrowRight size={17} aria-hidden="true" /></Link></div>
    </div>
    <p className="package-choice-note"><strong>Ook WordPress kan maatwerk zijn.</strong> Geen van beide is automatisch beter voor SEO. Twijfel je? <Link href="/contact">Bespreek je doelen met Max.</Link></p>
  </section>;
}
