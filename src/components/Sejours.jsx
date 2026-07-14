import { Link } from "react-router-dom";
import { sejours } from "../data/sejours.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import Icon from "./Icon.jsx";
import "./Sejours.css";

// Une date ISO -> { jour, mois } pour l'affichage "carte d'embarquement"
// ex: "2026-07-13" -> { jour: "13", mois: "juil." }
function splitDate(iso) {
  const d = new Date(iso);
  return {
    jour: d.toLocaleDateString("fr-FR", { day: "2-digit" }),
    mois: d.toLocaleDateString("fr-FR", { month: "short" }).replace(".", ""),
  };
}

export default function Sejours() {
  useScrollReveal();

  const lieux = [...new Set(sejours.map((s) => s.lieu))];

  return (
    <section id="sejours" className="section sejours">
      <div className="sejours__marquee" aria-hidden="true">
        <div className="sejours__marquee-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="marquee-group">
              {lieux.map((l, i) => (
                <span
                  key={`${k}-${i}`}
                  className="marquee-word"
                  style={{ "--i": i }}
                >
                  {l}
                  <span className="marquee-dot">&bull;</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="sejours__intro">
          <header className="sejours__head">
            <p className="eyebrow reveal">Nos séjours</p>
            <h2
              className="section-title reveal"
              style={{ "--reveal-delay": "80ms" }}
            >
              Des départs toute l&apos;année
            </h2>
            <p
              className="section-lead reveal"
              style={{ "--reveal-delay": "140ms" }}
            >
              Chaque saison, de nouvelles destinations et de nouvelles
              aventures. <br />
              Les places sont limitées : n&apos;attendez pas pour réserver.
            </p>
          </header>

          <aside
            className="sejours__closing reveal"
            style={{ "--reveal-delay": "180ms" }}
          >
            <img
              className="sejours__closing-img"
              src="./sejours-photo.jpg"
              alt="Enfants en séjour chez Horizons & Loisirs"
            />
          </aside>
        </div>

        <ul className="sejours__grid">
          {sejours.map((s, i) => {
            const complet = s.full;
            const depart = splitDate(s.dateDebut);
            const retour = splitDate(s.dateFin);
            const annee = new Date(s.dateFin).getFullYear();
            const numeroBillet = `HL-${new Date(s.dateDebut).getFullYear()}-${String(i + 1).padStart(2, "0")}`;

            return (
              <li
                key={s.id}
                className={`sejours__ticket reveal`}
                style={{
                  "--accent": s.accent,
                  "--reveal-delay": `${i * 90}ms`,
                }}
              >
                {complet && (
                  <span className="sejours__stamp" aria-hidden="true">
                    Complet
                  </span>
                )}

                <div className="sejours__ticket-header">
                  <div className="sejours__ticket-header-row">
                    <span className="sejours__postmark">{s.saison}</span>
                    <span className="sejours__ticket-code">{numeroBillet}</span>
                  </div>
                  <p className="sejours__ticket-lieu">{s.lieu}</p>
                  <h3 className="sejours__ticket-nom">{s.nom}</h3>
                </div>

                <div className="sejours__perforation" aria-hidden="true" />

                <div className="sejours__ticket-body">
                  <div className="sejours__boarding">
                    <div className="sejours__boarding-col">
                      <span className="sejours__boarding-label">Départ</span>
                      <span className="sejours__boarding-date">
                        {depart.jour} {depart.mois}
                      </span>
                    </div>
                    <Icon
                      name="arrow"
                      size={18}
                      className="sejours__boarding-arrow"
                    />
                    <div className="sejours__boarding-col">
                      <span className="sejours__boarding-label">Retour</span>
                      <span className="sejours__boarding-date">
                        {retour.jour} {retour.mois}
                      </span>
                    </div>
                    <span className="sejours__boarding-year">{annee}</span>
                  </div>

                  <p className="sejours__pitch">{s.pitch}</p>

                  <div className="sejours__infos">
                    <p>
                      <strong>Âge :</strong> {s.ageMin} - {s.ageMax} ans
                    </p>
                    <p>
                      <strong>Places :</strong> {s.placesTotal} au total
                    </p>
                    <p>
                      <strong>Hébergement :</strong> {s.hebergement}
                    </p>
                    <p>
                      <strong>Transport :</strong> {s.transport}
                    </p>
                  </div>

                  <div className="sejours__block">
                    <h4>Au programme</h4>
                    <ul>
                      {s.activites.map((a) => (
                        <li key={a}>
                          <Icon name="check" size={16} /> {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="sejours__perks">
                    {s.perks.map((p) => (
                      <span key={p} className="sejours__perk">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="sejours__perforation" aria-hidden="true" />

                <div className="sejours__ticket-stub">
                  <Link to="/contact" className="btn btn-ghost sejours__cta">
                    {complet
                      ? "Rejoindre la liste d'attente"
                      : "Réserver ce séjour"}
                    <Icon name="arrow" size={18} />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
