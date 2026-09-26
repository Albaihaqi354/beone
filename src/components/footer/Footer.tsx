import { MessageCircle } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/config";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

/* Inline SVG brand icons — lucide-react v1 does not ship brand icons */
function IconInstagram({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function IconGithub({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );
}

const socialLinks = [
  {
    href: siteConfig.social.instagram,
    label: "Instagram",
    Icon: IconInstagram,
  },
  {
    href: siteConfig.social.github,
    label: "GitHub",
    Icon: IconGithub,
  },
  {
    href: whatsappUrl(),
    label: "WhatsApp",
    Icon: ({ size }: { size?: number }) => <MessageCircle size={size} aria-hidden="true" />,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-neutral-950 text-white"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {/* Brand */}
          <div className="md:col-span-1">
            <a
              href="/"
              className="inline-block text-xl font-black tracking-tight mb-3"
              aria-label="BeOne — go to homepage"
            >
              Be<span className="text-indigo-400">One</span>
            </a>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-neutral-500 mt-2">
              {siteConfig.supportingText}
            </p>

            {/* Socials */}
            <div className="mt-5 flex gap-3" aria-label="Social media links">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`BeOne on ${label}`}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-neutral-800 hover:bg-indigo-500 text-neutral-400 hover:text-white transition-all duration-150"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-2.5" role="list">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA block */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4">
              Start a Project
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Siap memulai project digital Anda? Hubungi kami untuk konsultasi
              gratis.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-semibold rounded-xl transition-colors"
              aria-label="Chat with BeOne on WhatsApp"
            >
              <MessageCircle size={15} aria-hidden="true" />
              Let&apos;s Talk
            </a>
            <p className="mt-4 text-xs text-neutral-500">
              {siteConfig.email}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">
            © {year} BeOne. All rights reserved.
          </p>
          <p className="text-xs text-neutral-600">
            Built with Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
