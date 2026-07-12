import { team, teamDescription } from "../data/team.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import Icon from "./Icon.jsx";
import "./Team.css";

export default function Team() {
  useScrollReveal();

  const paragraphs = teamDescription.split("\n\n");

  return (
    <section id="equipe" className="section team">
      <div className="container">
        <header className="team__head">
          <p className="eyebrow reveal">Les visages du séjour</p>
          <h2
            className="section-title reveal"
            style={{ "--reveal-delay": "80ms" }}
          >
            Une équipe qui a la pêche
          </h2>
          <div className="team__intro">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="reveal"
                style={{ "--reveal-delay": `${180 + i * 70}ms` }}
              >
                {p}
              </p>
            ))}
          </div>
        </header>

        <ul className="team__grid">
          {team.map((m, i) => (
            <li
              key={m.id}
              className="team__card reveal"
              style={{ "--accent": m.color, "--reveal-delay": `${i * 60}ms` }}
            >
              <div className="team__photo">
                <img
                  src={m.photo}
                  alt={`${m.name}, ${m.role}`}
                  loading="lazy"
                />
                <span className="team__specialty">{m.specialty}</span>
              </div>
              <div className="team__body">
                <h3 className="team__name">{m.name}</h3>
                <p className="team__role">{m.role}</p>
                <p className="team__text">{m.text}</p>
              </div>
              <span className="team__corner" aria-hidden="true">
                <Icon name="sparkle" size={18} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
