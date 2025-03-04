import "./index.scss"
import img from "../../assets/images"

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content">
          <div className="hero__logo">
            <img src={img.logo} alt="Voicetral Logo" />
          </div>
          <h1>Voicetral</h1>
          <p className="hero__subtitle">Discutez naturellement avec une IA par la voix</p>
          <div className="hero__buttons">
            <a href="https://testflight.apple.com/join/Tm11XebX" target="_blank" rel="noopener noreferrer">
              <button className="cta-button">
                <span className="material-icons">phone_iphone</span> Rejoindre la beta iOS
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <div className="cta__content">
          <h2>Envie de tester Voicetral en avant-première ?</h2>
          <p>Rejoignez notre programme beta pour iOS et soyez parmi les premiers à essayer notre technologie de reconnaissance vocale</p>
          <div className="cta__buttons">
            <a href="https://testflight.apple.com/join/Tm11XebX" target="_blank" rel="noopener noreferrer">
              <button className="cta-button">
                <span className="material-icons">rocket_launch</span> Participer à la beta
              </button>
            </a>
          </div>
        </div>
        <div className="cta__decoration"></div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          Site conçu et application conçues par Jérôme Commaret
        </p>
        <p className="footer__joke">
          En quête d'aventures professionnelles... Expertise en React, React Native et Développement web  
          <span className="material-icons">code</span> Passionné par les interfaces utilisateur élégantes et les expériences mobiles innovantes
          <span className="material-icons">person</span>15 ans d'expérience en management et developpement d'applications mobile et sites web. 
          <a href="https://www.linkedin.com/in/jcommaret/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
            <span className="material-icons">person</span> Retrouvez-moi sur LinkedIn
          </a>
        </p>
      </footer>
    </div>
  )
}
export default Home
