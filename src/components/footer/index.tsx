// Styles
import "./index.scss"

// Component
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <p>
        © {currentYear} - Licence MIT - Ce projet est sous licence{" "}
        <a
          href="https://opensource.org/licenses/MIT"
          target="_blank"
          rel="noopener noreferrer"
        >
          MIT
        </a>
      </p>
    </footer>
  )
}

export default Footer
