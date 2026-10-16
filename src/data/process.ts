export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
}

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    number: "01",
    title: "Konsultasi & Brief",
    description:
      "Mendiskusikan profil, tujuan, preferensi visual, dan materi yang disiapkan client sebagai fondasi awal pengerjaan project.",
    icon: "MessageSquare",
  },
  {
    id: "planning",
    number: "02",
    title: "Penawaran & Kesepakatan Scope",
    description:
      "Menentukan paket yang tepat, estimasi timeline, dan rincian harga transparan. Estimasi hari kerja resmi dimulai setelah seluruh materi lengkap diterima.",
    icon: "ClipboardList",
  },
  {
    id: "development",
    number: "03",
    title: "Desain UI & Pengerjaan Teknis",
    description:
      "Merancang antarmuka responsif dan membangun website dengan standar kode modern Next.js & TypeScript yang cepat dan ramah SEO dasar.",
    icon: "Code2",
  },
  {
    id: "review",
    number: "04",
    title: "Review & Revisi Sesuai Paket",
    description:
      "Client memeriksa preview website secara langsung dan mengajukan penyesuaian/revisi minor sesuai batas paket yang telah disepakati.",
    icon: "Palette",
  },
  {
    id: "launch",
    number: "05",
    title: "Finalisasi & Serah Terima",
    description:
      "Deployment ke hosting cloud, verifikasi SSL, penyerahan akses penuh, serta aktivasi garansi bug bawaan 30 hari pasca serah terima.",
    icon: "Rocket",
  },
];
