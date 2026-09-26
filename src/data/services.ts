export interface Service {
  id: string;
  icon: string; // lucide icon name
  title: string;
  description: string;
  startingPrice: string;
  slug: string;
}

export const services: Service[] = [
  {
    id: "landing-page",
    icon: "Layout",
    title: "Landing Page",
    description:
      "Website satu halaman untuk produk, jasa, event, atau personal brand. Efektif dan fokus pada konversi.",
    startingPrice: "Rp1.500.000",
    slug: "landing-page",
  },
  {
    id: "company-profile",
    icon: "Building2",
    title: "Company Profile",
    description:
      "Website profesional untuk memperkenalkan bisnis dan membangun kredibilitas di mata calon client.",
    startingPrice: "Rp2.500.000",
    slug: "company-profile",
  },
  {
    id: "business-website",
    icon: "Globe",
    title: "Business Website",
    description:
      "Website bisnis dengan fitur lebih lengkap: katalog, blog, dan sistem konten yang mudah dikelola.",
    startingPrice: "Rp4.000.000",
    slug: "business-website",
  },
  {
    id: "ecommerce",
    icon: "ShoppingCart",
    title: "E-Commerce",
    description:
      "Website toko online lengkap dengan katalog produk, cart, checkout, payment gateway, dan manajemen order.",
    startingPrice: "Rp6.000.000",
    slug: "ecommerce",
  },
  {
    id: "custom-web-app",
    icon: "Code2",
    title: "Custom Web App",
    description:
      "Sistem dan aplikasi yang dibuat khusus sesuai workflow bisnis — inventory, POS, booking, HR, SaaS, dan lainnya.",
    startingPrice: "Rp7.500.000",
    slug: "custom-web-app",
  },
  {
    id: "mobile-app",
    icon: "Smartphone",
    title: "Mobile App",
    description:
      "Aplikasi mobile untuk kebutuhan bisnis dan digital product. Native atau cross-platform sesuai kebutuhan.",
    startingPrice: "Rp8.000.000",
    slug: "mobile-app",
  },
];
