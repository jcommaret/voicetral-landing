import React from 'react';
import Hero from '../../components/Hero';
import img from '../../assets/images';
import siteContent from '../../data/content.json';
import { SiteContent } from '../../types';
import './index.scss';

const Home: React.FC = () => {
  const content = siteContent as SiteContent;
  
  return (
    <div className="home">
      <Hero content={content.hero} logoSrc={img.logo} />
    </div>
  );
};

export default Home;
