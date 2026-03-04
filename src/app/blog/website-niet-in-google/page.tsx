import Image from 'next/image';
import { Calendar, Clock, User, ArrowRight, Share2 } from 'lucide-react';

export const metadata = {
  title: '5 Redenen Waarom je Website Niet op Google Verschijnt | TechSolutionsUtrecht',
  description: 'Is je website niet zichtbaar in Google? Ontdek de 5 meest voorkomende redenen en leer hoe je dit eenvoudig oplost. Praktische tips van een SEO specialist in Utrecht.',
  keywords: 'website niet gevonden google, wordpress niet zichtbaar, website staat niet in google, seo problemen oplossen',
  openGraph: {
    title: '5 Redenen Waarom je Website Niet op Google Verschijnt',
    description: 'Ontdek waarom je website niet in Google verschijnt en hoe je dit oplost. Praktische SEO tips!',
    type: 'article',
    publishedTime: '2025-03-04T00:00:00Z',
    authors: ['TechSolutionsUtrecht'],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "5 Redenen Waarom je Website Niet op Google Verschijnt (en Hoe je dit Oplost)",
  "description": "Is je website niet zichtbaar in Google? Ontdek de 5 meest voorkomende redenen en leer hoe je dit eenvoudig oplost. Praktische tips van een SEO specialist in Utrecht.",
  "image": "https://techsolutionsutrecht.nl/images/blog/website-niet-in-google.jpg",
  "author": {
    "@type": "Organization",
    "name": "TechSolutionsUtrecht",
    "url": "https://techsolutionsutrecht.nl"
  },
  "publisher": {
    "@type": "Organization",
    "name": "TechSolutionsUtrecht",
    "logo": {
      "@type": "ImageObject",
      "url": "https://techsolutionsutrecht.nl/logo.png"
    }
  },
  "datePublished": "2025-03-04",
  "dateModified": "2025-03-04",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://techsolutionsutrecht.nl/blog/website-niet-in-google"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Hoe lang duurt het voordat mijn website in Google verschijnt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Na het indienen van je sitemap in Google Search Console duurt het meestal 1 tot 4 weken voordat Google je website crawlt en indexeert. Bij een nieuwe website kan dit soms langer duren. Je kunt het proces versnellen door actief bezig te zijn met linkbuilding en regelmatig nieuwe content te publiceren."
      }
    },
    {
      "@type": "Question",
      "name": "Waarom staat mijn WordPress website niet in Google?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WordPress websites staan vaak niet in Google omdat de 'Zoekmachine zichtbaarheid' instelling in WordPress nog aan staat. Deze vind je onder Instellingen > Lezen. Zorg dat het vinkje bij 'Zoekmachines vragen om deze site niet te indexeren' UIT staat. Daarnaast kan een ontbrekende SEO plugin zoals Yoast of RankMath ook de oorzaak zijn."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe controleer ik of mijn website geïndexeerd is door Google?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typ in Google: site:jouwdomein.nl (vervang jouwdomein.nl door je eigen domein). Als je website geïndexeerd is, zie je alle pagina's die Google gevonden heeft. Zie je niets? Dan is je website nog niet geïndexeerd en moet je actie ondernemen."
      }
    },
    {
      "@type": "Question",
      "name": "Kan ik mijn website sneller in Google krijgen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja! Meld je website aan bij Google Search Console, dien je sitemap in, vraag handmatig indexering aan voor belangrijke pagina's, en zorg voor kwalitatieve backlinks van andere websites. Regelmatig nieuwe content plaatsen helpt ook om Google vaker terug te laten komen."
      }
    }
  ]
};

export default function BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f766e]/10 border border-[#0f766e]/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#0f766e] animate-pulse"></span>
              <span className="text-[#0f766e] text-sm font-medium">SEO & Online Marketing</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              5 Redenen Waarom je{" "}
              <span className="bg-gradient-to-r from-[#0f766e] to-[#14b8a6] bg-clip-text text-transparent">
                Website Niet op Google
              </span>{" "}
              Verschijnt
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              (en Hoe je dit in 30 Minuten Oplost)
            </p>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#0f766e]" />
                <span>4 maart 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0f766e]" />
                <span>8 minuten leestijd</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#0f766e]" />
                <span>TechSolutionsUtrecht</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="prose prose-lg prose-slate max-w-none">
            
            {/* Intro */}
            <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-slate-200">
              <p className="text-xl leading-relaxed text-slate-700 mb-0">
                Je hebt een mooie website laten maken, maar niemand kan hem vinden. 
                Je typt je bedrijfsnaam in Google en... niets. Frustrerend, right? 
                Je bent niet alleen. Elke week help ik ondernemers in Utrecht die precies 
                hetzelfde probleem hebben. Het goede nieuws: in 90% van de gevallen is 
                dit binnen 30 minuten op te lossen. In dit artikel deel ik de 5 meest 
                voorkomende redenen waarom je website niet in Google staat én geef ik 
                je stap-voor-stap oplossingen.
              </p>
            </div>

            {/* Reason 1 */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white text-xl font-bold">
                  1
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 m-0">
                  Je Website is Nog Geen 4 Weken Oud
                </h2>
              </div>
              
              <p className="text-slate-600">
                Heb je je website net gelanceerd? Gefeliciteerd! Maar heb even geduld. 
                Google ontdekt nieuwe websites niet automatisch. Het crawlen en indexeren 
                van een nieuwe site kan 1 tot 4 weken duren, soms zelfs langer als er 
                weinig naar je website gelinkt wordt.
              </p>
              
              <div className="bg-green-50 rounded-xl p-6 my-8 border-l-4 border-green-500">
                <h4 className="text-lg font-semibold text-green-800 mb-3">✅ De Oplossing:</h4>
                <ol className="list-decimal list-inside space-y-2 text-slate-700 m-0">
                  <li>Meld je aan bij <strong>Google Search Console</strong> (gratis)</li>
                  <li>Verifieer eigendom van je domein</li>
                  <li>Dien je sitemap in (meestal: jouwdomein.nl/sitemap.xml)</li>
                  <li>Vraag handmatig indexering aan voor je homepage</li>
                </ol>
              </div>
              
              <p className="text-slate-500 italic">
                💡 <strong>Tip:</strong> Plaats direct na de lancering een paar social media posts 
                met links naar je website. Dit helpt Google om je site sneller te ontdekken.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white text-xl font-bold">
                  2
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 m-0">
                  Je Hebt per Ongeluk "Noindex" Aangezet
                </h2>
              </div>
              
              <p className="text-slate-600">
                Dit klinkt misschien technisch, maar het gebeurt vaker dan je denkt. 
                De "noindex" tag vertelt Google expliciet: "Deze pagina niet indexeren!" 
                Ontwikkelaars zetten dit soms aan tijdens de bouw en vergeten het uit te zetten.
              </p>
              
              <div className="bg-green-50 rounded-xl p-6 my-8 border-l-4 border-green-500">
                <h4 className="text-lg font-semibold text-green-800 mb-3">✅ De Oplossing:</h4>
                <p className="font-medium text-slate-800 mb-2">Voor WordPress gebruikers:</p>
                <ol className="list-decimal list-inside space-y-2 text-slate-700 m-0">
                  <li>Ga naar <strong>Instellingen → Lezen</strong></li>
                  <li>Zoek naar: "Zoekmachines vragen om deze site niet te indexeren"</li>
                  <li>Zorg dat dit vinkje <strong>UIT</strong> staat</li>
                  <li>Sla op en wis je cache</li>
                </ol>
              </div>
            </div>

            {/* Reason 3 */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-green-500 flex items-center justify-center text-white text-xl font-bold">
                  3
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 m-0">
                  Er Zijn Technische SEO Problemen
                </h2>
              </div>
              
              <p className="text-slate-600">
                Soms is je website wel geïndexeerd, maar verschijnt hij alleen op pagina 10 van Google 
                (wat hetzelfde is als niet geïndexeerd zijn). Technische problemen zoals een trage 
                laadsnelheid of mobiele problemen kunnen je rankings schaden.
              </p>
              
              <div className="bg-green-50 rounded-xl p-6 my-8 border-l-4 border-green-500">
                <h4 className="text-lg font-semibold text-green-800 mb-3">✅ De Oplossing:</h4>
                <ol className="list-decimal list-inside space-y-3 text-slate-700 m-0">
                  <li><strong>PageSpeed Insights</strong> - Test je laadsnelheid</li>
                  <li><strong>Mobile-Friendly Test</strong> - Check mobiele werking</li>
                  <li><strong>Google Search Console</strong> - Bekijk pagina-ervaring rapport</li>
                </ol>
              </div>
            </div>

            {/* Reason 4 */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white text-xl font-bold">
                  4
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 m-0">
                  Je Hebt Geen of Weinig Content
                </h2>
              </div>
              
              <p className="text-slate-600">
                Google's missie is om de beste content te tonen voor elke zoekopdracht. 
                Als je website alleen uit een homepagina met 200 woorden bestaat, heeft Google 
                weinig om mee te werken.
              </p>
              
              <div className="bg-green-50 rounded-xl p-6 my-8 border-l-4 border-green-500">
                <h4 className="text-lg font-semibold text-green-800 mb-3">✅ De Oplossing:</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700 m-0">
                  <li>Zorg voor minimaal <strong>500-800 woorden</strong> per belangrijke pagina</li>
                  <li>Start een <strong>blog</strong> met relevante artikelen</li>
                  <li>Gebruik zoekwoorden natuurlijk in de tekst</li>
                </ul>
              </div>
            </div>

            {/* Reason 5 */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center text-white text-xl font-bold">
                  5
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 m-0">
                  Je Hebt Geen Backlinks
                </h2>
              </div>
              
              <p className="text-slate-600">
                Backlinks zijn een van de belangrijkste ranking factoren van Google. 
                Als andere websites niet naar jou linken, ziet Google je website als 
                minder betrouwbaar.
              </p>
              
              <div className="bg-green-50 rounded-xl p-6 my-8 border-l-4 border-green-500">
                <h4 className="text-lg font-semibold text-green-800 mb-3">✅ De Oplossing:</h4>
                <ul className="list-disc list-inside space-y-3 text-slate-700 m-0">
                  <li>Meld je bedrijf gratis aan bij KvK, Google Bedrijf Profiel, etc.</li>
                  <li>Vraag leveranciers en partners of ze naar je willen linken</li>
                  <li>Schrijf gastblogs voor websites in je branche</li>
                </ul>
              </div>
            </div>

            {/* Summary/Conclusion */}
            <div className="bg-slate-100 rounded-2xl p-8 my-12 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                🎯 Samenvatting: Je 30-Minuten Actieplan
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-slate-700">
                <li>Controleer of je website ouder is dan 4 weken</li>
                <li>Meld je aan bij Google Search Console en dien je sitemap in</li>
                <li>Controleer de "noindex" instelling in WordPress</li>
                <li>Test je laadsnelheid met PageSpeed Insights</li>
                <li>Schrijf 500+ woorden unieke content per pagina</li>
              </ol>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#0f766e] to-[#14b8a6] rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Heb je hulp nodig met je SEO?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Als freelancer in Utrecht help ik ondernemers om hoger in Google te komen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/31625518708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0f766e] rounded-xl font-semibold hover:bg-slate-100 transition-all"
                >
                  💬 Stuur een WhatsApp
                </a>
                <a
                  href="/diensten/seo"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border-2 border-white rounded-xl font-semibold hover:bg-white/20 transition-all"
                >
                  Meer over SEO Diensten <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 py-8 border-t border-slate-200">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0f766e] to-[#14b8a6] flex items-center justify-center text-2xl">
                ⚡
              </div>
              <div>
                <p className="font-semibold text-slate-900">TechSolutionsUtrecht</p>
                <p className="text-slate-500 text-sm">Webdesign & SEO Specialist in Utrecht</p>
                <p className="text-slate-400 text-xs mt-1">
                  Geplaatst op 4 maart 2025 • 8 minuten leestijd
                </p>
              </div>
            </div>

          </div>
        </article>
      </main>
    </>
  );
}
