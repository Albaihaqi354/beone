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
      "Perpanjangan domain",
      "Perpanjangan hosting",
      "SSL renewal",
      "Backup berkala",
      "Minor bug fixing",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: "Rp1.000.000",
    period: "tahun",
    features: [
      "Semua fitur Basic",
      "Update konten ringan",
      "Website maintenance",
      "Security check",
      "Minor changes",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: "Rp1.500.000",
    period: "tahun",
    features: [
      "Semua fitur Standard",
      "Priority support",
      "Minor feature updates",
      "Monitoring rutin",
    ],
  },
];
