export interface Solution {
  id: string;
  icon: string; // lucide icon name
  title: string;
  description: string;
  examples: string[];
}

export const solutions: Solution[] = [
  {
    id: "landing-page",
    icon: "Layout",
    title: "Landing Page",
    description:
      "Website satu halaman untuk memperkenalkan produk, layanan, atau campaign dan membantu bisnis mendapatkan pelanggan.",
    examples: [
      "Product landing page",
      "Service landing page",
      "Event website",
      "Campaign website",
    ],
  },
  {
    id: "company-profile",
    icon: "Building2",
    title: "Company Profile",
    description:
      "Website profesional untuk memperkenalkan perusahaan, membangun kredibilitas, dan memberikan informasi kepada calon pelanggan.",
    examples: [
      "Company profile",
      "Corporate website",
      "Organization website",
      "Professional services website",
    ],
  },
  {
    id: "ecommerce",
    icon: "ShoppingCart",
    title: "E-Commerce",
    description:
      "Solusi toko online untuk membantu bisnis memasarkan dan menjual produk secara digital.",
    examples: [
      "Katalog produk",
      "Shopping cart & checkout",
      "Manajemen pesanan",
      "Integrasi payment gateway",
    ],
  },
  {
    id: "business-dashboard",
    icon: "LayoutDashboard",
    title: "Business Dashboard",
    description:
      "Dashboard untuk membantu bisnis mengelola dan memantau informasi serta performa operasional.",
    examples: [
      "Sales dashboard",
      "Financial dashboard",
      "Analytics & reporting",
      "Performance monitoring",
    ],
  },
  {
    id: "management-system",
    icon: "Settings2",
    title: "Management System",
    description:
      "Sistem digital untuk membantu perusahaan mengelola aktivitas operasional secara lebih terstruktur.",
    examples: [
      "Inventory management",
      "Employee management",
      "Booking system",
      "Administration system",
    ],
  },
  {
    id: "custom-web-app",
    icon: "Code2",
    title: "Custom Web Application",
    description:
      "Aplikasi berbasis web yang dirancang berdasarkan kebutuhan dan alur kerja spesifik setiap bisnis.",
    examples: [
      "SaaS application",
      "CRM & ERP",
      "Marketplace",
      "Custom business application",
    ],
  },
];
