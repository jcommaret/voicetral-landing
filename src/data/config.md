# Configuration de l'application

Ce document décrit la structure et l'utilité du fichier `config.json`.

## Structure du fichier config.json

```json
{
  "app": {
    "name": "Voicetral",
    "domain": "https://voicetral.com",
    "description": "Discutez naturellement avec une IA par la voix",
    "basePath": "/voicetral-landing"
  },
  "images": {
    "logo": "/images/logo.png",
    "socialShare": "/images/social-share.jpg",
    "favicon": "/images/favicon.ico"
  },
  "env": {
    "development": {
      "basePath": ""
    },
    "production": {
      "basePath": "/voicetral-landing"
    }
  }
}
```

## Détails des sections

### Section `app`

Contient les informations générales de l'application :

- `name` : Nom de l'application affiché dans les titres
- `domain` : Domaine principal pour les URLs absolues
- `description` : Description courte de l'application
- `basePath` : Chemin de base pour les URLs (utilisé principalement en production)

### Section `images`

Définit les chemins vers les ressources images principales :

- `logo` : Chemin vers le logo principal
- `socialShare` : Chemin vers l'image pour les partages sur réseaux sociaux
- `favicon` : Chemin vers l'icône du site (favicon)

### Section `env`

Configuration spécifique à chaque environnement :

#### Environment `development`

- `basePath` : Chemin de base vide en développement local

#### Environment `production`

- `basePath` : Chemin de base en production (GitHub Pages), correspond au nom du dépôt GitHub

## Utilisation

Ce fichier est importé dans plusieurs composants :

1. Dans le composant SEO pour définir les métadonnées par défaut
2. Dans les utilitaires `pathUtils.ts` pour construire les URLs correctes
3. Dans la gestion des assets pour les chemins des images

## Modification

Pour modifier la configuration :

1. Pour un déploiement sur GitHub Pages : Modifiez `env.production.basePath` avec le nom de votre dépôt
2. Pour changer le domaine principal : Modifiez `app.domain`
3. Pour mettre à jour les métadonnées : Modifiez `app.name` et `app.description` 