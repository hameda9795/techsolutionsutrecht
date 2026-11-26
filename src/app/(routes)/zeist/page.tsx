import type { Metadata } from "next";
import Link from "next/link";
import CityPageLayout from "@/components/CityPageLayout";

const title = "Website laten maken Zeist | SEO & webdesign, direct contact";
const description =
  "Website laten maken of SEO uitbesteden in Zeist? Max bouwt snelle websites en verbetert je vindbaarheid in Zeist. Direct contact en een gratis SEO-scan.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://techsolutionsutrecht.nl/zeist" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl/zeist",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function ZeistPage() {
  return (
    <CityPageLayout
      city="Zeist"
      slug="zeist"
      afterServices={
        <section className="py-16" aria-labelledby="seo-zeist">
          <div className="max-w-6xl mx-auto px-6">
            <h2 id="seo-zeist" className="text-3xl font-bold text-[var(--color-ink)] mb-4">SEO voor ondernemers in Zeist</h2>
            <p className="max-w-3xl text-[var(--color-muted)] leading-relaxed mb-4">
              Wil je weten hoe klanten in Zeist jouw bedrijf via Google kunnen vinden? Met een gratis SEO-scan bekijk ik maximaal drie pagina’s van je website. Je krijgt vijf concrete verbeterpunten en drie zoekwoordkansen. Ik leg ook uit welke aanpassing ik als eerste zou doen en waarom.
            </p>
            <Link href="/diensten/seo" className="font-semibold text-[var(--color-primary)] underline underline-offset-4">
              Bekijk de gratis SEO-scan en de pakketten
            </Link>
            <p className="max-w-3xl text-[var(--color-muted)] leading-relaxed mt-6 mb-4">
              SEO in Zeist draait vaak om een paar duidelijke zoekopdrachten, zoals je dienst met de plaatsnaam erbij. Ik onderzoek welke zoekwoorden klanten in Zeist, Austerlitz en Den Dolder gebruiken, maak per belangrijke dienst een sterke pagina en los technische problemen op die je vindbaarheid tegenhouden. Je Google Bedrijfsprofiel en de gewone zoekresultaten vragen elk een eigen aanpak; die combineren we.
            </p>
            <Link href="/blog/lokale-seo-utrecht" className="font-semibold text-[var(--color-primary)] underline underline-offset-4">
              Lees hoe lokale SEO werkt
            </Link>
          </div>
        </section>
      }
      intro={[
        "Zeist is een dorp met ambitie: van de zelfstandige adviseurs rond de Slotlaan tot de hoveniers, coaches en zorgprofessionals in de groene wijken eromheen. Wie hier onderneemt, concurreert vaak met bedrijven uit Utrecht én De Bilt. Een sterke, vindbare website maakt dan het verschil tussen gevonden worden of niet.",
        "Ik bouw websites die je bedrijf duidelijk presenteren. Bij een WordPress-pakket pas ik de ontwerpbasis aan je huisstijl aan. Voor een eigen ontwerp zonder WordPress is er een apart maatwerktraject. Samen kiezen we de aanpak die past bij je wensen en budget.",
      ]}
      neighbourhoods={["het centrum rond de Slotlaan", "Austerlitz", "Den Dolder", "Huis ter Heide", "Bosch en Duin"]}
      whyLocal={[
        "Ik werk vanuit Utrecht-Zuilen, niet vanuit een vestiging in Zeist. Voor een bedrijf in Zeist kunnen we online afstemmen of een afspraak voor overleg maken. We gebruiken je echte werkgebied en bedrijfsgegevens op de website.",
        "Voor lokale vindbaarheid richt ik je website zo in dat Google begrijpt dat je actief bent in Zeist en omgeving: van een nette paginastructuur tot correcte lokale signalen en een gekoppeld Google Bedrijfsprofiel.",
      ]}
      approach={[
        "Of je nu een eenvoudige presentatiewebsite, een webshop of een maatwerkoplossing nodig hebt — we beginnen met jouw doel, niet met een prijslijst.",
        "We starten met een kort gesprek (telefonisch, WhatsApp of op locatie) om je wensen en doelgroep helder te krijgen.",
        "Je krijgt een transparante offerte op maat, zodat je vooraf precies weet wat je betaalt en oplevert.",
        "Ik bouw de website, jij krijgt tussentijds previews en kunt meekijken — geen verrassingen bij de oplevering.",
        "Na livegang blijf ik bereikbaar voor onderhoud, aanpassingen en SEO-advies.",
      ]}
      localHighlight={{
        title: "Zeist: groen, groeiend en vol ondernemerschap",
        content: [
          "Zeist staat bekend om zijn groene omgeving en rustige sfeer, maar de economie draait hier op volle toeren. Van de zelfstandige professionals rond de Slotlaan tot de coaches en therapeuten in Bosch en Duin, en van de hoveniers in Huis ter Heide tot de adviseurs in Den Dolder: Zeist heeft een rijk en gevarieerd ondernemerslandschap. Veel ondernemers hier werken op aanbeveling, maar een sterke online aanwezigheid wordt steeds crucialer.",
          "Welke informatie een bezoeker nodig heeft, hangt af van jouw diensten en klanten. We spreken af welke pagina’s, contactmogelijkheden en lokale informatie nodig zijn. Als je bedrijf geschikt is voor een Google Bedrijfsprofiel kan dat deel van de gekozen uitvoering zijn; een website of profiel garandeert geen eerste positie.",
        ],
      }}
      faqs={[
        {
          question: "Werk je ook op locatie in Zeist?",
          answer: "Voor een kennismaking of een belangrijk overleg kom ik graag langs in Zeist of omgeving. Veel afstemming doen we efficiënt via WhatsApp, e-mail en videobellen, zodat je project snel vooruitgaat.",
        },
        {
          question: "Hoe lang duurt het om mijn website in Zeist online te krijgen?",
          answer: "De doorlooptijd hangt af van de omvang, functies en beschikbaarheid van de content. Na een korte intake ontvang je een duidelijke planning en spreken we vooraf een opleverdatum af.",
        },
        {
          question: "Help je ook met hoger in Google komen in Zeist?",
          answer: "Ja. Elke website lever ik technisch SEO-klaar op en ik adviseer je over lokale SEO voor Zeist, zodat je beter gevonden wordt door klanten uit je eigen omgeving.",
        },
        {
          question: "Maak je ook webshops voor bedrijven in Zeist?",
          answer: "Ja. Ik bouw WooCommerce-webshops met iDEAL, verzendopties en voorraadbeheer. Vooraf spreken we af hoeveel producten ik invoer en welke functies je nodig hebt, zodat je precies weet wat je krijgt.",
        },
      ]}
    />
  );
}
