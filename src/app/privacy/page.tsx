import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | TechSolutionsUtrecht",
  description: "Privacy policy van TechSolutionsUtrecht. Lees hoe wij omgaan met uw persoonlijke gegevens.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-custom max-w-3xl">
          <nav className="text-sm text-[var(--text-muted)] mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span>Privacy Policy</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-[var(--text-secondary)] mb-6">
              TechSolutionsUtrecht respecteert uw privacy en zorgt ervoor dat de persoonlijke 
              informatie die u ons verschaft vertrouwelijk wordt behandeld. 
              Deze privacy policy is van toepassing op onze website en diensten.
            </p>

            <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-8 mb-4">
              Welke gegevens verzamelen wij?
            </h2>
            <p className="text-[var(--text-secondary)] mb-4">
              Wij verzamelen alleen gegevens die noodzakelijk zijn voor het leveren van onze diensten:
            </p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] mb-6 space-y-2">
              <li>Naam en contactgegevens (via contactformulier)</li>
              <li>E-mailadres</li>
              <li>Telefoonnummer (optioneel)</li>
              <li>IP-adres en browsergegevens (voor analytics)</li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-8 mb-4">
              Waarom verzamelen wij deze gegevens?
            </h2>
            <p className="text-[var(--text-secondary)] mb-4">
              Wij gebruiken uw gegevens voor:
            </p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] mb-6 space-y-2">
              <li>Het beantwoorden van uw vragen en verzoeken</li>
              <li>Het leveren van onze diensten</li>
              <li>Het verbeteren van onze website</li>
              <li>Het versturen van offertes en facturen</li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-8 mb-4">
              Cookies
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">
              Wij gebruiken cookies voor het analyseren van websitebezoek (Google Analytics). 
              Deze cookies bevatten geen persoonlijke informatie en worden alleen gebruikt 
              om onze website te verbeteren.
            </p>

            <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-8 mb-4">
              Bewaartermijn
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">
              Wij bewaren uw persoonlijke gegevens niet langer dan noodzakelijk is voor 
              het doel waarvoor ze zijn verzameld, of zoals wettelijk verplicht is (maximaal 7 jaar voor facturen).
            </p>

            <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-8 mb-4">
              Uw rechten
            </h2>
            <p className="text-[var(--text-secondary)] mb-4">
              U heeft het recht om:
            </p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] mb-6 space-y-2">
              <li>Uw gegevens in te zien</li>
              <li>Uw gegevens te laten corrigeren</li>
              <li>Uw gegevens te laten verwijderen</li>
              <li>Bezwaar te maken tegen verwerking</li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-8 mb-4">
              Contact
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">
              Voor vragen over deze privacy policy of uw persoonlijke gegevens kunt u contact 
              met ons opnemen via{" "}
              <a href="mailto:info@techsolutionsutrecht.nl" className="text-primary hover:underline">
                info@techsolutionsutrecht.nl
              </a>
              .
            </p>

            <p className="text-[var(--text-muted)] text-sm mt-12">
              Laatst bijgewerkt: 26 februari 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
