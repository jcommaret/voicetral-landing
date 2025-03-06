# Voicetral Landing

## Projet

Voicetral Landing est un site web vitrine pour l'application Voicetral, une IA conversationnelle par la voix. Ce projet est construit avec Vite.js, React, TypeScript et SCSS. Il est optimisé pour le SEO avec react-helmet-async et utilise une architecture modulaire basée sur des composants.

## Prérequis

- Une bonne compréhension de [React](https://react.dev/) et [TypeScript](https://www.typescriptlang.org/)
- Connaissances de base en [Vite.js](https://vitejs.dev/)

## Fonctionnalités

- [x] [Vite.js](https://vitejs.dev/)
- [x] [React](https://react.dev/)
- [x] [TypeScript](https://www.typescriptlang.org/)
- [x] [SCSS](https://sass-lang.com/)
- [x] [React Router](https://reactrouter.com/)
- [x] [React Helmet Async](https://github.com/staylor/react-helmet-async) pour le SEO
- [x] Architecture de données centralisée (JSON)
- [x] Gestion dynamique de l'année dans le footer
- [x] Composants réutilisables
- [x] Design responsive
- [x] Intégration de liens sociaux (LinkedIn)
- [x] Configuration centralisée des images pour Open Graph et Twitter Cards

## À faire

- [ ] Améliorer les assets responsives
- [ ] Ajouter plus de composants

## Installation

- Cloner le dépôt
- Ouvrir un terminal dans le dossier du projet
- Exécuter `npm install` pour installer les dépendances

## Développement

- Exécuter `npm run dev` pour démarrer le serveur de développement

## Déploiement

- Dans package.json, modifier le chemin homepage avec le nom de votre dépôt.
- Ouvrir un terminal dans le dossier du projet
- Exécuter `npm run deploy` pour déployer le projet sur GitHub Pages

C'est tout !

## Structure des dossiers

```
- index.html
- public/
  - images/
    - social-share.jpg
    - favicon.ico
- src/
  - assets/
    - images.tsx
    - logo/
      - logo.png
  - components/
    - Footer/
      - index.tsx
      - Footer.scss
    - Hero/
      - index.tsx
      - Hero.scss
    - SEO/
      - index.tsx
  - data/
    - content.json
    - seo.json
    - config.json
  - pages/
    - Root/
      - index.tsx
      - index.scss
    - Home/
      - index.tsx
      - index.scss
    - ErrorPage/
      - index.tsx
      - index.scss
  - styles/
    - _variables.scss
    - index.scss
  - types/
    - index.ts
  - main.tsx
```

## Caractéristiques principales

### Gestion du SEO

Le projet utilise react-helmet-async pour gérer les balises meta et optimiser le référencement. Les données SEO sont centralisées dans un fichier JSON pour faciliter la maintenance. Les images pour Open Graph et Twitter Cards sont configurées de manière centralisée dans le fichier `config.json`.

### Architecture de données

Les contenus sont stockés dans des fichiers JSON, ce qui permet une séparation claire entre la logique et les données, facilitant ainsi les mises à jour de contenu sans toucher au code.

### Composants modulaires

L'application est construite autour de composants réutilisables (Hero, Footer, SEO) qui peuvent être facilement personnalisés et étendus.

### Configuration centralisée

Le fichier `config.json` contient les paramètres globaux de l'application, y compris les chemins d'images pour les médias sociaux, ce qui permet de modifier facilement ces ressources sans avoir à mettre à jour le code.
