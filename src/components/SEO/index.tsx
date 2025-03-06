/**
 * Composant SEO - Gestion des métadonnées pour le référencement
 * 
 * Ce composant utilise react-helmet-async pour injecter les balises meta
 * nécessaires au référencement (SEO) et au partage sur les réseaux sociaux.
 * Il gère automatiquement:
 * - Les balises meta standards (title, description, keywords)
 * - Les balises Open Graph pour Facebook, LinkedIn, etc.
 * - Les balises Twitter Card pour Twitter
 * - Les URLs canoniques
 * - Le favicon
 * - L'indexation (noindex si nécessaire)
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import config from '../../data/config.json';
import { SiteConfig } from '../../types';
import { buildUrl } from '../../utils/pathUtils';
import img from '../../assets/images';

/**
 * Interface des propriétés du composant SEO
 * Toutes les propriétés sont optionnelles car des valeurs par défaut sont définies
 */
interface SEOProps {
  title?: string;               // Titre de la page
  description?: string;         // Description pour meta description
  keywords?: string;            // Mots-clés pour meta keywords
  ogTitle?: string;             // Titre pour Open Graph (Facebook, LinkedIn)
  ogDescription?: string;       // Description pour Open Graph
  ogImage?: string;             // Image pour Open Graph
  ogUrl?: string;               // URL pour Open Graph
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'; // Type de carte Twitter
  twitterTitle?: string;        // Titre pour Twitter
  twitterDescription?: string;  // Description pour Twitter
  twitterImage?: string;        // Image pour Twitter
  canonicalUrl?: string;        // URL canonique
  noIndex?: boolean;            // Si true, la page ne sera pas indexée
  lang?: string;                // Langue de la page (fr, en, etc.)
}

// Typage fort de la configuration
const siteConfig = config as SiteConfig;

/**
 * Valeurs par défaut pour les métadonnées
 * Utilisées si des valeurs spécifiques ne sont pas fournies via les props
 */
const defaultSEO = {
  title: `${siteConfig.app.name} - ${siteConfig.app.description}`,
  description: siteConfig.app.description,
  keywords: 'IA, voix, intelligence artificielle, iOS, application, conversation, vocal',
  ogTitle: `${siteConfig.app.name} - ${siteConfig.app.description}`,
  ogDescription: siteConfig.app.description,
  ogImage: img.socialShare,     // Image importée via assets/images.tsx
  ogUrl: buildUrl(''),          // URL construite avec le basePath correct
  twitterCard: 'summary_large_image' as const,
  twitterTitle: `${siteConfig.app.name} - ${siteConfig.app.description}`,
  twitterDescription: siteConfig.app.description,
  twitterImage: img.socialShare, // Image importée via assets/images.tsx
  canonicalUrl: buildUrl(''),    // URL canonique construite avec le basePath
  noIndex: false,                // Par défaut, indexer la page
  lang: 'fr',                    // Langue par défaut: français
};

/**
 * Composant SEO
 * @param props Propriétés SEO spécifiques à la page
 * @returns Composant Helmet avec les métadonnées configurées
 */
const SEO: React.FC<SEOProps> = (props) => {
  // Fusion des valeurs par défaut avec les props spécifiques
  const {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    canonicalUrl,
    noIndex,
    lang,
  } = { ...defaultSEO, ...props };

  // Si une image spécifique n'est pas fournie, utilisez l'image sociale par défaut
  const finalOgImage = ogImage || defaultSEO.ogImage;
  const finalTwitterImage = twitterImage || defaultSEO.twitterImage;

  return (
    <Helmet>
      {/* Balises standard */}
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph - pour Facebook, LinkedIn, etc. */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card - pour Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={finalTwitterImage} />

      {/* URL canonique - évite le contenu dupliqué */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Favicon - icône du site */}
      <link rel="icon" href={img.favicon} />

      {/* No index si spécifié - empêche l'indexation */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
};

export default SEO; 