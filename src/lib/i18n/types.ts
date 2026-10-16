export interface MetaTranslations {
  title: string;
  description: string;
  ogTitle: string;
}

export interface NavTranslations {
  home: string;
  portfolio: string;
  services: string;
  pricing: string;
  process: string;
  faq: string;
  contact: string;
  cta: string;
  openMenu: string;
  closeMenu: string;
  chatWhatsapp: string;
  langToggle: string;
  navAria: string;
  mobileMenuAria: string;
  scrollToTop: string;
}

export interface HeroTranslations {
  eyebrow: string;
  headline1: string;
  headline2: string;
  subheadline: string;
  microcopy: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
  highlights: readonly string[];
  floatingHostingFree: string;
  floatingPriceFrom: string;
  floatingTransparent: string;
  portfolioLive: string;
  mockupTitle: string;
  mockupRole: string;
  mockupQuote: string;
  mockupViewProjects: string;
  mockupContact: string;
  mockupShowcase: string;
}

export interface TrustTranslations {
  label: string;
  items: readonly {
    title: string;
    subtitle: string;
  }[];
}

export interface ProjectTranslation {
  title: string;
  category: string;
  badge: string;
  description: string;
  note: string;
  highlights: readonly string[];
}

export interface PortfolioTranslations {
  label: string;
  title: string;
  subtitle: string;
  liveApp: string;
  viewDemo: string;
  conceptual: string;
  techStack: string;
  highlights: string;
  interested: string;
  close: string;
  buildMine: string;
  filterAll: string;
  filterLive: string;
  filterConcept: string;
  projects: {
    finvera: ProjectTranslation;
    tickitz: ProjectTranslation;
    designerPortfolio: ProjectTranslation;
  };
}

export interface ServiceItemTranslation {
  id: string;
  title: string;
  category: "personal" | "business" | "advanced";
  categoryLabel: string;
  description: string;
  startingPrice: string;
  priceNote?: string;
  badge?: string;
  scopeSummary?: string;
  useCases?: readonly string[];
  exclusions?: readonly string[];
}

export interface ServicesTranslations {
  label: string;
  title: string;
  subtitle: string;
  filterAll: string;
  filterEntry: string;
  filterPersonal: string;
  filterBusiness: string;
  filterAdvanced: string;
  useCases: string;
  exclusions: string;
  consult: string;
  selectService: string;
  items: readonly ServiceItemTranslation[];
}

export interface PricingPlanTranslation {
  id: string;
  name: string;
  label: string;
  price: string;
  priceNote?: string;
  target?: string;
  duration: string;
  revisions?: string;
  hostingInfo?: string;
  cta: string;
  popular?: boolean;
  isCustom?: boolean;
  category: "entry" | "portfolio" | "business";
  features: readonly string[];
}

export interface AddonTranslation {
  name: string;
  startingPrice: string;
}

export interface PricingTranslations {
  label: string;
  title: string;
  subtitle: string;
  tabEntry: string;
  tabPortfolio: string;
  tabBusiness: string;
  recommended: string;
  termsTitle: string;
  terms: readonly {
    label: string;
    text: string;
  }[];
  addonsTitle: string;
  addonsSubtitle: string;
  addonsAskCustom: string;
  addonsNote: string;
  askWhatsappMsg: string;
  planAria: string;
  featuresAria: string;
  categoryAria: string;
  entryPlans: readonly PricingPlanTranslation[];
  portfolioPlans: readonly PricingPlanTranslation[];
  businessPlans: readonly PricingPlanTranslation[];
  addons: readonly AddonTranslation[];
}

export interface MaintenancePlanTranslation {
  id: string;
  name: string;
  price: string;
  period: string;
  features: readonly string[];
}

export interface MaintenanceTranslations {
  label: string;
  title: string;
  subtitle: string;
  selectPlan: string;
  period: string;
  transparencyTitle: string;
  transparencyText: string;
  featuresAria: string;
  planAria: string;
  plans: readonly MaintenancePlanTranslation[];
}

export interface ProcessStepTranslation {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ProcessTranslations {
  label: string;
  title: string;
  subtitle: string;
  bottomNote: string;
  guarantee: string;
  guaranteeDetail: string;
  stepsAria: string;
  stepLabel: string;
  steps: readonly ProcessStepTranslation[];
}

export interface BenefitTranslation {
  id: string;
  title: string;
  description: string;
}

export interface WhyTranslations {
  label: string;
  title: string;
  subtitle: string;
  benefits: readonly BenefitTranslation[];
}

export interface FAQItemTranslation {
  id: string;
  question: string;
  answer: string;
}

export interface FAQTranslations {
  label: string;
  title: string;
  subtitle: string;
  stillHaveQuestions: string;
  askUs: string;
  aria: string;
  items: readonly FAQItemTranslation[];
}

export interface CTATranslations {
  eyebrow: string;
  headline1: string;
  headline2: string;
  subtext: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
}

export interface ContactTranslations {
  label: string;
  title: string;
  subtitle: string;
  whatsappBadge: string;
  whatsappTitle: string;
  whatsappDesc: string;
  whatsappCta: string;
  privacyTitle: string;
  privacyText: string;
  emailLabel: string;
  readyTitle: string;
  readyDesc: string;
  openChat: string;
  copyMessage: string;
  messageCopied: string;
  backToForm: string;
  formAria: string;
  nameLabel: string;
  namePlaceholder: string;
  contactLabel: string;
  contactPlaceholder: string;
  emailLabel2: string;
  emailOptional: string;
  emailPlaceholder: string;
  professionLabel: string;
  professionPlaceholder: string;
  serviceLabel: string;
  servicePlaceholder: string;
  packageLabel: string;
  packagePlaceholder: string;
  budgetLabel: string;
  budgetOptional: string;
  budgetPlaceholder: string;
  descLabel: string;
  descPlaceholder: string;
  submitBtn: string;
  submitHint: string;
  submitAriaLabel: string;
  professions: readonly { id: string; label: string }[];
  budgets: readonly { id: string; label: string }[];
  services: readonly { id: string; label: string }[];
  packages: readonly { id: string; label: string; serviceId: string }[];
  errors: {
    name: string;
    contact: string;
    contactFormat: string;
    emailFormat: string;
    service: string;
    description: string;
  };
  msgGreeting: string;
  msgName: string;
  msgContact: string;
  msgEmail: string;
  msgProfession: string;
  msgService: string;
  msgPackage: string;
  msgBudget: string;
  msgDesc: string;
}

export interface FooterTranslations {
  navTitle: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaButton: string;
  ctaButtonLabel: string;
  copyright: string;
  builtWith: string;
  tagline: string;
  supportingText: string;
  links: {
    portfolio: string;
    services: string;
    pricing: string;
    process: string;
    faq: string;
    contact: string;
  };
}

export interface SharedTranslations {
  whatsappDefaultMsg: string;
  whatsappAddOnMsg: string;
}

export interface Translations {
  meta: MetaTranslations;
  nav: NavTranslations;
  hero: HeroTranslations;
  trust: TrustTranslations;
  portfolio: PortfolioTranslations;
  services: ServicesTranslations;
  pricing: PricingTranslations;
  maintenance: MaintenanceTranslations;
  process: ProcessTranslations;
  why: WhyTranslations;
  faq: FAQTranslations;
  cta: CTATranslations;
  contact: ContactTranslations;
  footer: FooterTranslations;
  shared: SharedTranslations;
}
