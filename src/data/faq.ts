export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "entry-services",
    question: "Apa saja layanan entry-level BeOne dengan biaya terjangkau?",
    answer:
      "BeOne menyediakan 4 layanan entry-level hemat untuk membantu Anda langsung online: Desain Konten Promosi (Rp75.000–100.000 untuk paket 5 desain), Katalog Digital UMKM (mulai Rp150.000), Website Portofolio Pribadi (mulai Rp150.000), dan Landing Page Bisnis (Rp350.000–500.000). Seluruh layanan dirancang efisien dan siap dalam 1–3 hari kerja.",
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
    question: "Apa perbedaan Portofolio Starter (Rp150.000) dan Portofolio Professional (Rp349.000)?",
    answer:
      "Paket Starter (Rp150.000) adalah single page ringkas berfokus pada bio, ringkasan keahlian, maksimal 3 proyek dasar, kontak, dan 1x revisi minor — sangat cocok untuk mahasiswa atau pemula. Sedangkan Paket Professional (Rp349.000) menawarkan desain lebih terkurasi dan berkarakter, struktur lengkap (About, Skills, Projects hingga 6 karya interaktif, Experience timeline, Contact), animasi halus, 2x revisi, dan bantuan setup custom domain.",
  },
  {
    id: "business-landing-page-scope",
    question: "Apa yang membedakan Landing Page Bisnis Rp350.000 vs Rp500.000?",
    answer:
      "Paket dasar Rp350.000 mencakup landing page satu halaman fokus konversi dengan 3–4 section utama (Hero, Layanan/Produk, Keunggulan, Kontak WhatsApp) dengan materi siap pakai dari pelanggan. Biaya mendekati Rp500.000 berlaku jika membutuhkan section tambahan (misal FAQ, galeri, form khusus), perapian materi visual, atau penyesuaian desain yang lebih spesifik.",
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
];
