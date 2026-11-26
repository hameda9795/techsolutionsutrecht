import type { Metadata } from "next";
import Link from "next/link";
import CityPageLayout from "@/components/CityPageLayout";

const title = "Website laten maken Veenendaal | Webdesigner, direct contact";
const description =
  "Website laten maken in Veenendaal? Webdesigner Max bouwt je WordPress website of webshop. Direct contact, voorbeelden van mijn werk en een vaste offerte.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://techsolutionsutrecht.nl/veenendaal" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl/veenendaal",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function VeenendaalPage() {
  return (
    <CityPageLayout
      afterServices={
        <section className="py-16" aria-labelledby="webdesign-veenendaal">
          <div className="max-w-6xl mx-auto px-6">
            <h2 id="webdesign-veenendaal" className="text-3xl font-bold text-[var(--color-ink)] mb-4">Webdesign en webshops in Veenendaal</h2>
            <p className="max-w-3xl text-[var(--color-muted)] leading-relaxed mb-4">
              Als webdesigner voor Veenendaal bouw ik websites die snel laden, goed werken op je telefoon en duidelijk laten zien wat je doet. We beginnen met je diensten en je klanten, daarna kiezen we de pagina’s en het ontwerp.
            </p>
            <p className="max-w-3xl text-[var(--color-muted)] leading-relaxed mb-4">
              Verkoop je producten? Dan bouw ik een WooCommerce-webshop met iDEAL en verzendopties. Na de livegang kan ik het beheer en onderhoud van je website verzorgen, zodat updates en back-ups geregeld zijn.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <Link href="/diensten/website-laten-maken" className="font-semibold text-[var(--color-primary)] underline underline-offset-4">Website laten maken</Link>
              <Link href="/diensten/webshop" className="font-semibold text-[var(--color-primary)] underline underline-offset-4">Webshop laten maken</Link>
              <Link href="/diensten/website-onderhoud" className="font-semibold text-[var(--color-primary)] underline underline-offset-4">Websitebeheer en onderhoud</Link>
            </div>
          </div>
        </section>
      }
      city="Veenendaal"
      slug="veenendaal"
      intro={[
        "Wil je een website laten maken voor je bedrijf in Veenendaal? Ik ben Max, freelance webdesigner en developer uit Utrecht. Ik bouw WordPress-websites en webshops die je zelf kunt bijwerken, op een ontwerpbasis die ik aanpas aan je huisstijl. Je hebt direct contact met mij en krijgt vooraf een vaste offerte.",
        <>Bekijk de website die ik voor <Link href="/projecten/13-kant-en-klaar-verbouw" className="underline underline-offset-4">Kant en Klaar Verbouw</Link> heb gebouwd. Dan zie je hoe klanten je werk kunnen bekijken en contact met je kunnen opnemen.</>,
      ]}
      neighbourhoods={["het centrum en de Hoofdstraat", "Veenendaal-Oost", "Veenendaal-West", "bedrijventerrein De Batterijen", "bedrijventerrein Nijverkamp"]}
      whyLocal={[
        "In een stad met zoveel digitale bedrijvigheid als Veenendaal is de concurrentie online groot. Een website die technisch uitblinkt — snel, mobielvriendelijk en goed vindbaar — maakt hier het verschil tussen gevonden worden en overgeslagen worden.",
        "Ik richt je website in op lokale zoekopdrachten zoals 'webdesign Veenendaal' en koppel hem aan je Google Bedrijfsprofiel, zodat je zowel in de zoekresultaten als op de kaart zichtbaar bent voor klanten uit Veenendaal en de Gelderse Vallei.",
      ]}
      approach={[
        "We starten met een gesprek over je doelen en de klanten die je in Veenendaal en omgeving wilt bereiken.",
        "Je krijgt een transparante offerte op maat, zonder verborgen kosten.",
        "Tijdens de bouw kijk je mee via previews, zodat de website precies wordt wat je voor ogen had.",
        "Na livegang blijf ik beschikbaar voor onderhoud, updates en lokaal SEO-advies.",
      ]}
      localHighlight={{
        title: "Veenendaal: winkelstad én ICT-hub van de regio",
        content: [
          "Veenendaal combineert een sterk mkb-profiel met een opvallend digitale economie. De binnenstad trekt bezoekers uit de hele Gelderse Vallei, terwijl bedrijventerreinen als De Batterijen en Nijverkamp plaats bieden aan honderden bedrijven — van installateurs en bouwbedrijven tot softwarehuizen. Die mix maakt Veenendaal tot een plek waar een goede website zich snel terugverdient.",
          "We kunnen je website telefonisch of online bespreken. Wil je liever afspreken in Veenendaal? Dan spreken we samen een tijd en locatie af.",
        ],
      }}
      faqs={[
        {
          question: "Werk je ook voor ondernemers in Veenendaal?",
          answer: "Zeker. Veenendaal ligt op korte afstand van Utrecht en ik werk regelmatig voor ondernemers in de Gelderse Vallei. Voor een kennismaking kom ik graag langs; het traject verloopt verder soepel via WhatsApp en e-mail.",
        },
        {
          question: "Hoe snel staat mijn website in Veenendaal online?",
          answer: "De doorlooptijd hangt af van de omvang, functies en beschikbaarheid van de content. Na een korte intake ontvang je een duidelijke planning en spreken we vooraf een opleverdatum af.",
        },
        {
          question: "Krijg ik ook hulp met vindbaarheid in Google?",
          answer: "Ja. Technische SEO is standaard inbegrepen en ik adviseer je over lokale SEO voor Veenendaal, zodat klanten uit je eigen omgeving je makkelijker vinden.",
        },
      ]}
    />
  );
}
