import { useScrollReveal } from "../hooks/useScrollReveal.js";
import Icon from "./Icon.jsx";
import { director } from "../data/team.js";
import "./Director.css";

export default function Director() {
  useScrollReveal();
  return (
    <section id="directeur" className="director">
      <div className="container director__inner">
        <div className="director__visual reveal-scale">
          <div className="director__frame">
            <img
              src={director.photo}
              alt={`${director.name}, ${director.role}`}
              loading="lazy"
            />
          </div>
          <div className="director__ring" aria-hidden="true" />
          <div className="director__since">
            <span className="director__since-value">
              Depuis {director.since}
            </span>
            <span className="director__since-label">à vos côtés</span>
          </div>
        </div>

        <div className="director__content">
          <p className="eyebrow reveal">Le mot du directeur</p>
          <h2
            className="section-title reveal"
            style={{ "--reveal-delay": "80ms" }}
          >
            {director.name}
          </h2>
          <p
            className="director__role reveal"
            style={{ "--reveal-delay": "120ms" }}
          >
            {director.role}
          </p>

          <blockquote
            className="director__quote reveal"
            style={{ "--reveal-delay": "180ms" }}
          >
            <Icon name="sparkle" size={26} />
            {director.quote}
          </blockquote>

          {director.bio.map((p, i) => (
            <p
              key={i}
              className="director__bio reveal"
              style={{ "--reveal-delay": `${240 + i * 60}ms` }}
            >
              {p}
            </p>
          ))}

          <div
            className="director__signature reveal"
            style={{ "--reveal-delay": "400ms" }}
          >
            <span>{director.name}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
