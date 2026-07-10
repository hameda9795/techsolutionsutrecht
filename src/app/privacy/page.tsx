import { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | TechSolutionsUtrecht",
  description: "Privacy policy van TechSolutionsUtrecht. Lees hoe wij omgaan met uw persoonlijke gegevens.",
};

export default function PrivacyPage() {
  return (
    <>
      <main className="pt-32 pb-24">
        <div className="container-custom max-w-3xl">
          <nav className="text-sm text-[var(--color-muted)] mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span>Privacy Policy</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-ink)] mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-[var(--color-muted)] mb-6">
              TechSolutionsUtrecht respecteert uw privacy en zorgt ervoor dat de persoonlijke 
              informatie die u ons verschaft vertrouwelijk wordt behandeld. 
              Deze privacy policy is van toepassing op onze website en diensten.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-ink)] mt-8 mb-4">
              Welke gegevens verzamelen wij?
            </h2>
            <p className="text-[var(--color-muted)] mb-4">
              Wij verzamelen alleen gegevens die noodzakelijk zijn voor het leveren van onze diensten:
            </p>
            <ul className="list-disc list-inside text-[var(--color-muted)] mb-6 space-y-2">
              <li>Naam en contactgegevens (via contactformulier)</li>
              <li>E-mailadres</li>
              <li>Telefoonnummer (optioneel)</li>
              <li>IP-adres en browsergegevens (voor analytics)</li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--color-ink)] mt-8 mb-4">
              Waarom verzamelen wij deze gegevens?
            </h2>
            <p className="text-[var(--color-muted)] mb-4">
              Wij gebruiken uw gegevens voor:
            </p>
            <ul className="list-disc list-inside text-[var(--color-muted)] mb-6 space-y-2">
              <li>Het beantwoorden van uw vragen en verzoeken</li>
              <li>Het leveren van onze diensten</li>
              <li>Het verbeteren van onze website</li>
              <li>Het versturen van offertes en facturen</li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--color-ink)] mt-8 mb-4">
              Cookies
            </h2>
            <p className="text-[var(--color-muted)] mb-6">
              Wij gebruiken cookies voor het analyseren van websitebezoek (Google Analytics). 
              Deze cookies bevatten geen persoonlijke informatie en worden alleen gebruikt 
              om onze website te verbeteren.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-ink)] mt-8 mb-4">
              Bewaartermijn
            </h2>
            <p className="text-[var(--color-muted)] mb-6">
              Wij bewaren uw persoonlijke gegevens niet langer dan noodzakelijk is voor 
              het doel waarvoor ze zijn verzameld, of zoals wettelijk verplicht is (maximaal 7 jaar voor facturen).
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-ink)] mt-8 mb-4">
              Uw rechten
            </h2>
            <p className="text-[var(--color-muted)] mb-4">
              U heeft het recht om:
            </p>
            <ul className="list-disc list-inside text-[var(--color-muted)] mb-6 space-y-2">
              <li>Uw gegevens in te zien</li>
              <li>Uw gegevens te laten corrigeren</li>
              <li>Uw gegevens te laten verwijderen</li>
              <li>Bezwaar te maken tegen verwerking</li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--color-ink)] mt-8 mb-4">
              Baliebot – WhatsApp AI-assistent platform
            </h2>
            <p className="text-[var(--color-muted)] mb-4">
              Naast onze website bieden wij een platform aan genaamd{" "}
              <strong className="text-[var(--color-ink)]">Baliebot</strong> (zie{" "}
              <Link href="/whatsapp-assistent" className="text-primary hover:underline">
                WhatsApp AI-assistent
              </Link>
              , binnenkort ook op baliebot.nl), waarmee ondernemers hun eigen WhatsApp
              Business-nummer koppelen aan een AI-gestuurde assistent die namens hen
              klantberichten beantwoordt. Dit onderdeel van deze privacy policy is specifiek
              van toepassing op Baliebot.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-6 mb-3">
              Welke gegevens verwerken wij hierbij?
            </h3>
            <ul className="list-disc list-inside text-[var(--color-muted)] mb-6 space-y-2">
              <li>Het WhatsApp Business-telefoonnummer van de aangesloten ondernemer</li>
              <li>Telefoonnummers van de eindklanten die met dat bedrijf appen</li>
              <li>De inhoud van de tekst- en spraakberichten die tussen klant en assistent worden uitgewisseld</li>
              <li>Door de assistent vastgelegde gegevens zoals afspraken, bestellingen en aanvragen</li>
              <li>Bedrijfsinformatie die de ondernemer zelf invoert (diensten, menu, openingstijden, FAQ)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-6 mb-3">
              Waarvoor gebruiken wij deze gegevens?
            </h3>
            <p className="text-[var(--color-muted)] mb-4">
              Uitsluitend om de dienst te kunnen leveren: het genereren van een passend
              antwoord, het inplannen van afspraken, het verwerken van bestellingen en het
              informeren van de ondernemer over nieuwe aanvragen. Berichten worden{" "}
              <strong>niet</strong> gebruikt voor advertentiedoeleinden en niet doorverkocht
              aan derden.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-6 mb-3">
              Geautomatiseerde verwerking (AI)
            </h3>
            <p className="text-[var(--color-muted)] mb-4">
              Antwoorden op WhatsApp-berichten worden gegenereerd door een AI-taalmodel
              (OpenAI). Berichtinhoud en, indien van toepassing, spraakberichten worden voor
              verwerking naar de infrastructuur van OpenAI gestuurd. Berichten worden verstuurd
              en ontvangen via de WhatsApp Cloud API van Meta. Wanneer een aangesloten
              ondernemer gebruikmaakt van agenda-integratie, worden afspraakgegevens
              gesynchroniseerd met Google Calendar. Met deze verwerkers zijn passende
              afspraken over vertrouwelijkheid en gegevensverwerking getroffen.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-6 mb-3">
              Wie heeft toegang tot deze gegevens?
            </h3>
            <p className="text-[var(--color-muted)] mb-4">
              Gesprekken, afspraken en bestellingen van een klant zijn alleen zichtbaar voor
              de ondernemer met wie die klant chat, en voor TechSolutionsUtrecht als beheerder
              van het platform (voor technische ondersteuning en het waarborgen van de
              dienstverlening). Gegevens van de ene aangesloten ondernemer zijn niet
              toegankelijk voor een andere aangesloten ondernemer.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-6 mb-3">
              Bewaartermijn en verwijdering
            </h3>
            <p className="text-[var(--color-muted)] mb-6">
              Gespreksgegevens worden bewaard zolang de ondernemer het platform gebruikt en
              worden verwijderd op verzoek van de ondernemer of eindklant, of uiterlijk 12
              maanden na het laatste contactmoment. Een verzoek tot inzage of verwijdering kan
              worden gedaan via{" "}
              <a href="mailto:info@techsolutionsutrecht.nl" className="text-primary hover:underline">
                info@techsolutionsutrecht.nl
              </a>
              .
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-ink)] mt-8 mb-4">
              Contact
            </h2>
            <p className="text-[var(--color-muted)] mb-6">
              Voor vragen over deze privacy policy of uw persoonlijke gegevens kunt u contact 
              met ons opnemen via{" "}
              <a href="mailto:info@techsolutionsutrecht.nl" className="text-primary hover:underline">
                info@techsolutionsutrecht.nl
              </a>
              .
            </p>

            <p className="text-[var(--color-muted)] text-sm mt-12">
              Laatst bijgewerkt: 1 juli 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
