"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/config";
import { useLanguage } from "@/lib/language";

function IconInstagram({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function IconGithub({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Selected Works" },
    { href: "#process", label: "Process" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: siteConfig.social.instagram, label: "Instagram", Icon: IconInstagram },
    { href: siteConfig.social.github, label: "GitHub", Icon: IconGithub },
    {
      href: whatsappUrl(t.shared.whatsappDefaultMsg),
      label: "WhatsApp",
      Icon: ({ size }: { size?: number }) => <MessageCircle size={size} aria-hidden="true" />,
    },
  ];

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      style={{ backgroundColor: "#1a1714", color: "#f8f5f0" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Top section */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand column */}
          <div className="md:col-span-4">
            <Link
              href="/"
              className="inline-block mb-5 focus-visible:outline-none"
              aria-label="BeOne — homepage"
            >
              <span
                className="font-display text-2xl font-bold tracking-tight text-[#f8f5f0]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Be<span className="italic font-medium">One</span>
              </span>
            </Link>
            <p className="text-sm text-[#f8f5f0]/60 leading-relaxed max-w-xs mb-6">
              An independent digital development studio building thoughtful websites and digital solutions.
            </p>
            {/* Socials */}
            <div className="flex gap-3" aria-label="Social media links">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`BeOne on ${label}`}
                  className="w-9 h-9 flex items-center justify-center transition-all duration-150"
                  style={{
                    border: "1px solid rgba(248,245,240,0.15)",
                    color: "rgba(248,245,240,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#f8f5f0";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(248,245,240,0.45)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(248,245,240,0.5)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(248,245,240,0.15)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="md:col-span-3 md:col-start-6">
            <p className="editorial-label text-[#f8f5f0]/40 mb-6">Navigation</p>
            <ul className="space-y-3" role="list">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-[#f8f5f0]/60 hover:text-[#f8f5f0] transition-colors duration-150"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-3 md:col-start-10">
            <p className="editorial-label text-[#f8f5f0]/40 mb-6">Contact</p>
            <div className="space-y-3 text-sm text-[#f8f5f0]/60">
              <p>{siteConfig.email}</p>
              <p>+{siteConfig.whatsappNumber}</p>
            </div>
            <a
              href={whatsappUrl(t.shared.whatsappDefaultMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 text-sm font-medium border border-white/20 text-[#f8f5f0]/70 hover:border-white/50 hover:text-[#f8f5f0] transition-all duration-150"
            >
              <MessageCircle size={14} aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(248,245,240,0.1)" }}
        >
          <p className="text-xs" style={{ color: "rgba(248,245,240,0.3)" }}>
            © {year} BeOne. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(248,245,240,0.2)" }}>
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
