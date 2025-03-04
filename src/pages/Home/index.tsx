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
            <button className="cta-button">Essayer gratuitement</button>
            <button className="cta-button cta-button--outline">Voir la démo</button>
          </div>
          <div className="hero__stats">
            <div className="stat">
              <span className="stat__number">10K+</span>
              <span className="stat__label">Utilisateurs</span>
            </div>
            <div className="stat">
              <span className="stat__number">4.8/5</span>
              <span className="stat__label">Note moyenne</span>
            </div>
          </div>
        </div>
        <div className="hero__image">
          <div className="hero__image-wrapper">
            <img src={img.bannerBlack} alt="Voicetral Interface" className="hero__main-image" />
            <div className="hero__floating-elements">
              <div className="floating-bubble floating-bubble--1">
                <span className="bubble-icon">🎯</span>
                <span>IA Conversationnelle</span>
              </div>
              <div className="floating-bubble floating-bubble--2">
                <span className="bubble-icon">🎤</span>
                <span>Reconnaissance Vocale</span>
              </div>
              <div className="floating-bubble floating-bubble--3">
                <span className="bubble-icon">⚡️</span>
                <span>Temps Réel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Une nouvelle façon de communiquer</h2>
        <div className="features__grid">
          <div className="feature-card">
            <div className="feature-card__icon">🗣️</div>
            <h3>Conversations naturelles</h3>
            <p>Parlez simplement, comme à un ami</p>
          </div>
          <div className="feature-card">
            <div className="feature-card__icon">⚡️</div>
            <h3>Réponses instantanées</h3>
            <p>Une IA qui vous répond en temps réel</p>
          </div>
          <div className="feature-card">
            <div className="feature-card__icon">🌐</div>
            <h3>Accessible partout</h3>
            <p>Sur votre mobile, tablette ou ordinateur</p>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="how-it-works">
        <h2>Comment ça marche ?</h2>
        <div className="steps">
          <div className="step">
            <div className="step__number">1</div>
            <h3>Installez l'application</h3>
            <p>Téléchargez Voicetral sur votre appareil</p>
          </div>
          <div className="step">
            <div className="step__number">2</div>
            <h3>Commencez à parler</h3>
            <p>Appuyez sur le bouton et parlez naturellement</p>
          </div>
          <div className="step">
            <div className="step__number">3</div>
            <h3>Obtenez des réponses</h3>
            <p>L'IA vous répond instantanément</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <div className="cta__content">
          <h2>Envie d'essayer une nouvelle expérience ?</h2>
          <p>Rejoignez des milliers d'utilisateurs qui discutent déjà avec Voicetral</p>
          <div className="cta__buttons">
            <button className="cta-button">Commencer maintenant</button>
            <button className="cta-button cta-button--outline">En savoir plus</button>
          </div>
        </div>
        <div className="cta__decoration"></div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="contact__wrapper">
          <div className="contact__info">
            <h2>Une question ?</h2>
            <p>Notre équipe est là pour vous aider</p>
            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__icon">📧</span>
                <span>support@voicetral.com</span>
              </div>
              <div className="contact__detail">
                <span className="contact__icon">💬</span>
                <span>Chat en direct</span>
              </div>
            </div>
          </div>
          <div className="contact__content">
            <form className="contact__form">
              <input type="email" placeholder="Votre email" />
              <textarea placeholder="Votre message"></textarea>
              <button type="submit" className="submit-button">Envoyer</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home
