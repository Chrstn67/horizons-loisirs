import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import "./Footer.css";

const cols = [
  {
    title: "Le centre",
    links: [
      { label: "Nos valeurs", href: "/valeurs" },
      { label: "L'équipe", href: "/equipe" },
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

const socials = [
  {
    href: "https://www.instagram.com/horizons.loisirs?utm_source=qr",
    label: "Instagram",
    icon: "instagram",
  },
  {
    href: "https://www.linkedin.com/in/riad-mendi-617735195/",
    label: "LinkedIn",
    icon: "linkedin",
  },
  // {
  //   href: "mailto:contact@horizons-loisirs.fr",
  //   label: "E-mail",
  //   icon: "mail",
  // },
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
            Le centre de vacances des enfants et adolescents de 7 à 17 ans, à
            travers toute la France. Des séjours de découvertes, d&apos;amitiés
            et à fond le grand air.
          </p>
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
              <a href="tel:+33768658788">07 68 65 87 88</a>
            </li>
            <li>
              <a href="mailto:contact@horizons-loisirs.fr">
                contact@horizons-loisirs.fr
              </a>
            </li>
          </ul>

          <h3 className="footer__col-subtitle">Réseaux</h3>
          <div className="footer__socials">
            {socials.map(({ href, label, icon }) => (
              <a key={label} href={href} aria-label={label}>
                <Icon name={icon} size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <div className="footer__bottom-left">
            <p>
              © {new Date().getFullYear()} <i>Horizons & Loisirs</i>
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
