import type { Metadata } from "next";
import NichePageLayout from "@/components/NichePageLayout";
import RestaurantDetails from "@/components/RestaurantDetails";
import { packageGroups, formatPrice } from "@/lib/packages";

const wordpress = packageGroups.wordpress;
const pageUrl = "https://techsolutionsutrecht.nl/website-laten-maken-restaurant";
const startingPrice = formatPrice(wordpress.packages[0].price);
const title = `Restaurant website laten maken vanaf ${startingPrice} | TechSolutions`;
const description = `Een restaurant website laten maken? WordPress vanaf ${startingPrice} excl. btw, met een leesbare menukaart en duidelijke keuzes voor reserveren. Vraag een offerte aan.`;
const contactHref = `/contact?${new URLSearchParams({ dienst: wordpress.subject }).toString()}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: { title, description, type: "website", locale: "nl_NL", url: pageUrl, siteName: "TechSolutionsUtrecht" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RestaurantPage() {
  return (
    <NichePageLayout
      niche="restaurants"
      nicheTitle="Restaurant"
      h1={{ pre: "Restaurant website", highlight: "laten maken" }}
      slug="website-laten-maken-restaurant"
      tagline={`Je menukaart, sfeer en openingstijden op één plek. Geef gasten een duidelijke route naar reserveren. WordPress vanaf ${startingPrice} exclusief btw.`}
      intro={[
        "Wil je een website laten maken voor je restaurant? Ik breng je gerechten, prijzen, eigen foto’s en praktische informatie bij elkaar. Gasten kunnen de menukaart bekijken en zien hoe zij een tafel aanvragen of in je bestaande reserveringssysteem boeken.",
        "Je werkt rechtstreeks met Max in Utrecht-Zuilen. Voor een restaurant, café of lunchroom bepalen we eerst de inhoud, het beheer van de menukaart en de reserveringsroute. Een technische koppeling, online bestellen of extra taalversies krijgt een aparte begroting. Zo is duidelijk wat bij de basiswebsite hoort.",
      ]}
      contactHref={contactHref}
      contactLabel="Bespreek mijn restaurantwebsite"
      introAfterActions
      problems={[
        "Je menukaart staat alleen in een grote afbeelding of een lastig leesbare PDF.",
        "Gasten zien niet of hun bericht al een bevestigde reservering is.",
        "Openingstijden en contactgegevens verschillen tussen je website en andere kanalen.",
        "Een nieuw gerecht of een prijswijziging blijft te lang op de website liggen.",
      ]}
      solutions={[
        "Een online menukaart als leesbare tekst, verdeeld in herkenbare categorieën.",
        "Een duidelijke reserveringsknop met uitleg over aanvragen en bevestigen.",
        "Je echte adres, actuele openingstijden en contactmogelijkheden bij elkaar.",
        "Afgesproken beheerbare onderdelen en uitleg over wijzigingen in WordPress.",
      ]}
      mustHaves={[
        "Gerechten en prijzen die op mobiel zonder horizontaal schuiven leesbaar zijn.",
        "Eigen foto’s die de sfeer en het aanbod van je restaurant laten zien.",
        "Een zichtbare reserverings- of contactknop met de juiste bestemming.",
        "Adres, openingstijden en informatie over bereikbaarheid en parkeren.",
        "Afspraken over seizoensmenu’s, feestdagen en wie wijzigingen bijhoudt.",
        "Bij meerdere talen: een afgesproken vertaling en beheer per taalversie.",
      ]}
      preparation={[
        { title: "Menukaart en beeld", detail: "Lever gerechten, categorieën, omschrijvingen en actuele prijzen aan. Voeg je logo en eigen foto’s toe. Geef aan welke kaart je wilt tonen: bijvoorbeeld lunch, diner of dranken." },
        { title: "Reserveren en bevestigen", detail: "Bepaal waar de beschikbaarheid wordt bijgehouden. Spreek af of een formulier een aanvraag verstuurt of dat gasten via een bestaande dienst boeken. Benoem ook wie wijzigingen en annuleringen verwerkt." },
        { title: "Beheer na oplevering", detail: "Kies wie prijzen, openingstijden en menu’s bijwerkt. Je krijgt uitleg over de afgesproken inhoud in WordPress. Technische updates en onderhoud spreken we apart af." },
      ]}
      scopeNote="De WordPress-pakketten dekken de afgesproken inhoudspagina’s van je restaurant en een contactmogelijkheid. We bepalen vooraf hoeveel menu’s en pagina’s daarin passen. Een reserveringswidget, tafelplanning, aanbetaling, kassakoppeling, online bestellen of extra taalversie is aanvullend werk. Abonnementen en transactiekosten van externe aanbieders zitten niet in de bouwprijs."
      relatedLinks={[
        { href: "/diensten/website-laten-maken", label: "WordPress website laten maken: pakketten en beheer" },
        { href: "/blog/wat-kost-website-laten-maken#websitekosten-berekenen", label: "Bereken de bouw- en onderhoudskosten" },
        { href: "/diensten/website-onderhoud", label: "Onderhoud van je WordPress-website" },
      ]}
      faqs={[
        {
          question: "Wat kost een restaurant website laten maken?",
          answer: `WordPress Start kost ${formatPrice(wordpress.packages[0].price)} voor één pagina met maximaal zes secties. Business kost ${formatPrice(wordpress.packages[1].price)} voor maximaal drie inhoudspagina’s; Lokaal Compleet ${formatPrice(wordpress.packages[2].price)} voor maximaal vijf. De bedragen zijn eenmalig en exclusief btw. Je levert teksten, foto’s en logo aan. We spreken af hoeveel menu’s binnen die inhoud passen. Domein, hosting, onderhoud, licenties en aanvullende reserveringsfuncties zijn apart.`,
        },
        {
          question: "Kan ik mijn online menukaart zelf aanpassen?",
          answer: "Ja. We bepalen welke gerechten, prijzen en categorieën je wilt beheren en richten die onderdelen in WordPress in. Bij oplevering krijg je uitleg over wijzigingen en controle op mobiel. Een nieuwe pagina-indeling, extra taalversie of koppeling kan aanvullend werk zijn.",
        },
        {
          question: "Kunnen gasten via de website een tafel reserveren?",
          answer: "We kiezen vooraf tussen een contactaanvraag, een link naar je bestaande reserveringsdienst of een ingebouwde widget. Bij een aanvraag bevestig je zelf de tafel. Bij een reserveringsdienst volgt de bevestiging volgens de instellingen van die dienst. Een technische integratie en eventuele abonnementen worden apart begroot.",
        },
        {
          question: "Kan mijn bestaande reserveringssysteem blijven werken?",
          answer: "Vaak kan de website naar je bestaande boekingspagina verwijzen. Voor een widget of technische koppeling controleer ik eerst wat je aanbieder ondersteunt en welke toegang nodig is. We leggen de uitvoering, testafspraken en extra kosten vast voordat ik die aansluiting bouw.",
        },
        {
          question: "Kunnen afhalen, bezorgen en online betalen erbij?",
          answer: "Dat bespreken we als een afzonderlijk bestelproces. Denk aan de menukeuze, afhaaltijden, bezorggebied, betaalprovider en het verwerken van bestellingen. Zo’n bestelomgeving zit niet standaard in de WordPress-basiswebsite. Eerst bepalen we welke oplossing en offerte bij jouw werkwijze passen.",
        },
        {
          question: "Hoe help je mijn restaurant lokaal vindbaar te worden?",
          answer: "Ik zorg voor een technisch toegankelijke website met passende paginatitels en heldere informatie over je echte adres, openingstijden en aanbod. Een geschikt Google Bedrijfsprofiel kan bij het lokale pakket horen. Posities, bezoekersaantallen en reserveringen worden niet gegarandeerd; verdere SEO spreken we apart af.",
        },
        {
          question: "Wanneer kan mijn restaurantwebsite online?",
          answer: "Na de intake spreken we een planning af op basis van de pagina’s, menukaart, reserveringsroute en het beschikbare materiaal. Je ontvangt de prijs en planning vóór de bouw. Extra talen, een koppeling of ontbrekende inhoud kunnen invloed hebben op de opleverdatum.",
        },
      ]}
    >
      <RestaurantDetails />
    </NichePageLayout>
  );
}
