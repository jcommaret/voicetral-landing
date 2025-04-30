import React from 'react';
import Hero from '@components/Hero';
import SEO from '@components/SEO';
import siteContent from '@data/content.json';
import seoData from '@data/seo.json';
import { SiteContent, SEOContent } from '../../types';
import './index.scss';

const Home: React.FC = () => {
  const content = siteContent as SiteContent;
  const seo = seoData as SEOContent;
  
  return (
    <>
      <SEO {...seo.home} />
      <div className="home">
        <Hero content={content.hero} logoSrc="logo.png" />
      </div>
    </>
  );
};

export default Home;
