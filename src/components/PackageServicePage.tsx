import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import LatestProjects from "@/components/LatestProjects";
import PricingPackages, { WebsiteChoiceGuide } from "@/components/PricingPackages";
import { packageGroups, formatPrice, type PackageCategory } from "@/lib/packages";
import { serviceContent } from "@/lib/service-content";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/seo";

export default function PackageServicePage({ category }: { category: PackageCategory }) {
  const group = packageGroups[category];
  const content = serviceContent[category];
  const url = absoluteUrl(group.href);
  const offer = {
    ...serviceSchema({ name: group.title, description: content.description, url }),
    offers: group.packages.map((plan) => ({
      "@type": "Offer", name: plan.name, url: `${url}#${plan.id}`,
      description: `${plan.from ? "Vanaf " : ""}${formatPrice(plan.price)} ${plan.period}, exclusief btw. ${plan.setupFee ? `Daarnaast €${plan.setupFee} eenmalige start. ` : ""}${plan.features.join(". ")}`,
      priceSpecification: {
        "@type": "UnitPriceSpecification", price: plan.price, priceCurrency: "EUR", valueAddedTaxIncluded: false,
        unitText: plan.period === "per maand" ? "maand" : "project",
      },
    })),
  };
  const schemas = [offer, breadcrumbSchema([{ name: "Home", url: absoluteUrl() }, { name: "Diensten", url: absoluteUrl("/diensten") }, { name: group.title, url }]), faqPageSchema(content.faqs)];
  return <>
    {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />)}
    <main className="package-surface">
      <div className="package-container package-page-hero">
        <nav className="package-breadcrumb" aria-label="Kruimelpad"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/diensten">Diensten</Link><span aria-hidden="true">/</span><span>{group.title}</span></nav>
        <h1 className="package-page-title">{content.h1}</h1>
        <p className="package-page-intro">{content.intro}</p>
        <div className="package-page-actions">
          <Link href="#pakketten" className="package-button">Bekijk pakketten en prijzen <ArrowRight size={18} aria-hidden="true" /></Link>
          <Link href={category === "seo" ? "/contact?pakket=gratis-seo-scan&van=%2Fdiensten%2Fseo" : `/contact?${new URLSearchParams({ dienst: group.subject, van: group.href })}`} className="package-button package-button--outline">{category === "seo" ? "Vraag de gratis SEO scan aan" : "Bespreek je wensen"}</Link>
        </div>
        <small>Direct contact met Max · Utrecht-Zuilen · Duidelijke afspraken vóór de start</small>
      </div>
      {category === "wordpress" && <nav className="package-container service-related" aria-label="WordPress voorbeelden en kosten">
        <Link href="/projecten/14-tandartspraktijk-zuilen-parkwijk">Bekijk het WordPress-project voor twee Utrechtse tandartspraktijken</Link>
        <Link href="/blog/wat-kost-website-laten-maken#websitekosten-berekenen">Bereken je bouw- en onderhoudskosten</Link>
      </nav>}
      <PricingPackages category={category} id="pakketten" showIntro={false} />
      {(category === "wordpress" || category === "maatwerk") && <WebsiteChoiceGuide />}
      <div className="package-container">
        {content.sections.map((section, index) => <section className="service-story" id={category === "seo" && index === 4 ? "ai-vindbaarheid" : undefined} key={section.title}>
          <h2>{section.title}</h2><div>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.links && <nav className="service-related" aria-label={`Meer over ${section.title}`}>
              {section.links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
            </nav>}
            {category === "seo" && index === 4 && <Link href="/contact?pakket=ai-vindbaarheid&van=%2Fdiensten%2Fseo" className="package-button mt-6">Bespreek de AI-vindbaarheid check</Link>}
          </div>
        </section>)}
      </div>
      {(category === "wordpress" || category === "webshop") && <LatestProjects />}
      {category === "wordpress" && <section className="package-container service-story"><h2>Wat moet jouw bezoeker kunnen doen?</h2><div><p>De benodigde inhoud en functies verschillen per bedrijf. Deze voorbeelden helpen je de scope bepalen; een boekingsintegratie of andere uitbreiding hoort niet automatisch bij een basispakket.</p><nav className="service-related" aria-label="Voorbeelden van websitefuncties per bedrijf"><Link href="/website-laten-maken-kapper">Website laten maken voor je kapsalon</Link><Link href="/website-laten-maken-restaurant">Restaurant website laten maken: menukaart en reserveren</Link><Link href="/website-laten-maken-coach">Coach: trajecten en kennismaken</Link></nav></div></section>}
      <section className="package-container service-faq" aria-labelledby="service-faq-title"><h2 id="service-faq-title">Veelgestelde vragen</h2>
        {content.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
      </section>
      <nav className="package-container service-related" aria-label="Gerelateerde diensten">
        {content.related.map((related) => <Link key={related} href={packageGroups[related].href}>{packageGroups[related].title}</Link>)}
        <Link href="/prijzen">Alle prijzen vergelijken</Link>
      </nav>
      <section className="service-consult"><div className="package-container"><h2>Vertel wat je wilt bereiken.</h2><p>Je hoeft de techniek nog niet te kennen. Vertel wat je bedrijf doet, wat er nu ontbreekt en wat bezoekers of medewerkers moeten kunnen doen. Ik help je kiezen en leg de scope en prijs vooraf vast.</p><Link href={`/contact?${new URLSearchParams({ dienst: group.subject, van: group.href })}`} className="package-button">Plan een vrijblijvend gesprek <ArrowRight size={18} aria-hidden="true" /></Link></div></section>
    </main><Footer />
  </>;
}
