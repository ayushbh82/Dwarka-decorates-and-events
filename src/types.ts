export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string; // Lucide icon identifier
  tagline: string;
  image: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "Weddings" | "Birthdays" | "Corporate Events" | "Stage Shows" | "Cultural Events";
  image: string;
  location: string;
  year: string;
  description: string;
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company?: string;
  eventDate: string;
  rating: number;
  image: string;
  comment: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Pricing" | "Planning" | "Decor";
}

export interface ProcessStep {
  step: number;
  title: string;
  duration: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface EstimateConfig {
  eventType: string;
  basePrice: number;
  guestPriceMultiplier: number;
  availableExtras: {
    id: string;
    name: string;
    price: number;
    description: string;
  }[];
}
