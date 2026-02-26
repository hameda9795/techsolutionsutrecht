import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import HomeFAQ from "@/components/HomeFAQ";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <WhyChooseUs />
        <Testimonials />
        <HomeFAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
