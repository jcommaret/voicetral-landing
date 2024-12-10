# TGV

## Project

TGV is a boilerplate for building websites with Vite.js, React, TypeScript, SCSS, deployed on GitHub Pages, it also features react-router navigation and json files for routes, navigation, content, assets. And a 404.html that redirects lost pages to the homepage using hashrouter.

## Prerequisites

- A good understanding of [GitHub Pages](https://docs.github.com/en/pages)

## Features

- [x] [Vite.js](https://vitejs.dev/)
- [x] [React](https://react.dev/)
- [x] [TypeScript](https://www.typescriptlang.org/)
- [x] [SCSS](https://sass-lang.com/)
- [x] [React-router](https://reactrouter.com/)
- [x] Navigation
- [x] Json files for routes, navigation, content.

## To do

- [ ] Improve responsive assets
- [ ] More components

## Installation

- Clone the repository
- Open a terminal in the project folder
- Run `npm install` to install the dependencies

## Development

- Run `npm run dev` to start the development server

## Deployement

- In package.json, change the homepage path to your repository name.
- Open a terminal in the project folder
- Run `npm run deploy` to deploy the project on GitHub Pages

Your are done.

## Folder structure

- 404.html
- src
  - assets
    - images.tsx
  - data
    - nav.json
  - components
    - footer
      - index.tsx
      - index.scss
    - nav
      - index.tsx
      - index.scss
  - styles
    - utils
      - \_breakpoints.scss
      - \_colors.scss
      - \_fonts.scss
      - \_mixins.scss
  - pages
    - Root
      - index.tsx
      - index.scss
    - Home
      - index.tsx
      - index.scss
    - About
      - index.tsx
      - index.scss
  - main.tsx
