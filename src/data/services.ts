export interface Service {
  id: string;
  icon: string; // lucide icon name
  title: string;
  category: "personal" | "business" | "advanced";
  categoryLabel: string;
  description: string;
  startingPrice: string;
  priceNote?: string;
  slug: string;
  isEntryLevel?: boolean;
  featured?: boolean;
  badge?: string;
  scopeSummary?: string;
  useCases?: string[];
  exclusions?: string[];
}

export const services: Service[] = [
  // ─── Entry-Level: Personal & Creative ─────────────────────
  {
    id: "personal-portfolio",
    icon: "Sparkles",
    title: "Website Portofolio Pribadi",
    category: "personal",
    categoryLabel: "Personal & Creative",
    description:
      "Website satu halaman untuk menampilkan profil, keahlian, pengalaman, dan karya terbaik secara profesional sesuai karakter Anda.",
    startingPrice: "Mulai Rp150.000",
    priceNote: "Paket dasar single page",
    slug: "personal-portfolio",
    isEntryLevel: true,
    featured: true,
    badge: "Layanan Unggulan",
    scopeSummary:
      "1 halaman responsif, profil/bio, keahlian, maks 3 proyek dasar, kontak & tautan sosial, penyesuaian visual, publikasi hosting gratis.",
    useCases: [
      "Web Developer & Programmer",
      "UI/UX & Graphic Designer",
      "Freelancer & Kreator Konten",
      "Mahasiswa & Fresh Graduate Pencari Kerja",
      "Konsultan & Profesional Independen",
    ],
    exclusions: [
      "Domain berbayar (.com/.id) tidak termasuk (bisa dibantu setup)",
      "Proyek tambahan di atas batas paket dasar dikenakan penyesuaian",
    ],
  },
  {
    id: "promo-design",
    icon: "Palette",
    title: "Desain Konten Promosi",
    category: "personal",
    categoryLabel: "Personal & Creative",
    description:
      "Paket 5 (lima) desain visual promosi siap posting untuk media sosial Anda guna menarik pelanggan dan meningkatkan interaksi.",
    startingPrice: "Rp75.000–100.000",
    priceNote: "Paket 5 Desain Konten",
    slug: "promo-design",
    isEntryLevel: true,
    badge: "Paket 5 Desain",
    scopeSummary:
      "Paket 5 desain konten promosi, 1 format ukuran yang disepakati (Feed 1:1 atau Story 9:16), materi dari pelanggan, 1–2x revisi, file final JPG/PNG high-res.",
    useCases: [
      "Promosi Produk & Diskon UMKM",
      "Banner Pengumuman & Event/Webinar",
      "Flyer Digital Media Sosial",
      "Branding Feed Instagram & Story",
    ],
    exclusions: [
      "Bukan harga per 1 desain — ini merupakan paket hemat 5 desain",
      "Materi teks & foto produk disediakan oleh pelanggan",
      "Tidak termasuk copywriting dari nol atau pemotretan produk",
    ],
  },

  // ─── Entry-Level: Business Websites ────────────────────────
  {
    id: "umkm-catalog",
    icon: "BookOpen",
    title: "Katalog Digital UMKM",
    category: "business",
    categoryLabel: "Business Websites",
    description:
      "Katalog produk atau menu online sederhana yang memudahkan pelanggan melihat daftar produk dan memesan langsung via WhatsApp.",
    startingPrice: "Mulai Rp150.000",
    priceNote: "Katalog online responsif",
    slug: "umkm-catalog",
    isEntryLevel: true,
    badge: "Solusi UMKM",
    scopeSummary:
      "Daftar produk/menu, foto, nama, harga, deskripsi singkat, tombol order WhatsApp per item, responsive smartphone, publikasi hosting gratis.",
    useCases: [
      "Warung Kuliner, Kafe & Katering",
      "Toko Pakaian & Fashion UMKM",
      "Kerajinan Tangan & Produk Rumahan",
      "Katalog Layanan Jasa Lokal",
    ],
    exclusions: [
      "Tidak termasuk payment gateway otomatis",
      "Tidak termasuk dashboard admin atau database kompleks",
      "Bukan sistem e-commerce penuh",
    ],
  },
  {
    id: "business-landing-page",
    icon: "Layout",
    title: "Landing Page Bisnis",
    category: "business",
    categoryLabel: "Business Websites",
    description:
      "Website satu halaman fokus konversi dengan penawaran utama, keunggulan produk/jasa, dan call-to-action langsung ke WhatsApp.",
    startingPrice: "Rp350.000–500.000",
    priceNote: "Satu halaman bisnis",
    slug: "business-landing-page",
    isEntryLevel: true,
    badge: "Cepat Online",
    scopeSummary:
      "1 halaman bisnis, hero penawaran utama, info layanan/produk, poin keunggulan bisnis, tombol WhatsApp/kontak, responsive, hosting gratis.",
    useCases: [
      "Bisnis Jasa & Layanan Profesional",
      "Promosi Produk Spesifik / Pre-Order",
      "Halaman Penawaran Khusus / Campaign",
      "Profil Bisnis Ringkas untuk UMKM",
    ],
    exclusions: [
      "Harga final bergantung jumlah section dan materi desain",
      "Domain kustom .com tidak termasuk (opsional dibantu setup)",
    ],
  },

  // ─── Advanced Services: Business Websites ───────────────────
  {
    id: "company-profile",
    icon: "Building2",
    title: "Company Profile",
    category: "business",
    categoryLabel: "Business Websites",
    description:
      "Website multi-halaman profesional untuk memperkenalkan profil perusahaan, legalitas, layanan, dan membangun kredibilitas di mata klien.",
    startingPrice: "Rp2.500.000",
    priceNote: "Lengkap 5–6 halaman",
    slug: "company-profile",
    useCases: [
      "Perusahaan & Korporasi",
      "Agensi & Studio Kreatif",
      "Lembaga & Yayasan",
      "Bisnis B2B & Kontraktor",
    ],
  },
  {
    id: "business-website",
    icon: "Globe",
    title: "Business Website Lengkap",
    category: "business",
    categoryLabel: "Business Websites",
    description:
      "Website bisnis dengan fitur lengkap: katalog dinamis, sistem artikel blog, filter pencarian, dan CMS konten yang mudah dikelola.",
    startingPrice: "Rp4.000.000",
    priceNote: "Hingga 10 halaman + CMS",
    slug: "business-website",
    useCases: [
      "Bisnis dengan Variasi Produk Luas",
      "Portal Edukasi & Berita Bisnis",
      "Perusahaan dengan Update Konten Rutin",
    ],
  },

  // ─── Advanced Development ───────────────────────────────────
  {
    id: "ecommerce",
    icon: "ShoppingCart",
    title: "E-Commerce",
    category: "advanced",
    categoryLabel: "Advanced Development",
    description:
      "Website toko online lengkap dengan manajemen produk, keranjang belanja, checkout terintegrasi, dan dashboard pesanan.",
    startingPrice: "Rp6.000.000",
    priceNote: "Toko online terintegrasi",
    slug: "ecommerce",
    useCases: [
      "Brand Retail & D2C",
      "Toko Online Multi-Kategori",
      "Distributor & Grosir Digital",
    ],
  },
  {
    id: "custom-web-app",
    icon: "Code2",
    title: "Custom Web App",
    category: "advanced",
    categoryLabel: "Advanced Development",
    description:
      "Sistem dan aplikasi web kustom sesuai alur kerja bisnis — manajemen inventory, POS kasir, reservasi, HR, atau produk SaaS.",
    startingPrice: "Rp7.500.000",
    priceNote: "Sesuai scope kebutuhan",
    slug: "custom-web-app",
    useCases: [
      "Sistem Inventory & Gudang",
      "Point of Sale (POS) Kasir",
      "Sistem Booking & Antrean",
      "Dashboard Internal Perusahaan",
    ],
  },
  {
    id: "mobile-app",
    icon: "Smartphone",
    title: "Mobile App",
    category: "advanced",
    categoryLabel: "Advanced Development",
    description:
      "Aplikasi mobile Android & iOS untuk kebutuhan operasional bisnis maupun produk digital dengan performa responsif dan modern.",
    startingPrice: "Rp8.000.000",
    priceNote: "Cross-platform mobile",
    slug: "mobile-app",
    useCases: [
      "Aplikasi Khusus Member/Pelanggan",
      "Aplikasi Operasional Tim Lapangan",
      "Digital Product & Startup MVP",
    ],
  },
];
