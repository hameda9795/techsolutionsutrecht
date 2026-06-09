import type { Metadata } from "next";
import NichePageLayout from "@/components/NichePageLayout";

export const metadata: Metadata = {
  title: "Website Laten Maken voor Restaurants | Menu & Reserveren | TechSolutions",
  description: "Website laten maken voor je restaurant of café? Een smaakvolle site met online menukaart, reserveringen en route. Trek meer gasten aan. Vraag een offerte aan.",
  alternates: { canonical: "https://techsolutionsutrecht.nl/website-laten-maken-restaurant" },
  openGraph: {
    title: "Website Laten Maken voor Restaurants | Menu & Reserveren | TechSolutions",
    description: "Website laten maken voor je restaurant of café? Een smaakvolle site met online menukaart, reserveringen en route. Trek meer gasten aan.",
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl/website-laten-maken-restaurant",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Laten Maken voor Restaurants | Menu & Reserveren | TechSolutions",
    description: "Website laten maken voor je restaurant of café? Een smaakvolle site met online menukaart, reserveringen en route. Trek meer gasten aan.",
  },
};

export default function RestaurantPage() {
  return (
    <NichePageLayout
      niche="restaurants"
      nicheTitle="Restaurant"
      slug="website-laten-maken-restaurant"
      tagline="Een restaurantwebsite die honger opwekt: een actuele menukaart, online reserveren en alle praktische info die gasten nodig hebben om bij jou te eten."
      intro={[
        "Voordat iemand bij je komt eten, checkt hij je website. Staat het menu er niet op, of kan men niet reserveren, dan is de kans groot dat de gast naar de buurman gaat. Voor de horeca is een goede website daarom geen visitekaartje, maar een directe bron van reserveringen.",
        "Ik bouw restaurantwebsites die de sfeer van je zaak ademen: smaakvolle foto's, een menukaart die je zelf bijwerkt, online reserveren en een duidelijke route. Alles geoptimaliseerd voor mobiel, want daar komen je gasten vandaan.",
      ]}
      problems={[
        "Gasten kunnen je menukaart niet vinden of die is verouderd.",
        "Reserveren kan alleen telefonisch, juist tijdens de drukke uren.",
        "Je website laadt traag door zware, ongeoptimaliseerde foto's.",
        "Je bent slecht vindbaar als toeristen of buurtbewoners 'restaurant in de buurt' zoeken.",
      ]}
      solutions={[
        "Een menukaart die je zelf eenvoudig aanpast, altijd actueel.",
        "Online reserveren of een koppeling met je reserveringssysteem.",
        "Geoptimaliseerde, snelle foodfotografie die wél lekker oogt.",
        "Lokale SEO en Google Maps-integratie zodat je goed vindbaar bent.",
      ]}
      mustHaves={[
        "Online en altijd actuele menukaart (zelf te beheren).",
        "Online reserveren of integratie met een reserveringsplatform.",
        "Snelle, smaakvolle foto's die voor mobiel zijn geoptimaliseerd.",
        "Openingstijden, route en parkeerinfo duidelijk in beeld.",
        "Koppeling met Google Bedrijfsprofiel en reviews.",
        "Eventueel meertalige pagina's voor internationale gasten.",
      ]}
      faqs={[
        {
          question: "Kan ik mijn menukaart zelf aanpassen?",
          answer: "Ja. Ik lever de website zo op dat je zelf eenvoudig gerechten en prijzen kunt wijzigen, zonder technische kennis. Zo blijft je menukaart altijd actueel.",
        },
        {
          question: "Kunnen gasten online reserveren?",
          answer: "Zeker. Ik bouw een reserveringsformulier of koppel je website aan een bestaand reserveringssysteem, zodat gasten ook buiten openingstijden een tafel kunnen boeken.",
        },
        {
          question: "Werkt de website ook goed op mobiel?",
          answer: "Absoluut. Het overgrote deel van je gasten bekijkt je site op de telefoon. De website wordt mobiel-first gebouwd en geoptimaliseerd voor snelle laadtijden, ook met veel foto's.",
        },
      ]}
    />
  );
}
