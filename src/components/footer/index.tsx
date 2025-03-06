import React from 'react';
import { FooterContent } from '../../types';
import './Footer.scss';

interface FooterProps {
  content: FooterContent;
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  const currentYear = new Date().getFullYear();
  // Utiliser l'année fournie ou l'année actuelle
  const displayYear = content.year || currentYear;
  
  return (
    <footer className="footer">
      <p>
        {content.text} <a href={content.linkedInUrl} target="_blank" rel="noopener noreferrer" className="author-link">{content.author}</a> - {displayYear}
      </p>
    </footer>
  );
};

export default Footer;
