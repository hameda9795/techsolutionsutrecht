import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import HomeFAQ from "@/components/HomeFAQ";
import Testimonials from "@/components/Testimonials";
import { homeFaqs } from "@/lib/home-faqs";
import { faqPageSchema } from "@/lib/schema";

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
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <HomeFAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
