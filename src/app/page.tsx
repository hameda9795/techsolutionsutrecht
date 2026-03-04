import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import HomeFAQ from "@/components/HomeFAQ";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <HomeFAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
