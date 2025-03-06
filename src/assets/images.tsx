/**
 * Centralisation des imports d'images pour l'application
 * 
 * Ce fichier permet de gérer toutes les images de l'application à un seul endroit.
 * Avantages:
 * - Simplification des imports (import img from '../../assets/images')
 * - Cohérence dans la gestion des ressources
 * - Optimisation automatique des images via Vite.js
 * - Facilité de maintenance (changement d'images à un seul endroit)
 */

// Import des images depuis leurs emplacements respectifs
import logoImage from './logo/logo.png';
import socialShareImage from './social/socialShare.png';
import faviconImage from './logo/logo.png'; // Utiliser temporairement le logo comme favicon

/**
 * Objet exposant toutes les images de l'application
 * Chaque image est importée puis exposée via cette interface unifiée
 */
const img = {
  // Logo principal de l'application
  logo: logoImage,
  // Image utilisée pour les partages sur réseaux sociaux (Open Graph, Twitter)
  socialShare: socialShareImage,
  // Favicon du site (icône affichée dans les onglets du navigateur)
  favicon: faviconImage
}

export default img
