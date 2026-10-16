import type { Translations } from "./types";

/**
 * Indonesian (id) translations — DEFAULT language for BeOne
 */
export const id: Translations = {
  /* ─── Meta / SEO ─── */
  meta: {
    title: "BeOne — Solusi Digital untuk Personal Brand dan Bisnis",
    description:
      "BeOne membantu individu, kreator, dan UMKM membangun kehadiran digital profesional melalui website portofolio, katalog digital, landing page, dan aplikasi web modern.",
    ogTitle: "BeOne — Solusi Digital untuk Personal Brand dan Bisnis",
  },

  /* ─── Navbar ─── */
  nav: {
    home: "Beranda",
    portfolio: "Portofolio",
    services: "Layanan",
    pricing: "Harga",
    process: "Proses",
    faq: "FAQ",
    contact: "Kontak",
    cta: "Konsultasi Gratis",
    openMenu: "Buka menu navigasi",
    closeMenu: "Tutup menu navigasi",
    chatWhatsapp: "Chat WhatsApp Langsung",
    langToggle: "Pilih bahasa",
    navAria: "Navigasi Utama",
    mobileMenuAria: "Menu navigasi mobile",
    scrollToTop: "Kembali ke atas",
  },

  /* ─── Hero ─── */
  hero: {
    eyebrow: "SOLUSI DIGITAL & WEBSITE BERKUALITAS",
    headline1: "Solusi Digital untuk",
    headline2: "Personal Brand dan Bisnis.",
    subheadline:
      "Bangun identitas digital yang profesional melalui website portofolio, katalog digital, landing page, desain promosi, dan solusi web yang disesuaikan dengan kebutuhanmu.",
    microcopy:
      "Kustom design · Responsif mobile-first · Harga transparan tanpa biaya tersembunyi",
    ctaPrimary: "Konsultasi Gratis",
    ctaSecondary: "Lihat Portofolio",
    ctaPrimaryLabel: "Konsultasi Gratis — langsung ke formulir konsultasi",
    ctaSecondaryLabel: "Lihat Portofolio — lihat proyek nyata dan konsep siap pakai",
    highlights: [
      "Developer, Designer, Freelancer & Pelaku Bisnis UMKM",
      "Pengerjaan Cepat (1–3 Hari Kerja setelah Materi Lengkap)",
      "Hosting Cloud Tanpa Biaya Bulanan & Panduan Domain",
      "Layanan Mulai Rp75rb (Desain) / Rp150rb (Website)",
    ],
    floatingHostingFree: "Hosting Gratis Aktif",
    floatingPriceFrom: "Mulai dari",
    floatingTransparent: "Harga Transparan",
    portfolioLive: "Portfolio Live",
    mockupTitle: "Your Personal Portfolio",
    mockupRole: "Software Engineer & Creator",
    mockupQuote: "Membangun produk digital yang cepat, responsif, dan memberikan dampak nyata.",
    mockupViewProjects: "Lihat Proyek",
    mockupContact: "Kontak",
    mockupShowcase: "Showcase Proyek",
  },

  /* ─── Trust Bar ─── */
  trust: {
    label: "Fakta dan Keunggulan Layanan BeOne",
    items: [
      { title: "Next.js & TypeScript", subtitle: "Teknologi modern, cepat, dan ringan" },
      { title: "Garansi Bug 30 Hari", subtitle: "Perbaikan error teknis bawaan pasca rilis" },
      { title: "Hosting Bebas Biaya Bulanan", subtitle: "Deploy via cloud modern & SSL aktif" },
      { title: "Desain Kustom & Berkarakter", subtitle: "Disesuaikan identitas brand Anda" },
      { title: "Transparansi Biaya", subtitle: "Scope pasti tanpa biaya tersembunyi" },
    ],
  },

  /* ─── Portfolio ─── */
  portfolio: {
    label: "Portofolio Karya",
    title: "Karya Nyata & Proyek Terverifikasi",
    subtitle:
      "Lihat proyek nyata yang telah kami bangun dan konsep portofolio siap pakai yang dirancang untuk memperkuat kredibilitas Anda.",
    liveApp: "Live App",
    viewDemo: "Lihat Demo",
    conceptual: "Konseptual",
    techStack: "Tech Stack",
    highlights: "Highlight",
    interested: "Tertarik memiliki website portofolio dengan struktur rapi seperti ini?",
    close: "Tutup",
    buildMine: "Buat Portofolio Saya",
    filterAll: "Semua",
    filterLive: "Live Project",
    filterConcept: "Konsep Siap Pakai",
    projects: {
      finvera: {
        title: "Finvera",
        category: "Financial & Expense Tracker App",
        badge: "Live Web App",
        description:
          "Aplikasi manajemen keuangan pribadi modern untuk memantau arus kas masuk dan keluar secara terstruktur, kalkulasi saldo otomatis, dan visualisasi ringkasan transaksi.",
        note: "Proyek aplikasi personal fungsional dengan antarmuka bersih dan cepat.",
        highlights: [
          "Pencatatan transaksi pemasukan & pengeluaran cepat",
          "Kalkulasi saldo dinamis tanpa lag",
          "Antarmuka responsif di smartphone & laptop",
        ],
      },
      tickitz: {
        title: "Tickitz",
        category: "Cinema Ticket Booking Platform",
        badge: "Live Web App",
        description:
          "Platform pemesanan tiket bioskop online dengan katalog film tayang, jadwal pemutaran terstruktur, alur pemilihan kursi interaktif, dan simulasi checkout pemesanan.",
        note: "Proyek web platform interaktif pemesanan tiket bioskop.",
        highlights: [
          "Eksplorasi jadwal film dan lokasi bioskop",
          "Grid interaktif pemilihan kursi bioskop",
          "Alur pemesanan intuitif dari pemilihan hingga invoice",
        ],
      },
      designerPortfolio: {
        title: "Arga Wicaksono — UI/UX & Visual Designer",
        category: "Personal Portfolio Website (Konseptual)",
        badge: "Contoh Model Portofolio",
        description:
          "Konsep website portofolio interaktif untuk desainer grafis dan UI/UX: galeri showcase karya visual, highlight keahlian desain, riwayat pengalaman, dan tombol kontak langsung.",
        note: "Template konsep portofolio siap diadaptasi untuk desainer, kreator, dan profesional.",
        highlights: [
          "Hero berfokus pada personal statement & spesialisasi desain",
          "Grid visual karya terkurasi dengan penjelasan studi kasus",
          "Section About, Experience, Tools, & Direct WhatsApp CTA",
        ],
      },
    },
  },

  /* ─── Services ─── */
  services: {
    label: "Katalog Layanan",
    title: "Layanan Digital Sesuai Kebutuhan & Anggaran",
    subtitle:
      "Mulai dari solusi entry-level terjangkau (Rp75.000–Rp500.000) untuk mulai online cepat, hingga sistem web kustom berskala penuh.",
    filterAll: "Semua Layanan",
    filterEntry: "Entry-Level (Rp75rb–Rp500rb)",
    filterPersonal: "Personal & Kreator",
    filterBusiness: "Website Bisnis",
    filterAdvanced: "Aplikasi Web Kustom",
    useCases: "Cocok untuk",
    exclusions: "Perhatian",
    consult: "Konsultasikan Kebutuhan",
    selectService: "Pilih Layanan Ini",
    items: [
      {
        id: "personal-portfolio",
        title: "Website Portofolio Pribadi",
        category: "personal",
        categoryLabel: "Personal & Creative",
        description:
          "Website satu halaman untuk menampilkan profil, keahlian, pengalaman, dan karya terbaik secara profesional sesuai karakter Anda.",
        startingPrice: "Mulai Rp150.000",
        priceNote: "Paket dasar single page",
        badge: "Layanan Unggulan",
        scopeSummary:
          "Tersedia Paket Starter (mulai Rp150.000) 1 halaman responsif maks 3 proyek dasar, Professional (Rp349.000) hingga 6 showcase karya terkurasi, dan Premium (mulai Rp599.000) studi kasus mendalam.",
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
        title: "Desain Konten Promosi",
        category: "personal",
        categoryLabel: "Personal & Creative",
        description:
          "Paket 5 (lima) desain visual promosi siap posting untuk media sosial Anda guna menarik pelanggan dan meningkatkan interaksi.",
        startingPrice: "Rp75.000–100.000",
        priceNote: "Paket 5 Desain Konten",
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
      {
        id: "umkm-catalog",
        title: "Katalog Digital UMKM",
        category: "business",
        categoryLabel: "Business Websites",
        description:
          "Katalog produk atau menu online sederhana yang memudahkan pelanggan melihat daftar produk dan memesan langsung via WhatsApp.",
        startingPrice: "Mulai Rp150.000",
        priceNote: "Katalog online responsif",
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
        title: "Landing Page Bisnis",
        category: "business",
        categoryLabel: "Business Websites",
        description:
          "Website satu halaman fokus konversi dengan penawaran utama, keunggulan produk/jasa, dan call-to-action langsung ke WhatsApp.",
        startingPrice: "Rp350.000–500.000",
        priceNote: "Satu halaman bisnis",
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
      {
        id: "company-profile",
        title: "Company Profile",
        category: "business",
        categoryLabel: "Business Websites",
        description:
          "Website multi-halaman profesional untuk memperkenalkan profil perusahaan, legalitas, layanan, dan membangun kredibilitas di mata klien.",
        startingPrice: "Rp2.500.000",
        priceNote: "Lengkap 5–6 halaman",
        useCases: [
          "Perusahaan & Korporasi",
          "Agensi & Studio Kreatif",
          "Lembaga & Yayasan",
          "Bisnis B2B & Kontraktor",
        ],
      },
      {
        id: "business-website",
        title: "Business Website Lengkap",
        category: "business",
        categoryLabel: "Business Websites",
        description:
          "Website bisnis dengan fitur lengkap: katalog dinamis, sistem artikel blog, filter pencarian, dan CMS konten yang mudah dikelola.",
        startingPrice: "Rp4.000.000",
        priceNote: "Hingga 10 halaman + CMS",
        useCases: [
          "Bisnis dengan Variasi Produk Luas",
          "Portal Edukasi & Berita Bisnis",
          "Perusahaan dengan Update Konten Rutin",
        ],
      },
      {
        id: "ecommerce",
        title: "E-Commerce",
        category: "advanced",
        categoryLabel: "Advanced Development",
        description:
          "Website toko online lengkap dengan manajemen produk, keranjang belanja, checkout terintegrasi, dan dashboard pesanan.",
        startingPrice: "Rp6.000.000",
        priceNote: "Toko online terintegrasi",
        useCases: [
          "Brand Retail & D2C",
          "Toko Online Multi-Kategori",
          "Distributor & Grosir Digital",
        ],
      },
      {
        id: "custom-web-app",
        title: "Custom Web App",
        category: "advanced",
        categoryLabel: "Advanced Development",
        description:
          "Sistem dan aplikasi web kustom sesuai alur kerja bisnis — manajemen inventory, POS kasir, reservasi, HR, atau produk SaaS.",
        startingPrice: "Rp7.500.000",
        priceNote: "Sesuai scope kebutuhan",
        useCases: [
          "Sistem Inventory & Gudang",
          "Point of Sale (POS) Kasir",
          "Sistem Booking & Antrean",
          "Dashboard Internal Perusahaan",
        ],
      },
      {
        id: "mobile-app",
        title: "Mobile App",
        category: "advanced",
        categoryLabel: "Advanced Development",
        description:
          "Aplikasi mobile Android & iOS untuk kebutuhan operasional bisnis maupun produk digital dengan performa responsif dan modern.",
        startingPrice: "Rp8.000.000",
        priceNote: "Cross-platform mobile",
        useCases: [
          "Aplikasi Khusus Member/Pelanggan",
          "Aplikasi Operasional Tim Lapangan",
          "Digital Product & Startup MVP",
        ],
      },
    ],
  },

  /* ─── Pricing ─── */
  pricing: {
    label: "Paket & Investasi",
    title: "Daftar Harga & Paket Transparan",
    subtitle:
      "Pilihan paket hemat mulai Rp75.000 untuk menguji pasar dan mulai online secepatnya, dengan batasan ruang lingkup yang jelas.",
    tabEntry: "Entry-Level (Rp75rb–Rp500rb)",
    tabPortfolio: "Website Portofolio Lengkap",
    tabBusiness: "Solusi Bisnis & Kustom",
    recommended: "Rekomendasi Utama",
    termsTitle: "Ketentuan Layanan, Estimasi Waktu & Garansi:",
    terms: [
      {
        label: "Domain Khusus (.com/.id):",
        text: "Tidak termasuk dalam paket entry-level kecuali dinyatakan eksplisit. Kami menyediakan panduan setup atau opsi bantuan aktivasi.",
      },
      {
        label: "Hosting Gratis:",
        text: "Menggunakan platform cloud modern (Vercel/Netlify/GitHub Pages) dengan SSL aktif tanpa tagihan sewa server bulanan.",
      },
      {
        label: "Perhitungan Estimasi Waktu:",
        text: "Estimasi hari kerja dihitung resmi setelah seluruh brief, materi (teks/foto/data), dan scope disepakati lengkap. Keterlambatan materi atau penambahan scope di tengah jalan dapat memengaruhi jadwal penyelesaian.",
      },
      {
        label: "Garansi Bug 30 Hari:",
        text: "Menjamin perbaikan kendala fungsional bawaan dari kode yang dibangun BeOne tanpa biaya tambahan (tidak mencakup penambahan fitur baru di luar kesepakatan).",
      },
      {
        label: "Paket Desain Promosi:",
        text: "Merupakan paket lengkap 5 desain konten siap posting (bukan harga per 1 desain) dengan materi teks dan foto produk dari pelanggan.",
      },
    ],
    addonsTitle: "Add-on & Fitur Tambahan",
    addonsSubtitle: "Tambahkan fitur atau halaman ekstra sesuai kebutuhan proyek Anda dengan biaya terukur.",
    addonsAskCustom: "Tanya Kebutuhan Khusus",
    addonsNote: "* Estimasi biaya add-on dapat disesuaikan berdasarkan kompleksitas spesifik yang diinginkan.",
    askWhatsappMsg: "Halo BeOne, saya ingin menanyakan add-on untuk project saya.",
    planAria: "paket harga",
    featuresAria: "Fitur dalam paket",
    categoryAria: "Pilihan kategori paket harga",
    entryPlans: [
      {
        id: "promo-design",
        name: "Desain Konten Promosi",
        label: "Paket 5 Desain",
        price: "Rp75.000–100.000",
        priceNote: "Paket lengkap 5 desain (bukan per desain)",
        target: "UMKM, pemilik toko online, dan kreator yang butuh visual promosi siap posting di media sosial.",
        duration: "1–2 hari kerja (setelah materi lengkap)",
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
        duration: "1–2 hari kerja (setelah materi lengkap)",
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
        duration: "1–3 hari kerja (setelah materi lengkap)",
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
        duration: "2–4 hari kerja (setelah materi lengkap)",
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
          "*Catatan:* Harga final bergantung pada konten, jumlah section, dan materi desain",
        ],
      },
    ],
    portfolioPlans: [
      {
        id: "portfolio-starter",
        name: "Portofolio Pribadi Starter",
        label: "Pelajar & Pemula",
        price: "Rp150.000",
        priceNote: "Mulai dari",
        target: "Mahasiswa, fresh graduate, atau pemula yang butuh portofolio personal rapi dan cepat online.",
        duration: "1–3 hari kerja (setelah materi lengkap)",
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
        name: "Portofolio Pribadi Professional",
        label: "Rekomendasi Utama",
        price: "Rp349.000",
        priceNote: "Paling populer & terkurasi",
        target: "Web developer, UI/UX designer, freelancer, dan profesional yang ingin personal branding lebih kuat.",
        duration: "3–5 hari kerja (setelah materi lengkap)",
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
        name: "Portofolio Pribadi Premium",
        label: "Kustom Mendalam",
        price: "Rp599.000",
        priceNote: "Mulai dari",
        target: "Senior developer, konsultan, kreator konten, atau profesional yang membutuhkan studi kasus mendalam.",
        duration: "5–10 hari kerja (setelah brief & scope disepakati)",
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
    ],
    businessPlans: [
      {
        id: "company-profile",
        name: "Company Profile",
        label: "Kredibilitas Bisnis",
        price: "Rp2.500.000",
        duration: "7–14 hari kerja (setelah materi lengkap)",
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
        duration: "2–3 minggu (tahap terstruktur)",
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
        duration: "3–5 minggu (tahap terstruktur)",
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
        priceNote: "Mulai dari",
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
    ],
    addons: [
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
    ],
  },

  /* ─── Maintenance ─── */
  maintenance: {
    label: "Pemeliharaan & After-Sales",
    title: "Jaga Performa Website Tetap Optimal",
    subtitle: "Layanan pemeliharaan teknis berkala, backup rutin, dan pembaruan konten setelah masa garansi selesai.",
    selectPlan: "Pilih Paket",
    period: "tahun",
    transparencyTitle: "Transparansi Biaya Pihak Ketiga & Ruang Lingkup Maintenance:",
    transparencyText:
      "Biaya perpanjangan tahunan nama domain (.com/.id) atau server hosting berbayar pihak ketiga ditagihkan transparan sesuai invoice riil penyedia registrar/cloud tanpa markup tersembunyi. Untuk website dengan hosting gratis (Vercel/Netlify), tidak ada biaya sewa server bulanan. Fitur baru, perombakan desain menyeluruh, atau migrasi sistem dikuotasikan secara terpisah.",
    featuresAria: "Fitur dalam paket",
    planAria: "paket maintenance",
    plans: [
      {
        id: "basic",
        name: "Basic",
        price: "Rp500.000",
        period: "tahun",
        features: [
          "Monitoring performa & uptime berkala",
          "Pembaruan & asistensi sertifikat SSL / HTTPS",
          "Bantuan penanganan kendala domain & DNS",
          "Minor bug fixing & broken link check",
          "Pembaruan teks / kontak ringan (maks. 2x/tahun)",
        ],
      },
      {
        id: "standard",
        name: "Standard",
        price: "Rp1.000.000",
        period: "tahun",
        features: [
          "Semua cakupan paket Basic",
          "Pembaruan konten & aset visual ringan berkala",
          "Pemeriksaan kompatibilitas & health check dependensi",
          "Bantuan konfigurasi Google Analytics & Search Console",
          "Minor layout & styling adjustments",
        ],
      },
      {
        id: "professional",
        name: "Professional",
        price: "Rp1.500.000",
        period: "tahun",
        features: [
          "Semua cakupan paket Standard",
          "Priority technical support dengan respon cepat",
          "Penyesuaian fungsional kecil & penambahan section berkala",
          "Monitoring rutin & optimasi kecepatan website",
          "Konsultasi teknis pengembangan berkala",
        ],
      },
    ],
  },

  /* ─── Process ─── */
  process: {
    label: "Alur Kerja",
    title: "Bagaimana Kami Bekerja",
    subtitle: "Proses pengerjaan yang transparan, terstruktur, dan terukur dari brief awal hingga website siap rilis.",
    bottomNote: "Setiap tahap pengerjaan dilakukan secara transparan dan komunikatif.",
    guarantee: "Garansi bug 30 hari",
    guaranteeDetail: "mencakup perbaikan kendala teknis dan fungsional bawaan sesuai kesepakatan awal sejak tanggal serah terima.",
    stepsAria: "Langkah-langkah alur kerja",
    stepLabel: "Langkah",
    steps: [
      {
        id: "discovery",
        number: "01",
        title: "Konsultasi & Brief",
        description:
          "Mendiskusikan profil, tujuan, preferensi visual, dan materi yang disiapkan client sebagai fondasi awal pengerjaan project.",
      },
      {
        id: "planning",
        number: "02",
        title: "Penawaran & Kesepakatan Scope",
        description:
          "Menentukan paket yang tepat, estimasi timeline, dan rincian harga transparan. Estimasi hari kerja resmi dimulai setelah seluruh materi lengkap diterima.",
      },
      {
        id: "development",
        number: "03",
        title: "Desain UI & Pengerjaan Teknis",
        description:
          "Merancang antarmuka responsif dan membangun website dengan standar kode modern Next.js & TypeScript yang cepat dan ramah SEO dasar.",
      },
      {
        id: "review",
        number: "04",
        title: "Review & Revisi Sesuai Paket",
        description:
          "Client memeriksa preview website secara langsung dan mengajukan penyesuaian/revisi minor sesuai batas paket yang telah disepakati.",
      },
      {
        id: "launch",
        number: "05",
        title: "Finalisasi & Serah Terima",
        description:
          "Deployment ke hosting cloud, verifikasi SSL, penyerahan akses penuh, serta aktivasi garansi bug bawaan 30 hari pasca serah terima.",
      },
    ],
  },

  /* ─── Why BeOne ─── */
  why: {
    label: "Keunggulan Kami",
    title: "Mengapa Memilih BeOne?",
    subtitle: "Kami percaya bahwa setiap individu dan bisnis berhak memiliki kehadiran digital profesional yang dirancang sesuai identitas unik mereka.",
    benefits: [
      {
        id: "custom-dev",
        title: "Pengembangan Kustom",
        description:
          "Website dibuat berdasarkan kebutuhan bisnis, bukan sekadar mengisi template. Setiap project unik.",
      },
      {
        id: "modern-tech",
        title: "Teknologi Modern & Cepat",
        description:
          "Menggunakan teknologi modern untuk menghasilkan website yang cepat, scalable, dan mudah dikembangkan.",
      },
      {
        id: "responsive",
        title: "Desain Responsif Mobile-First",
        description:
          "Website nyaman digunakan di mobile, tablet, maupun desktop. Mobile-first approach pada setiap project.",
      },
      {
        id: "seo",
        title: "Struktur Ramah SEO",
        description:
          "Struktur website dibuat dengan mempertimbangkan SEO dasar sehingga lebih mudah ditemukan di Google.",
      },
      {
        id: "transparent",
        title: "Transparansi Biaya & Scope",
        description:
          "Harga dan scope pekerjaan dijelaskan sejak awal. Tidak ada biaya tersembunyi di luar yang disepakati.",
      },
      {
        id: "support",
        title: "Dukungan & Garansi 30 Hari",
        description:
          "Tersedia opsi maintenance setelah serah terima. Garansi bug 30 hari mencakup perbaikan kendala fungsional bawaan sesuai scope kesepakatan awal.",
      },
    ],
  },

  /* ─── FAQ ─── */
  faq: {
    label: "FAQ",
    title: "Pertanyaan yang Sering Diajukan",
    subtitle: "Pertanyaan yang sering ditanyakan seputar layanan, alur pengerjaan, dan biaya.",
    stillHaveQuestions: "Masih ada pertanyaan lain?",
    askUs: "Tanya Kami Langsung",
    aria: "Pertanyaan yang sering diajukan",
    items: [
      {
        id: "entry-services",
        question: "Apa saja layanan entry-level BeOne dengan biaya terjangkau?",
        answer:
          "BeOne menyediakan 4 layanan entry-level hemat untuk membantu Anda langsung online: Desain Konten Promosi (Rp75.000–100.000 untuk paket 5 desain), Katalog Digital UMKM (mulai Rp150.000), Website Portofolio Pribadi Starter (mulai Rp150.000), dan Landing Page Bisnis (Rp350.000–500.000). Estimasi pengerjaan cepat (1–3 hari kerja) terhitung setelah seluruh materi dan brief lengkap diserahkan.",
      },
      {
        id: "promo-design-scope",
        question: "Bagaimana sistem paket Desain Konten Promosi Rp75.000–100.000?",
        answer:
          "Harga tersebut adalah untuk paket 5 (lima) desain konten visual promosi (bukan per satu desain). Anda memilih satu format ukuran (misal Feed 1:1 atau Story 9:16). Anda menyediakan materi teks informasi dan foto produk, kami merancangnya menjadi visual profesional siap posting dengan 1–2 putaran revisi minor.",
      },
      {
        id: "umkm-catalog-vs-ecommerce",
        question: "Apa perbedaan Katalog Digital UMKM (Rp150.000) dengan E-Commerce penuh?",
        answer:
          "Katalog Digital UMKM berfokus menampilkan foto produk, harga, dan tombol pesan langsung ke WhatsApp tanpa biaya sewa server bulanan. Ini solusi cepat dan hemat tanpa payment gateway, dashboard admin, atau database kompleks. Jika bisnis Anda membutuhkan keranjang belanja otomatis, checkout payment gateway, dan manajemen stok terpusat, Anda dapat memilih paket E-Commerce terintegrasi.",
      },
      {
        id: "portfolio-starter-vs-pro",
        question: "Apa perbedaan Portofolio Starter (Rp150.000), Professional (Rp349.000), dan Premium (Rp599.000)?",
        answer:
          "Paket Starter (Rp150.000) adalah single page ringkas berfokus pada bio, ringkasan keahlian, maksimal 3 proyek dasar, kontak, dan 1x revisi minor — sangat cocok untuk mahasiswa atau pemula. Paket Professional (Rp349.000) menawarkan desain lebih terkurasi dan berkarakter, struktur lengkap (About, Skills, Projects hingga 6 karya interaktif, Experience timeline, Contact), animasi halus, 2x revisi, dan bantuan setup custom domain. Sedangkan Paket Premium (mulai Rp599.000) ditujukan untuk profesional atau senior developer yang membutuhkan arsitektur kustom, studi kasus proyek mendalam, halaman/filter khusus, dan 3x revisi.",
      },
      {
        id: "business-landing-page-scope",
        question: "Apa yang membedakan Landing Page Bisnis Rp350.000 vs Rp500.000?",
        answer:
          "Paket dasar Rp350.000 mencakup landing page satu halaman fokus konversi dengan 3–4 section utama (Hero, Layanan/Produk, Keunggulan, Kontak WhatsApp) dengan materi siap pakai dari pelanggan. Biaya mendekati Rp500.000 berlaku jika membutuhkan section tambahan (misal FAQ, galeri, form khusus), perapian materi visual, atau penyesuaian desain yang lebih spesifik.",
      },
      {
        id: "project-timeline",
        question: "Kapan estimasi pengerjaan mulai dihitung dan apa yang memengaruhi timeline?",
        answer:
          "Perhitungan estimasi hari kerja dimulai resmi setelah seluruh materi (teks, foto produk/portofolio, logo), brief kebutuhan, dan ruang lingkup project telah lengkap diserahkan pelanggan dan disepakati bersama. Keterlambatan penyerahan materi atau permintaan penambahan fitur/perubahan scope di tengah pengerjaan akan menyesuaikan jadwal penyelesaian secara realistis.",
      },
      {
        id: "warranty-and-maintenance",
        question: "Apa batasan garansi bug 30 hari dan bagaimana transparansi biaya domain/hosting?",
        answer:
          "Garansi bug 30 hari mencakup perbaikan error fungsional, broken layout di berbagai layar, atau kendala teknis bawaan dari kode yang dibangun BeOne sesuai kesepakatan awal tanpa biaya tambahan. Garansi tidak mencakup request fitur baru, perubahan desain besar di luar kesepakatan, atau kerusakan akibat modifikasi pihak luar. Untuk jangka panjang, tersedia paket maintenance tahunan untuk pemeliharaan teknis rutin. Biaya resmi perpanjangan sewa domain (.com/.id) atau server cloud berbayar dari pihak ketiga dibayarkan transparan sesuai tagihan invoice resmi registrar/provider tanpa biaya tersembunyi.",
      },
      {
        id: "portfolio-hosting",
        question: "Bagaimana cara kerja hosting gratis untuk paket portofolio & landing page?",
        answer:
          "Website Anda dipublikasikan menggunakan platform hosting cloud modern yang cepat dan andal (seperti Vercel, Netlify, atau GitHub Pages). Anda langsung mendapatkan URL publik yang aman dengan sertifikat SSL (HTTPS) aktif tanpa perlu membayar biaya langganan server bulanan atau tahunan.",
      },
      {
        id: "custom-domain",
        question: "Apakah saya bisa menggunakan nama domain sendiri (misal: namaanda.com)?",
        answer:
          "Bisa. Anda dapat menggunakan domain custom milik Anda sendiri. Biaya registrasi domain pihak ketiga (seperti .com, .id, atau .dev) tidak termasuk dalam paket entry-level, namun tim BeOne siap memandu dan membantu proses menghubungkan domain tersebut ke website Anda.",
      },
      {
        id: "portfolio-materials",
        question: "Apa saja materi yang perlu saya siapkan?",
        answer:
          "Cukup siapkan: foto profil/produk, bio atau deskripsi singkat usaha, daftar keahlian/layanan, harga, dan nomor WhatsApp pemesanan. Anda bisa mengirimkannya dengan mudah via chat WhatsApp atau tautan Google Drive.",
      },
      {
        id: "revision",
        question: "Berapa kali batas revisi yang diberikan?",
        answer:
          "Setiap paket memiliki batas revisi yang transparan: Paket Desain Promosi 1–2x revisi minor, Portofolio Starter & Katalog UMKM 1x revisi minor, Landing Page Bisnis & Portofolio Pro 2x revisi, hingga 4x revisi untuk paket bisnis tingkat lanjut. Perubahan besar di luar kesepakatan awal dapat dikenakan penyesuaian biaya wajar.",
      },
      {
        id: "custom-web-app",
        question: "Apakah BeOne juga menerima pembuatan aplikasi web bisnis kustom?",
        answer:
          "Ya. BeOne memiliki kapabilitas fullstack untuk membangun aplikasi web bisnis seperti sistem inventaris, point of sale (POS), sistem booking & antrean, dashboard administrasi, hingga sistem internal perusahaan berbasis cloud.",
      },
    ],
  },

  /* ─── CTA ─── */
  cta: {
    eyebrow: "Mulai Sekarang",
    headline1: "Waktunya Karya & Bisnis Anda",
    headline2: "Tampil Lebih Profesional.",
    subtext:
      "Mulai bangun kehadiran digital Anda hari ini. Tampilkan portofolio karya, buat katalog digital UMKM, atau kembangkan bisnis Anda bersama BeOne tanpa biaya konsultasi awal.",
    ctaPrimary: "Konsultasi Gratis",
    ctaSecondary: "Chat via WhatsApp",
    ctaPrimaryLabel: "Konsultasi gratis sekarang — isi formulir kontak",
    ctaSecondaryLabel: "Chat via WhatsApp langsung dengan tim BeOne",
  },

  /* ─── Contact ─── */
  contact: {
    label: "Konsultasi & Kontak",
    title: "Mulai Konsultasi Kebutuhan Anda",
    subtitle:
      "Ceritakan profil, karya, atau proyek yang ingin Anda bangun. Kami akan membantu merancang solusi website terbaik untuk Anda.",
    whatsappBadge: "Respons Cepat via WhatsApp",
    whatsappTitle: "Diskusi Langsung dengan Tim BeOne",
    whatsappDesc:
      "Ingin bertanya langsung seputar website portofolio, pilihan paket mulai Rp150.000, atau penyesuaian fitur? Hubungi kami via WhatsApp sekarang.",
    whatsappCta: "Chat WhatsApp:",
    privacyTitle: "Privasi & Keamanan Data",
    privacyText:
      "Informasi kontak Anda hanya digunakan untuk keperluan konsultasi project dan tidak akan dibagikan ke pihak manapun.",
    emailLabel: "Email Resmi:",
    readyTitle: "Detail Inquiry Siap Dikirim",
    readyDesc:
      "Tautan WhatsApp telah disiapkan dengan detail proyek Anda. Silakan klik tombol di bawah untuk membuka chat atau salin format pesan.",
    openChat: "Buka Chat WhatsApp Sekarang",
    copyMessage: "Salin Format Pesan",
    messageCopied: "Pesan Tersalin!",
    backToForm: "← Kembali edit formulir",
    formAria: "Formulir inquiry proyek BeOne",
    nameLabel: "Nama Lengkap",
    namePlaceholder: "Nama Anda",
    contactLabel: "Nomor WhatsApp / HP",
    contactPlaceholder: "Contoh: 081234567890",
    emailLabel2: "Email",
    emailOptional: "(Opsional)",
    emailPlaceholder: "nama@email.com",
    professionLabel: "Profesi / Bidang Usaha",
    professionPlaceholder: "Pilih profesi / bidang...",
    serviceLabel: "Layanan yang Dibutuhkan",
    servicePlaceholder: "Pilih layanan yang dibutuhkan...",
    packageLabel: "Paket yang Diminati",
    packagePlaceholder: "Pilih paket atau konsultasi bebas...",
    budgetLabel: "Estimasi Anggaran",
    budgetOptional: "(Opsional)",
    budgetPlaceholder: "Pilih rentang estimasi budget...",
    descLabel: "Deskripsi Kebutuhan & Ekspektasi",
    descPlaceholder:
      "Contoh: Saya seorang web developer, ingin membuat portofolio single page untuk menampilkan 3 proyek terbaik dan resume pendidikan/keahlian...",
    submitBtn: "Kirim & Mulai Konsultasi WhatsApp",
    submitHint:
      "Mengisi formulir ini akan menyiapkan pesan chat WhatsApp yang rapi ke kontak resmi BeOne.",
    submitAriaLabel: "Kirim formulir konsultasi via WhatsApp",
    professions: [
      { id: "developer", label: "Web Developer / Programmer" },
      { id: "designer", label: "UI/UX / Graphic Designer" },
      { id: "freelancer", label: "Freelancer / Content Creator" },
      { id: "student", label: "Mahasiswa / Fresh Graduate" },
      { id: "professional", label: "Profesional / Konsultan" },
      { id: "business", label: "Pemilik Bisnis / UMKM" },
      { id: "other", label: "Lainnya" },
    ],
    budgets: [
      { id: "under-150k", label: "< Rp150 ribu (Desain Promosi)" },
      { id: "150k-350k", label: "Rp150rb – Rp350 ribu (Portofolio / Katalog)" },
      { id: "350k-1m", label: "Rp350rb – Rp1 juta (Landing Page Bisnis / Portofolio Pro)" },
      { id: "1m-3m", label: "Rp1 – 3 juta" },
      { id: "3m-6m", label: "Rp3 – 6 juta" },
      { id: "over-6m", label: "> Rp6 juta (Web App / E-Commerce)" },
      { id: "recommended", label: "Sesuai Rekomendasi Solusi" },
    ],
    services: [
      { id: "personal-portfolio", label: "Website Portofolio Pribadi" },
      { id: "promo-design", label: "Desain Konten Promosi" },
      { id: "umkm-catalog", label: "Katalog Digital UMKM" },
      { id: "business-landing-page", label: "Landing Page Bisnis" },
      { id: "company-profile", label: "Company Profile" },
      { id: "business-website", label: "Business Website Lengkap" },
      { id: "ecommerce", label: "E-Commerce" },
      { id: "custom-web-app", label: "Custom Web App" },
      { id: "mobile-app", label: "Mobile App" },
      { id: "maintenance", label: "Website Maintenance" },
      { id: "other", label: "Lainnya" },
    ],
    packages: [
      {
        id: "promo-design",
        label: "Desain Konten Promosi (Paket 5 Desain) — Rp75.000–100.000",
        serviceId: "promo-design",
      },
      {
        id: "umkm-catalog",
        label: "Katalog Digital UMKM — mulai Rp150.000",
        serviceId: "umkm-catalog",
      },
      {
        id: "portfolio-starter",
        label: "Portofolio Pribadi Starter — mulai Rp150.000",
        serviceId: "personal-portfolio",
      },
      {
        id: "portfolio-professional",
        label: "Portofolio Pribadi Professional — Rp349.000",
        serviceId: "personal-portfolio",
      },
      {
        id: "portfolio-premium",
        label: "Portofolio Pribadi Premium — mulai Rp599.000",
        serviceId: "personal-portfolio",
      },
      {
        id: "business-landing-page",
        label: "Landing Page Bisnis — Rp350.000–500.000",
        serviceId: "business-landing-page",
      },
      {
        id: "company-profile",
        label: "Company Profile — Rp2.500.000",
        serviceId: "company-profile",
      },
      {
        id: "business-website",
        label: "Business Website Lengkap — Rp4.000.000",
        serviceId: "business-website",
      },
      {
        id: "ecommerce",
        label: "E-Commerce Toko Online — mulai Rp6.000.000",
        serviceId: "ecommerce",
      },
      {
        id: "custom-web-app",
        label: "Custom Web App — mulai Rp7.500.000",
        serviceId: "custom-web-app",
      },
      {
        id: "maintenance-basic",
        label: "Paket Maintenance Basic — Rp500.000/tahun",
        serviceId: "maintenance",
      },
      {
        id: "maintenance-standard",
        label: "Paket Maintenance Standard — Rp1.000.000/tahun",
        serviceId: "maintenance",
      },
      {
        id: "maintenance-professional",
        label: "Paket Maintenance Professional — Rp1.500.000/tahun",
        serviceId: "maintenance",
      },
      {
        id: "custom-inquiry",
        label: "Belum Memilih Paket / Ingin Konsultasi Dulu",
        serviceId: "other",
      },
    ],
    errors: {
      name: "Nama lengkap wajib diisi.",
      contact: "Nomor WhatsApp atau kontak wajib diisi.",
      contactFormat: "Format nomor kontak tidak valid.",
      emailFormat: "Format email tidak valid.",
      service: "Pilih layanan yang dibutuhkan.",
      description: "Ceritakan sedikit kebutuhan atau tujuan website Anda.",
    },
    msgGreeting: "*Halo BeOne, saya ingin konsultasi pembuatan website:*",
    msgName: "Nama",
    msgContact: "Kontak",
    msgEmail: "Email",
    msgProfession: "Profesi / Bisnis",
    msgService: "Layanan",
    msgPackage: "Paket Diminati",
    msgBudget: "Estimasi Budget",
    msgDesc: "Deskripsi & Kebutuhan",
  },

  /* ─── Footer ─── */
  footer: {
    navTitle: "Navigasi",
    ctaTitle: "Mulai Project Anda",
    ctaDesc: "Siap memulai project digital Anda? Hubungi kami untuk konsultasi gratis tanpa komitmen.",
    ctaButton: "Konsultasi via WhatsApp",
    ctaButtonLabel: "Konsultasi via WhatsApp dengan BeOne",
    copyright: "Seluruh hak cipta dilindungi.",
    builtWith: "Dibangun dengan Next.js · TypeScript · Tailwind CSS",
    tagline: "Solusi Digital untuk Personal Brand dan Bisnis",
    supportingText: "Website Portofolio, Katalog UMKM & Solusi Web Modern",
    links: {
      portfolio: "Portofolio",
      services: "Layanan",
      pricing: "Harga",
      process: "Proses",
      faq: "FAQ",
      contact: "Kontak",
    },
  },

  /* ─── Shared WhatsApp default ─── */
  shared: {
    whatsappDefaultMsg: "Halo BeOne, saya ingin konsultasi mengenai pembuatan website portofolio.",
    whatsappAddOnMsg: "Halo BeOne, saya ingin menanyakan add-on untuk project saya.",
  },
};
