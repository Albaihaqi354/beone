export interface PricingFeature {
  text: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  label: string;
  price: string;
  priceNote?: string;
  duration: string;
  features: string[];
  cta: string;
  popular?: boolean;
  isCustom?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    label: "Landing Page",
    price: "Rp1.500.000",
    duration: "3–7 hari",
    cta: "Choose Starter",
    features: [
      "1 halaman",
      "Custom design",
      "Responsive (mobile-first)",
      "Maks. 8 section",
      "Tombol WhatsApp",
      "Social media links",
      "Google Maps embed",
      "Basic SEO",
      "SSL / HTTPS",
      "Domain .com 1 tahun",
      "Hosting 1 tahun",
      "Google Analytics",
      "2x revisi",
      "Deployment",
      "Garansi bug 30 hari",
    ],
  },
  {
    id: "business",
    name: "Business",
    label: "Company Profile",
    price: "Rp2.500.000",
    duration: "7–14 hari",
    cta: "Choose Business",
    features: [
      "Maks. 5–6 halaman",
      "Custom UI/UX",
      "Responsive (mobile-first)",
      "Halaman: Home, About, Services, Portfolio, Contact",
      "Tombol WhatsApp",
      "Google Maps embed",
      "Contact form",
      "Basic SEO",
      "Google Analytics",
      "SSL / HTTPS",
      "Domain .com 1 tahun",
      "Hosting 1 tahun",
      "3x revisi",
      "Deployment",
      "Garansi bug 30 hari",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    label: "Business Website",
    price: "Rp4.000.000",
    duration: "2–3 minggu",
    cta: "Choose Professional",
    popular: true,
    features: [
      "Maks. 10 halaman",
      "Custom UI/UX",
      "Product / Service Catalog",
      "Search & Filter",
      "Blog / News",
      "Contact Form",
      "Tombol WhatsApp",
      "Google Maps embed",
      "Basic SEO",
      "Google Analytics",
      "CMS / Admin sederhana",
      "Database",
      "SSL / HTTPS",
      "Domain .com 1 tahun",
      "Hosting 1 tahun",
      "4x revisi",
      "Deployment",
      "Garansi bug 30 hari",
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    label: "Toko Online",
    price: "Rp6.000.000",
    priceNote: "mulai dari",
    duration: "3–5 minggu",
    cta: "Choose E-Commerce",
    features: [
      "Product catalog & detail",
      "Kategori produk",
      "Search & Filter",
      "Shopping cart",
      "Checkout",
      "Autentikasi user",
      "Order management",
      "Admin dashboard",
      "Product management",
      "Stock management",
      "Tombol WhatsApp",
      "Payment gateway",
      "Responsive (mobile-first)",
      "Basic SEO",
      "Domain & hosting 1 tahun",
      "SSL",
      "Deployment",
      "Garansi bug 30 hari",
    ],
  },
  {
    id: "custom",
    name: "Custom Web App",
    label: "Sistem Custom",
    price: "Rp7.500.000",
    priceNote: "mulai dari",
    duration: "Sesuai scope",
    cta: "Discuss Your Project",
    isCustom: true,
    features: [
      "Inventory system",
      "Point of Sale (POS)",
      "HR & Attendance",
      "Booking system",
      "Finance & reporting",
      "Management system",
      "SaaS product",
      "Administration system",
      "Fitur disesuaikan kebutuhan",
      "Custom UI/UX",
      "Database & API",
      "Deployment",
      "Garansi bug 30 hari",
    ],
  },
];

export interface Addon {
  name: string;
  startingPrice: string;
}

export const addons: Addon[] = [
  { name: "Halaman tambahan", startingPrice: "Rp200.000" },
  { name: "Section tambahan", startingPrice: "Rp100.000" },
  { name: "Autentikasi / Login", startingPrice: "Rp500.000" },
  { name: "Admin Dashboard", startingPrice: "Rp750.000" },
  { name: "Database", startingPrice: "Rp750.000" },
  { name: "REST API", startingPrice: "Rp750.000" },
  { name: "Payment Gateway", startingPrice: "Rp750.000" },
  { name: "CMS", startingPrice: "Rp1.000.000" },
  { name: "API Integration", startingPrice: "Rp500.000" },
  { name: "Export Excel / PDF", startingPrice: "Rp500.000" },
  { name: "Advanced SEO", startingPrice: "Rp750.000" },
];
