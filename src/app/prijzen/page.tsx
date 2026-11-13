import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import PricingPackages, { WebsiteChoiceGuide } from "@/components/PricingPackages";
import { packageCategoryOrder, packageGroups } from "@/lib/packages";
import { breadcrumbSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/seo";

const title = "Website laten maken: prijzen vanaf €300 | TechSolutions";
const description = "Betaalbare website laten maken? Vergelijk pakketten van €300, €500 en €700 excl. btw, met vaste prijs vooraf. Ook prijzen voor webshops, SEO en maatwerk.";
export const metadata: Metadata = { title, description, alternates: { canonical: absoluteUrl("/prijzen") }, openGraph: { title, description, url: absoluteUrl("/prijzen"), type: "website", locale: "nl_NL" }, twitter: { card: "summary_large_image", title, description } };

export default function PricesPage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: absoluteUrl() }, { name: "Prijzen", url: absoluteUrl("/prijzen") }])) }} />
    <main className="package-surface">
      <header className="package-container package-page-hero">
        <nav className="package-breadcrumb" aria-label="Kruimelpad"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Prijzen</span></nav>
        <h1 className="package-page-title">Website laten maken: prijzen en pakketten</h1>
        <p className="package-page-intro">Een WordPress website laten maken kan vanaf €300. Zoek je een goedkope of betaalbare website, dan zie je hier vooraf precies wat je voor die prijs krijgt en wat er niet in zit. Vergelijk de pagina’s en functies van elk pakket, of bekijk de mogelijkheden voor een webshop, SEO en maatwerk. Alle prijzen zijn exclusief btw.</p>
        <p className="mt-4 text-[var(--color-muted)]">Wat betaal je naast de bouw? <Link href="/blog/wat-kost-website-laten-maken#wat-kost-een-website-in-het-eerste-jaar" className="font-semibold text-[var(--color-primary)] underline underline-offset-4">Bereken je websitekosten voor het eerste en volgende jaar</Link>, inclusief een checklist voor terugkerende kosten.</p>
      </header>
      <nav className="package-container package-jump-links" aria-label="Ga naar een prijscategorie">
        {packageCategoryOrder.map((id) => <a href={`#${id}-pakketten`} key={id}>{({wordpress: "WordPress", webshop: "Webshops", maatwerk: "Maatwerk websites", seo: "SEO", chatbot: "Chatbots", windows: "Windows-apps", onderhoud: "Onderhoud"})[id]}</a>)}
      </nav>
      {packageCategoryOrder.map((category) => <div key={category}><PricingPackages category={category} source="/prijzen" />{category === "wordpress" && <WebsiteChoiceGuide />}<div className="package-container service-related"><Link href={packageGroups[category].href} aria-label={`${packageGroups[category].title}: werkwijze en voorwaarden`}>Bekijk de werkwijze en voorwaarden</Link></div></div>)}
      <section className="package-container service-story"><h2>Extra hulp bij je bestaande website</h2><div><p>Wil je je website vernieuwen? We gebruiken het passende websitepakket als uitgangspunt. Eerst bekijken we bestaande inhoud, URL’s en functies. Migratie en extra herstelwerk worden vooraf apart geoffreerd.</p><p>Een losse AI-vindbaarheid check kost €250 eenmalig exclusief btw: tot 3 pagina’s, 10 vragen op 2 beschikbare platforms, een overzicht van vermeldingen en een gerichte verbetering van één pagina. Er is geen garantie op een AI-vermelding.</p><Link href="/diensten/seo#ai-vindbaarheid" className="package-button mt-6">Bekijk de AI-vindbaarheid check</Link></div></section>
      <section className="service-consult"><div className="package-container"><h2>Welk pakket past bij jouw bedrijf?</h2><p>Vertel wat je wilt bereiken en welke functies je nodig hebt. Ik help je kiezen en zet de werkzaamheden, extra kosten en planning in een duidelijke offerte.</p><Link className="package-button" href="/contact?van=%2Fprijzen">Vraag persoonlijk advies</Link></div></section>
    </main><Footer /></>;
}
