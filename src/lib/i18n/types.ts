export interface MetaTranslations {
  title: string;
  description: string;
  ogTitle: string;
}

export interface NavTranslations {
  home: string;
  solutions: string;
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
  label: string;
  headline1: string;
  headline2: string;
  tagline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;
  scrollLabel: string;
}

export interface SolutionItemTranslation {
  id: string;
  title: string;
  description: string;
  examples: readonly string[];
  cta: string;
}

export interface SolutionsTranslations {
  label: string;
  title: string;
  subtitle: string;
  items: readonly SolutionItemTranslation[];
}

export interface ServiceItemTranslation {
  id: string;
  num: string;
  title: string;
  category: string;
  description: string;
  startingPrice: string;
  tags: readonly string[];
}

export interface ServicesTranslations {
  label: string;
  heading: string;
  subheading: string;
  categoryPersonal: string;
  categoryBusiness: string;
  categoryAdvanced: string;
  footerNote: string;
  items: readonly ServiceItemTranslation[];
}

export interface PricingPlanTranslation {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  duration: string;
  revisions?: string;
  hostingInfo?: string;
  cta: string;
  popular?: boolean;
  isCustom?: boolean;
  features: readonly string[];
}

export interface AddonTranslation {
  name: string;
  price: string;
}

export interface PaymentTermTranslation {
  condition: string;
  steps: readonly string[];
}

export interface PricingTranslations {
  label: string;
  heading: string;
  subheading: string;
  tabEntry: string;
  tabBusiness: string;
  tabAdvanced: string;
  popularLabel: string;
  entryPlans: readonly PricingPlanTranslation[];
  businessPlans: readonly PricingPlanTranslation[];
  advancedPlans: readonly PricingPlanTranslation[];
  addonsTitle: string;
  addonsNote: string;
  addons: readonly AddonTranslation[];
  paymentTitle: string;
  paymentNote: string;
  paymentTerms: readonly PaymentTermTranslation[];
}

export interface MaintenancePlanTranslation {
  id: string;
  name: string;
  price: string;
  period: string;
  features: readonly string[];
  exclusions: readonly string[];
}

export interface MaintenanceTranslations {
  label: string;
  heading: string;
  subheading: string;
  period: string;
  note: string;
  plans: readonly MaintenancePlanTranslation[];
}

export interface ProcessStepTranslation {
  num: string;
  title: string;
  description: string;
  duration: string;
}

export interface ProcessTranslations {
  label: string;
  heading: string;
  subheading: string;
  note: string;
  steps: readonly ProcessStepTranslation[];
}

export interface FAQItemTranslation {
  id: string;
  question: string;
  answer: string;
}

export interface FAQTranslations {
  label: string;
  heading: string;
  supportText: string;
  askLabel: string;
  items: readonly FAQItemTranslation[];
}

export interface ContactTranslations {
  /* Section heading */
  sectionLabel: string;
  headline1: string;
  headline2: string;
  /* Info column */
  directContactLabel: string;
  expectLabel: string;
  expectItems: readonly string[];
  /* Form labels */
  nameLabel: string;
  namePlaceholder: string;
  whatsappLabel: string;
  whatsappPlaceholder: string;
  emailLabel: string;
  emailOptional: string;
  emailPlaceholder: string;
  businessLabel: string;
  businessOptional: string;
  businessPlaceholder: string;
  serviceLabel: string;
  servicePlaceholder: string;
  budgetLabel: string;
  budgetOptional: string;
  budgetPlaceholder: string;
  descLabel: string;
  descPlaceholder: string;
  submitBtn: string;
  submitHint: string;
  /* Ready state */
  readyTitle: string;
  readyDesc: string;
  openWhatsapp: string;
  copyMessage: string;
  messageCopied: string;
  backToForm: string;
  /* Options */
  services: readonly { id: string; label: string }[];
  budgets: readonly { id: string; label: string }[];
  /* Validation errors */
  errors: {
    name: string;
    contact: string;
    contactFormat: string;
    emailFormat: string;
    service: string;
    description: string;
  };
  /* WhatsApp message keys */
  msgGreeting: string;
  msgName: string;
  msgWhatsapp: string;
  msgEmail: string;
  msgBusiness: string;
  msgService: string;
  msgBudget: string;
  msgDesc: string;
}

export interface FooterTranslations {
  tagline: string;
  navLabel: string;
  contactLabel: string;
  copyright: string;
  builtWith: string;
}

export interface SharedTranslations {
  whatsappDefaultMsg: string;
}

export interface Translations {
  meta: MetaTranslations;
  nav: NavTranslations;
  hero: HeroTranslations;
  solutions: SolutionsTranslations;
  services: ServicesTranslations;
  pricing: PricingTranslations;
  maintenance: MaintenanceTranslations;
  process: ProcessTranslations;
  faq: FAQTranslations;
  contact: ContactTranslations;
  footer: FooterTranslations;
  shared: SharedTranslations;
}
