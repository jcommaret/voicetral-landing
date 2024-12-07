import { Link } from "react-router-dom"
import { NavData } from "../../types/nav.types"
import nav from "../../data/nav.json"
import img from "../../assets/images"
import "./index.scss"

function Nav(): JSX.Element {
  const navData = nav as NavData
  return (
    <>
      <header>
        <nav className="navigation">
          <h1 className="navigation__logo">
            <Link to={navData.links[0].path}>
              <img src={img.logo} alt="logo" />
            </Link>
          </h1>
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
