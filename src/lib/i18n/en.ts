import type { Translations } from "./types";

export const en: Translations = {
  meta: {
    title: "BeOne — Digital Development Studio | Website & App Development",
    description:
      "BeOne is an independent digital development studio helping individuals and businesses build websites and digital solutions tailored to their needs.",
    ogTitle: "BeOne — Digital Development Studio",
  },

  nav: {
    home: "Home",
    solutions: "Solutions",
    services: "Services",
    pricing: "Pricing",
    process: "Process",
    faq: "FAQ",
    contact: "Contact",
    cta: "Start a Project",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    chatWhatsapp: "Chat on WhatsApp",
    langToggle: "Select language",
    navAria: "Main Navigation",
    mobileMenuAria: "Mobile navigation menu",
    scrollToTop: "Back to top",
  },

  hero: {
    label: "Digital Development Studio",
    headline1: "Build Digital.",
    headline2: "Be One Step Ahead.",
    tagline: "Build Digital. Be One Step Ahead.",
    subheadline:
      "We help individuals and businesses build websites and digital solutions designed around their specific needs.",
    ctaPrimary: "Start a Consultation",
    ctaSecondary: "View Services",
    stat1Value: "100%",
    stat1Label: "Custom Built",
    stat2Value: "< 14 Days",
    stat2Label: "Avg. Delivery",
    stat3Value: "30 Days",
    stat3Label: "Bug Guarantee",
    scrollLabel: "Scroll",
  },

  solutions: {
    label: "What We Can Build",
    title: "What We Can Build",
    subtitle:
      "From simple websites to custom digital solutions, we build technology around your needs.",
    items: [
      {
        id: "landing-page",
        title: "Landing Page",
        description:
          "A single-page website to introduce products, services, or campaigns and help businesses acquire customers.",
        examples: [
          "Product landing page",
          "Service landing page",
          "Event website",
          "Campaign website",
        ],
        cta: "Discuss Project",
      },
      {
        id: "company-profile",
        title: "Company Profile",
        description:
          "A professional website to introduce your company, build credibility, and provide information to potential clients.",
        examples: [
          "Company profile",
          "Corporate website",
          "Organization website",
          "Professional services website",
        ],
        cta: "Discuss Project",
      },
      {
        id: "ecommerce",
        title: "E-Commerce",
        description:
          "An online store solution to help businesses market and sell products digitally.",
        examples: [
          "Product catalog",
          "Shopping cart & checkout",
          "Order management",
          "Payment gateway integration",
        ],
        cta: "Discuss Project",
      },
      {
        id: "business-dashboard",
        title: "Business Dashboard",
        description:
          "A dashboard to help businesses manage and monitor operational information and performance.",
        examples: [
          "Sales dashboard",
          "Financial dashboard",
          "Analytics & reporting",
          "Performance monitoring",
        ],
        cta: "Discuss Project",
      },
      {
        id: "management-system",
        title: "Management System",
        description:
          "A digital system to help companies manage operational activities in a more structured way.",
        examples: [
          "Inventory management",
          "Employee management",
          "Booking system",
          "Administration system",
        ],
        cta: "Discuss Project",
      },
      {
        id: "custom-web-app",
        title: "Custom Web Application",
        description:
          "A web-based application designed around the specific needs and workflow of each business.",
        examples: [
          "SaaS application",
          "CRM & ERP",
          "Marketplace",
          "Custom business application",
        ],
        cta: "Discuss Project",
      },
    ],
  },

  services: {
    label: "Our Services",
    heading: "Services built\nfor every need.",
    subheading:
      "From personal portfolios to full-scale business applications — every service is delivered with clean code, transparent pricing, and lasting results.",
    categoryPersonal: "Personal & Creative",
    categoryBusiness: "Business Websites",
    categoryAdvanced: "Advanced Development",
    footerNote:
      "Not sure which service fits? Contact us for a free consultation — we will help define the right scope.",
    items: [
      {
        id: "personal-portfolio",
        num: "01",
        title: "Personal Portfolio Website",
        category: "Personal & Creative",
        description:
          "A template-based single-page website to showcase your profile, skills, and work professionally.",
        startingPrice: "From Rp150,000",
        tags: ["Single Page", "Template-based", "Free Hosting"],
      },
      {
        id: "promo-design",
        num: "02",
        title: "Promotional Content Design",
        category: "Personal & Creative",
        description:
          "A pack of 5 ready-to-post promotional visuals for social media — crafted to match your brand identity.",
        startingPrice: "Rp75,000–100,000",
        tags: ["Pack of 5", "PNG/JPG", "Social Media"],
      },
      {
        id: "landing-page",
        num: "03",
        title: "Landing Page",
        category: "Business Websites",
        description:
          "A custom responsive landing page to introduce products, services, or campaigns with a conversion focus.",
        startingPrice: "From Rp1,500,000",
        tags: ["Custom Design", "Responsive", "Basic SEO"],
      },
      {
        id: "company-profile",
        num: "04",
        title: "Company Profile",
        category: "Business Websites",
        description:
          "A professional multi-page website to introduce your company and build client trust.",
        startingPrice: "From Rp2,500,000",
        tags: ["5–6 Pages", "Custom UI/UX", "Domain + Hosting"],
      },
      {
        id: "business-website",
        num: "05",
        title: "Business Website",
        category: "Business Websites",
        description:
          "A multi-page business website with product catalog, blog, content filters, and an easy-to-manage CMS.",
        startingPrice: "From Rp4,000,000",
        tags: ["Up to 10 Pages", "CMS", "Domain + Hosting"],
      },
      {
        id: "ecommerce",
        num: "06",
        title: "E-Commerce",
        category: "Business Websites",
        description:
          "A complete online store with product management, cart, checkout, and an admin dashboard.",
        startingPrice: "From Rp6,000,000",
        tags: ["Full Store", "Admin Dashboard", "Payment Gateway"],
      },
      {
        id: "custom-web-app",
        num: "07",
        title: "Custom Web Application",
        category: "Advanced Development",
        description:
          "Custom web systems and applications built for your specific business workflow — inventory, POS, booking, SaaS.",
        startingPrice: "From Rp7,500,000",
        tags: ["Custom Scope", "REST API", "Role-Based Auth"],
      },
      {
        id: "mobile-app",
        num: "08",
        title: "Mobile Application",
        category: "Advanced Development",
        description:
          "Cross-platform Android & iOS mobile apps for business operations or customer-facing digital products.",
        startingPrice: "From Rp8,000,000",
        tags: ["Android & iOS", "Cross-Platform", "Modern UX"],
      },
    ],
  },

  pricing: {
    label: "Packages & Investment",
    heading: "Transparent pricing\nfor every budget.",
    subheading:
      "All prices are starting prices. Final project pricing is determined after consultation and requirements analysis.",
    tabEntry: "Entry-Level",
    tabBusiness: "Business Websites",
    tabAdvanced: "Advanced & Custom",
    popularLabel: "Most Popular",
    entryPlans: [
      {
        id: "personal-portfolio",
        name: "Personal Portfolio Basic",
        price: "Rp150,000",
        priceNote: "Starting from",
        duration: "1–3 business days",
        revisions: "1x minor revision",
        hostingInfo: "Free hosting (paid domain not included)",
        features: [
          "Template-based one-page portfolio website",
          "Personal profile & professional bio",
          "Skills & experience",
          "Project showcase",
          "Social media links & contact",
          "Responsive design (mobile & desktop)",
          "Active free hosting",
          "1x minor revision",
        ],
        cta: "Choose This Plan",
      },
      {
        id: "promo-design",
        name: "Promotional Content Design",
        price: "Rp75,000–100,000",
        priceNote: "Pack of 5 designs",
        duration: "1–2 business days",
        revisions: "1–2x minor revision",
        features: [
          "5 promotional content designs ready to post",
          "1 agreed format size (Feed or Story)",
          "Content provided by client",
          "Brand-aligned visual styling",
          "High-resolution PNG / JPG final files",
          "1–2x minor revisions",
        ],
        cta: "Order This Pack",
      },
    ],
    businessPlans: [
      {
        id: "landing-page",
        name: "Landing Page",
        price: "Rp1,500,000",
        priceNote: "Starting from",
        duration: "3–7 business days",
        revisions: "2x revisions",
        hostingInfo: "Free hosting (domain optional)",
        features: [
          "Custom responsive landing page",
          "Hero section",
          "Product / service information",
          "Features and benefits",
          "CTA section",
          "WhatsApp integration",
          "Basic SEO",
          "Contact section",
          "Responsive design",
        ],
        cta: "Choose This Plan",
      },
      {
        id: "company-profile",
        name: "Company Profile",
        price: "Rp2,500,000",
        priceNote: "Starting from",
        duration: "7–14 business days",
        revisions: "3x revisions",
        hostingInfo: ".com domain + 1st-year hosting included",
        popular: true,
        features: [
          "Professional company website",
          "Pages: Home, About, Services, Contact",
          "Company identity & profile",
          "WhatsApp integration",
          "Google Maps (where needed)",
          "Basic SEO",
          "Responsive design",
          "30-day bug guarantee",
        ],
        cta: "Choose This Plan",
      },
      {
        id: "business-website",
        name: "Business Website",
        price: "Rp4,000,000",
        priceNote: "Starting from",
        duration: "2–3 weeks",
        revisions: "4x revisions",
        hostingInfo: ".com domain + 1st-year hosting included",
        features: [
          "Multi-page website (up to 10 pages)",
          "Custom layout",
          "Product / service pages",
          "Contact & inquiry features",
          "Business information management",
          "Basic SEO",
          "Responsive design",
          "30-day bug guarantee",
        ],
        cta: "Choose This Plan",
      },
    ],
    advancedPlans: [
      {
        id: "ecommerce",
        name: "E-Commerce",
        price: "Rp6,000,000",
        priceNote: "Starting from",
        duration: "3–5 weeks",
        revisions: "Per scope",
        hostingInfo: "Domain + 1st-year hosting included",
        features: [
          "Product catalog & detail pages",
          "Shopping cart & checkout",
          "Order management",
          "Admin dashboard",
          "Payment gateway integration (3rd-party fees excluded)",
          "Responsive design",
          "30-day bug guarantee",
        ],
        cta: "Discuss Project",
      },
      {
        id: "custom-web-app",
        name: "Custom Web Application",
        price: "Rp7,500,000",
        priceNote: "Starting from",
        duration: "Based on scope",
        isCustom: true,
        features: [
          "Custom application development",
          "Authentication (where required)",
          "Database integration",
          "Admin dashboard (where required)",
          "API integration",
          "Business-specific features",
          "Responsive interface",
          "Final price based on complexity & requirements",
        ],
        cta: "Discuss Project",
      },
      {
        id: "mobile-app",
        name: "Mobile Application",
        price: "Rp8,000,000",
        priceNote: "Starting from",
        duration: "Based on scope",
        isCustom: true,
        features: [
          "Android & iOS mobile development",
          "Cross-platform (React Native / Expo)",
          "Features based on project requirements",
          "API & backend integration",
          "Modern responsive interface",
          "Final price based on platform, features & complexity",
        ],
        cta: "Discuss Project",
      },
    ],
    addonsTitle: "Add-on Features",
    addonsNote:
      "Prices below are estimates and may change based on specific complexity. Add-on features are not automatically included in any package.",
    addons: [
      { name: "Additional page", price: "Rp200,000" },
      { name: "Additional section", price: "Rp100,000" },
      { name: "User authentication / login", price: "Rp500,000" },
      { name: "Admin dashboard", price: "Rp750,000" },
      { name: "Database integration", price: "Rp750,000" },
      { name: "REST API", price: "Rp750,000" },
      { name: "Payment gateway integration", price: "Rp750,000" },
      { name: "CMS / content management", price: "Rp1,000,000" },
      { name: "Third-party API integration", price: "Rp500,000" },
      { name: "Excel / PDF export", price: "Rp500,000" },
      { name: "Advanced SEO optimization", price: "Rp750,000" },
    ],
    paymentTitle: "Payment Terms",
    paymentNote:
      "Source code is handed over after full payment. Features outside the agreed scope are charged separately.",
    paymentTerms: [
      {
        condition: "Projects up to Rp5,000,000",
        steps: ["50% down payment", "50% final payment upon completion"],
      },
      {
        condition: "Projects above Rp5,000,000",
        steps: [
          "30% down payment",
          "40% during development",
          "30% after project completion",
        ],
      },
    ],
  },

  maintenance: {
    label: "Maintenance Services",
    heading: "Keep Your Website Running Smoothly",
    subheading:
      "Annual technical maintenance services to ensure your website continues to perform after the warranty period ends.",
    period: "year",
    note: "Domain and hosting renewal fees from third-party providers are billed transparently based on actual invoices — not included in maintenance plans. New features, major redesigns, or system migrations are quoted separately.",
    plans: [
      {
        id: "basic",
        name: "Basic",
        price: "Rp500,000",
        period: "year",
        features: [
          "Periodic performance & uptime monitoring",
          "SSL / HTTPS configuration assistance",
          "Domain & DNS troubleshooting",
          "Minor bug fixing & broken link checks",
          "Minor text / contact updates (max. 2x/year)",
        ],
        exclusions: [
          "Domain & hosting renewal fees not included",
          "New feature additions not included",
          "Major design changes not included",
        ],
      },
      {
        id: "standard",
        name: "Standard",
        price: "Rp1,000,000",
        period: "year",
        features: [
          "Everything in Basic",
          "Periodic minor content & visual updates",
          "Dependency health checks & compatibility reviews",
          "Google Analytics & Search Console assistance",
          "Minor layout & styling adjustments",
        ],
        exclusions: [
          "Domain & hosting renewal fees not included",
          "Complex feature additions not included",
        ],
      },
      {
        id: "professional",
        name: "Professional",
        price: "Rp1,500,000",
        period: "year",
        features: [
          "Everything in Standard",
          "Priority support with fast response",
          "Minor feature updates & periodic section additions",
          "Routine monitoring & performance optimization",
          "Periodic technical consultation",
        ],
        exclusions: [
          "Domain & hosting renewal fees not included",
          "Large features & system migrations quoted separately",
        ],
      },
    ],
  },

  process: {
    label: "How We Work",
    heading: "From brief to launch\nin five clear steps.",
    subheading:
      "A transparent, structured process — no surprises along the way.",
    note: "* Business day estimates begin after all brief, materials, and scope are agreed upon. Mid-project scope additions or delayed materials may affect the schedule.",
    steps: [
      {
        num: "01",
        title: "Consultation",
        description:
          "Understanding your needs, goals, and business challenges. We listen before making recommendations.",
        duration: "Day 1",
      },
      {
        num: "02",
        title: "Planning",
        description:
          "Defining features, structure, technology, and timeline. Scope, schedule, and pricing are agreed upon before work begins.",
        duration: "Day 1–2",
      },
      {
        num: "03",
        title: "Design",
        description:
          "Creating a responsive interface tailored to your needs and brand identity.",
        duration: "Day 2–5",
      },
      {
        num: "04",
        title: "Development",
        description:
          "Building the website or application using modern technology and conducting thorough testing.",
        duration: "Day 5–12",
      },
      {
        num: "05",
        title: "Launch",
        description:
          "Deploying to hosting, verifying SSL, and handing over full access. 30-day bug guarantee activated.",
        duration: "Day 12–14",
      },
    ],
  },

  faq: {
    label: "FAQ",
    heading: "Common questions,\nanswered.",
    supportText:
      "Still have questions? Contact us directly on WhatsApp — we typically respond within a few hours.",
    askLabel: "Ask a question",
    items: [
      {
        id: "services",
        question: "What services does BeOne provide?",
        answer:
          "BeOne provides website development and digital solution services including: Personal Portfolio Website (from Rp150,000), Promotional Content Design, Landing Page (from Rp1,500,000), Company Profile (from Rp2,500,000), Business Website (from Rp4,000,000), E-Commerce (from Rp6,000,000), Custom Web Application (from Rp7,500,000), and Mobile Application (from Rp8,000,000).",
      },
      {
        id: "how-to-start",
        question: "How do I start a project?",
        answer:
          "The first step is a consultation. Contact us via WhatsApp or fill out the contact form on this website. Tell us about your needs, goals, and project overview. We will discuss scope, technology, timeline, and pricing before work begins.",
      },
      {
        id: "custom-design",
        question: "Can the website design be customized?",
        answer:
          "Yes, almost all BeOne services use custom design tailored to your identity and needs — not pre-made templates. The exception is the Personal Portfolio Basic package (Rp150,000) which uses a template to reduce cost and delivery time.",
      },
      {
        id: "domain-hosting",
        question: "Are domain and hosting included?",
        answer:
          "It depends on the package. For Company Profile and above, a .com domain and first-year hosting are included. For landing pages and portfolios, the website can be published using free hosting (Vercel/Netlify) with no monthly server fees. Paid domains (.com/.id) are not included in entry-level packages, but we can assist with purchase and setup.",
      },
      {
        id: "renewal",
        question: "Are there domain and hosting renewal fees?",
        answer:
          "Yes, domain and hosting from third-party providers have annual renewal fees according to provider rates (Namecheap, Niagahoster, Vercel, etc.). These are billed directly by the provider — not by BeOne — and are not included in the package price unless explicitly stated.",
      },
      {
        id: "timeline",
        question: "How long does the project take?",
        answer:
          "Timeline varies by project type: Portfolio Basic 1–3 business days, Landing Page 3–7 business days, Company Profile 7–14 business days, Business Website 2–3 weeks, E-Commerce 3–5 weeks. Counting begins after all brief, materials (text, photos, logo), and scope are agreed upon.",
      },
      {
        id: "extra-features",
        question: "Can I add features outside the package?",
        answer:
          "Yes. Additional features such as authentication, admin dashboard, database, payment gateway, CMS, and more are available as add-ons at separate cost. Prices may vary based on specific complexity. We will discuss and agree on additional costs before work begins.",
      },
      {
        id: "payment",
        question: "What are the payment terms?",
        answer:
          "For projects up to Rp5,000,000: 50% down payment and 50% final payment upon completion. For projects above Rp5,000,000: 30% down payment, 40% during development, and 30% after project completion. Payment is made via bank transfer.",
      },
      {
        id: "source-code",
        question: "Will the source code be given to the client?",
        answer:
          "Yes. The project source code will be fully handed over after final payment is complete. You have full ownership rights to all code we build.",
      },
      {
        id: "maintenance",
        question: "Is a maintenance service available?",
        answer:
          "Yes. BeOne provides three annual maintenance plans: Basic (Rp500,000/year), Standard (Rp1,000,000/year), and Professional (Rp1,500,000/year). Each plan covers technical maintenance services within a defined scope. Domain and hosting renewal fees from third parties are not included.",
      },
      {
        id: "custom-app",
        question: "Does BeOne accept custom application projects?",
        answer:
          "Yes. BeOne accepts Custom Web Application (from Rp7,500,000) and Mobile Application (from Rp8,000,000) projects. These are built based on your specific business needs and workflow. Final pricing is determined after consultation and requirements analysis.",
      },
    ],
  },

  contact: {
    sectionLabel: "Get in Touch",
    headline1: "Have an idea or",
    headline2: "a digital need?",
    directContactLabel: "Direct Contact",
    expectLabel: "What to Expect",
    expectItems: [
      "Response within 24 hours",
      "Free initial consultation",
      "Transparent scope & pricing",
      "No commitment required",
    ],
    nameLabel: "Name",
    namePlaceholder: "Your full name",
    whatsappLabel: "WhatsApp Number",
    whatsappPlaceholder: "+62 8xx-xxxx-xxxx",
    emailLabel: "Email",
    emailOptional: "(optional)",
    emailPlaceholder: "email@example.com",
    businessLabel: "Business / Company Name",
    businessOptional: "(optional)",
    businessPlaceholder: "Your business or company name",
    serviceLabel: "Service Needed",
    servicePlaceholder: "Select a service",
    budgetLabel: "Estimated Budget",
    budgetOptional: "(optional)",
    budgetPlaceholder: "Select an estimated budget",
    descLabel: "Project Description",
    descPlaceholder:
      "Tell us about your project — what you want to build, your goals, and any specific requirements...",
    submitBtn: "Send via WhatsApp",
    submitHint: "Opens WhatsApp with your details pre-filled",
    readyTitle: "Message Ready",
    readyDesc:
      "Your message has been prepared. If WhatsApp did not open automatically, use the button below.",
    openWhatsapp: "Open WhatsApp",
    copyMessage: "Copy Message",
    messageCopied: "Copied",
    backToForm: "Back to form",
    services: [
      { id: "personal-portfolio", label: "Personal Portfolio Website" },
      { id: "promo-design", label: "Promotional Content Design" },
      { id: "landing-page", label: "Landing Page" },
      { id: "company-profile", label: "Company Profile" },
      { id: "business-website", label: "Business Website" },
      { id: "ecommerce", label: "E-Commerce" },
      { id: "custom-web-app", label: "Custom Web Application" },
      { id: "mobile-app", label: "Mobile Application" },
      { id: "maintenance", label: "Maintenance Service" },
      { id: "other", label: "Other / Not Sure Yet" },
    ],
    budgets: [
      { id: "under-500k", label: "Under Rp500,000" },
      { id: "500k-2m", label: "Rp500,000 – Rp2,000,000" },
      { id: "2m-5m", label: "Rp2,000,000 – Rp5,000,000" },
      { id: "5m-10m", label: "Rp5,000,000 – Rp10,000,000" },
      { id: "above-10m", label: "Above Rp10,000,000" },
      { id: "flexible", label: "Flexible / Not Sure" },
    ],
    errors: {
      name: "Name is required",
      contact: "WhatsApp number is required",
      contactFormat: "Invalid WhatsApp number format",
      emailFormat: "Invalid email format",
      service: "Please select a service",
      description: "Project description is required",
    },
    msgGreeting: "Hi BeOne, I would like to consult about my project.",
    msgName: "Name",
    msgWhatsapp: "WhatsApp",
    msgEmail: "Email",
    msgBusiness: "Business Name",
    msgService: "Service",
    msgBudget: "Budget",
    msgDesc: "Project Description",
  },

  footer: {
    tagline:
      "An independent digital development studio helping individuals and businesses build websites and digital solutions.",
    navLabel: "Navigation",
    contactLabel: "Contact",
    copyright: "All rights reserved.",
    builtWith: "Built with Next.js & Tailwind CSS",
  },

  shared: {
    whatsappDefaultMsg:
      "Hi BeOne, I would like to consult about my digital needs.",
  },
};
