/**
 * Composant Hero - Section principale d'accueil
 * 
 * Ce composant représente la première section visible sur la page d'accueil.
 * Il contient les éléments principaux de présentation de l'application :
 * - Logo de l'application
 * - Titre principal
 * - Sous-titre / description courte
 * - Bouton d'action principal (CTA)
 */
import React from 'react';
import { HeroContent } from '../../types';
import { buildPath } from '../../utils/pathUtils';
import './Hero.scss';

/**
 * Interface des propriétés du composant Hero
 */
interface HeroProps {
  /** Contenu textuel et configuration du Hero */
  content: HeroContent;
  /** Chemin vers l'image du logo */
  logoSrc: string;
}

/**
 * Composant Hero
 * 
 * @param props.content - Données de contenu (titre, description, bouton)
 * @param props.logoSrc - Chemin vers l'image du logo
 * @returns Composant React pour la section Hero
 */
const Hero: React.FC<HeroProps> = ({ content, logoSrc }) => {
  // Construire le chemin complet du logo avec le bon basePath
  const fullLogoPath = buildPath(logoSrc);
  
  return (
    <section className="hero">
      <div className="hero__content">
        {/* Logo de l'application */}
        <div className="hero__logo">
          <img src={fullLogoPath} alt={`${content.title} Logo`} />
        </div>
        
        {/* Titre principal */}
        <h1>{content.title}</h1>
        
        {/* Sous-titre / Description */}
        <p className="hero__subtitle">{content.subtitle}</p>
        
        {/* Bouton d'action */}
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