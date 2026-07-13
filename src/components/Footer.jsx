import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import "./Footer.css";

const cols = [
  {
    title: "Le centre",
    links: [
      { label: "Nos valeurs", href: "/valeurs" },
      { label: "L'équipe", href: "/equipe" },
      { label: "Le directeur", href: "/directeur" },
    ],
  },
  {
    title: "Les séjours",
    links: [
      { label: "Nos formules", href: "/formules" },
      { label: "Critères d'éligibilité", href: "/eligibilite" },
      { label: "Questions fréquentes", href: "/faq" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <div className="footer__logo-wrapper">
              <img
                className="footer__logo-img"
                src="./logo_horizons-loisirs.jpeg"
                alt="Logo Horizons & Loisirs"
              />
            </div>
            <span className="footer__logo-text">Horizons & Loisirs</span>
          </Link>
          <p>
            Le centre de vacances des enfants et adolescents de 7 à 17 ans,
            Mulhouse et alentours. Des séjours de découvertes, d&apos;amitiés et
            à fond le grand air.
          </p>
          <div className="footer__socials">
            {/* 
            <a href="#" aria-label="Facebook">
              <Icon name="facebook" size={20} />
            </a> */}
            <a
              href="https://www.linkedin.com/in/riad-mendi-617735195/"
              aria-label="Linkedin"
            >
              <Icon name="linkedin" size={20} />
            </a>
            <a href="mailto:bonjour@capsoleil.fr" aria-label="E-mail">
              <Icon name="mail" size={20} />
            </a>
          </div>
        </div>

        {cols.map((col) => (
          <nav key={col.title} className="footer__col" aria-label={col.title}>
            <h3>{col.title}</h3>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="footer__col">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="tel:+33450123456">07 68 65 87 88</a>
            </li>
            <li>
              <a href="mailto:bonjour@capsoleil.fr">bonjour@capsoleil.fr</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <div className="footer__bottom-left">
            <p>
              © {new Date().getFullYear()} <i>Horizons & Loisirs</i>
            </p>
            <p className="footer__bottom-tagline">
              Centre de vacances agréé Jeunesse et Sports
            </p>
          </div>

          <div className="footer__bottom-right">
            <div className="footer__dev-logo">
              <img
                className="footer__dev-logo-img"
                src="./logo-dev.jpg"
                alt="Développé par Christian HUMBERT"
              />
              <span className="footer__dev-text">
                Développé par Christian HUMBERT
              </span>
            </div>

            <div className="footer__legal">
              <Link to="/mentions-legales">Mentions légales</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
