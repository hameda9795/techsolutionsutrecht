import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Clock, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Website Laten Maken Nieuwegein | Vanaf €250 | TechSolutionsUtrecht",
  description: "Website laten maken in Nieuwegein? Professionele WordPress websites vanaf €250. Snelle oplevering binnen 1 week. Ook laptop & telefoon reparatie. Gratis offerte!",
  keywords: ["website laten maken nieuwegein", "webdesign nieuwegein", "wordpress nieuwegein", "goedkope website nieuwegein", "website bouwen nieuwegein"],
  alternates: {
    canonical: "https://techsolutionsutrecht.nl/nieuwegein",
  },
  openGraph: {
    title: "Website Laten Maken Nieuwegein | Vanaf €250",
    description: "Professionele WordPress websites in Nieuwegein. Snel, goedkoop en betrouwbaar. Vanaf €250 binnen 1 week online.",
    url: "https://techsolutionsutrecht.nl/nieuwegein",
    type: "website",
  },
};

export default function NieuwegeinPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TechSolutionsUtrecht - Nieuwegein",
    "description": "Website laten maken en tech reparaties in Nieuwegein",
    "url": "https://techsolutionsutrecht.nl/nieuwegein",
    "telephone": "+31625518708",
    "email": "info@techsolutionsutrecht.nl",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nieuwegein",
      "addressRegion": "Utrecht",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.0292",
      "longitude": "5.0886"
    },
    "serviceArea": {
      "@type": "City",
      "name": "Nieuwegein"
    },
    "priceRange": "€€",
    "openingHours": "Mo-Fr 09:00-18:00"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500/20 via-purple-500/10 to-background pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              <span>Nieuwegein & Omgeving</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Website Laten Maken{" "}
              <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
                Nieuwegein
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professionele WordPress websites voor ondernemers in Nieuwegein. 
              Vanaf <strong className="text-orange-400">€250</strong>, binnen{" "}
              <strong className="text-orange-400">1 week</strong> online. 
              Ook voor laptop & telefoon reparatie.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                <span className="text-sm">4.9/5 beoordeling</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm">20+ tevreden klanten</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                <Clock className="w-4 h-4 text-purple-400" />
                <span className="text-sm">12+ jaar ervaring</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-purple-500 hover:opacity-90">
                <Link href="/contact">
                  Gratis offerte aanvragen
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="https://wa.me/31625518708" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-4 h-4" />
                  WhatsApp direct
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Waarom Ondernemers in Nieuwegein voor Ons Kiezen
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wij begrijpen de lokale markt in Nieuwegein en omgeving. 
              Of je nu gevestigd bent in City Plaza, De Wiers, of een van de andere wijken — 
              wij helpen je met een professionele online presence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Scherpe Prijzen",
                description: "Vanaf €250 voor een professionele WordPress website. Geen verborgen kosten.",
                icon: "€"
              },
              {
                title: "Snelle Service",
                description: "Binnen 1 week online. Express service beschikbaar voor spoed.",
                icon: "⚡"
              },
              {
                title: "Lokaal Betrokken",
                description: "Wij kennen Nieuwegein en de ondernemers hier. Persoonlijk contact.",
                icon: "🎯"
              },
              {
                title: "Alles in 1",
                description: "Website én tech reparaties. Uniek in de regio Utrecht.",
                icon: "🔧"
              }
            ].map((item, index) => (
              <Card key={index} className="border border-border/50 hover:border-orange-500/50 transition-colors">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Onze Diensten in Nieuwegein</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Van eenvoudige websites tot complete webshops. Wij bouwen wat jij nodig hebt.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">WordPress Websites</h3>
                <p className="text-orange-400 font-bold mb-4">€250 - €800</p>
                <p className="text-muted-foreground mb-4">
                  Professionele websites voor ZZP'ers en kleine bedrijven in Nieuwegein. 
                  SEO-geoptimaliseerd en mobiel-vriendelijk.
                </p>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>SEO basis inclusief</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Zelf te beheren</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/diensten/wordpress">Meer info</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">WooCommerce Webshops</h3>
                <p className="text-orange-400 font-bold mb-4">€350 - €1.200</p>
                <p className="text-muted-foreground mb-4">
                  Verkoop online met een professionele webshop. 
                  iDEAL, voorraadbeheer, en alle functies die je nodig hebt.
                </p>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>iDEAL & creditcard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Voorraadbeheer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Verzendintegratie</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/diensten/webshop">Meer info</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Tech Reparaties</h3>
                <p className="text-orange-400 font-bold mb-4">Vanaf €35</p>
                <p className="text-muted-foreground mb-4">
                  Laptop, telefoon of tablet kapot? Wij repareren snel en voordelig. 
                  6 maanden garantie op alle reparaties.
                </p>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Scherm reparatie</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Batterij vervangen</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Waterschade</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/reparaties">Meer info</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Nieuwegein */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Website Laten Maken in Nieuwegein</h2>
              
              <p className="text-muted-foreground mb-4">
                Nieuwegein is een dynamische gemeente met een sterke ondernemersgeest. 
                Van het winkelcentrum City Plaza tot de vele bedrijven in de wijken als 
                De Wiers, Huis ter Heide, en Zuilenstein — er is veel ondernemerschap.
              </p>
              
              <p className="text-muted-foreground mb-4">
                Als tech-partner helpen wij ondernemers in Nieuwegein met een professionele 
                online presence. Of je nu een startende ZZP'er bent of een gevestigd bedrijf, 
                wij maken een website die bij jou past.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Onze klanten in Nieuwegein waarderen vooral onze snelle service, 
                scherpe prijzen en het feit dat we ook tech reparaties doen. 
                Eén aanspreekpunt voor al je tech-vragen.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {["City Plaza", "De Wiers", "Huis ter Heide", "Zuilenstein", "Vreeswijk"].map((area) => (
                  <span key={area} className="bg-muted px-3 py-1 rounded-full text-sm">
                    {area}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/10 to-purple-500/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Wij Bedienen Ook:</h3>
              
              <ul className="space-y-3">
                {[
                  { name: "Utrecht", link: "/utrecht" },
                  { name: "Houten", link: "/houten" },
                  { name: "De Meern", link: "#" },
                  { name: "Vleuten", link: "#" },
                  { name: "IJsselstein", link: "#" },
                  { name: "Maarssen", link: "#" },
                ].map((location) => (
                  <li key={location.name}>
                    <Link 
                      href={location.link} 
                      className="flex items-center gap-2 text-muted-foreground hover:text-orange-400 transition-colors"
                    >
                      <MapPin className="w-4 h-4" />
                      Website laten maken {location.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde Vragen</h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "Wat kost een website laten maken in Nieuwegein?",
                  a: "Onze WordPress websites beginnen vanaf €250. Dit is inclusief design, ontwikkeling, SEO-basis en oplevering. Voor webshops liggen de prijzen tussen €350 en €1.200. We hanteren transparante prijzen zonder verborgen kosten."
                },
                {
                  q: "Hoe snel kan mijn website online zijn?",
                  a: "Een standaard website is binnen 3-10 dagen online. Voor spoedgevallen hebben we een express-service waarbij je website binnen 1 week live kan zijn. De exacte tijd hangt af van de complexiteit."
                },
                {
                  q: "Kom je ook langs in Nieuwegein?",
                  a: "Ja, we bedienen de hele regio Utrecht inclusief Nieuwegein. Afhankelijk van het project kunnen we langs komen of werken we op afstand via video-bellen. Voor reparaties kun je bij ons terecht in Utrecht of we kunnen ophalen."
                },
                {
                  q: "Is SEO inclusief bij de website?",
                  a: "Ja, basis SEO-optimalisatie is standaard inclusief. Dit betekent: technisch correcte opbouw, snelle laadtijden, mobiel-vriendelijk design, en geoptimaliseerde meta tags."
                },
                {
                  q: "Kan ik zelf mijn website beheren?",
                  a: "Absoluut! We werken met WordPress, het meest gebruiksvriendelijke CMS. We geven je een korte instructie zodat je zelf teksten en foto's kunt aanpassen."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-border pb-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500/20 to-purple-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Klaar voor Jouw Nieuwe Website in Nieuwegein?</h2>
          
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vraag een gratis offerte aan. Binnen 4 uur reactie. Geen verplichtingen.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Gratis adviesgesprek
            </span>
            <span className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Binnen 4 uur reactie
            </span>
            <span className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Geen verplichtingen
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-purple-500 hover:opacity-90">
              <Link href="/contact">
                Start je project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline">
              <Link href="https://wa.me/31625518708" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 w-4 h-4" />
                WhatsApp: +31 6 25518708
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
