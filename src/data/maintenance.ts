export interface MaintenancePlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
}

export const maintenancePlans: MaintenancePlan[] = [
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
];
