// React
import { Link } from 'react-router-dom';

// Data 
import nav from '../../data/nav.json';

// Styles
import './index.scss';

// Component
function Nav() {
  return (
    <>
      <header>
        <nav className="navigation">
          <h1 className="navigation__logo">{nav.logo.text}</h1>
          <ul className="navigation__links">
            {nav.links.map((link) => (
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