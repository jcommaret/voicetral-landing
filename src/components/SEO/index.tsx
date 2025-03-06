import React from 'react';
import { Helmet } from 'react-helmet-async';

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

const defaultSEO = {
  title: 'Voicetral - IA conversationnelle par la voix',
  description: 'Discutez naturellement avec une IA par la voix grâce à Voicetral. Téléchargez l\'application iOS dès maintenant.',
  keywords: 'IA, voix, intelligence artificielle, iOS, application, conversation, vocal',
  ogTitle: 'Voicetral - IA conversationnelle par la voix',
  ogDescription: 'Discutez naturellement avec une IA par la voix',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://voicetral.com',
  twitterCard: 'summary_large_image' as const,
  twitterTitle: 'Voicetral - IA conversationnelle par la voix',
  twitterDescription: 'Discutez naturellement avec une IA par la voix',
  twitterImage: '/twitter-image.jpg',
  canonicalUrl: 'https://voicetral.com',
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
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={twitterImage || ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* No index si spécifié */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
};

export default SEO; 