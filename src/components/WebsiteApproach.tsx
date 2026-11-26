import Link from "next/link";

const steps = [
  { title: "Doel en offerte", text: "We bespreken je diensten, je klanten en wat een bezoeker op je website moet kunnen doen. Je krijgt een voorstel met de inhoud, functies, planning en totaalprijs." },
  { title: "Ontwerp en inhoud", text: "We bepalen de pagina’s en de uitstraling. Je levert je logo, teksten en beelden aan; eventuele hulp met de inhoud nemen we op in de offerte." },
  { title: "Bouwen en controleren", text: "Ik bouw de website en we bekijken de werking op mobiel en desktop. Je controleert de inhoud en geeft feedback voordat de website online gaat." },
  { title: "Online en zelf beheren", text: "Na akkoord volgt de oplevering. Je ontvangt de afgesproken toegang en uitleg. Voor updates en verdere ondersteuning kun je websiteonderhoud afspreken." },
];

export default function WebsiteApproach() {
  return (
    <section className="bg-[var(--color-surface)] py-16 sm:py-20" aria-labelledby="website-aanpak">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="website-aanpak" className="text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">Van eerste gesprek tot je nieuwe website</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-[var(--color-muted)]">Een website laten bouwen begint bij wat jouw klant nodig heeft. Een duidelijk aanbod, voorbeelden van je werk en een eenvoudige manier om contact op te nemen vormen de basis.</p>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-[var(--color-primary)] pt-5">
              <span className="text-sm font-semibold text-[var(--color-primary)]">Stap {index + 1}</span>
              <h3 className="mt-2 text-lg font-bold text-[var(--color-ink)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{step.text}</p>
            </li>
          ))}
        </ol>
        <div id="wordpress-website" className="mt-14 grid gap-8 border-t border-[var(--color-border)] pt-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-ink)]">Zelf je website bijwerken met WordPress</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-muted)]">Wil je zelf teksten, foto’s of diensten aanpassen? Dan kan WordPress bij je passen. We bespreken welke onderdelen je wilt beheren en richten de website daarop in. Je krijgt uitleg bij de oplevering.</p>
            <p className="mt-4 leading-relaxed text-[var(--color-muted)]">Voor andere wensen, zoals een specifieke koppeling of extra maatwerk, bespreken we een passende oplossing. De keuze volgt uit jouw website en het beheer dat je nodig hebt.</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              <Link href="/diensten/website-laten-maken" className="font-semibold text-[var(--color-primary)] underline underline-offset-4">WordPress website laten maken</Link>
              <Link href="/blog/wordpress-of-maatwerk" className="font-semibold text-[var(--color-primary)] underline underline-offset-4">Vergelijk WordPress en maatwerk</Link>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-ink)]">Een website voor je eigen bedrijf</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-muted)]">Begin met de pagina’s die je klant helpen kiezen: je diensten, wie je bent, voorbeelden van je werk en contact. Een prijslijst, galerij of aanvraagformulier kan daarop aansluiten.</p>
            <p className="mt-4 leading-relaxed text-[var(--color-muted)]">Werk je als zelfstandige? Op de pagina over een ZZP-website lees je hoe je een overzichtelijke eerste website opzet en welke informatie je kunt voorbereiden.</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              <Link href="/zzp-website-laten-maken" className="font-semibold text-[var(--color-primary)] underline underline-offset-4">Website laten maken als ZZP’er</Link>
              <Link href="/blog/wat-kost-website-laten-maken#websitekosten-berekenen" className="font-semibold text-[var(--color-primary)] underline underline-offset-4">Bereken je websitekosten</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-[var(--color-border)] pt-8">
          <h2 className="text-2xl font-bold text-[var(--color-ink)]">Producten verkopen vanuit je eigen webshop</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-[var(--color-muted)]">Wil je naast je bedrijf presenteren ook bestellingen ontvangen? Een WooCommerce-webshop voegt productpagina’s, een winkelwagen en afrekenen toe aan WordPress. Vooraf bespreken we je assortiment, betaalprovider en verzending. Op de dienstenpagina zie je welk invoerwerk en welke functies bij ieder pakket horen.</p>
          <Link href="/diensten/webshop" className="mt-4 inline-block font-semibold text-[var(--color-primary)] underline underline-offset-4">WooCommerce webshop laten maken</Link>
        </div>
      </div>
    </section>
  );
}
