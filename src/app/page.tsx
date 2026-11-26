import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LatestProjects from "@/components/LatestProjects";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import HomeFAQ from "@/components/HomeFAQ";
import UtrechtIntro from "@/components/UtrechtIntro";
import Testimonials from "@/components/Testimonials";
import WebsiteApproach from "@/components/WebsiteApproach";
import WebsiteProjectProof from "@/components/WebsiteProjectProof";
import UtrechtProjectCase from "@/components/UtrechtProjectCase";
import { getAllShowcaseProjects } from "@/lib/showcase-db";
import type { Metadata } from "next";
import { homeFaqs } from "@/lib/home-faqs";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Website laten maken Utrecht vanaf €300 | TechSolutions",
  description: "Website laten maken in Utrecht vanaf €300. Bekijk mijn werk, prijzen en aanpak. Direct contact met Max, webdesigner in Zuilen. Vraag een vrijblijvende offerte aan.",
  openGraph: {
    title: "Website laten maken Utrecht vanaf €300 | TechSolutions",
    description: "Werk direct met Max, webdesigner in Utrecht-Zuilen. Een website voor jouw bedrijf, met duidelijke afspraken over ontwerp, inhoud en prijs.",
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website laten maken Utrecht vanaf €300 | TechSolutions",
    description: "Werk direct met Max, webdesigner in Utrecht-Zuilen. Bekijk voorbeelden, prijzen en de aanpak voor jouw bedrijfswebsite.",
  },
  alternates: { canonical: "https://techsolutionsutrecht.nl" },
};

// Homepage leest de nieuwste projecten live uit de database.
export const dynamic = "force-dynamic";

export default async function Home() {
  const projects = await getAllShowcaseProjects();
  const localProject = projects.find((project) => project.type === "website"
    && /^https:\/\/(?:www\.)?tandartszuilenparkwijk\.nl\/?$/.test(project.liveUrl));
  const faqJsonLd = faqPageSchema(homeFaqs);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main>
        <Hero hasLocalProject={Boolean(localProject)} />
        <Services />
        {localProject && <UtrechtProjectCase project={localProject} />}
        <LatestProjects projects={projects} />
        <WebsiteProjectProof projects={projects.filter((project) => project.id !== localProject?.id)} />
        <WebsiteApproach />
        <WhyChooseUs />
        <Testimonials />
        <UtrechtIntro />
        <HomeFAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
