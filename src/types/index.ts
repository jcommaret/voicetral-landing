/**
 * Définition des types pour le contenu du Hero
 * Cette interface décrit la structure des données utilisées dans le composant Hero
 */
export interface HeroContent {
  /** Chemin vers le logo */
  logo: string;
  /** Titre principal affiché dans le Hero */
  title: string;
  /** Sous-titre ou description courte */
  subtitle: string;
  /** Configuration du bouton d'action principal */
  button: {
    /** Texte affiché sur le bouton */
    text: string;
    /** URL de redirection au clic */
    url: string;
    /** Nom de l'icône Material Design à afficher */
    icon: string;
  };
}

/**
 * Définition des types pour le contenu du Footer
 * Cette interface décrit la structure des données utilisées dans le composant Footer
 */
export interface FooterContent {
  /** Texte d'introduction du footer (ex: "Site et application créée par") */
  text: string;
  /** Année affichée dans le footer (optionnel, utilise l'année courante si non spécifié) */
  year?: number;
  /** Nom de l'auteur du site */
  author: string;
  /** URL du profil LinkedIn de l'auteur */
  linkedInUrl: string;
}

/**
 * Structure globale du contenu du site
 * Regroupe tous les contenus spécifiques à chaque section
 */
export interface SiteContent {
  /** Contenu de la section Hero */
  hero: HeroContent;
  /** Contenu du Footer */
  footer: FooterContent;
}

/**
 * Configuration des métadonnées SEO pour chaque page
 * Ces données sont utilisées pour générer les balises meta dans le head du document
 */
export interface SEOData {
  /** Titre de la page (balise title) */
  title?: string;
  /** Description de la page (meta description) */
  description?: string;
  /** Mots-clés pour le référencement (meta keywords) */
  keywords?: string;
  /** Titre pour Open Graph (réseaux sociaux) */
  ogTitle?: string;
  /** Description pour Open Graph */
  ogDescription?: string;
  /** URL de l'image pour Open Graph */
  ogImage?: string;
  /** URL canonique de la page pour Open Graph */
  ogUrl?: string;
  /** Type de carte Twitter (summary, summary_large_image, etc.) */
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  /** Titre pour Twitter */
  twitterTitle?: string;
  /** Description pour Twitter */
  twitterDescription?: string;
  /** URL de l'image pour Twitter */
  twitterImage?: string;
  /** URL canonique de la page */
  canonicalUrl?: string;
  /** Si true, indique aux moteurs de recherche de ne pas indexer la page */
  noIndex?: boolean;
  /** Code de langue de la page (fr, en, etc.) */
  lang?: string;
}

/**
 * Regroupement des données SEO pour toutes les pages du site
 */
export interface SEOContent {
  /** Données SEO pour la page d'accueil */
  home: SEOData;
  /** Données SEO pour la page d'erreur */
  error: SEOData;
  /** Index dynamique pour d'autres pages */
  [key: string]: SEOData;
}

/**
 * Configuration d'environnement (dev/prod)
 * Contient les paramètres spécifiques à chaque environnement
 */
export interface EnvConfig {
  /** Chemin de base de l'application (vide en dev, nom du repo en prod) */
  basePath: string;
}

/**
 * Configuration générale de l'application
 */
export interface AppConfig {
  /** Nom de l'application */
  name: string;
  /** Domaine principal du site */
  domain: string;
  /** Description courte de l'application */
  description: string;
  /** Chemin de base du site */
  basePath: string;
}

/**
 * Configuration des chemins d'images
 */
export interface ImagesConfig {
  /** Chemin vers le logo */
  logo: string;
  /** Chemin vers l'image de partage social */
  socialShare: string;
  /** Chemin vers le favicon */
  favicon: string;
}

/**
 * Configuration globale du site
 * Regroupe toutes les configurations (app, images, environnements)
 */
export interface SiteConfig {
  /** Configuration de l'application */
  app: AppConfig;
  /** Configuration des images */
  images: ImagesConfig;
  /** Configuration des environnements */
  env: {
    /** Configuration de développement */
    development: EnvConfig;
    /** Configuration de production */
    production: EnvConfig;
  };
} 