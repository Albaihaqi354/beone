import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import WhatWeCanBuild from "@/components/solutions/WhatWeCanBuild";
import Services from "@/components/services/Services";
import Process from "@/components/process/Process";
import Pricing from "@/components/pricing/Pricing";
import Maintenance from "@/components/maintenance/Maintenance";
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
        {/* bg: --surface (white) — continues */}
        <WhatWeCanBuild />
        {/* bg: --background (ivory) */}
        <Services />
        {/* bg: --surface-2 (warm off-white) */}
        <Process />
        {/* bg: --surface (white) */}
        <Pricing />
        {/* bg: --background (ivory) */}
        <Maintenance />
        {/* bg: --surface (white) */}
        <FAQ />
        {/* bg: --surface-dark top + --background bottom */}
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
