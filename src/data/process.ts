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
    title: "Discovery",
    description:
      "Kami memulai dengan memahami kebutuhan, tujuan bisnis, dan target audiens client. Diskusi awal ini membentuk fondasi seluruh project.",
    icon: "MessageSquare",
  },
  {
    id: "planning",
    number: "02",
    title: "Planning",
    description:
      "Menentukan scope fitur, spesifikasi teknis, estimasi timeline, dan biaya transparan. Perhitungan estimasi pengerjaan dimulai resmi setelah brief dan materi lengkap diserahkan client.",
    icon: "ClipboardList",
  },
  {
    id: "design",
    number: "03",
    title: "Design",
    description:
      "Membuat UI/UX dan struktur halaman yang sesuai dengan branding client. Client mendapat preview sebelum development dimulai.",
    icon: "Palette",
  },
  {
    id: "development",
    number: "04",
    title: "Development",
    description:
      "Membangun website atau aplikasi menggunakan teknologi modern. Perubahan scope di tengah jalan atau keterlambatan materi dapat memengaruhi jadwal penyelesaian.",
    icon: "Code2",
  },
  {
    id: "launch",
    number: "05",
    title: "Launch",
    description:
      "Deployment ke hosting/server, handover akses, dan panduan penggunaan. Garansi bug 30 hari aktif sejak serah terima untuk menangani kendala teknis bawaan.",
    icon: "Rocket",
  },
];
