export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "domain-hosting",
    question: "Apakah harga sudah termasuk domain dan hosting?",
    answer:
      "Untuk paket yang mencantumkan domain dan hosting, biaya tahun pertama sudah termasuk sesuai spesifikasi paket. Perpanjangan domain dan hosting di tahun berikutnya dikenakan biaya terpisah.",
  },
  {
    id: "duration",
    question: "Berapa lama pengerjaan website?",
    answer:
      "Tergantung paket dan kompleksitas project. Landing page biasanya selesai dalam 3–7 hari, company profile 7–14 hari, business website 2–3 minggu, e-commerce 3–5 minggu. Project custom disesuaikan dengan scope yang disepakati.",
  },
  {
    id: "custom-design",
    question: "Apakah bisa request design sendiri?",
    answer:
      "Ya. Client dapat memberikan referensi desain, warna, logo, dan kebutuhan branding. BeOne akan mengembangkan UI/UX berdasarkan referensi tersebut dan menyesuaikan dengan standar modern.",
  },
  {
    id: "custom-website",
    question: "Apakah bisa membuat website custom?",
    answer:
      "Ya. BeOne dapat membuat website dan web application berdasarkan workflow bisnis client. Mulai dari landing page sederhana hingga sistem bisnis yang kompleks.",
  },
  {
    id: "after-launch",
    question: "Apakah ada biaya setelah website selesai?",
    answer:
      "Domain dan hosting perlu diperpanjang setelah periode pertama (biasanya 1 tahun). Maintenance dan penambahan fitur tersedia sebagai layanan terpisah. BeOne memiliki paket maintenance tahunan yang fleksibel.",
  },
  {
    id: "internal-system",
    question: "Apakah bisa membuat sistem seperti aplikasi internal perusahaan?",
    answer:
      "Ya. BeOne menerima custom web application seperti sistem inventory, HR, POS, booking, finance, dashboard, dan sistem administrasi lainnya. Setiap project dikerjakan berdasarkan kebutuhan dan workflow bisnis client.",
  },
  {
    id: "revision",
    question: "Apakah bisa melakukan revisi?",
    answer:
      "Setiap paket memiliki batas revisi yang berbeda — mulai dari 2 revisi untuk Starter hingga 4 revisi untuk Professional. Revisi di luar scope yang disepakati dapat dikenakan biaya tambahan.",
  },
];
