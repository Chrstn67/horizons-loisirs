import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Icon from "./Icon.jsx";
import "./Navbar.css";

const LINKS = [
  { label: "Accueil", to: "/" },
  { label: "Formules", to: "/formules" },
  { label: "L'équipe", to: "/equipe" },
  { label: "Nos valeurs", to: "/valeurs" },
  { label: "Éligibilité", to: "/eligibilite" },
  { label: "FAQ", to: "/faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloque le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((v) => !v);

  return (
    <>
      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container nav__inner">
          <Link
            className="nav__brand"
            to="/"
            aria-label="Cap Soleil, retour a l'accueil"
          >
            <img
              className="nav__logo"
              src="./logo_horizons-loisirs.jpeg"
              alt="Logo Cap Soleil"
            />
            <span className="nav__brand-text">
              Horizons & <span>Loisirs</span>
            </span>
          </Link>

          <nav className="nav__links" aria-label="Navigation principale">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                className={({ isActive }) =>
                  `nav__link ${isActive ? "is-active" : ""}`
                }
                to={l.to}
                end={l.to === "/"}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <Link className="btn btn-primary nav__cta" to="/contact">
            Nous contacter
          </Link>
        </div>
      </header>

      {/* Burger flottant en bas à gauche (visible uniquement sur mobile) */}
      <div className="nav__burger-wrapper">
        <button
          className={`nav__burger ${open ? "is-open" : ""}`}
          onClick={toggleMenu}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Menu plein écran mobile immersif */}
      <div
        className={`nav__overlay ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="nav__overlay-bubbles" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <nav className="nav__overlay-links" aria-label="Menu mobile">
          {LINKS.map((l, i) => (
            <NavLink
              key={l.to}
              className="nav__overlay-link"
              style={{ "--i": i }}
              to={l.to}
              end={l.to === "/"}
              onClick={closeMenu}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            className="btn btn-primary nav__overlay-cta"
            style={{ "--i": LINKS.length }}
            to="/contact"
            onClick={closeMenu}
          >
            Nous contacter
          </Link>
        </nav>

        {/* Bouton de fermeture en bas à gauche */}
        <button
          className="nav__overlay-close"
          onClick={closeMenu}
          aria-label="Fermer le menu"
        >
          <Icon name="close" size={28} strokeWidth={2.4} />
        </button>
      </div>
    </>
  );
}
