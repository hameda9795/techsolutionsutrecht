import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LatestProjects from "@/components/LatestProjects";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import HomeFAQ from "@/components/HomeFAQ";
import RegionLinks from "@/components/RegionLinks";
import Testimonials from "@/components/Testimonials";
import type { Metadata } from "next";
import { homeFaqs } from "@/lib/home-faqs";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "https://techsolutionsutrecht.nl" },
};

// Homepage leest de nieuwste projecten live uit de database.
export const dynamic = "force-dynamic";

export default function Home() {
  const faqJsonLd = faqPageSchema(homeFaqs);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main>
        <Hero />
        <LatestProjects />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        {/* De homepage is de sterkste pagina van de site en linkte contextueel
            naar geen enkele stadspagina. Dit blok geeft die pagina's voor het
            eerst echte interne linkkracht met beschrijvende ankertekst. */}
        <RegionLinks />
        <HomeFAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
