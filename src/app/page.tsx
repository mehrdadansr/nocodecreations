import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import ProcessSteps from "@/components/home/ProcessSteps";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import Testimonials from "@/components/home/Testimonials";
import HomeFAQ from "@/components/home/HomeFAQ";
import AboutSnippet from "@/components/home/AboutSnippet";
import CTABand from "@/components/home/CTABand";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <ProcessSteps />
      <PortfolioPreview />
      <Testimonials />
      <HomeFAQ />
      <AboutSnippet />
      <CTABand />
      <ContactSection />
    </>
  );
}
