export interface Benefit {
  id: string;
  icon: string; // lucide icon name
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    id: "custom-dev",
    icon: "Layers",
    title: "Pengembangan Kustom",
    description:
      "Website dibuat berdasarkan kebutuhan bisnis, bukan sekadar mengisi template. Setiap project unik.",
  },
  {
    id: "modern-tech",
    icon: "Zap",
    title: "Teknologi Modern & Cepat",
    description:
      "Menggunakan teknologi modern untuk menghasilkan website yang cepat, scalable, dan mudah dikembangkan.",
  },
  {
    id: "responsive",
    icon: "Monitor",
    title: "Desain Responsif Mobile-First",
    description:
      "Website nyaman digunakan di mobile, tablet, maupun desktop. Mobile-first approach pada setiap project.",
  },
  {
    id: "seo",
    icon: "Search",
    title: "Struktur Ramah SEO",
    description:
      "Struktur website dibuat dengan mempertimbangkan SEO dasar sehingga lebih mudah ditemukan di Google.",
  },
  {
    id: "transparent",
    icon: "FileText",
    title: "Transparansi Biaya & Scope",
    description:
      "Harga dan scope pekerjaan dijelaskan sejak awal. Tidak ada biaya tersembunyi di luar yang disepakati.",
  },
  {
    id: "support",
    icon: "HeadphonesIcon",
    title: "Dukungan & Garansi 30 Hari",
    description:
      "Tersedia opsi maintenance setelah serah terima. Garansi bug 30 hari mencakup perbaikan kendala fungsional bawaan sesuai scope kesepakatan awal.",
  },
];
