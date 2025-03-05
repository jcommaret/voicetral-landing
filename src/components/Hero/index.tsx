import React from 'react';
import { HeroContent } from '../../types';
import './Hero.scss';

interface HeroProps {
  content: HeroContent;
  logoSrc: string;
}

const Hero: React.FC<HeroProps> = ({ content, logoSrc }) => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__logo">
          <img src={logoSrc} alt={`${content.title} Logo`} />
        </div>
        <h1>{content.title}</h1>
        <p className="hero__subtitle">{content.subtitle}</p>
        <div className="hero__buttons">
          <a 
            href={content.button.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
          >
            <span className="material-icons">{content.button.icon}</span>
            {content.button.text}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 