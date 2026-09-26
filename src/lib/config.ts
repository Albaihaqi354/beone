/**
 * Site-wide configuration.
 * Edit this file to update contact info, social links, and WhatsApp number.
 */
export const siteConfig = {
  name: "BeOne",
  tagline: "Build Digital. Be One Step Ahead.",
  supportingText: "Website & Digital Solutions for Growing Businesses.",
  description:
    "BeOne membantu bisnis membangun website, web application, e-commerce, dan solusi digital custom yang modern dan profesional.",
  url: "https://beone.dev", // update with real domain

  /** WhatsApp number in international format without '+' */
  whatsappNumber: "6287727726316",
  whatsappMessage: "Halo BeOne, saya ingin konsultasi mengenai project saya.",

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
