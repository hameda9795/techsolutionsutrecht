import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { coreServices } from "@/lib/services";
import { breadcrumbSchema } from "@/lib/schema";
import { absoluteUrl, BUSINESS_ID } from "@/lib/seo";

const title = "Webdesign, webshops en SEO in Utrecht | TechSolutions";
const description = "Bekijk WordPress websites vanaf €300 excl. btw, WooCommerce, SEO, maatwerk, chatbots en Windows-apps. Duidelijke pakketten en direct contact met Max in Utrecht.";
export const metadata: Metadata = { title, description, alternates: { canonical: absoluteUrl("/diensten") }, openGraph: { title, description, url: absoluteUrl("/diensten"), type: "website", locale: "nl_NL" }, twitter: { card: "summary_large_image", title, description } };
const schemas = [
  breadcrumbSchema([{ name: "Home", url: absoluteUrl() }, { name: "Diensten", url: absoluteUrl("/diensten") }]),
  { "@context": "https://schema.org", "@type": "ItemList", name: "Diensten van TechSolutionsUtrecht", numberOfItems: coreServices.length, itemListElement: coreServices.map((service, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "Service", name: service.title, description: service.pageDescription, url: absoluteUrl(service.href), provider: { "@id": BUSINESS_ID } } })) },
];
export default function ServicesPage() {
  return <>{schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
    <main className="package-surface">
      <header className="package-container package-page-hero">
        <nav className="package-breadcrumb" aria-label="Kruimelpad"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Diensten</span></nav>
        <h1 className="package-page-title">Een website voor je bedrijf. En de techniek eromheen.</h1>
        <p className="package-page-intro">Ik ben Max, webdesigner en softwareontwikkelaar in Utrecht-Zuilen. Ik help je met een WordPress website, webshop of een oplossing op maat. Je krijgt vooraf een duidelijke scope en prijs.</p>
        <div className="package-page-actions"><Link href="/prijzen" className="package-button">Vergelijk alle pakketten <ArrowRight size={18} aria-hidden="true" /></Link></div>
      </header>
      <div className="package-container package-services-index">{coreServices.map((service) => <article key={service.id}>
        <div><h2><Link href={service.href}>{service.title}</Link></h2><p>{service.pageDescription}</p></div>
        <div><p className="service-index-price">{service.price}</p><p className="mb-4 text-sm">Exclusief btw</p><Link href={service.href} className="package-button" aria-label={`Bekijk pakketten voor ${service.title}`}>Bekijk pakketten <ArrowRight size={18} aria-hidden="true" /></Link></div>
      </article>)}</div>
      <section className="service-consult"><div className="package-container"><h2>Je hoeft de oplossing nog niet te kennen.</h2><p>Vertel wat je bedrijf doet en wat je wilt verbeteren. Samen bepalen we welke website of toepassing past. Voor de start staan functies, prijs en planning op papier.</p><Link href="/contact?van=%2Fdiensten" className="package-button">Bespreek je idee</Link></div></section>
    </main><Footer />
  </>;
}
