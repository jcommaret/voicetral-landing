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
  year: number;
  author: string;
}

export interface SiteContent {
  hero: HeroContent;
  footer: FooterContent;
} 