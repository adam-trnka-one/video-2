export interface LocalizedString {
  en: string;
  cz: string;
}

export interface Project {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  leadText: LocalizedString;
  videoUrl: string;
  thumbnail: string;
  category: string;
  date: string;
}

export interface Testimonial {
  name: string;
  text: LocalizedString;
  photo: string;
  category: string;
}

export type Language = 'en' | 'cz';

export interface Translations {
  [key: string]: {
    portfolio: string;
    contact: string;
    viewPortfolio: string;
    heroTitle: string;
    heroSubtitle: string;
    featuredProjects: string;
    contactTitle: string;
    contactSubtitle: string;
    email: string;
    call: string;
    instagram: string;
    vimeo: string;
    all: string;
    wedding: string;
    promo: string;
    showcase: string;
    testimonials: string;
    previous: string;
    next: string;
  };
}