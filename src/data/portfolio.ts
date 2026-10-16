export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  isConceptual?: boolean;
  note: string;
  highlights: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "finvera",
    title: "Finvera",
    category: "Financial & Expense Tracker App",
    badge: "Live Web App",
    description:
      "Aplikasi manajemen keuangan pribadi modern untuk memantau arus kas masuk dan keluar secara terstruktur, kalkulasi saldo otomatis, dan visualisasi ringkasan transaksi.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://finvera-app.vercel.app/",
    isConceptual: false,
    note: "Proyek aplikasi personal fungsional dengan antarmuka bersih dan cepat.",
    highlights: [
      "Pencatatan transaksi pemasukan & pengeluaran cepat",
      "Kalkulasi saldo dinamis tanpa lag",
      "Antarmuka responsif di smartphone & laptop",
    ],
  },
  {
    id: "tickitz",
    title: "Tickitz",
    category: "Cinema Ticket Booking Platform",
    badge: "Live Web App",
    description:
      "Platform pemesanan tiket bioskop online dengan katalog film tayang, jadwal pemutaran terstruktur, alur pemilihan kursi interaktif, dan simulasi checkout pemesanan.",
    techStack: ["Next.js", "React", "Tailwind CSS", "REST API"],
    demoUrl: "https://tickitz-liard.vercel.app/",
    isConceptual: false,
    note: "Proyek web platform interaktif pemesanan tiket bioskop.",
    highlights: [
      "Eksplorasi jadwal film dan lokasi bioskop",
      "Grid interaktif pemilihan kursi bioskop",
      "Alur pemesanan intuitif dari pemilihan hingga invoice",
    ],
  },
  {
    id: "designer-portfolio-concept",
    title: "Arga Wicaksono — UI/UX & Visual Designer",
    category: "Personal Portfolio Website (Konseptual)",
    badge: "Contoh Model Portofolio",
    description:
      "Konsep website portofolio interaktif untuk desainer grafis dan UI/UX: galeri showcase karya visual, highlight keahlian desain, riwayat pengalaman, dan tombol kontak langsung.",
    techStack: ["Modern Layout", "Framer Motion", "Tailwind CSS", "Responsive"],
    demoUrl: undefined,
    isConceptual: true,
    note: "Template konsep portofolio siap diadaptasi untuk desainer, kreator, dan profesional.",
    highlights: [
      "Hero berfokus pada personal statement & spesialisasi desain",
      "Grid visual karya terkurasi dengan penjelasan studi kasus",
      "Section About, Experience, Tools, & Direct WhatsApp CTA",
    ],
  },
];
