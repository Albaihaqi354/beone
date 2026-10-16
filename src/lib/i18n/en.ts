import type { Translations } from "./types";

/**
 * English (en) translations for BeOne
 */
export const en: Translations = {
  /* ─── Meta / SEO ─── */
  meta: {
    title: "BeOne — Digital Solutions for Personal Brand & Business",
    description:
      "BeOne helps individuals, creators, and small businesses build a professional digital presence through portfolio websites, digital catalogs, landing pages, and modern web solutions.",
    ogTitle: "BeOne — Digital Solutions for Personal Brand & Business",
  },

  /* ─── Navbar ─── */
  nav: {
    home: "Home",
    portfolio: "Portfolio",
    services: "Services",
    pricing: "Pricing",
    process: "Process",
    faq: "FAQ",
    contact: "Contact",
    cta: "Free Consultation",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    chatWhatsapp: "Chat Directly on WhatsApp",
    langToggle: "Select language",
    navAria: "Main Navigation",
    mobileMenuAria: "Mobile navigation menu",
    scrollToTop: "Scroll to top",
  },

  /* ─── Hero ─── */
  hero: {
    eyebrow: "DIGITAL SOLUTIONS & QUALITY WEBSITES",
    headline1: "Digital Solutions for",
    headline2: "Personal Brand & Business.",
    subheadline:
      "Build a professional digital identity through portfolio websites, digital catalogs, landing pages, promotional design, and web solutions tailored to your needs.",
    microcopy:
      "Custom design · Mobile-first responsive · Transparent pricing with no hidden fees",
    ctaPrimary: "Free Consultation",
    ctaSecondary: "View Portfolio",
    ctaPrimaryLabel: "Free Consultation — go to consultation form",
    ctaSecondaryLabel: "View Portfolio — explore real projects and ready-to-use concepts",
    highlights: [
      "Developers, Designers, Freelancers & Small Business Owners",
      "Fast Turnaround (1–3 Business Days after Materials Ready)",
      "Free Cloud Hosting with No Monthly Fees & Domain Guidance",
      "Services Starting at Rp75k (Design) / Rp150k (Website)",
    ],
    floatingHostingFree: "Free Hosting Active",
    floatingPriceFrom: "Starting from",
    floatingTransparent: "Transparent Pricing",
    portfolioLive: "Portfolio Live",
    mockupTitle: "Your Personal Portfolio",
    mockupRole: "Software Engineer & Creator",
    mockupQuote: "Building fast, responsive digital products that make a real impact.",
    mockupViewProjects: "View Projects",
    mockupContact: "Contact",
    mockupShowcase: "Project Showcase",
  },

  /* ─── Trust Bar ─── */
  trust: {
    label: "BeOne Service Facts & Advantages",
    items: [
      { title: "Next.js & TypeScript", subtitle: "Modern, fast, and lightweight technology" },
      { title: "30-Day Bug Guarantee", subtitle: "Post-launch technical error fixes included" },
      { title: "Free Monthly Hosting", subtitle: "Deploy via modern cloud with active SSL" },
      { title: "Custom & Distinctive Design", subtitle: "Tailored to your brand identity" },
      { title: "Transparent Pricing", subtitle: "Defined scope with no hidden costs" },
    ],
  },

  /* ─── Portfolio ─── */
  portfolio: {
    label: "Portfolio",
    title: "Real Work & Verified Projects",
    subtitle:
      "See real projects we have built and ready-to-use portfolio concepts designed to strengthen your professional credibility.",
    liveApp: "Live App",
    viewDemo: "View Demo",
    conceptual: "Conceptual",
    techStack: "Tech Stack",
    highlights: "Highlights",
    interested: "Interested in a portfolio website with a clean structure like this?",
    close: "Close",
    buildMine: "Build My Portfolio",
    filterAll: "All",
    filterLive: "Live Projects",
    filterConcept: "Ready-Made Concepts",
    projects: {
      finvera: {
        title: "Finvera",
        category: "Financial & Expense Tracker App",
        badge: "Live Web App",
        description:
          "A modern personal finance management app to track income and expenses in a structured way, with automatic balance calculation and transaction summary visualization.",
        note: "A functional personal app project with a clean, fast interface.",
        highlights: [
          "Quick income & expense transaction recording",
          "Dynamic balance calculation with no lag",
          "Responsive interface across smartphones and laptops",
        ],
      },
      tickitz: {
        title: "Tickitz",
        category: "Cinema Ticket Booking Platform",
        badge: "Live Web App",
        description:
          "An online cinema ticket booking platform featuring currently showing movies, structured showtime schedules, an interactive seat selection flow, and order checkout simulation.",
        note: "An interactive cinema ticket booking web platform project.",
        highlights: [
          "Explore movie schedules and theater locations",
          "Interactive theater seat selection grid",
          "Intuitive booking flow from seat selection to invoice",
        ],
      },
      designerPortfolio: {
        title: "Arga Wicaksono — UI/UX & Visual Designer",
        category: "Personal Portfolio Website (Conceptual)",
        badge: "Portfolio Model Example",
        description:
          "An interactive portfolio website concept for graphic and UI/UX designers: visual project showcase gallery, design skill highlights, experience history, and direct contact buttons.",
        note: "A ready-to-adapt portfolio concept template for designers, creators, and professionals.",
        highlights: [
          "Hero section focusing on personal statement & design specialties",
          "Curated visual project grid with case study breakdowns",
          "About, Experience, Tools sections & Direct WhatsApp CTA",
        ],
      },
    },
  },

  /* ─── Services ─── */
  services: {
    label: "Service Catalog",
    title: "Digital Services for Every Need & Budget",
    subtitle:
      "From affordable entry-level solutions (Rp75,000–Rp500,000) to get online fast, to full-scale custom web systems.",
    filterAll: "All Services",
    filterEntry: "Entry-Level (Rp75k–Rp500k)",
    filterPersonal: "Personal & Creators",
    filterBusiness: "Business Websites",
    filterAdvanced: "Custom Web Apps",
    useCases: "Suitable for",
    exclusions: "Please Note",
    consult: "Discuss Your Needs",
    selectService: "Select This Service",
    items: [
      {
        id: "personal-portfolio",
        title: "Personal Portfolio Website",
        category: "personal",
        categoryLabel: "Personal & Creative",
        description:
          "A single-page website to showcase your profile, skills, experience, and best work professionally to reflect your personal brand.",
        startingPrice: "Starting at Rp150,000",
        priceNote: "Basic single page package",
        badge: "Featured Service",
        scopeSummary:
          "Available in Starter (from Rp150,000) 1 responsive page with max 3 basic projects, Professional (Rp349,000) with up to 6 curated project showcases, and Premium (from Rp599,000) in-depth case studies.",
        useCases: [
          "Web Developers & Programmers",
          "UI/UX & Graphic Designers",
          "Freelancers & Content Creators",
          "Students & Fresh Graduates Entering Job Market",
          "Consultants & Independent Professionals",
        ],
        exclusions: [
          "Paid domain (.com/.id) not included (setup assistance provided)",
          "Additional projects above package limits subject to quote",
        ],
      },
      {
        id: "promo-design",
        title: "Promotional Content Design",
        category: "personal",
        categoryLabel: "Personal & Creative",
        description:
          "A package of 5 (five) ready-to-post promotional visual designs for your social media to engage customers and drive conversions.",
        startingPrice: "Rp75,000–100,000",
        priceNote: "Package of 5 Content Designs",
        badge: "Package of 5 Designs",
        scopeSummary:
          "Package of 5 promotional designs, 1 agreed dimension format (Feed 1:1 or Story 9:16), content from client, 1–2x revisions, high-resolution JPG/PNG files.",
        useCases: [
          "Small Business Product & Discount Promos",
          "Announcement & Event/Webinar Banners",
          "Digital Social Media Flyers",
          "Instagram Feed & Story Branding",
        ],
        exclusions: [
          "Not a price per single design — this is a value package of 5 designs",
          "Text copy & product images provided by client",
          "Does not include copywriting from scratch or photography",
        ],
      },
      {
        id: "umkm-catalog",
        title: "Digital Catalog for Small Businesses",
        category: "business",
        categoryLabel: "Business Websites",
        description:
          "A simple online product catalog or menu making it effortless for customers to view your offerings and order directly via WhatsApp.",
        startingPrice: "Starting at Rp150,000",
        priceNote: "Responsive online catalog",
        badge: "Small Business Solution",
        scopeSummary:
          "Product/menu listing, photos, names, prices, short descriptions, per-item WhatsApp order button, smartphone-optimized, free hosting publication.",
        useCases: [
          "Cafes, Eateries & Food Catering",
          "Fashion Boutiques & Apparel Brands",
          "Handmade Crafts & Home-based Products",
          "Local Service Providers Catalog",
        ],
        exclusions: [
          "Does not include automatic payment gateway",
          "Does not include admin dashboard or complex database",
          "Not a full e-commerce system",
        ],
      },
      {
        id: "business-landing-page",
        title: "Business Landing Page",
        category: "business",
        categoryLabel: "Business Websites",
        description:
          "A conversion-focused single-page website featuring your primary offer, key advantages, and direct WhatsApp call-to-actions.",
        startingPrice: "Rp350,000–500,000",
        priceNote: "Single page business site",
        badge: "Quick Launch",
        scopeSummary:
          "1 business page, hero section with clear value proposition, service/product info, business strengths, WhatsApp/contact buttons, responsive, free hosting.",
        useCases: [
          "Professional & Service Businesses",
          "Specific Product Promotion / Pre-Orders",
          "Special Offer Campaigns & Launches",
          "Concise Digital Profile for Small Businesses",
        ],
        exclusions: [
          "Final price depends on section count and design assets provided",
          "Custom .com domain not included (optional setup assistance)",
        ],
      },
      {
        id: "company-profile",
        title: "Company Profile",
        category: "business",
        categoryLabel: "Business Websites",
        description:
          "A professional multi-page website presenting your company identity, legal credentials, services, and establishing trust with corporate clients.",
        startingPrice: "Rp2,500,000",
        priceNote: "Complete 5–6 pages",
        useCases: [
          "Corporations & Enterprises",
          "Agencies & Creative Studios",
          "Institutions & Foundations",
          "B2B Businesses & Contractors",
        ],
      },
      {
        id: "business-website",
        title: "Full Business Website",
        category: "business",
        categoryLabel: "Business Websites",
        description:
          "A full-featured business website: dynamic product/service catalogs, blog article system, content filters, and easy-to-manage CMS.",
        startingPrice: "Rp4,000,000",
        priceNote: "Up to 10 pages + CMS",
        useCases: [
          "Businesses with Wide Product Lines",
          "Business Education & News Portals",
          "Companies with Frequent Content Updates",
        ],
      },
      {
        id: "ecommerce",
        title: "E-Commerce Store",
        category: "advanced",
        categoryLabel: "Advanced Development",
        description:
          "A complete online store with product management, shopping cart, integrated checkout flow, and merchant order management.",
        startingPrice: "Starting at Rp6,000,000",
        priceNote: "Integrated online store",
        useCases: [
          "Retail & D2C Consumer Brands",
          "Multi-Category Online Stores",
          "Digital Wholesale & Distribution",
        ],
      },
      {
        id: "custom-web-app",
        title: "Custom Web App",
        category: "advanced",
        categoryLabel: "Advanced Development",
        description:
          "Custom web systems and applications built for unique business workflows — inventory management, POS cashiers, booking, HR, or SaaS products.",
        startingPrice: "Starting at Rp7,500,000",
        priceNote: "Based on required scope",
        useCases: [
          "Warehouse & Inventory Management",
          "Point of Sale (POS) Cashier Systems",
          "Online Reservation & Queue Systems",
          "Internal Corporate Dashboards",
        ],
      },
      {
        id: "mobile-app",
        title: "Mobile App",
        category: "advanced",
        categoryLabel: "Advanced Development",
        description:
          "Cross-platform Android & iOS mobile applications built for business operations or customer-facing digital products with modern performance.",
        startingPrice: "Rp8,000,000",
        priceNote: "Cross-platform mobile",
        useCases: [
          "Dedicated Member/Customer Apps",
          "Field Team Operational Apps",
          "Digital Products & Startup MVPs",
        ],
      },
    ],
  },

  /* ─── Pricing ─── */
  pricing: {
    label: "Packages & Investment",
    title: "Transparent Pricing & Packages",
    subtitle:
      "Affordable packages starting at Rp75,000 to test the market and get online quickly, with clearly defined scope.",
    tabEntry: "Entry-Level (Rp75k–Rp500k)",
    tabPortfolio: "Full Portfolio Websites",
    tabBusiness: "Business & Custom Solutions",
    recommended: "Top Recommendation",
    termsTitle: "Service Terms, Timeline Estimates & Guarantee:",
    terms: [
      {
        label: "Custom Domain (.com/.id):",
        text: "Not included in entry-level packages unless explicitly stated. We provide clear setup guidance or activation assistance.",
      },
      {
        label: "Free Hosting:",
        text: "Deployed on modern cloud platforms (Vercel/Netlify/GitHub Pages) with active SSL certificates and zero monthly server rent.",
      },
      {
        label: "Timeline Calculation:",
        text: "Business days are officially counted once all materials (text, photos, data) and scope are fully submitted and agreed upon. Delays in materials or mid-project scope additions may adjust delivery schedules.",
      },
      {
        label: "30-Day Bug Guarantee:",
        text: "Guarantees free fixes for built-in functional code errors delivered by BeOne (does not include new feature additions beyond original scope).",
      },
      {
        label: "Promotional Design Package:",
        text: "A complete bundle of 5 ready-to-post content designs (not a single-design price) with text and product photos supplied by the client.",
      },
    ],
    addonsTitle: "Add-ons & Extra Features",
    addonsSubtitle: "Add extra features or custom pages tailored to your project with predictable pricing.",
    addonsAskCustom: "Inquire Custom Needs",
    addonsNote: "* Add-on pricing estimates may vary depending on specific technical complexity.",
    askWhatsappMsg: "Hi BeOne, I'd like to inquire about add-ons for my project.",
    planAria: "pricing plan",
    featuresAria: "Features included in plan",
    categoryAria: "Pricing plan category selection",
    entryPlans: [
      {
        id: "promo-design",
        name: "Promotional Content Design",
        label: "Package of 5 Designs",
        price: "Rp75,000–100,000",
        priceNote: "Complete package of 5 designs (not per design)",
        target: "Small businesses, online shops, and creators needing ready-to-post promotional visuals for social media.",
        duration: "1–2 business days (after materials ready)",
        revisions: "1–2x minor revisions",
        hostingInfo: "High-resolution final files (PNG / JPG) ready to upload",
        cta: "Order Design Package",
        category: "entry",
        features: [
          "Complete package of 5 (five) promotional content designs",
          "1 agreed format size (Square Feed 1:1 or Story 9:16)",
          "Text copy & product details provided by client",
          "Clean visual design aligned with your brand identity",
          "Up to 1–2 rounds of minor revisions",
          "High-resolution final files ready to post (PNG / JPG)",
          "*Important: Not a price for 1 design — this is a package of 5 designs*",
        ],
      },
      {
        id: "umkm-catalog",
        name: "Small Business Digital Catalog",
        label: "Online Menu & Catalog",
        price: "Rp150,000",
        priceNote: "Starting from",
        target: "Culinary businesses, cafes, food stalls, apparel shops, and home product makers.",
        duration: "1–2 business days (after materials ready)",
        revisions: "1x minor revision",
        hostingInfo: "Free hosting via Vercel / Netlify (zero monthly server fees)",
        cta: "Choose Small Business Catalog",
        category: "entry",
        features: [
          "Clean online catalog for products or digital menus",
          "Product photos, names, prices, and brief descriptions",
          "Direct WhatsApp ordering button per item",
          "Responsive layout optimized for customer smartphones",
          "Active free cloud hosting with no monthly fees",
          "1x minor revision",
          "*Exclusions:* Does not include payment gateway, admin dashboard, or complex database",
        ],
      },
      {
        id: "portfolio-starter",
        name: "Personal Portfolio Starter",
        label: "Single Page Portfolio",
        price: "Rp150,000",
        priceNote: "Starting from",
        target: "Developers, designers, freelancers, students & job seekers wanting a quick, clean personal site.",
        duration: "1–3 business days (after materials ready)",
        revisions: "1x minor revision",
        hostingInfo: "Free hosting via Vercel / Netlify / GitHub Pages (no monthly fee)",
        cta: "Choose Portfolio Starter",
        popular: true,
        category: "entry",
        features: [
          "1 structured page (Single page layout)",
          "Concise profile and professional introduction bio",
          "Skills, experience, education, or profession highlights",
          "Up to 3 selected projects in the base package",
          "Contact section and social media links",
          "Responsive design (mobile & desktop)",
          "Visual styling tailored to your profession and identity",
          "Published on free cloud hosting with zero server costs",
          "1x minor revision",
          "Custom domain setup guide (custom domain purchased separately)",
        ],
      },
      {
        id: "business-landing-page",
        name: "Business Landing Page",
        label: "Single Page Business",
        price: "Rp350,000–500,000",
        priceNote: "Depends on section count & needs",
        target: "Service providers, small businesses, or special offers needing a dedicated promotional page.",
        duration: "2–4 business days (after materials ready)",
        revisions: "2x revisions",
        hostingInfo: "Free hosting with zero monthly server fees",
        cta: "Choose Business Landing Page",
        category: "entry",
        features: [
          "Single-page business site focused on sales conversions",
          "Hero section with a clear primary value proposition",
          "Service overview or featured product showcase section",
          "Business strengths & value proposition highlights",
          "Direct WhatsApp or contact call-to-action buttons",
          "Mobile-first responsive design",
          "Free cloud hosting with no monthly hosting bills",
          "2x revisions",
          "*Note:* Final price depends on content, section count, and provided assets",
        ],
      },
    ],
    portfolioPlans: [
      {
        id: "portfolio-starter",
        name: "Personal Portfolio Starter",
        label: "Students & Beginners",
        price: "Rp150,000",
        priceNote: "Starting from",
        target: "Students, fresh graduates, or beginners needing a clean, rapid personal online presence.",
        duration: "1–3 business days (after materials ready)",
        revisions: "1x minor revision",
        hostingInfo: "Free hosting via Vercel / Netlify / GitHub Pages (no monthly fee)",
        cta: "Choose Starter",
        category: "portfolio",
        features: [
          "1 structured page (Single page layout)",
          "Short profile & professional bio",
          "Education / work experience history",
          "Skills list showcase",
          "Up to 3 selected projects",
          "Contact section & social links",
          "Responsive design (mobile & desktop)",
          "Deployment on suitable free cloud hosting",
          "1x minor revision",
          "Self-setup guide for custom domain (domain purchased separately)",
        ],
      },
      {
        id: "portfolio-professional",
        name: "Personal Portfolio Professional",
        label: "Top Recommendation",
        price: "Rp349,000",
        priceNote: "Most popular & curated",
        target: "Web developers, UI/UX designers, freelancers, and professionals seeking a standout personal brand.",
        duration: "3–5 business days (after materials ready)",
        revisions: "2x revisions",
        hostingInfo: "Free hosting via Vercel / Netlify + custom domain connection assistance",
        cta: "Choose Professional",
        popular: true,
        category: "portfolio",
        features: [
          "1 page with distinct, curated personal branding",
          "Complete sections: About, Skills, Projects, Experience, Contact",
          "Up to 6 interactive project showcases",
          "Smooth animations & transition polish",
          "Mobile-first responsive design",
          "WhatsApp CTA & direct contact inquiry form",
          "Deployment on suitable free cloud hosting",
          "2x revisions",
          "Guidance & assistance connecting your custom domain",
        ],
      },
      {
        id: "portfolio-premium",
        name: "Personal Portfolio Premium",
        label: "In-Depth Custom",
        price: "Rp599,000",
        priceNote: "Starting from",
        target: "Senior developers, consultants, creators, or professionals needing comprehensive case studies.",
        duration: "5–10 business days (after scope agreement)",
        revisions: "3x revisions",
        hostingInfo: "Free hosting / custom server setup as agreed",
        cta: "Consult Premium",
        isCustom: true,
        category: "portfolio",
        features: [
          "Advanced architectural structure & bespoke design",
          "In-depth, comprehensive project case studies",
          "Additional pages or custom sections as agreed",
          "Extra integrations (project filters, blog articles, or custom forms)",
          "Cross-browser testing & full responsiveness",
          "Custom animations & micro-interactions",
          "3x revisions",
          "Final price & timeline confirmed after initial consultation",
        ],
      },
    ],
    businessPlans: [
      {
        id: "company-profile",
        name: "Company Profile",
        label: "Business Credibility",
        price: "Rp2,500,000",
        duration: "7–14 business days (after materials ready)",
        revisions: "3x revisions",
        hostingInfo: "Includes .com domain & 1st-year hosting",
        cta: "Choose Company Profile",
        category: "business",
        features: [
          "Up to 5–6 professional pages",
          "Custom UI/UX reflecting corporate brand identity",
          "Responsive mobile-first layout",
          "Pages: Home, About, Services, Portfolio, Contact",
          "Integrated WhatsApp button & contact inquiry form",
          "Google Maps embed & basic on-page SEO",
          "Google Analytics setup & SSL / HTTPS configuration",
          ".com domain & 1 year hosting included",
          "3x revisions",
          "Deployment & 30-day bug guarantee",
        ],
      },
      {
        id: "business-website",
        name: "Full Business Website",
        label: "Feature-Rich Site",
        price: "Rp4,000,000",
        duration: "2–3 weeks (structured stages)",
        revisions: "4x revisions",
        hostingInfo: "Includes .com domain & 1st-year hosting",
        cta: "Choose Business Website",
        popular: true,
        category: "business",
        features: [
          "Up to 10 structured pages",
          "Custom UI/UX & unified design system",
          "Dynamic Product / Service Catalog",
          "Content search & category filtering",
          "Company news / blog publication system",
          "Contact form & direct WhatsApp messaging",
          "Lightweight CMS / admin panel for content management",
          "Database & backend API architecture",
          "SSL, .com domain & 1 year hosting included",
          "4x revisions",
          "Deployment & 30-day bug guarantee",
        ],
      },
      {
        id: "ecommerce",
        name: "E-Commerce Store",
        label: "Online Store",
        price: "Rp6,000,000",
        priceNote: "Starting from",
        duration: "3–5 weeks (structured stages)",
        revisions: "Per agreed scope",
        hostingInfo: "Includes domain & 1st-year hosting",
        cta: "Choose E-Commerce",
        category: "business",
        features: [
          "Product catalog & individual detail pages",
          "Product categories, search & sorting",
          "Shopping cart & checkout flow",
          "User accounts & order history",
          "Admin dashboard for inventory & order tracking",
          "WhatsApp order integration or payment gateway",
          "Mobile-first responsive design",
          "Basic search engine optimization",
          "Domain & 1 year hosting included",
          "SSL certification & production deployment",
          "30-day bug warranty included",
        ],
      },
      {
        id: "custom-web-app",
        name: "Custom Web App",
        label: "Custom System",
        price: "Rp7,500,000",
        priceNote: "Starting from",
        duration: "Based on required scope",
        cta: "Discuss Custom Project",
        isCustom: true,
        category: "business",
        features: [
          "Internal software (Inventory, POS, HR, Booking, CRM, SaaS)",
          "Features designed specifically around your operational workflow",
          "Custom UI/UX & modern database architecture",
          "REST API & role-based authentication",
          "Analytics dashboard & reporting modules",
          "Deployment to cloud or client-managed servers",
          "30-day bug warranty & handover documentation",
        ],
      },
    ],
    addons: [
      { name: "Additional Page (Landing/Web)", startingPrice: "Rp200,000" },
      { name: "Additional Custom Section", startingPrice: "Rp100,000" },
      { name: "Custom Domain Purchase & Setup (.com / .id)", startingPrice: "Rp250,000" },
      { name: "1 Additional Promotional Content Design", startingPrice: "Rp20,000" },
      { name: "User Authentication / Member Login", startingPrice: "Rp500,000" },
      { name: "Lightweight Admin Dashboard", startingPrice: "Rp750,000" },
      { name: "Database & Backend API", startingPrice: "Rp750,000" },
      { name: "Payment Gateway Integration", startingPrice: "Rp750,000" },
      { name: "CMS / Content Management System", startingPrice: "Rp1,000,000" },
      { name: "Third-Party API Integration", startingPrice: "Rp500,000" },
      { name: "Excel / PDF Export Capability", startingPrice: "Rp500,000" },
      { name: "Advanced SEO Optimization", startingPrice: "Rp750,000" },
    ],
  },

  /* ─── Maintenance ─── */
  maintenance: {
    label: "Maintenance & After-Sales",
    title: "Keep Your Website Performing at Its Best",
    subtitle:
      "Periodic technical maintenance, routine backups, and content updates after the initial warranty expires.",
    selectPlan: "Select Plan",
    period: "year",
    transparencyTitle: "Third-Party Cost Transparency & Maintenance Scope:",
    transparencyText:
      "Official renewal fees for domain names (.com/.id) or third-party cloud hosting are billed transparently according to actual registrar/cloud invoices with no hidden markup. For websites hosted on free cloud tiers (Vercel/Netlify), there are no monthly server rental fees. New feature requests, comprehensive design redesigns, or system migrations are quoted separately.",
    featuresAria: "Features included in plan",
    planAria: "maintenance plan",
    plans: [
      {
        id: "basic",
        name: "Basic",
        price: "Rp500,000",
        period: "year",
        features: [
          "Periodic performance & uptime monitoring",
          "SSL / HTTPS certificate maintenance & assistance",
          "Domain & DNS configuration troubleshooting",
          "Minor bug fixing & broken link checks",
          "Minor text/contact updates (up to 2x/year)",
        ],
      },
      {
        id: "standard",
        name: "Standard",
        price: "Rp1,000,000",
        period: "year",
        features: [
          "All features from the Basic plan",
          "Periodic minor content & visual asset updates",
          "Dependency health checks & compatibility reviews",
          "Google Analytics & Search Console configuration assistance",
          "Minor layout & styling adjustments",
        ],
      },
      {
        id: "professional",
        name: "Professional",
        price: "Rp1,500,000",
        period: "year",
        features: [
          "All features from the Standard plan",
          "Priority technical support with fast response times",
          "Minor functional tweaks & periodic section additions",
          "Routine monitoring & page speed optimization",
          "Periodic technical consultation for growth",
        ],
      },
    ],
  },

  /* ─── Process ─── */
  process: {
    label: "Workflow",
    title: "How We Work",
    subtitle:
      "A transparent, structured, and measurable workflow from the initial brief to public launch.",
    bottomNote: "Every stage is carried out transparently and collaboratively.",
    guarantee: "30-Day Bug Guarantee",
    guaranteeDetail:
      "covers fixes for technical and functional bugs according to the original agreement from the handover date.",
    stepsAria: "Work process steps",
    stepLabel: "Step",
    steps: [
      {
        id: "discovery",
        number: "01",
        title: "Consultation & Brief",
        description:
          "Discussing your profile, goals, visual preferences, and supplied materials as the solid starting foundation for the project.",
      },
      {
        id: "planning",
        number: "02",
        title: "Proposal & Scope Agreement",
        description:
          "Selecting the right package, estimating delivery timelines, and agreeing on transparent pricing. Official business days start once all materials are received.",
      },
      {
        id: "development",
        number: "03",
        title: "UI Design & Technical Build",
        description:
          "Crafting responsive interfaces and building your website with modern Next.js & TypeScript code that is fast and SEO-ready.",
      },
      {
        id: "review",
        number: "04",
        title: "Review & Package Revisions",
        description:
          "You preview the live website draft directly and request adjustments or minor revisions within your agreed package limits.",
      },
      {
        id: "launch",
        number: "05",
        title: "Finalization & Handover",
        description:
          "Cloud deployment, SSL verification, full access credential handover, and activation of your 30-day post-launch bug warranty.",
      },
    ],
  },

  /* ─── Why BeOne ─── */
  why: {
    label: "Our Advantages",
    title: "Why Choose BeOne?",
    subtitle:
      "We believe every individual and business deserves a professional digital presence crafted to match their unique identity.",
    benefits: [
      {
        id: "custom-dev",
        title: "Custom Development",
        description:
          "Websites tailored to your specific business requirements, not cookie-cutter templates. Every project is unique.",
      },
      {
        id: "modern-tech",
        title: "Modern & Fast Technology",
        description:
          "Built using modern frontend architecture to produce websites that are lightning-fast, scalable, and easy to maintain.",
      },
      {
        id: "responsive",
        title: "Mobile-First Responsive Design",
        description:
          "Flawless user experience across mobile phones, tablets, and desktops. We apply a mobile-first approach on every project.",
      },
      {
        id: "seo",
        title: "SEO-Friendly Foundation",
        description:
          "Semantic HTML and structured metadata designed with fundamental SEO best practices so you are easily discovered on Google.",
      },
      {
        id: "transparent",
        title: "Transparent Pricing & Scope",
        description:
          "Pricing and project scope are clearly defined upfront. No hidden surprises or unexpected extra charges.",
      },
      {
        id: "support",
        title: "Support & 30-Day Guarantee",
        description:
          "Ongoing maintenance options available after launch. Our 30-day bug warranty covers fixes for all built-in functional bugs.",
      },
    ],
  },

  /* ─── FAQ ─── */
  faq: {
    label: "FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Common questions regarding our services, workflow, and pricing.",
    stillHaveQuestions: "Still have questions?",
    askUs: "Ask Us Directly",
    aria: "Frequently asked questions",
    items: [
      {
        id: "entry-services",
        question: "What are BeOne's affordable entry-level services?",
        answer:
          "BeOne offers 4 affordable entry-level solutions to help you get online quickly: Promotional Content Design (Rp75,000–100,000 for a package of 5 designs), Small Business Digital Catalog (starting at Rp150,000), Personal Portfolio Starter (starting at Rp150,000), and Business Landing Page (Rp350,000–500,000). Turnaround is rapid (1–3 business days) once all brief and content materials are submitted.",
      },
      {
        id: "promo-design-scope",
        question: "How does the Rp75,000–100,000 Promotional Content Design package work?",
        answer:
          "This pricing is for a complete bundle of 5 (five) promotional graphic designs (not per single design). You choose one format size (such as Feed 1:1 or Story 9:16). You provide the text copy and product images, and we design polished, ready-to-post visuals with 1–2 rounds of minor revisions.",
      },
      {
        id: "umkm-catalog-vs-ecommerce",
        question: "What is the difference between a Small Business Catalog (Rp150,000) and full E-Commerce?",
        answer:
          "A Small Business Digital Catalog focuses on presenting product photos, names, prices, and direct WhatsApp order buttons with zero monthly server costs. It is a fast, cost-effective solution without automated payment gateways, admin panels, or complex databases. If your business requires automated shopping carts, integrated payment gateways, and inventory tracking, you can choose our full E-Commerce package.",
      },
      {
        id: "portfolio-starter-vs-pro",
        question: "What is the difference between Portfolio Starter (Rp150,000), Professional (Rp349,000), and Premium (Rp599,000)?",
        answer:
          "The Starter package (Rp150,000) is a concise single page focusing on bio, key skills, up to 3 basic projects, contact links, and 1x revision — perfect for students or beginners. The Professional package (Rp349,000) offers curated personal branding, complete sections (About, Skills, up to 6 interactive projects, Experience timeline, Contact), subtle animations, 2x revisions, and custom domain setup support. The Premium package (from Rp599,000) is aimed at senior developers or creators requiring bespoke architecture, in-depth case studies, extra pages/filters, and 3x revisions.",
      },
      {
        id: "business-landing-page-scope",
        question: "What differentiates a Business Landing Page priced at Rp350,000 vs Rp500,000?",
        answer:
          "The base package of Rp350,000 includes a single-page conversion-focused landing page with 3–4 core sections (Hero, Services/Products, Key Advantages, WhatsApp Contact) using client-supplied copy and imagery. Pricing towards Rp500,000 applies when extra sections (e.g., FAQ, galleries, custom forms), visual asset touch-ups, or tailored custom styling are required.",
      },
      {
        id: "project-timeline",
        question: "When does the estimated delivery timeline begin and what influences it?",
        answer:
          "Business day calculations officially begin once all required content materials (text, product/portfolio images, logo), project brief, and deliverables scope have been fully provided by the client and mutually agreed. Delays in material submission or mid-project scope changes will realistically adjust the final delivery schedule.",
      },
      {
        id: "warranty-and-maintenance",
        question: "What is covered under the 30-day bug warranty and how are domain/hosting renewals handled?",
        answer:
          "The 30-day bug warranty covers fixing functional bugs, broken screen layouts, or technical issues in the code delivered by BeOne according to the original agreement at no extra charge. It does not cover new feature additions, major design overhauls, or issues caused by third-party modifications. For long-term peace of mind, annual maintenance plans are available. Official annual renewal costs for domains (.com/.id) or paid cloud servers are billed transparently according to official provider invoices without hidden markup.",
      },
      {
        id: "portfolio-hosting",
        question: "How does free cloud hosting work for portfolio and landing page packages?",
        answer:
          "Your website is deployed on fast, highly reliable modern cloud platforms (such as Vercel, Netlify, or GitHub Pages). You receive a secure public URL with active SSL (HTTPS) encryption out of the box without paying monthly or annual server rental fees.",
      },
      {
        id: "custom-domain",
        question: "Can I use my own custom domain name (e.g., yourname.com)?",
        answer:
          "Yes. You can connect your own custom domain. Third-party registrar fees for domains (such as .com, .id, or .dev) are not included in entry-level packages, but the BeOne team is happy to guide and assist you through connecting your domain to the website.",
      },
      {
        id: "portfolio-materials",
        question: "What materials do I need to prepare to get started?",
        answer:
          "Simply prepare: profile or product photos, a short bio or business description, a list of skills or services, pricing details, and your WhatsApp ordering contact. You can easily share these via WhatsApp chat or a Google Drive link.",
      },
      {
        id: "revision",
        question: "How many revision rounds are included?",
        answer:
          "Every package features clear revision limits: Promotional Design includes 1–2 minor revisions, Portfolio Starter & Small Business Catalog include 1x minor revision, Business Landing Page & Portfolio Pro include 2x revisions, up to 4x revisions for advanced business packages. Major overhauls outside the original agreement are subject to fair additional adjustment.",
      },
      {
        id: "custom-web-app",
        question: "Does BeOne also build custom web applications for businesses?",
        answer:
          "Yes. BeOne has fullstack web capabilities to build tailored business web apps such as inventory management, point-of-sale (POS) cashiers, online booking and queue systems, administrative dashboards, and cloud-based internal company tools.",
      },
    ],
  },

  /* ─── CTA ─── */
  cta: {
    eyebrow: "Get Started Now",
    headline1: "Time for Your Work & Business",
    headline2: "To Look More Professional.",
    subtext:
      "Start building your digital presence today. Showcase your portfolio, create a small business digital catalog, or grow your business with BeOne with no upfront consultation fee.",
    ctaPrimary: "Free Consultation",
    ctaSecondary: "Chat on WhatsApp",
    ctaPrimaryLabel: "Free consultation now — fill in the contact form",
    ctaSecondaryLabel: "Chat on WhatsApp directly with the BeOne team",
  },

  /* ─── Contact ─── */
  contact: {
    label: "Consultation & Contact",
    title: "Start Your Project Consultation",
    subtitle:
      "Tell us about your profile, work, or project idea. We will help design the best web solution for you.",
    whatsappBadge: "Quick Response on WhatsApp",
    whatsappTitle: "Direct Discussion with BeOne Team",
    whatsappDesc:
      "Have questions about portfolio websites, packages starting at Rp150,000, or custom feature adjustments? Reach out to us on WhatsApp now.",
    whatsappCta: "Chat on WhatsApp:",
    privacyTitle: "Privacy & Data Security",
    privacyText:
      "Your contact details are strictly used for project consultation purposes and will never be shared with third parties.",
    emailLabel: "Official Email:",
    readyTitle: "Inquiry Details Ready to Send",
    readyDesc:
      "A WhatsApp link has been prepared with your project details. Click the button below to open chat or copy the message text.",
    openChat: "Open WhatsApp Chat Now",
    copyMessage: "Copy Message Format",
    messageCopied: "Message Copied!",
    backToForm: "← Back to edit form",
    formAria: "BeOne project inquiry form",
    nameLabel: "Full Name",
    namePlaceholder: "Your Name",
    contactLabel: "WhatsApp / Phone Number",
    contactPlaceholder: "e.g. +62 812 3456 7890",
    emailLabel2: "Email",
    emailOptional: "(Optional)",
    emailPlaceholder: "name@email.com",
    professionLabel: "Profession / Business Field",
    professionPlaceholder: "Select profession / field...",
    serviceLabel: "Required Service",
    servicePlaceholder: "Select required service...",
    packageLabel: "Interested Package",
    packagePlaceholder: "Select package or free consultation...",
    budgetLabel: "Estimated Budget",
    budgetOptional: "(Optional)",
    budgetPlaceholder: "Select budget estimate range...",
    descLabel: "Project Description & Needs",
    descPlaceholder:
      "e.g. I am a web developer looking for a single-page portfolio to showcase 3 featured projects and my education/skill resume...",
    submitBtn: "Send & Start WhatsApp Consultation",
    submitHint:
      "Submitting this form prepares a formatted WhatsApp chat message to BeOne's official contact.",
    submitAriaLabel: "Submit consultation form via WhatsApp",
    professions: [
      { id: "developer", label: "Web Developer / Programmer" },
      { id: "designer", label: "UI/UX / Graphic Designer" },
      { id: "freelancer", label: "Freelancer / Content Creator" },
      { id: "student", label: "Student / Fresh Graduate" },
      { id: "professional", label: "Professional / Consultant" },
      { id: "business", label: "Business Owner / Entrepreneur" },
      { id: "other", label: "Other" },
    ],
    budgets: [
      { id: "under-150k", label: "< Rp150k (Promotional Design)" },
      { id: "150k-350k", label: "Rp150k – Rp350k (Portfolio / Catalog)" },
      { id: "350k-1m", label: "Rp350k – Rp1M (Business Landing Page / Pro Portfolio)" },
      { id: "1m-3m", label: "Rp1M – Rp3M" },
      { id: "3m-6m", label: "Rp3M – Rp6M" },
      { id: "over-6m", label: "> Rp6M (Web App / E-Commerce)" },
      { id: "recommended", label: "Per Solution Recommendation" },
    ],
    services: [
      { id: "personal-portfolio", label: "Personal Portfolio Website" },
      { id: "promo-design", label: "Promotional Content Design" },
      { id: "umkm-catalog", label: "Digital Catalog for Small Businesses" },
      { id: "business-landing-page", label: "Business Landing Page" },
      { id: "company-profile", label: "Company Profile" },
      { id: "business-website", label: "Full Business Website" },
      { id: "ecommerce", label: "E-Commerce" },
      { id: "custom-web-app", label: "Custom Web App" },
      { id: "mobile-app", label: "Mobile App" },
      { id: "maintenance", label: "Website Maintenance" },
      { id: "other", label: "Other" },
    ],
    packages: [
      {
        id: "promo-design",
        label: "Promotional Content Design (Package of 5) — Rp75,000–100,000",
        serviceId: "promo-design",
      },
      {
        id: "umkm-catalog",
        label: "Digital Catalog for Small Businesses — starting at Rp150,000",
        serviceId: "umkm-catalog",
      },
      {
        id: "portfolio-starter",
        label: "Personal Portfolio Starter — starting at Rp150,000",
        serviceId: "personal-portfolio",
      },
      {
        id: "portfolio-professional",
        label: "Personal Portfolio Professional — Rp349,000",
        serviceId: "personal-portfolio",
      },
      {
        id: "portfolio-premium",
        label: "Personal Portfolio Premium — starting at Rp599,000",
        serviceId: "personal-portfolio",
      },
      {
        id: "business-landing-page",
        label: "Business Landing Page — Rp350,000–500,000",
        serviceId: "business-landing-page",
      },
      {
        id: "company-profile",
        label: "Company Profile — Rp2,500,000",
        serviceId: "company-profile",
      },
      {
        id: "business-website",
        label: "Full Business Website — Rp4,000,000",
        serviceId: "business-website",
      },
      {
        id: "ecommerce",
        label: "E-Commerce Online Store — starting at Rp6,000,000",
        serviceId: "ecommerce",
      },
      {
        id: "custom-web-app",
        label: "Custom Web App — starting at Rp7,500,000",
        serviceId: "custom-web-app",
      },
      {
        id: "maintenance-basic",
        label: "Basic Maintenance Package — Rp500,000/year",
        serviceId: "maintenance",
      },
      {
        id: "maintenance-standard",
        label: "Standard Maintenance Package — Rp1,000,000/year",
        serviceId: "maintenance",
      },
      {
        id: "maintenance-professional",
        label: "Professional Maintenance Package — Rp1,500,000/year",
        serviceId: "maintenance",
      },
      {
        id: "custom-inquiry",
        label: "Undecided / Free Consultation First",
        serviceId: "other",
      },
    ],
    errors: {
      name: "Full name is required.",
      contact: "WhatsApp number or contact is required.",
      contactFormat: "Invalid contact number format.",
      emailFormat: "Invalid email format.",
      service: "Please select a required service.",
      description: "Please briefly describe your website needs or project goals.",
    },
    msgGreeting: "*Hello BeOne, I would like to consult about website development:*",
    msgName: "Name",
    msgContact: "Contact",
    msgEmail: "Email",
    msgProfession: "Profession / Business",
    msgService: "Service",
    msgPackage: "Interested Package",
    msgBudget: "Estimated Budget",
    msgDesc: "Description & Requirements",
  },

  /* ─── Footer ─── */
  footer: {
    navTitle: "Navigation",
    ctaTitle: "Start Your Project",
    ctaDesc:
      "Ready to start your digital project? Reach out for a free consultation with no commitments.",
    ctaButton: "Consult via WhatsApp",
    ctaButtonLabel: "Consult with BeOne via WhatsApp",
    copyright: "All rights reserved.",
    builtWith: "Built with Next.js · TypeScript · Tailwind CSS",
    tagline: "Digital Solutions for Personal Brand & Business",
    supportingText: "Portfolio Websites, Small Business Catalogs & Modern Web Solutions",
    links: {
      portfolio: "Portfolio",
      services: "Services",
      pricing: "Pricing",
      process: "Process",
      faq: "FAQ",
      contact: "Contact",
    },
  },

  /* ─── Shared WhatsApp default ─── */
  shared: {
    whatsappDefaultMsg: "Hello BeOne, I would like to consult about building a portfolio website.",
    whatsappAddOnMsg: "Hello BeOne, I would like to inquire about an add-on for my project.",
  },
};
