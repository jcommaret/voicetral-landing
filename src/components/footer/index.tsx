/**
 * Composant Footer - Pied de page de l'application
 * 
 * Ce composant représente le pied de page présent sur toutes les pages du site.
 * Il contient:
 * - Mention de droits d'auteur
 * - Lien vers le profil LinkedIn de l'auteur
 * - Année dynamique (utilise l'année courante si non spécifiée)
 */
import React from 'react';
import { FooterContent } from '../../types';
import './Footer.scss';

/**
 * Interface des propriétés du composant Footer
 */
interface FooterProps {
  /** Contenu du footer (texte, auteur, année, lien LinkedIn) */
  content: FooterContent;
}

/**
 * Composant Footer
 * 
 * @param props.content - Données de contenu pour le footer
 * @returns Composant React pour le pied de page
 */
const Footer: React.FC<FooterProps> = ({ content }) => {
  // Récupérer l'année courante
  const currentYear = new Date().getFullYear();
  
  // Utiliser l'année fournie ou l'année actuelle automatiquement
  const displayYear = content.year || currentYear;
  
  return (
    <footer className="footer">
      <p>
        {content.text}{' '}
        <a 
          href={content.linkedInUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="author-link"
        >
          {content.author}
        </a>
        {' - '}{displayYear}
      </p>
    </footer>
  );
};

export default Footer;
