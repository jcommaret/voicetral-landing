import React from 'react';
import { FooterContent } from '../../types';
import './Footer.scss';

interface FooterProps {
  content: FooterContent;
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="footer">
      <p>
        {content.text} {content.author} - {content.year}
      </p>
    </footer>
  );
};

export default Footer;
