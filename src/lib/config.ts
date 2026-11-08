/**
 * Site-wide configuration.
 * Edit this file to update contact info, social links, and WhatsApp number.
 */
export const siteConfig = {
  name: "BeOne",
  tagline: "Build Digital. Be One Step Ahead.",
  description:
    "BeOne adalah independent digital development studio yang membantu individu dan bisnis membangun website serta solusi digital yang dirancang sesuai kebutuhan mereka.",
  url: "https://beone-here.vercel.app",

  /** WhatsApp number in international format without '+' */
  whatsappNumber: "6287727726316",
  whatsappMessage: "Halo BeOne, saya ingin konsultasi mengenai kebutuhan digital saya.",

  email: "bianalbaihaqi190@gmail.com",

  social: {
    instagram: "https://www.instagram.com/bian.disini/",
    github: "https://github.com/Albaihaqi354",
  },
} as const;


/** Generates a WhatsApp deep-link URL */
export function whatsappUrl(message?: string): string {
  const msg = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${msg}`;
}
