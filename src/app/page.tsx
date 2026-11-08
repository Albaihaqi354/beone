import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import PortfolioShowcase from "@/components/portfolio/PortfolioShowcase";
import Process from "@/components/process/Process";
import Pricing from "@/components/pricing/Pricing";
import FAQ from "@/components/faq/FAQ";
import CTA from "@/components/cta/CTA";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <PortfolioShowcase />
        <Process />
        <Pricing />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
