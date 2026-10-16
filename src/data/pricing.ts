export interface PricingFeature {
  text: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  label: string;
  price: string;
  priceNote?: string;
  target?: string;
  duration: string;
  revisions?: string;
  hostingInfo?: string;
  features: string[];
  cta: string;
  popular?: boolean;
  isCustom?: boolean;
  category: "entry" | "portfolio" | "business";
}

/** ─── 1. PAKET ENTRY-LEVEL (Solusi Cepat & Terjangkau Rp75rb–Rp500rb) ─── */
export const entryPricingPlans: PricingPlan[] = [
  {
    id: "promo-design",
    name: "Desain Konten Promosi",
    label: "Paket 5 Desain",
    price: "Rp75.000–100.000",
    priceNote: "Paket lengkap 5 desain (bukan per desain)",
    target: "UMKM, pemilik toko online, dan kreator yang butuh visual promosi siap posting di media sosial.",
    duration: "1–2 hari kerja",
    revisions: "1–2x revisi minor",
    hostingInfo: "File final kualitas tinggi (PNG / JPG) siap posting",
    cta: "Pesan Paket Desain",
    category: "entry",
    features: [
      "Paket lengkap 5 (lima) desain konten promosi",
      "1 format ukuran yang disepakati (Feed 1:1 atau Story 9:16)",
      "Materi teks & informasi produk disediakan pelanggan",
      "Desain rapi disesuaikan dengan identitas brand Anda",
      "Maksimal 1–2 putaran revisi minor",
      "File final resolusi tinggi siap upload (PNG / JPG)",
      "*Penting: Bukan harga untuk 1 desain — ini merupakan paket 5 desain*",
    ],
  },
  {
    id: "umkm-catalog",
    name: "Katalog Digital UMKM",
    label: "Katalog & Menu Online",
    price: "Rp150.000",
    priceNote: "Mulai dari",
    target: "Pelaku usaha kuliner, kafe, warung makan, butik pakaian, dan UMKM produk rumahan.",
    duration: "1–2 hari kerja",
    revisions: "1x revisi minor",
    hostingInfo: "Hosting gratis via Vercel / Netlify (tanpa biaya bulanan)",
    cta: "Pilih Katalog UMKM",
    category: "entry",
    features: [
      "Katalog sederhana untuk produk atau menu online",
      "Tampilan foto, nama produk, harga, dan deskripsi singkat",
      "Tombol pemesanan langsung terhubung ke WhatsApp",
      "Desain responsif optimal dibuka dari smartphone pelanggan",
      "Hosting gratis aktif tanpa kewajiban biaya bulanan",
      "1x revisi minor",
      "*Eksklusi:* Tidak termasuk payment gateway, dashboard admin, atau database kompleks",
    ],
  },
  {
    id: "portfolio-starter",
    name: "Portofolio Pribadi Starter",
    label: "Portofolio Single Page",
    price: "Rp150.000",
    priceNote: "Mulai dari",
    target: "Developer, desainer, freelancer, mahasiswa & pencari kerja yang butuh portofolio ringkas cepat tayang.",
    duration: "1–3 hari kerja",
    revisions: "1x revisi minor",
    hostingInfo: "Hosting gratis via Vercel / Netlify / GitHub Pages (tanpa biaya bulanan)",
    cta: "Pilih Portofolio Starter",
    popular: true,
    category: "entry",
    features: [
      "1 halaman terstruktur (Single page)",
      "Profil singkat dan bio pengenalan diri profesional",
      "Keahlian, pengalaman, pendidikan, atau bidang profesi",
      "Maksimal 3 proyek terpilih pada paket dasar",
      "Bagian kontak dan tautan media sosial",
      "Desain responsif (smartphone & desktop)",
      "Penyesuaian visual sesuai identitas & profesi Anda",
      "Publikasi hosting gratis tanpa biaya server bulanan",
      "1x revisi minor",
      "Panduan mandiri custom domain (domain kustom tidak termasuk)",
    ],
  },
  {
    id: "business-landing-page",
    name: "Landing Page Bisnis",
    label: "Satu Halaman Bisnis",
    price: "Rp350.000–500.000",
    priceNote: "Tergantung section & kebutuhan",
    target: "Pelaku usaha jasa, UMKM, atau penawaran produk khusus yang butuh satu halaman terarah untuk promosi.",
    duration: "2–4 hari kerja",
    revisions: "2x revisi",
    hostingInfo: "Hosting gratis tanpa biaya server bulanan",
    cta: "Pilih Landing Page Bisnis",
    category: "entry",
    features: [
      "Satu halaman bisnis fokus konversi penjualan",
      "Hero section dengan penawaran utama yang jelas",
      "Bagian informasi layanan atau katalog produk utama",
      "Poin keunggulan bisnis & value proposition",
      "Tombol call-to-action (CTA) langsung ke WhatsApp atau kontak",
      "Desain responsif mobile-first",
      "Hosting gratis tanpa biaya sewa server bulanan",
      "2x revisi",
      "*Catatan:* Harga final bergantung pada konten, jumlah section, dan fitur tambahan",
    ],
  },
];

/** ─── 2. PAKET PORTOFOLIO LENGKAP (Starter, Professional, Premium) ─── */
export const portfolioPricingPlans: PricingPlan[] = [
  {
    id: "portfolio-starter",
    name: "Portfolio Starter",
    label: "Pelajar & Pemula",
    price: "Rp150.000",
    priceNote: "Mulai dari",
    target: "Mahasiswa, fresh graduate, atau pemula yang butuh portofolio personal rapi dan cepat online.",
    duration: "1–3 hari kerja",
    revisions: "1x revisi minor",
    hostingInfo: "Hosting gratis via Vercel / Netlify / GitHub Pages (tanpa biaya bulanan)",
    cta: "Pilih Starter",
    category: "portfolio",
    features: [
      "1 halaman terstruktur (Single page)",
      "Profil singkat & bio profesional",
      "Riwayat pendidikan / pengalaman",
      "Highlight keahlian (Skills list)",
      "Maksimal 3 proyek terpilih",
      "Bagian kontak & link media sosial",
      "Responsive design (mobile & desktop)",
      "Publikasi menggunakan hosting gratis yang sesuai",
      "1x revisi minor",
      "Panduan mandiri untuk custom domain (domain berbayar tidak termasuk)",
    ],
  },
  {
    id: "portfolio-professional",
    name: "Portfolio Professional",
    label: "Rekomendasi Utama",
    price: "Rp349.000",
    priceNote: "Paling populer & terkurasi",
    target: "Web developer, UI/UX designer, freelancer, dan profesional yang ingin personal branding lebih kuat.",
    duration: "3–5 hari kerja",
    revisions: "2x revisi",
    hostingInfo: "Hosting gratis via Vercel / Netlify + bantuan setup custom domain",
    cta: "Pilih Professional",
    popular: true,
    category: "portfolio",
    features: [
      "1 halaman dengan desain lebih personal & terkurasi",
      "Bagian lengkap: About, Skills, Projects, Experience, Contact",
      "Maksimal 6 showcase proyek interaktif",
      "Animasi sederhana & transisi halus sesuai desain",
      "Responsive design (mobile-first)",
      "Tombol WhatsApp & direct contact form",
      "Publikasi menggunakan hosting gratis yang sesuai",
      "2x revisi",
      "Panduan & bantuan hubungkan domain kustom pilihan Anda",
    ],
  },
  {
    id: "portfolio-premium",
    name: "Portfolio Premium",
    label: "Kustom Mendalam",
    price: "Rp599.000",
    priceNote: "Mulai dari",
    target: "Senior developer, konsultan, kreator konten, atau profesional yang membutuhkan studi kasus mendalam.",
    duration: "5–10 hari kerja",
    revisions: "3x revisi",
    hostingInfo: "Hosting gratis / konfigurasi server sesuai kesepakatan",
    cta: "Konsultasi Premium",
    isCustom: true,
    category: "portfolio",
    features: [
      "Desain dan struktur arsitektur lebih kompleks",
      "Studi kasus proyek lebih mendalam & komprehensif",
      "Halaman atau section tambahan sesuai kesepakatan",
      "Integrasi tambahan (filter proyek, blog artikel, atau formulir khusus)",
      "Responsive design & pengujian lintas peramban",
      "Animasi dan micro-interactions kustom",
      "3x revisi",
      "Estimasi harga & timeline final setelah konsultasi awal",
    ],
  },
];

/** ─── 3. PAKET BISNIS MENENGAH & KUSTOM ─── */
export const businessPricingPlans: PricingPlan[] = [
  {
    id: "company-profile",
    name: "Company Profile",
    label: "Kredibilitas Bisnis",
    price: "Rp2.500.000",
    duration: "7–14 hari kerja",
    revisions: "3x revisi",
    hostingInfo: "Termasuk domain .com & hosting tahun pertama",
    cta: "Pilih Company Profile",
    category: "business",
    features: [
      "Maks. 5–6 halaman profesional",
      "Custom UI/UX profesional sesuai identitas korporat",
      "Responsive (mobile-first)",
      "Halaman: Home, About, Services, Portfolio, Contact",
      "Tombol WhatsApp & formulir kontak terintegrasi",
      "Google Maps embed & basic SEO on-page",
      "Google Analytics setup & SSL / HTTPS",
      "Domain .com & hosting 1 tahun sudah termasuk",
      "3x revisi",
      "Deployment & garansi bug 30 hari",
    ],
  },
  {
    id: "business-website",
    name: "Business Website Lengkap",
    label: "Website Berfitur",
    price: "Rp4.000.000",
    duration: "2–3 minggu",
    revisions: "4x revisi",
    hostingInfo: "Termasuk domain .com & hosting tahun pertama",
    cta: "Pilih Business Website",
    popular: true,
    category: "business",
    features: [
      "Maks. 10 halaman",
      "Custom UI/UX & design system",
      "Product / Service Catalog dinamis",
      "Search & filter konten",
      "Blog / berita perusahaan",
      "Contact Form & WhatsApp",
      "CMS / admin sederhana untuk kelola konten",
      "Database & backend setup",
      "SSL, domain .com & hosting 1 tahun",
      "4x revisi",
      "Deployment & garansi bug 30 hari",
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    label: "Toko Online",
    price: "Rp6.000.000",
    priceNote: "Mulai dari",
    duration: "3–5 minggu",
    revisions: "Sesuai scope",
    hostingInfo: "Termasuk domain & hosting 1 tahun",
    cta: "Pilih E-Commerce",
    category: "business",
    features: [
      "Product catalog & halaman detail",
      "Kategori produk & pencarian",
      "Shopping cart & checkout",
      "Autentikasi user & riwayat order",
      "Admin dashboard kelola stok & pesanan",
      "Integrasi WhatsApp order / payment gateway",
      "Responsive (mobile-first)",
      "Basic SEO",
      "Domain & hosting 1 tahun",
      "SSL & Deployment",
      "Garansi bug 30 hari",
    ],
  },
  {
    id: "custom-web-app",
    name: "Custom Web App",
    label: "Sistem Kustom",
    price: "Rp7.500.000",
    priceNote: " dari",
    duration: "Sesuai scope kebutuhan",
    cta: "Diskusi Project Custom",
    isCustom: true,
    category: "business",
    features: [
      "Aplikasi internal (Inventory, POS, HR, Booking, CRM, SaaS)",
      "Fitur disesuaikan alur kerja bisnis secara spesifik",
      "Custom UI/UX & arsitektur database modern",
      "REST API & role-based authentication",
      "Dashboard analitik & report",
      "Deployment ke cloud / server client",
      "Garansi bug 30 hari & handover dokumentasi",
    ],
  },
];

/** Gabungan semua plan untuk kompatibilitas */
export const pricingPlans: PricingPlan[] = [
  ...entryPricingPlans,
  ...portfolioPricingPlans,
  ...businessPricingPlans,
];

export interface Addon {
  name: string;
  startingPrice: string;
}

export const addons: Addon[] = [
  { name: "Halaman tambahan (Landing/Web)", startingPrice: "Rp200.000" },
  { name: "Section tambahan", startingPrice: "Rp100.000" },
  { name: "Bantuan Beli & Setup Custom Domain (.com / .id)", startingPrice: "Rp250.000" },
  { name: "Tambahan 1 Desain Konten Promosi", startingPrice: "Rp20.000" },
  { name: "Autentikasi / Login User", startingPrice: "Rp500.000" },
  { name: "Admin Dashboard Ringan", startingPrice: "Rp750.000" },
  { name: "Database & Backend API", startingPrice: "Rp750.000" },
  { name: "Integrasi Payment Gateway", startingPrice: "Rp750.000" },
  { name: "Sistem CMS / Kelola Konten", startingPrice: "Rp1.000.000" },
  { name: "Integrasi API Pihak Ketiga", startingPrice: "Rp500.000" },
  { name: "Fitur Export Excel / PDF", startingPrice: "Rp500.000" },
  { name: "Optimasi SEO Lanjutan", startingPrice: "Rp750.000" },
];
