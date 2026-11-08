import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

const baseUrl = siteConfig.url;

export const metadata: Metadata = {
  title: "BeOne | Web Development & Digital Solutions",
  description:
    "BeOne builds professional websites, business applications, and custom digital solutions tailored to your business needs.",
  keywords: [
    "web development service Indonesia",
    "custom web development Indonesia",
    "professional website development",
    "company profile website",
    "landing page development",
    "e-commerce development",
    "custom web application",
    "digital development studio",
    "BeOne",
  ],
  alternates: {
    canonical: "/en",
    languages: {
      "id": "/",
      "en": "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    url: `${baseUrl}/en`,
    siteName: "BeOne",
    title: "BeOne | Web Development & Digital Solutions",
    description:
      "BeOne builds professional websites, business applications, and custom digital solutions tailored to your business needs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BeOne — Digital Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BeOne | Web Development & Digital Solutions",
    description:
      "BeOne builds professional websites, business applications, and custom digital solutions tailored to your business needs.",
    images: ["/og-image.png"],
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
