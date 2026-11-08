import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import { ThemeProvider } from "@/lib/theme";
import { LanguageProvider } from "@/lib/language";
import { organizationSchema, websiteSchema, servicesSchema } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f5f0" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0e0c" },
  ],
};

const baseUrl = siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "BeOne | Jasa Pembuatan Website & Solusi Digital",
    template: "%s | BeOne",
  },
  description:
    "BeOne membantu individu dan bisnis membangun website profesional, company profile, landing page, toko online, dan aplikasi digital sesuai kebutuhan.",
  keywords: [
    "jasa pembuatan website",
    "jasa website profesional",
    "jasa pembuatan company profile",
    "jasa pembuatan landing page",
    "jasa pembuatan website toko online",
    "jasa pembuatan aplikasi web",
    "jasa pembuatan web app",
    "jasa pembuatan dashboard bisnis",
    "jasa pembuatan sistem informasi",
    "jasa pembuatan aplikasi custom",
    "jasa pembuatan website portfolio",
    "website untuk UMKM",
    "website untuk bisnis",
    "pembuatan website responsif",
    "custom web development Indonesia",
    "web development service Indonesia",
    "digital development studio Indonesia",
    "BeOne",
  ],
  authors: [{ name: "BeOne", url: baseUrl }],
  creator: "BeOne",
  publisher: "BeOne",
  applicationName: "BeOne",
  category: "Technology",
  alternates: {
    canonical: "/",
    languages: {
      "id": "/",
      "en": "/en",
      "x-default": "/",
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    url: baseUrl,
    siteName: "BeOne",
    title: "BeOne | Jasa Pembuatan Website & Solusi Digital",
    description:
      "BeOne membantu individu dan bisnis membangun website profesional, company profile, landing page, toko online, dan aplikasi digital sesuai kebutuhan.",
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
    title: "BeOne | Jasa Pembuatan Website & Solusi Digital",
    description:
      "BeOne membantu individu dan bisnis membangun website profesional, company profile, landing page, toko online, dan aplikasi digital sesuai kebutuhan.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* JSON-LD Structured Data — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* JSON-LD Structured Data — WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* JSON-LD Structured Data — Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-200">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
