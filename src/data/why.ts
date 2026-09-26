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
    title: "Custom Development",
    description:
      "Website dibuat berdasarkan kebutuhan bisnis, bukan sekadar mengisi template. Setiap project unik.",
  },
  {
    id: "modern-tech",
    icon: "Zap",
    title: "Modern Technology",
    description:
      "Menggunakan teknologi modern untuk menghasilkan website yang cepat, scalable, dan mudah dikembangkan.",
  },
  {
    id: "responsive",
    icon: "Monitor",
    title: "Responsive Design",
    description:
      "Website nyaman digunakan di mobile, tablet, maupun desktop. Mobile-first approach pada setiap project.",
  },
  {
    id: "seo",
    icon: "Search",
    title: "SEO Friendly",
    description:
      "Struktur website dibuat dengan mempertimbangkan SEO dasar sehingga lebih mudah ditemukan di Google.",
  },
  {
    id: "transparent",
    icon: "FileText",
    title: "Transparent Pricing",
    description:
      "Harga dan scope pekerjaan dijelaskan sejak awal. Tidak ada biaya tersembunyi di luar yang disepakati.",
  },
  {
    id: "support",
    icon: "HeadphonesIcon",
    title: "After-Sales Support",
    description:
      "Tersedia maintenance dan support setelah project selesai. Garansi bug 30 hari untuk setiap project.",
  },
];
