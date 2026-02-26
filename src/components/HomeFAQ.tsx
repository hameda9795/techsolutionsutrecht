"use client";

import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Wat kost een website laten maken in Utrecht?",
    answer: "De kosten voor een website laten maken in Utrecht beginnen bij TechSolutionsUtrecht vanaf €250. Dit is een voordelige prijs voor een professionele WordPress website. Voor een uitgebreidere website of webshop liggen de prijzen tussen €350 en €1.200. We hanteren transparante prijzen zonder verborgen kosten."
  },
  {
    question: "Hoe snel kan mijn website online zijn?",
    answer: "Wij leveren snel! Een standaard WordPress website is binnen 3-10 dagen online. V spoedgevallen hebben we zelfs een express-service waarbij uw website binnen 1 week live kan zijn. De exacte tijd hangt af van de complexiteit en hoe snel u de benodigde content aanlevert."
  },
  {
    question: "Is een goedkope website ook professioneel?",
    answer: "Absoluut! Onze voordelige websites zijn volledig professioneel. We gebruiken WordPress, 's werelds meest gebruikte CMS, en zorgen voor een responsive design dat op alle apparaten perfect werkt. De lage prijs komt door onze efficiënte werkwijze, niet door in te leveren op kwaliteit."
  },
  {
    question: "Voor wie zijn jullie websites geschikt?",
    answer: "Onze websites zijn ideaal voor ZZP'ers, startende ondernemers, kleine bedrijven (MKB) en iedereen die een betaalbare, professionele website wil. We specialiseren ons in het maken van websites die converteren en goed gevonden worden in Google."
  },
  {
    question: "Wat is het verschil tussen jullie en andere webdesign bureaus?",
    answer: "Wij onderscheiden ons door scherpe prijzen (vanaf €250), snelle oplevering (binnen 1 week mogelijk) en persoonlijke service. Geen lange wachtlijsten, geen dure pakketten. Direct contact met de expert die aan uw project werkt. Daarnaast combineren we webdesign met tech reparaties — uniek in Utrecht!"
  }
];

export default function HomeFAQ() {
  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Veelgestelde Vragen
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mt-4 mb-4">
            Wat Kost een Website{" "}
            <span className="gradient-text">Laten Maken?</span>
          </h2>
          <p className="text-[var(--text-secondary)]">
            Antwoorden op de meest gestelde vragen over onze goedkope website laten maken service in Utrecht.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 flex items-start gap-3">
                  <ChevronDown className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-[var(--text-secondary)] pl-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
