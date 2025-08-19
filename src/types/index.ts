export interface LocalizedContent {
  en: string;
  es: string;
}

export interface Image {
  src: string;
  alt: LocalizedContent;
  width?: number;
  height?: number;
}

export interface Service {
  id: string;
  slug: string;
  title: LocalizedContent;
  description: LocalizedContent;
  shortDescription: LocalizedContent;
  images: Image[];
  featured: boolean;
  process?: LocalizedContent[];
  relatedServices?: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: LocalizedContent;
  description: LocalizedContent;
  beforeImage: Image;
  afterImage: Image;
  serviceCategory: string;
  year: number;
}

export interface Testimonial {
  id: string;
  name: string;
  text: LocalizedContent;
  rating: number;
  service: string;
  image?: Image;
  role?: LocalizedContent;
}

export interface TeamMember {
  id: string;
  name: string;
  role: LocalizedContent;
  bio: LocalizedContent;
  image: Image;
  experience: number;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: LocalizedContent;
  businessHours: LocalizedContent;
  emergencyPhone?: string;
}

export interface SEOMetadata {
  title: LocalizedContent;
  description: LocalizedContent;
  keywords: string[];
  ogImage?: string;
}