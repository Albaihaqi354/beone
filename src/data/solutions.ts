export interface Solution {
  id: string;
  icon: string; // lucide icon name
  category: string;
  title: string;
  description: string;
  useCases: string[];
}

export const solutions: Solution[] = [
  {
    id: "landing-page",
    icon: "Layout",
    category: "Web Presence",
    title: "Landing Page",
    description:
      "Simple websites that turn visitors into customers.",
    useCases: [
      "Product landing page",
      "Service landing page",
      "Personal brand",
      "Event & campaign",
      "Coming soon page",
    ],
  },
  {
    id: "company-profile",
    icon: "Building2",
    category: "Web Presence",
    title: "Company Profile",
    description:
      "Professional websites that help businesses build credibility online.",
    useCases: [
      "Company profile",
      "Agency & studio",
      "Corporate website",
      "Professional services",
      "Organization",
    ],
  },
  {
    id: "ecommerce",
    icon: "ShoppingCart",
    category: "E-Commerce",
    title: "E-Commerce",
    description:
      "Online stores designed to help businesses sell products digitally.",
    useCases: [
      "Product catalog",
      "Shopping cart & checkout",
      "Order management",
      "Payment integration",
      "Admin product management",
    ],
  },
  {
    id: "dashboard",
    icon: "LayoutDashboard",
    category: "Business Intelligence",
    title: "Business Dashboard",
    description:
      "Centralized dashboards to monitor and manage your business data.",
    useCases: [
      "Sales dashboard",
      "Analytics & reporting",
      "Financial overview",
      "Performance monitoring",
      "Business intelligence",
    ],
  },
  {
    id: "management-system",
    icon: "Settings2",
    category: "Business System",
    title: "Management System",
    description:
      "Custom systems designed around your business workflow.",
    useCases: [
      "Inventory management",
      "HR & attendance",
      "Booking system",
      "Administration tools",
      "Internal operations",
    ],
  },
  {
    id: "custom-web-app",
    icon: "Code2",
    category: "Custom Solution",
    title: "Custom Web Application",
    description:
      "Tailored web applications built specifically for your unique requirements.",
    useCases: [
      "SaaS product",
      "Marketplace",
      "Finance & CRM system",
      "ERP solution",
      "Custom business application",
    ],
  },
];
