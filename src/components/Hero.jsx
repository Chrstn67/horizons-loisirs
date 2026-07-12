import { useNavigate } from "react-router-dom";
import { useParallax } from "../hooks/useParallax.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import Icon from "./Icon.jsx";
import "./Hero.css";

const BENEFITS = [
  { icon: "shield", label: "Moins de stress parental" },
  { icon: "star", label: "Meilleure qualité de vie au travail" },
  { icon: "sun", label: "Fidélisation des salariés" },
  { icon: "family", label: "Équilibre vie pro et vie familiale préservé" },
];

export default function Hero() {
  const parallaxRef = useParallax();
  const navigate = useNavigate();
  useScrollReveal();

  return (
    <section id="hero" className="hero" ref={parallaxRef}>
      {/* Formes décoratives animées en parallaxe */}
      <div className="hero__decor" aria-hidden="true">
        <span className="hero__blob hero__blob--sun" data-speed="0.12" />
        <span className="hero__blob hero__blob--lagoon" data-speed="0.2" />
        <span className="hero__sparkle hero__sparkle--1" data-speed="0.35">
          <Icon name="sparkle" size={34} />
        </span>
        <span className="hero__sparkle hero__sparkle--2" data-speed="0.28">
          <Icon name="star" size={26} />
        </span>
        <span className="hero__wave" data-speed="0.16">
          <Icon name="wave" size={60} strokeWidth={2.4} />
        </span>
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow reveal">
            <Icon name="sun" size={16} strokeWidth={2.4} />
            Solution CSE & entreprises - Mulhouse et environs
          </p>

          <h1
            className="hero__title reveal"
            style={{ "--reveal-delay": "80ms" }}
          >
            Le quotidien de vos salariés,{" "}
            <span className="hero__title-highlight">
              plus léger toute l'année
            </span>
          </h1>

          <p
            className="hero__lead reveal"
            style={{ "--reveal-delay": "160ms" }}
          >
            <i>Horizons & Loisirs</i> accueille les enfants de 7 à 17 ans les
            mercredis, pendant les vacances scolaires, ainsi que lors d'ateliers
            extra-scolaires et de séjours éducatifs, dans un cadre sécurisé et
            épanouissant. Une solution clé en main que nous proposons aux
            Comités Sociaux et Économiques (CSE) et aux entreprises souhaitant
            offrir à leurs salariés un vrai équilibre entre vie professionnelle
            et vie de famille.
          </p>

          <ul
            className="hero__benefits reveal"
            style={{ "--reveal-delay": "220ms" }}
          >
            {BENEFITS.map((b) => (
              <li key={b.label} className="hero__benefit">
                <Icon name={b.icon} size={16} strokeWidth={2.4} />
                {b.label}
              </li>
            ))}
          </ul>

          <div
            className="hero__actions reveal"
            style={{ "--reveal-delay": "300ms" }}
          >
            <button
              className="btn btn-primary"
              onClick={() => navigate("/formules")}
            >
              Découvrir les formules
              <Icon name="arrow" size={18} />
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => navigate("/valeurs")}
            >
              Notre offre entreprises & CSE
            </button>
          </div>
        </div>

        <div
          className="hero__visual reveal-scale"
          style={{ "--reveal-delay": "200ms" }}
        >
          <div className="hero__photo" data-speed="-0.06">
            <img
              src="/jeunes-simulation-parachute.jpeg"
              alt="Groupe de jeunes en activités de plein air au centre de vacances Horizons & Loisirs"
              loading="eager"
            />
          </div>
          <div className="hero__badge hero__badge--float">
            <span className="hero__badge-emoji" aria-hidden="true">
              <Icon name="shield" size={22} strokeWidth={2.2} />
            </span>
            <div>
              <strong>100% encadré</strong>
              <span>Équipe formée et diplômée</span>
            </div>
          </div>

          <div className="hero__badge hero__badge--rating">
            <span className="hero__badge-emoji" aria-hidden="true">
              <Icon name="star" size={22} strokeWidth={2.2} />
            </span>
            <div>
              <strong>Engagement social renforcé</strong>
              <span>Un vrai levier pour votre marque employeur</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
