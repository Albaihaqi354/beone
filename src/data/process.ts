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
      "Menentukan scope, fitur, timeline, teknologi, dan estimasi biaya. Semua disepakati bersama sebelum pengerjaan dimulai.",
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
      "Membangun website atau aplikasi menggunakan teknologi modern. Setiap fitur diuji sebelum diserahkan untuk review.",
    icon: "Code2",
  },
  {
    id: "launch",
    number: "05",
    title: "Launch",
    description:
      "Deployment ke server, handover akses, dan support setelah project selesai. Garansi bug 30 hari untuk setiap project.",
    icon: "Rocket",
  },
];
