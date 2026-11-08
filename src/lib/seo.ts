/**
 * Structured Data (JSON-LD) for BeOne
 * Only uses verifiable information — no fake ratings, reviews, or addresses.
 */
import { siteConfig } from "./config";

const baseUrl = siteConfig.url;

/** Organization schema */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BeOne",
  description:
    "Digital Development Studio yang membantu individu dan bisnis membangun website serta solusi digital sesuai kebutuhan mereka.",
  url: baseUrl,
  logo: `${baseUrl}/icon.svg`,
  email: siteConfig.email,
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.github,
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: siteConfig.email,
    availableLanguage: ["Indonesian", "English"],
  },
};

/** WebSite schema with SearchAction */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BeOne",
  url: baseUrl,
  description:
    "BeOne — Digital Development Studio. Jasa pembuatan website, aplikasi, dan solusi digital.",
  inLanguage: ["id", "en"],
  publisher: {
    "@type": "Organization",
    name: "BeOne",
    url: baseUrl,
  },
};

/** Service schemas for each offering */
const services = [
  {
    name: "Jasa Pembuatan Landing Page",
    description:
      "Website satu halaman untuk memperkenalkan produk, layanan, atau campaign dengan fokus konversi.",
    serviceType: "Landing Page Development",
    url: `${baseUrl}/#solutions`,
  },
  {
    name: "Jasa Pembuatan Company Profile",
    description:
      "Website profesional multi-halaman untuk memperkenalkan perusahaan dan membangun kredibilitas.",
    serviceType: "Company Profile Website",
    url: `${baseUrl}/#solutions`,
  },
  {
    name: "Jasa Pembuatan E-Commerce",
    description:
      "Toko online lengkap dengan manajemen produk, keranjang belanja, checkout, dan dashboard admin.",
    serviceType: "E-Commerce Development",
    url: `${baseUrl}/#solutions`,
  },
  {
    name: "Jasa Pembuatan Dashboard Bisnis",
    description:
      "Dashboard untuk membantu bisnis mengelola dan memantau informasi serta performa operasional.",
    serviceType: "Business Dashboard Development",
    url: `${baseUrl}/#solutions`,
  },
  {
    name: "Jasa Pembuatan Sistem Manajemen",
    description:
      "Sistem digital untuk mengelola aktivitas operasional seperti inventory, absensi, dan booking.",
    serviceType: "Management System Development",
    url: `${baseUrl}/#solutions`,
  },
  {
    name: "Jasa Pembuatan Custom Web Application",
    description:
      "Aplikasi web kustom yang dirancang berdasarkan kebutuhan dan alur kerja spesifik bisnis.",
    serviceType: "Custom Web Application Development",
    url: `${baseUrl}/#solutions`,
  },
  {
    name: "Jasa Pembuatan Mobile Application",
    description:
      "Aplikasi mobile Android & iOS untuk kebutuhan operasional bisnis atau produk digital.",
    serviceType: "Mobile Application Development",
    url: `${baseUrl}/#services`,
  },
  {
    name: "Jasa Pembuatan Website Portfolio Pribadi",
    description:
      "Website portofolio pribadi untuk menampilkan profil, keahlian, dan karya secara profesional.",
    serviceType: "Personal Portfolio Website",
    url: `${baseUrl}/#services`,
  },
];

/** Combined Service schema (ItemList of services) */
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((svc, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: svc.name,
      description: svc.description,
      serviceType: svc.serviceType,
      provider: {
        "@type": "Organization",
        name: "BeOne",
        url: baseUrl,
      },
      url: svc.url,
      areaServed: "Indonesia",
      availableLanguage: ["Indonesian", "English"],
    },
  })),
};

/** BreadcrumbList schema (for multi-page sites) */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
