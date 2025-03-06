import React from 'react';
import { Helmet } from 'react-helmet-async';
import config from '../../data/config.json';
import { SiteConfig } from '../../types';

interface SEOProps {
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

const siteConfig = config as SiteConfig;

const defaultSEO = {
  title: `${siteConfig.app.name} - ${siteConfig.app.description}`,
  description: siteConfig.app.description,
  keywords: 'IA, voix, intelligence artificielle, iOS, application, conversation, vocal',
  ogTitle: `${siteConfig.app.name} - ${siteConfig.app.description}`,
  ogDescription: siteConfig.app.description,
  ogImage: `${siteConfig.app.domain}${siteConfig.images.socialShare}`,
  ogUrl: siteConfig.app.domain,
  twitterCard: 'summary_large_image' as const,
  twitterTitle: `${siteConfig.app.name} - ${siteConfig.app.description}`,
  twitterDescription: siteConfig.app.description,
  twitterImage: `${siteConfig.app.domain}${siteConfig.images.socialShare}`,
  canonicalUrl: siteConfig.app.domain,
  noIndex: false,
  lang: 'fr',
};

const SEO: React.FC<SEOProps> = (props) => {
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

      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={finalTwitterImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Favicon */}
      <link rel="icon" href={siteConfig.images.favicon} />

      {/* No index si spécifié */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
};

export default SEO; 