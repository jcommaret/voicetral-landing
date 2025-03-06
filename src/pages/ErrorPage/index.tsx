import SEO from '../../components/SEO';
import seoData from '../../data/seo.json';
import { SEOContent } from '../../types';
import "./index.scss"

function ErrorPage() {
  const seo = seoData as SEOContent;
  
  return (
    <>
      <SEO {...seo.error} />
      <div className="error-page">
        <h1>Page non trouvée</h1>
        <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
        <a href="/" className="cta-button">Retour à l'accueil</a>
      </div>
    </>
  );
}

export default ErrorPage
