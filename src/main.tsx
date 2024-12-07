// React entry point for the application
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { HashRouter as Router, Routes, Route } from "react-router-dom"

import Root from "./pages/Root"
import Home from "./pages/Home"
import About from "./pages/About"
import ErrorPage from "./pages/ErrorPage"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
