import { Link } from "react-router-dom";
import { offers, sejourValues, sejourClosing } from "../data/offers.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import Icon from "./Icon.jsx";
import "./Offers.css";

export default function Offers() {
  useScrollReveal();

  const activities = [...new Set(offers.flatMap((o) => o.activities))];
  const byId = Object.fromEntries(offers.map((o) => [o.id, o]));

  return (
    <section id="formules" className="section offers">
      <div className="offers__marquee" aria-hidden="true">
        <div className="offers__marquee-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="marquee-group">
              {activities.map((a, i) => (
                <span
                  key={`${k}-${i}`}
                  className="marquee-word"
                  style={{ "--i": i }}
                >
                  {a}
                  <span className="marquee-dot">&bull;</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="offers__intro">
          <header className="offers__head">
            <p className="eyebrow reveal">Nos formules d&apos;accueil</p>
            <h2
              className="section-title reveal"
              style={{ "--reveal-delay": "80ms" }}
            >
              Trois formules qui s&apos;emboitent
            </h2>
            <p
              className="section-lead reveal"
              style={{ "--reveal-delay": "140ms" }}
            >
              Trois formules au choix, il y en a pour tous les goûts ! <br />
              Les tarifs sont adaptés a chaque famille : discutons-en ensemble.
            </p>
          </header>

          <aside
            className="offers__closing reveal"
            style={{ "--reveal-delay": "180ms" }}
          >
            <p className="offers__closing-title">Nos séjours favorisent :</p>
            <ul className="offers__closing-list">
              {sejourValues.map((v) => (
                <li key={v}>
                  <Icon name="check" size={16} /> {v}
                </li>
              ))}
            </ul>
            <p className="offers__closing-tagline">{sejourClosing}</p>

            <Link to="/sejours" className="offers__closing-link">
              Découvrir nos séjours
              <Icon name="arrow" size={16} />
            </Link>
          </aside>
        </div>

        <ul className="offers__grid">
          {offers.map((o, i) => {
            const base = o.includesFrom ? byId[o.includesFrom] : null;

            return (
              <li
                key={o.id}
                data-step={i + 1}
                className={`offers__card ${o.featured ? "is-featured" : ""} reveal`}
                style={{
                  "--accent": o.accent,
                  "--reveal-delay": `${i * 90}ms`,
                }}
              >
                <div className="offers__body">
                  <div className="offers__top">
                    <span className="offers__tag">{o.tagline}</span>
                    <h3 className="offers__name">{o.name}</h3>
                    <p className="offers__duration">
                      <Icon name="clock" size={16} /> {o.schedule}
                    </p>
                  </div>

                  <p className="offers__pitch">{o.pitch}</p>

                  <div className="offers__block">
                    {base && (
                      <p className="offers__from">Tout {base.name}, plus :</p>
                    )}
                    <h4>{base ? "En plus" : "Au programme"}</h4>
                    <ul>
                      {o.activities.map((a) => (
                        <li key={a}>
                          <Icon name="check" size={16} /> {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="offers__perks">
                    {o.perks.map((p) => (
                      <span key={p} className="offers__perk">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="offers__footer">
                  <p className="offers__tariff-note">
                    Tarif sur mesure, selon votre situation
                  </p>

                  <Link
                    to="/contact"
                    className={`btn ${o.featured ? "btn-primary" : "btn-ghost"} offers__cta`}
                  >
                    Echanger sur cette formule
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
