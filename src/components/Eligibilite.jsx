import { Link, useNavigate } from "react-router-dom";
import { criteria, steps } from "../data/eligibility.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import Icon from "./Icon.jsx";
import "./Eligibilite.css";

export default function Eligibilite() {
  useScrollReveal();
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 90);
  };

  return (
    <div className="eligi">
      {/* En-tete de page */}
      <header className="eligi__hero">
        <div className="eligi__hero-decor" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="container">
          <nav className="eligi__crumb reveal" aria-label="Fil d'ariane">
            <Link to="/">Accueil</Link>
            <Icon name="arrow" size={14} />
            <span>Criteres d&apos;eligibilite</span>
          </nav>
          <h1
            className="eligi__title reveal"
            style={{ "--reveal-delay": "80ms" }}
          >
            Qui peut partir avec <i>Horizons & Loisirs</i>&nbsp;?
          </h1>
          <p
            className="eligi__lead reveal"
            style={{ "--reveal-delay": "140ms" }}
          >
            L&apos;inscription est simple et rassurante. Voici les quelques
            conditions a remplir pour offrir a votre enfant un ete
            d&apos;aventures.
          </p>
        </div>
      </header>

      {/* Encadre d'information cle */}
      <section className="container">
        <div className="eligi__highlight reveal">
          <span className="eligi__highlight-icon">
            <Icon name="briefcase" size={26} strokeWidth={2} />
          </span>
          <div>
            <h2>Un centre reserve aux comites d&apos;entreprise partenaires</h2>
            <p>
              <i>Horizons & Loisirs</i> accueille les enfants et adolescents
              dont au moins un parent est{" "}
              <strong>affilie a un comite d&apos;entreprise partenaire</strong>.
              Ce fonctionnement nous permet de proposer des sejours de grande
              qualite a un tarif prefere. En cas de doute sur votre affiliation,
              votre CE peut vous le confirmer en quelques minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Liste des criteres */}
      <section className="section eligi__criteria-wrap">
        <div className="container">
          <h2 className="section-title reveal">
            Les conditions d&apos;inscription
          </h2>
          <ul className="eligi__criteria">
            {criteria.map((c, i) => (
              <li
                key={c.id}
                className="eligi__criterion reveal"
                style={{ "--reveal-delay": `${i * 80}ms` }}
              >
                <span className="eligi__criterion-icon">
                  <Icon name={c.icon} size={24} strokeWidth={2} />
                </span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
                <span className="eligi__criterion-check" aria-hidden="true">
                  <Icon name="check" size={18} strokeWidth={2.4} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Etapes d'inscription */}
      <section className="section eligi__steps-wrap">
        <div className="container">
          <p className="eyebrow reveal">Simple comme bonjour</p>
          <h2
            className="section-title reveal"
            style={{ "--reveal-delay": "80ms" }}
          >
            L&apos;inscription en 4 etapes
          </h2>

          <ol className="eligi__steps">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className="eligi__step reveal"
                style={{ "--reveal-delay": `${i * 90}ms` }}
              >
                <span className="eligi__step-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Appel a l'action */}
      <section className="container">
        <div className="eligi__cta reveal">
          <div>
            <h2>Une question sur votre eligibilite&nbsp;?</h2>
            <p>
              Notre equipe vous repond et verifie votre affiliation avec vous,
              sans engagement.
            </p>
          </div>
          <button
            type="button"
            onClick={goToContact}
            className="btn btn-primary"
          >
            Nous contacter
            <Icon name="arrow" size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
