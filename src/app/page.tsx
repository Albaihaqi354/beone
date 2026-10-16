import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import TrustBar from "@/components/trust/TrustBar";
import PortfolioShowcase from "@/components/portfolio/PortfolioShowcase";
import Services from "@/components/services/Services";
import Pricing from "@/components/pricing/Pricing";
import Maintenance from "@/components/maintenance/Maintenance";
import Process from "@/components/process/Process";
import Why from "@/components/why/Why";
import FAQ from "@/components/faq/FAQ";
import CTA from "@/components/cta/CTA";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <PortfolioShowcase />
        <Services />
        <Pricing />
        <Maintenance />
        <Process />
        <Why />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

