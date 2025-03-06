/**
 * Point d'entrée principal de l'application Voicetral Landing
 * 
 * Ce fichier configure:
 * 1. Le rendu React dans l'élément racine du DOM
 * 2. Les fournisseurs de contexte (HelmetProvider pour le SEO)
 * 3. Le routage de l'application avec react-router
 * 4. La gestion des erreurs avec le composant ErrorPage
 */

// Imports React
import * as React from "react"
import * as ReactDOM from "react-dom/client"

// Routing et SEO
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"

// Composants de page
import Root from "./pages/Root"        // Composant racine (layout principal)
import Home from "./pages/Home"        // Page d'accueil
import ErrorPage from "./pages/ErrorPage" // Page d'erreur 404

/**
 * Rendu de l'application React
 * 
 * Configuration:
 * - StrictMode: Active les vérifications supplémentaires en développement
 * - HelmetProvider: Permet la gestion des balises meta pour le SEO
 * - Router: Utilise HashRouter pour compatibilité avec GitHub Pages
 * - Routes: Définit la structure de navigation de l'application
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Routes>
          {/* Route principale avec layout commun */}
          <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
            {/* Route de la page d'accueil (index) */}
            <Route index element={<Home />} />
            {/* Ici, d'autres routes peuvent être ajoutées au besoin */}
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
)
