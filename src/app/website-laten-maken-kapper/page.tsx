import type { Metadata } from "next";
import NichePageLayout from "@/components/NichePageLayout";
import KapsalonDetails from "@/components/KapsalonDetails";
import { getShowcaseProjectById } from "@/lib/showcase-db";
import { packageGroups, formatPrice } from "@/lib/packages";

const pageUrl = "https://techsolutionsutrecht.nl/website-laten-maken-kapper";
const wordpress = packageGroups.wordpress;
const startingPrice = formatPrice(wordpress.packages[0].price);
const title = `Kapper website laten maken vanaf ${startingPrice} | TechSolutions`;
const description = `Een website laten maken voor je kapsalon? Bekijk een echt salonproject, WordPress vanaf ${startingPrice} excl. btw en de keuzes voor afspraken. Vraag een offerte aan.`;
const contactHref = `/contact?${new URLSearchParams({ dienst: wordpress.subject }).toString()}`;

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: { title, description, type: "website", locale: "nl_NL", url: pageUrl, siteName: "TechSolutionsUtrecht" },
  twitter: { card: "summary_large_image", title, description },
};

export default async function KapperPage() {
  const candidate = await getShowcaseProjectById("9");
  const salonProject = candidate && candidate.type === "website"
    && /^https:\/\/(?:www\.)?makovr\.nl\/?$/.test(candidate.liveUrl) ? candidate : null;

  return (
    <NichePageLayout
      niche="kappers"
      nicheTitle="Kapper"
      h1={{ pre: "Website laten maken", highlight: "voor je kapsalon" }}
      slug="website-laten-maken-kapper"
      tagline="Laat je behandelingen, prijzen en sfeer zien. Geef bezoekers een duidelijke route naar contact of je bestaande boekingsomgeving, met vooraf afgesproken inhoud en kosten."
      intro={[
        "Een klant wil weten welke behandelingen je aanbiedt, wat die kosten en hoe een afspraak wordt geregeld. Ik bouw een website voor je kapsalon waarin die informatie bij elkaar staat: je aanbod, eigen foto’s, openingstijden en de volgende stap naar jouw salon.",
        `Je werkt rechtstreeks met Max in Utrecht-Zuilen. Een WordPress eenpaginawebsite begint bij ${startingPrice} exclusief btw. Eerst bepalen we de inhoud en de afspraakroute. Een eigen boekingsmodule of agenda-integratie is aanvullend werk; de mogelijkheden en eventuele abonnementen staan apart in de offerte.`,
      ]}
      contactHref={contactHref}
      contactLabel="Bespreek mijn salonwebsite"
      introAfterActions
      problems={[
        "Klanten moeten bellen om je prijzen of openingstijden te weten.",
        "Je werk staat op social media, maar informatie over je salon is verspreid.",
        "De boekingsknop leidt niet duidelijk naar de juiste agenda.",
        "Je wilt zelf een behandeling of prijs kunnen aanpassen.",
      ]}
      solutions={[
        "Behandelingen, prijzen en openingstijden overzichtelijk op je eigen website.",
        "Een galerij met jouw salon, team en werk, met toelichting die bij je aanbod past.",
        "Een herkenbare afspraakroute: contactaanvraag, boekingslink of een afgesproken koppeling.",
        "Uitleg over het wijzigen van de afgesproken inhoud in WordPress.",
      ]}
      mustHaves={[
        "Een behandelingenoverzicht met prijzen en een uitleg van eventuele vanafprijzen.",
        "Een mobielvriendelijke prijslijst en een goed zichtbare contact- of boekingsknop.",
        "Eigen foto’s van je salon en werk, met toestemming van herkenbare personen.",
        "Je adres, openingstijden, contactgegevens en eventuele informatie over bereikbaarheid.",
        "Een plek voor echte klantbeoordelingen met een herkenbare bron.",
        "Duidelijke uitleg over waar en wanneer een afspraak wordt bevestigd.",
      ]}
      preparation={[
        { title: "Behandelingen en tarieven", detail: "Lever per behandeling de naam, prijs en eventuele duur aan. Licht een vanafprijs toe en vermeld of bijvoorbeeld wassen of stylen inbegrepen is. Jij bepaalt de tarieven; ik maak ze duidelijk leesbaar." },
        { title: "Je salon en je werk", detail: "Verzamel je logo, salonfoto’s, werkvoorbeelden, openingstijden en contactgegevens. Laat weten welke foto’s je mag gebruiken en welke sfeer je wilt laten zien." },
        { title: "Beheer en overdracht", detail: "Bepaal wie prijzen en openingstijden bijhoudt. Bij oplevering krijg je uitleg over de afgesproken wijzigingen. We leggen ook vast wie updates, back-ups en licenties verzorgt." },
      ]}
      scopeNote="De WordPress-pakketten gaan over de afgesproken inhoudspagina’s van je kapsalon. Een link naar een bestaande boekingsdienst en een technische agenda-integratie zijn verschillende werkzaamheden. Een eigen boekingsmodule, aanbetalingen en automatische herinneringen zijn niet standaard in deze bouwprijs inbegrepen."
      relatedLinks={[
        { href: "/diensten/website-laten-maken", label: "WordPress website laten maken: inhoud en pakketten" },
        { href: "/blog/wat-kost-website-laten-maken#websitekosten-berekenen", label: "Bereken de bouw- en onderhoudskosten van je website" },
        { href: "/diensten/website-onderhoud", label: "WordPress onderhoud na de oplevering" },
      ]}
      faqs={[
        {
          question: "Wat kost een website laten maken voor mijn kapsalon?",
          answer: `WordPress Start kost ${formatPrice(wordpress.packages[0].price)} voor één pagina met maximaal zes secties. Business kost ${formatPrice(wordpress.packages[1].price)} voor maximaal drie inhoudspagina’s; Lokaal Compleet ${formatPrice(wordpress.packages[2].price)} voor maximaal vijf. De bedragen zijn eenmalig en exclusief btw. Je levert teksten, foto’s en logo aan. Hosting, domein, onderhoud, licenties en een boekingsintegratie zijn apart.`,
        },
        {
          question: "Kan ik mijn bestaande Treatwell-boekingspagina blijven gebruiken?",
          answer: "Ja, een duidelijke link kan bezoekers vanuit je salonwebsite naar je bestaande boekingspagina brengen. Bij Makovr gebeurt het boeken bijvoorbeeld via Treatwell. Een boekingslink maakt nog geen technische koppeling met WordPress. Je account en de tarieven van de boekingsdienst staan los van de websitebouw.",
        },
        {
          question: "Wat is het verschil tussen een aanvraag en een bevestigde afspraak?",
          answer: "Met een contactformulier of WhatsApp doet iemand een aanvraag die je zelf afhandelt. Bij een boekingsdienst kiest de klant een beschikbaar moment en volgt de bevestiging volgens de instellingen van die dienst. We spreken vooraf af waar de agenda wordt bijgehouden en welke route je bezoekers zien.",
        },
        {
          question: "Kan ik zelf behandelingen, prijzen en foto’s aanpassen?",
          answer: "Ja. We bepalen welke inhoud je wilt beheren en richten die onderdelen in WordPress in. Bij de oplevering krijg je uitleg over het aanpassen en controleren van die inhoud. Een nieuwe functie of andere pagina-indeling kan extra ontwikkelwerk zijn.",
        },
        {
          question: "Hoe wordt mijn kapsalon lokaal vindbaar?",
          answer: "De basis bestaat uit heldere saloninformatie, het echte adres en werkgebied, passende paginatitels en een technisch toegankelijke website. De inrichting van een geschikt Google Bedrijfsprofiel kan bij het lokale pakket horen. Posities en aantallen afspraken worden niet gegarandeerd; verdere optimalisatie spreken we apart af.",
        },
        {
          question: "Wanneer kan mijn kapsalonwebsite online?",
          answer: "Na de intake spreken we een planning af op basis van de pagina’s, de afspraakroute en het beschikbare materiaal. Je ontvangt de prijs en planning voordat de bouw begint. Een specifieke koppeling of ontbrekende teksten en foto’s kan invloed hebben op de opleverdatum.",
        },
      ]}
    >
      <KapsalonDetails project={salonProject} />
    </NichePageLayout>
  );
}
