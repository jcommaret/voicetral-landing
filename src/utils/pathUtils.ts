/**
 * Utilitaires pour la gestion des chemins (URLs, assets, etc.)
 * Ce module permet de gérer les chemins de manière cohérente entre les environnements 
 * de développement et de production, notamment pour GitHub Pages.
 */
import config from '../data/config.json';
import { SiteConfig } from '../types';

/**
 * Détermine si l'application est en mode production
 * @returns {boolean} true si l'application est en production, false sinon
 */
export const isProduction = (): boolean => {
  return import.meta.env.MODE === 'production';
};

/**
 * Retourne le chemin de base de l'application en fonction de l'environnement
 * - En développement : "" (chaîne vide)
 * - En production : "/voicetral-landing" (ou autre nom de dépôt GitHub)
 * @returns {string} Le chemin de base approprié
 */
export const getBasePath = (): string => {
  // Utiliser le type correct pour config
  const typedConfig = config as SiteConfig;
  return isProduction() 
    ? typedConfig.env.production.basePath 
    : typedConfig.env.development.basePath;
};

/**
 * Construit un chemin complet en tenant compte du basePath
 * Cette fonction ajoute automatiquement le préfixe correct au chemin selon l'environnement
 * @param {string} path Le chemin relatif
 * @returns {string} Le chemin complet avec basePath
 * @example
 * // En prod avec basePath='/voicetral-landing'
 * buildPath('/images/logo.png') // => '/voicetral-landing/images/logo.png'
 * // En dev avec basePath=''
 * buildPath('/images/logo.png') // => '/images/logo.png'
 */
export const buildPath = (path: string): string => {
  const basePath = getBasePath();
  
  // Si le chemin commence déjà par le basePath, ne pas l'ajouter à nouveau
  if (path.startsWith(basePath)) {
    return path;
  }
  
  // Si le chemin commence par /, le combiner avec le basePath
  if (path.startsWith('/')) {
    return `${basePath}${path}`;
  }
  
  // Sinon, ajouter / entre le basePath et le chemin
  return `${basePath}/${path}`;
};

/**
 * Construit une URL complète en tenant compte du domaine et du basePath
 * Cette fonction génère des URLs absolues complètes pour le SEO
 * @param {string} path Le chemin relatif
 * @returns {string} L'URL complète (domaine + basePath + chemin)
 * @example
 * // Avec domain='https://voicetral.com' et basePath='/voicetral-landing'
 * buildUrl('about') // => 'https://voicetral.com/voicetral-landing/about'
 */
export const buildUrl = (path: string): string => {
  // Utiliser le type correct pour config
  const typedConfig = config as SiteConfig;
  const domain = typedConfig.app.domain;
  const fullPath = buildPath(path);
  
  // Si le chemin est déjà une URL complète, le retourner tel quel
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  return `${domain}${fullPath}`;
}; 