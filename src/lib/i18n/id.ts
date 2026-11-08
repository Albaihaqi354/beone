import type { Translations } from "./types";

export const id: Translations = {
  meta: {
    title: "BeOne — Digital Development Studio | Jasa Pembuatan Website & Aplikasi",
    description:
      "BeOne adalah independent digital development studio yang membantu individu dan bisnis membangun website serta solusi digital yang dirancang sesuai kebutuhan mereka.",
    ogTitle: "BeOne — Digital Development Studio",
  },

  nav: {
    home: "Beranda",
    solutions: "Solusi",
    services: "Layanan",
    pricing: "Harga",
    process: "Proses",
    faq: "FAQ",
    contact: "Kontak",
    cta: "Mulai Proyek",
    openMenu: "Buka menu navigasi",
    closeMenu: "Tutup menu navigasi",
    chatWhatsapp: "Chat di WhatsApp",
    langToggle: "Pilih bahasa",
    navAria: "Navigasi Utama",
    mobileMenuAria: "Menu navigasi mobile",
    scrollToTop: "Kembali ke atas",
  },

  hero: {
    label: "Digital Development Studio",
    headline1: "Build Digital.",
    headline2: "Be One Step Ahead.",
    tagline: "Build Digital. Be One Step Ahead.",
    subheadline:
      "Kami membantu individu dan bisnis membangun website serta solusi digital yang dirancang sesuai kebutuhan mereka.",
    ctaPrimary: "Mulai Konsultasi",
    ctaSecondary: "Lihat Layanan",
    stat1Value: "100%",
    stat1Label: "Dibuat Kustom",
    stat2Value: "< 14 Hari",
    stat2Label: "Rata-rata Pengerjaan",
    stat3Value: "30 Hari",
    stat3Label: "Garansi Bug",
    scrollLabel: "Scroll",
  },

  solutions: {
    label: "Apa yang Bisa Kami Bangun",
    title: "What We Can Build",
    subtitle:
      "Dari website sederhana hingga solusi digital kustom, kami membangun teknologi yang sesuai dengan kebutuhanmu.",
    items: [
      {
        id: "landing-page",
        title: "Landing Page",
        description:
          "Website satu halaman untuk memperkenalkan produk, layanan, atau campaign dan membantu bisnis mendapatkan pelanggan.",
        examples: [
          "Product landing page",
          "Service landing page",
          "Event website",
          "Campaign website",
        ],
        cta: "Diskusi Proyek",
      },
      {
        id: "company-profile",
        title: "Company Profile",
        description:
          "Website profesional untuk memperkenalkan perusahaan, membangun kredibilitas, dan memberikan informasi kepada calon pelanggan.",
        examples: [
          "Company profile",
          "Corporate website",
          "Organization website",
          "Professional services website",
        ],
        cta: "Diskusi Proyek",
      },
      {
        id: "ecommerce",
        title: "E-Commerce",
        description:
          "Solusi toko online untuk membantu bisnis memasarkan dan menjual produk secara digital.",
        examples: [
          "Katalog produk",
          "Shopping cart & checkout",
          "Manajemen pesanan",
          "Integrasi payment gateway",
        ],
        cta: "Diskusi Proyek",
      },
      {
        id: "business-dashboard",
        title: "Business Dashboard",
        description:
          "Dashboard untuk membantu bisnis mengelola dan memantau informasi serta performa operasional.",
        examples: [
          "Sales dashboard",
          "Financial dashboard",
          "Analytics & reporting",
          "Performance monitoring",
        ],
        cta: "Diskusi Proyek",
      },
      {
        id: "management-system",
        title: "Management System",
        description:
          "Sistem digital untuk membantu perusahaan mengelola aktivitas operasional secara lebih terstruktur.",
        examples: [
          "Inventory management",
          "Employee management",
          "Booking system",
          "Administration system",
        ],
        cta: "Diskusi Proyek",
      },
      {
        id: "custom-web-app",
        title: "Custom Web Application",
        description:
          "Aplikasi berbasis web yang dirancang berdasarkan kebutuhan dan alur kerja spesifik setiap bisnis.",
        examples: [
          "SaaS application",
          "CRM & ERP",
          "Marketplace",
          "Custom business application",
        ],
        cta: "Diskusi Proyek",
      },
    ],
  },

  services: {
    label: "Layanan Kami",
    heading: "Layanan yang tersedia\nuntuk setiap kebutuhan.",
    subheading:
      "Mulai dari portofolio pribadi hingga aplikasi bisnis skala penuh — setiap layanan dikerjakan dengan kode bersih, harga transparan, dan hasil yang tahan lama.",
    categoryPersonal: "Personal & Kreatif",
    categoryBusiness: "Website Bisnis",
    categoryAdvanced: "Pengembangan Lanjutan",
    footerNote:
      "Tidak yakin layanan mana yang sesuai? Hubungi kami untuk konsultasi gratis — kami akan bantu tentukan scope yang tepat.",
    items: [
      {
        id: "personal-portfolio",
        num: "01",
        title: "Website Portofolio Pribadi",
        category: "Personal & Kreatif",
        description:
          "Website satu halaman berbasis template untuk menampilkan profil, keahlian, dan karya secara profesional.",
        startingPrice: "Mulai Rp150.000",
        tags: ["Single Page", "Template-based", "Hosting Gratis"],
      },
      {
        id: "promo-design",
        num: "02",
        title: "Desain Konten Promosi",
        category: "Personal & Kreatif",
        description:
          "Paket 5 desain visual promosi siap posting untuk media sosial — disesuaikan dengan identitas brand.",
        startingPrice: "Rp75.000–100.000",
        tags: ["Paket 5 Desain", "PNG/JPG", "Media Sosial"],
      },
      {
        id: "landing-page",
        num: "03",
        title: "Landing Page",
        category: "Website Bisnis",
        description:
          "Landing page responsif kustom untuk memperkenalkan produk, layanan, atau campaign dengan fokus konversi.",
        startingPrice: "Mulai Rp1.500.000",
        tags: ["Custom Design", "Responsif", "Basic SEO"],
      },
      {
        id: "company-profile",
        num: "04",
        title: "Company Profile",
        category: "Website Bisnis",
        description:
          "Website profesional multi-halaman untuk memperkenalkan perusahaan dan membangun kepercayaan klien.",
        startingPrice: "Mulai Rp2.500.000",
        tags: ["5–6 Halaman", "Custom UI/UX", "Domain + Hosting"],
      },
      {
        id: "business-website",
        num: "05",
        title: "Business Website",
        category: "Website Bisnis",
        description:
          "Website bisnis multi-halaman dengan katalog, blog, filter konten, dan CMS yang mudah dikelola.",
        startingPrice: "Mulai Rp4.000.000",
        tags: ["Hingga 10 Halaman", "CMS", "Domain + Hosting"],
      },
      {
        id: "ecommerce",
        num: "06",
        title: "E-Commerce",
        category: "Website Bisnis",
        description:
          "Toko online lengkap dengan manajemen produk, keranjang belanja, checkout, dan dashboard admin.",
        startingPrice: "Mulai Rp6.000.000",
        tags: ["Toko Online", "Admin Dashboard", "Payment Gateway"],
      },
      {
        id: "custom-web-app",
        num: "07",
        title: "Custom Web Application",
        category: "Pengembangan Lanjutan",
        description:
          "Sistem dan aplikasi web kustom yang dibangun sesuai alur kerja bisnis spesifik — inventory, POS, booking, SaaS.",
        startingPrice: "Mulai Rp7.500.000",
        tags: ["Custom Scope", "REST API", "Role-Based Auth"],
      },
      {
        id: "mobile-app",
        num: "08",
        title: "Mobile Application",
        category: "Pengembangan Lanjutan",
        description:
          "Aplikasi mobile Android & iOS untuk kebutuhan operasional bisnis atau produk digital berbasis cross-platform.",
        startingPrice: "Mulai Rp8.000.000",
        tags: ["Android & iOS", "Cross-Platform", "Modern UX"],
      },
    ],
  },

  pricing: {
    label: "Paket & Investasi",
    heading: "Harga transparan\nuntuk setiap anggaran.",
    subheading:
      "Semua harga adalah harga mulai. Harga final ditentukan setelah konsultasi dan analisis kebutuhan proyek.",
    tabEntry: "Entry-Level",
    tabBusiness: "Website Bisnis",
    tabAdvanced: "Lanjutan & Kustom",
    popularLabel: "Paling Diminati",
    entryPlans: [
      {
        id: "personal-portfolio",
        name: "Portofolio Pribadi Basic",
        price: "Rp150.000",
        priceNote: "Mulai dari",
        duration: "1–3 hari kerja",
        revisions: "1x revisi minor",
        hostingInfo: "Hosting gratis (tidak termasuk domain berbayar)",
        features: [
          "Website portofolio one-page berbasis template",
          "Profil pribadi & bio profesional",
          "Keahlian & pengalaman",
          "Showcase proyek",
          "Tautan media sosial & kontak",
          "Desain responsif (mobile & desktop)",
          "Hosting gratis aktif",
          "1x revisi minor",
        ],
        cta: "Pilih Paket Ini",
      },
      {
        id: "promo-design",
        name: "Desain Konten Promosi",
        price: "Rp75.000–100.000",
        priceNote: "Paket 5 desain",
        duration: "1–2 hari kerja",
        revisions: "1–2x revisi minor",
        features: [
          "5 desain konten promosi siap posting",
          "1 format ukuran yang disepakati (Feed atau Story)",
          "Materi dari pelanggan",
          "Disesuaikan identitas brand",
          "File final PNG / JPG resolusi tinggi",
          "1–2x revisi minor",
        ],
        cta: "Pesan Paket Ini",
      },
    ],
    businessPlans: [
      {
        id: "landing-page",
        name: "Landing Page",
        price: "Rp1.500.000",
        priceNote: "Mulai dari",
        duration: "3–7 hari kerja",
        revisions: "2x revisi",
        hostingInfo: "Hosting gratis (domain opsional)",
        features: [
          "Landing page responsif kustom",
          "Hero section",
          "Informasi produk / layanan",
          "Fitur dan keunggulan",
          "CTA section",
          "Integrasi WhatsApp",
          "Basic SEO",
          "Bagian kontak",
          "Desain responsif",
        ],
        cta: "Pilih Paket Ini",
      },
      {
        id: "company-profile",
        name: "Company Profile",
        price: "Rp2.500.000",
        priceNote: "Mulai dari",
        duration: "7–14 hari kerja",
        revisions: "3x revisi",
        hostingInfo: "Domain .com + hosting 1 tahun termasuk",
        popular: true,
        features: [
          "Website perusahaan profesional",
          "Halaman: Home, About, Services, Contact",
          "Identitas & profil perusahaan",
          "Integrasi WhatsApp",
          "Google Maps (jika dibutuhkan)",
          "Basic SEO",
          "Desain responsif",
          "Garansi bug 30 hari",
        ],
        cta: "Pilih Paket Ini",
      },
      {
        id: "business-website",
        name: "Business Website",
        price: "Rp4.000.000",
        priceNote: "Mulai dari",
        duration: "2–3 minggu",
        revisions: "4x revisi",
        hostingInfo: "Domain .com + hosting 1 tahun termasuk",
        features: [
          "Website multi-halaman (hingga 10 halaman)",
          "Layout kustom",
          "Halaman produk / layanan",
          "Fitur kontak & inquiry",
          "Manajemen informasi bisnis",
          "Basic SEO",
          "Desain responsif",
          "Garansi bug 30 hari",
        ],
        cta: "Pilih Paket Ini",
      },
    ],
    advancedPlans: [
      {
        id: "ecommerce",
        name: "E-Commerce",
        price: "Rp6.000.000",
        priceNote: "Mulai dari",
        duration: "3–5 minggu",
        revisions: "Sesuai scope",
        hostingInfo: "Domain + hosting 1 tahun termasuk",
        features: [
          "Katalog produk & halaman detail",
          "Shopping cart & checkout",
          "Manajemen pesanan",
          "Admin dashboard",
          "Integrasi payment gateway (biaya pihak ketiga tidak termasuk)",
          "Desain responsif",
          "Garansi bug 30 hari",
        ],
        cta: "Diskusi Proyek",
      },
      {
        id: "custom-web-app",
        name: "Custom Web Application",
        price: "Rp7.500.000",
        priceNote: "Mulai dari",
        duration: "Sesuai scope",
        isCustom: true,
        features: [
          "Pengembangan aplikasi kustom",
          "Autentikasi (jika dibutuhkan)",
          "Integrasi database",
          "Admin dashboard (jika dibutuhkan)",
          "Integrasi API",
          "Fitur spesifik sesuai bisnis",
          "Antarmuka responsif",
          "Harga final sesuai kompleksitas & kebutuhan",
        ],
        cta: "Diskusi Proyek",
      },
      {
        id: "mobile-app",
        name: "Mobile Application",
        price: "Rp8.000.000",
        priceNote: "Mulai dari",
        duration: "Sesuai scope",
        isCustom: true,
        features: [
          "Pengembangan mobile Android & iOS",
          "Cross-platform (React Native / Expo)",
          "Fitur sesuai kebutuhan proyek",
          "Integrasi API & backend",
          "Antarmuka modern & responsif",
          "Harga final sesuai platform, fitur, dan kompleksitas",
        ],
        cta: "Diskusi Proyek",
      },
    ],
    addonsTitle: "Fitur Tambahan (Add-on)",
    addonsNote:
      "Harga di bawah adalah estimasi dan dapat berubah sesuai kompleksitas spesifik. Tidak semua fitur secara otomatis termasuk dalam paket.",
    addons: [
      { name: "Halaman tambahan", price: "Rp200.000" },
      { name: "Section tambahan", price: "Rp100.000" },
      { name: "Autentikasi / Login User", price: "Rp500.000" },
      { name: "Admin Dashboard", price: "Rp750.000" },
      { name: "Integrasi Database", price: "Rp750.000" },
      { name: "REST API", price: "Rp750.000" },
      { name: "Integrasi Payment Gateway", price: "Rp750.000" },
      { name: "CMS / Kelola Konten", price: "Rp1.000.000" },
      { name: "Integrasi API Pihak Ketiga", price: "Rp500.000" },
      { name: "Export Excel / PDF", price: "Rp500.000" },
      { name: "Optimasi SEO Lanjutan", price: "Rp750.000" },
    ],
    paymentTitle: "Ketentuan Pembayaran",
    paymentNote:
      "Source code diserahkan setelah pelunasan penuh. Fitur di luar scope awal dikenakan biaya terpisah.",
    paymentTerms: [
      {
        condition: "Proyek hingga Rp5.000.000",
        steps: ["50% uang muka", "50% pelunasan setelah selesai"],
      },
      {
        condition: "Proyek di atas Rp5.000.000",
        steps: [
          "30% uang muka",
          "40% selama pengembangan",
          "30% setelah proyek selesai",
        ],
      },
    ],
  },

  maintenance: {
    label: "Layanan Pemeliharaan",
    heading: "Jaga Website Tetap Optimal",
    subheading:
      "Layanan pemeliharaan teknis tahunan untuk memastikan website berjalan lancar setelah masa garansi selesai.",
    period: "tahun",
    note: "Biaya perpanjangan domain dan hosting pihak ketiga ditagihkan transparan sesuai invoice resmi — tidak termasuk dalam paket maintenance. Permintaan fitur baru, perombakan desain, atau migrasi sistem dikuotasi secara terpisah.",
    plans: [
      {
        id: "basic",
        name: "Basic",
        price: "Rp500.000",
        period: "tahun",
        features: [
          "Monitoring performa & uptime berkala",
          "Asistensi konfigurasi SSL / HTTPS",
          "Bantuan kendala domain & DNS",
          "Minor bug fixing & broken link check",
          "Pembaruan teks / kontak ringan (maks. 2x/tahun)",
        ],
        exclusions: [
          "Tidak termasuk biaya perpanjangan domain & hosting",
          "Tidak termasuk penambahan fitur baru",
          "Tidak termasuk perombakan desain",
        ],
      },
      {
        id: "standard",
        name: "Standard",
        price: "Rp1.000.000",
        period: "tahun",
        features: [
          "Semua cakupan Basic",
          "Pembaruan konten & aset visual ringan berkala",
          "Health check dependensi & kompatibilitas",
          "Bantuan konfigurasi Google Analytics & Search Console",
          "Minor layout & styling adjustments",
        ],
        exclusions: [
          "Tidak termasuk biaya perpanjangan domain & hosting",
          "Tidak termasuk penambahan fitur kompleks",
        ],
      },
      {
        id: "professional",
        name: "Professional",
        price: "Rp1.500.000",
        period: "tahun",
        features: [
          "Semua cakupan Standard",
          "Priority support dengan respon cepat",
          "Pembaruan fitur minor & penambahan section berkala",
          "Monitoring rutin & optimasi kecepatan",
          "Konsultasi teknis berkala",
        ],
        exclusions: [
          "Tidak termasuk biaya perpanjangan domain & hosting",
          "Fitur besar & migrasi sistem dikuotasi terpisah",
        ],
      },
    ],
  },

  process: {
    label: "Cara Kerja Kami",
    heading: "Dari brief ke peluncuran\ndalam lima langkah.",
    subheading:
      "Proses pengerjaan yang transparan dan terstruktur — tanpa kejutan di tengah jalan.",
    note: "* Estimasi hari kerja dihitung setelah seluruh brief, materi, dan scope disepakati. Penambahan scope di tengah pengerjaan atau keterlambatan materi dapat memengaruhi jadwal.",
    steps: [
      {
        num: "01",
        title: "Konsultasi",
        description:
          "Memahami kebutuhan, tujuan, dan permasalahan bisnis Anda. Kami mendengarkan sebelum memberikan rekomendasi.",
        duration: "Hari 1",
      },
      {
        num: "02",
        title: "Perencanaan",
        description:
          "Menentukan fitur, struktur, teknologi, dan estimasi pengerjaan. Scope, timeline, dan harga disepakati sebelum pengerjaan dimulai.",
        duration: "Hari 1–2",
      },
      {
        num: "03",
        title: "Desain",
        description:
          "Membuat tampilan antarmuka responsif yang sesuai kebutuhan dan identitas bisnis Anda.",
        duration: "Hari 2–5",
      },
      {
        num: "04",
        title: "Pengembangan",
        description:
          "Membangun website atau aplikasi menggunakan teknologi modern dan melakukan pengujian menyeluruh.",
        duration: "Hari 5–12",
      },
      {
        num: "05",
        title: "Peluncuran",
        description:
          "Melakukan deployment, verifikasi SSL, dan menyerahkan akses penuh kepada Anda. Garansi bug 30 hari aktif.",
        duration: "Hari 12–14",
      },
    ],
  },

  faq: {
    label: "FAQ",
    heading: "Pertanyaan yang\nsering ditanyakan.",
    supportText:
      "Masih ada pertanyaan? Hubungi kami langsung melalui WhatsApp — kami biasanya merespons dalam beberapa jam.",
    askLabel: "Tanyakan sekarang",
    items: [
      {
        id: "services",
        question: "Apa saja layanan yang disediakan BeOne?",
        answer:
          "BeOne menyediakan layanan pembuatan website dan solusi digital, antara lain: Website Portofolio Pribadi (mulai Rp150.000), Desain Konten Promosi, Landing Page (mulai Rp1.500.000), Company Profile (mulai Rp2.500.000), Business Website (mulai Rp4.000.000), E-Commerce (mulai Rp6.000.000), Custom Web Application (mulai Rp7.500.000), dan Mobile Application (mulai Rp8.000.000).",
      },
      {
        id: "how-to-start",
        question: "Bagaimana cara memulai proyek?",
        answer:
          "Langkah pertama adalah konsultasi. Hubungi kami melalui WhatsApp atau isi formulir kontak di website ini. Ceritakan kebutuhan, tujuan, dan gambaran proyek Anda. Kami akan mendiskusikan scope, teknologi, estimasi waktu, dan harga sebelum pengerjaan dimulai.",
      },
      {
        id: "custom-design",
        question: "Apakah desain website bisa disesuaikan?",
        answer:
          "Ya, hampir semua layanan BeOne menggunakan desain kustom yang disesuaikan dengan identitas dan kebutuhan Anda — bukan template jadi. Pengecualian adalah Paket Portofolio Pribadi Basic (Rp150.000) yang berbasis template untuk menekan biaya dan waktu pengerjaan.",
      },
      {
        id: "domain-hosting",
        question: "Apakah domain dan hosting sudah termasuk?",
        answer:
          "Tergantung paket. Untuk paket Company Profile ke atas, domain .com dan hosting tahun pertama sudah termasuk. Untuk paket landing page dan portofolio, website dapat dipublikasikan menggunakan hosting gratis (Vercel/Netlify) tanpa biaya server bulanan. Domain berbayar (.com/.id) tidak termasuk dalam paket entry-level, namun kami dapat membantu proses pembelian dan penghubungannya.",
      },
      {
        id: "renewal",
        question: "Apakah ada biaya perpanjangan domain dan hosting?",
        answer:
          "Ya, domain dan hosting dari penyedia pihak ketiga memiliki biaya perpanjangan tahunan sesuai tarif provider (Namecheap, Niagahoster, Vercel, dll.). Biaya ini ditagihkan langsung oleh provider — bukan oleh BeOne — dan tidak termasuk dalam harga paket kecuali dinyatakan eksplisit. Kami memberikan panduan lengkap untuk pengelolaan perpanjangan.",
      },
      {
        id: "timeline",
        question: "Berapa lama proses pengerjaan?",
        answer:
          "Estimasi waktu bervariasi tergantung jenis proyek: Portofolio Basic 1–3 hari kerja, Landing Page 3–7 hari kerja, Company Profile 7–14 hari kerja, Business Website 2–3 minggu, E-Commerce 3–5 minggu. Perhitungan dimulai setelah semua brief, materi (teks, foto, logo), dan scope disepakati.",
      },
      {
        id: "extra-features",
        question: "Apakah bisa menambahkan fitur di luar paket?",
        answer:
          "Bisa. Fitur tambahan seperti autentikasi, admin dashboard, database, payment gateway, CMS, dan lainnya tersedia sebagai add-on dengan biaya terpisah. Estimasi harga add-on dapat berubah tergantung kompleksitas spesifik yang dibutuhkan. Kami akan mendiskusikan dan menyepakati biaya tambahan sebelum pengerjaan.",
      },
      {
        id: "payment",
        question: "Bagaimana sistem pembayaran?",
        answer:
          "Untuk proyek hingga Rp5.000.000: 50% uang muka dan 50% pelunasan setelah selesai. Untuk proyek di atas Rp5.000.000: 30% uang muka, 40% selama pengembangan, dan 30% setelah proyek selesai. Pembayaran dilakukan melalui transfer bank.",
      },
      {
        id: "source-code",
        question: "Apakah source code diberikan kepada pelanggan?",
        answer:
          "Ya. Source code proyek akan diserahkan sepenuhnya setelah pelunasan pembayaran. Anda memiliki hak penuh atas seluruh kode yang kami bangun.",
      },
      {
        id: "maintenance",
        question: "Apakah tersedia layanan maintenance?",
        answer:
          "Ya. BeOne menyediakan tiga paket maintenance tahunan: Basic (Rp500.000/tahun), Standard (Rp1.000.000/tahun), dan Professional (Rp1.500.000/tahun). Setiap paket mencakup layanan pemeliharaan teknis sesuai cakupan yang telah ditentukan. Biaya domain dan hosting dari pihak ketiga tidak termasuk dalam paket maintenance.",
      },
      {
        id: "custom-app",
        question: "Apakah BeOne menerima pembuatan aplikasi custom?",
        answer:
          "Ya. BeOne menerima proyek Custom Web Application (mulai Rp7.500.000) dan Mobile Application (mulai Rp8.000.000). Proyek-proyek ini dikerjakan berdasarkan kebutuhan dan alur kerja spesifik bisnis Anda. Harga final ditentukan setelah konsultasi dan analisis kebutuhan.",
      },
    ],
  },

  contact: {
    sectionLabel: "Hubungi Kami",
    headline1: "Punya ide atau",
    headline2: "kebutuhan digital?",
    directContactLabel: "Kontak Langsung",
    expectLabel: "Yang Bisa Kamu Harapkan",
    expectItems: [
      "Respons dalam 24 jam",
      "Konsultasi awal gratis",
      "Scope & harga yang transparan",
      "Tidak ada komitmen di awal",
    ],
    nameLabel: "Nama",
    namePlaceholder: "Nama lengkap Anda",
    whatsappLabel: "Nomor WhatsApp",
    whatsappPlaceholder: "+62 8xx-xxxx-xxxx",
    emailLabel: "Email",
    emailOptional: "(opsional)",
    emailPlaceholder: "email@contoh.com",
    businessLabel: "Nama Bisnis / Perusahaan",
    businessOptional: "(opsional)",
    businessPlaceholder: "Nama bisnis atau perusahaan Anda",
    serviceLabel: "Layanan yang Dibutuhkan",
    servicePlaceholder: "Pilih layanan",
    budgetLabel: "Estimasi Budget",
    budgetOptional: "(opsional)",
    budgetPlaceholder: "Pilih estimasi budget",
    descLabel: "Deskripsi Proyek",
    descPlaceholder:
      "Ceritakan kebutuhanmu — apa yang ingin dibangun, tujuan proyek, dan kebutuhan spesifik lainnya...",
    submitBtn: "Kirim via WhatsApp",
    submitHint: "Membuka WhatsApp dengan pesan yang sudah diisi",
    readyTitle: "Pesan Siap Dikirim",
    readyDesc:
      "Pesan Anda sudah disiapkan. Jika WhatsApp tidak terbuka otomatis, gunakan tombol di bawah.",
    openWhatsapp: "Buka WhatsApp",
    copyMessage: "Salin Pesan",
    messageCopied: "Tersalin",
    backToForm: "Kembali ke formulir",
    services: [
      { id: "personal-portfolio", label: "Website Portofolio Pribadi" },
      { id: "promo-design", label: "Desain Konten Promosi" },
      { id: "landing-page", label: "Landing Page" },
      { id: "company-profile", label: "Company Profile" },
      { id: "business-website", label: "Business Website" },
      { id: "ecommerce", label: "E-Commerce" },
      { id: "custom-web-app", label: "Custom Web Application" },
      { id: "mobile-app", label: "Mobile Application" },
      { id: "maintenance", label: "Layanan Maintenance" },
      { id: "other", label: "Lainnya / Belum Tahu" },
    ],
    budgets: [
      { id: "under-500k", label: "Di bawah Rp500.000" },
      { id: "500k-2m", label: "Rp500.000 – Rp2.000.000" },
      { id: "2m-5m", label: "Rp2.000.000 – Rp5.000.000" },
      { id: "5m-10m", label: "Rp5.000.000 – Rp10.000.000" },
      { id: "above-10m", label: "Di atas Rp10.000.000" },
      { id: "flexible", label: "Fleksibel / Belum Tahu" },
    ],
    errors: {
      name: "Nama wajib diisi",
      contact: "Nomor WhatsApp wajib diisi",
      contactFormat: "Format nomor WhatsApp tidak valid",
      emailFormat: "Format email tidak valid",
      service: "Pilih layanan yang dibutuhkan",
      description: "Deskripsi proyek wajib diisi",
    },
    msgGreeting: "Halo BeOne, saya ingin berkonsultasi mengenai proyek saya.",
    msgName: "Nama",
    msgWhatsapp: "WhatsApp",
    msgEmail: "Email",
    msgBusiness: "Nama Bisnis",
    msgService: "Layanan",
    msgBudget: "Budget",
    msgDesc: "Deskripsi Proyek",
  },

  footer: {
    tagline:
      "Independent digital development studio yang membantu individu dan bisnis membangun website serta solusi digital.",
    navLabel: "Navigasi",
    contactLabel: "Kontak",
    copyright: "Semua hak dilindungi.",
    builtWith: "Dibangun dengan Next.js & Tailwind CSS",
  },

  shared: {
    whatsappDefaultMsg:
      "Halo BeOne, saya ingin berkonsultasi mengenai kebutuhan digital saya.",
  },
};
