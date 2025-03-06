import config from '../data/config.json';
import { SiteConfig } from '../types';

/**
 * Détermine si l'application est en mode production
 */
export const isProduction = (): boolean => {
  return import.meta.env.MODE === 'production';
};

/**
 * Retourne le chemin de base de l'application en fonction de l'environnement
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
 * @param path Le chemin relatif
 * @returns Le chemin complet
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
 * @param path Le chemin relatif
 * @returns L'URL complète
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