export interface HeroContent {
  logo: string;
  title: string;
  subtitle: string;
  button: {
    text: string;
    url: string;
    icon: string;
  };
}

export interface FooterContent {
  text: string;
  year?: number;
  author: string;
  linkedInUrl: string;
}

export interface SiteContent {
  hero: HeroContent;
  footer: FooterContent;
}

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  lang?: string;
}

export interface SEOContent {
  home: SEOData;
  error: SEOData;
  [key: string]: SEOData;
}

export interface AppConfig {
  name: string;
  domain: string;
  description: string;
}

export interface ImagesConfig {
  logo: string;
  socialShare: string;
  favicon: string;
}

export interface SiteConfig {
  app: AppConfig;
  images: ImagesConfig;
} 