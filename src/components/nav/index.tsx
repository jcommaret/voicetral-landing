import { Link } from "react-router-dom"
import { NavData } from "../../types/nav.types"
import nav from "../../data/nav.json"

import "./index.scss"

function Nav(): JSX.Element {
  const navData = nav as NavData
  return (
    <>
      <header>
        <nav className="navigation">
          <h1 className="navigation__logo">{navData.logo.text}</h1>
          <ul className="navigation__links">
            {navData.links.map((link) => (
              <li key={link.text}>
                <Link to={link.path}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Nav
