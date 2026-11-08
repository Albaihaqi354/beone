import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import PortfolioShowcase from "@/components/portfolio/PortfolioShowcase";
import Process from "@/components/process/Process";
import Pricing from "@/components/pricing/Pricing";
import FAQ from "@/components/faq/FAQ";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* bg: --background (ivory) */}
        <Hero />
        {/* bg: --surface (white) */}
        <About />
        {/* bg: --background (ivory) */}
        <Services />
        {/* bg: --background (ivory) — same as services intentional: portfolio continues the content */}
        <PortfolioShowcase />
        {/* bg: --surface-2 (warm off-white) — breaks the run */}
        <Process />
        {/* bg: --surface (white) */}
        <Pricing />
        {/* bg: --background (ivory) */}
        <FAQ />
        {/* bg: --surface-dark top (editorial CTA) → --background bottom (form) */}
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
