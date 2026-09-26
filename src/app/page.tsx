import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Why from "@/components/why/Why";
import Pricing from "@/components/pricing/Pricing";
import WhatWeCanBuild from "@/components/solutions/WhatWeCanBuild";
import Process from "@/components/process/Process";
import FAQ from "@/components/faq/FAQ";
import Maintenance from "@/components/maintenance/Maintenance";
import CTA from "@/components/cta/CTA";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Why />
        <Pricing />
        <WhatWeCanBuild />
        <Process />
        <FAQ />
        <Maintenance />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
