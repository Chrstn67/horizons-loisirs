import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import Icon from "./Icon.jsx";
import "./Contact.css";

const infos = [
  {
    icon: "pin",
    label: "Adresse",
    value: "Domaine du Grand Pré, 74400 Chamonix-Mont-Blanc",
  },
  { icon: "phone", label: "Téléphone", value: "07 68 65 87 88" },
  { icon: "mail", label: "E-mail", value: "bonjour@capsoleil.fr" },
  {
    icon: "clock",
    label: "Accueil téléphonique",
    value: "Du lundi au vendredi, 9h – 18h",
  },
];

export default function Contact() {
  useScrollReveal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "parent",
    child: "",
    message: "",
  });

  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      className="contact section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container contact__inner">
        <div className="contact__aside reveal">
          <p className="eyebrow">Parlons de votre été</p>
          <h2 id="contact-title" className="section-title">
            Contactez l&apos;équipe <i>Horizons & Loisirs</i>
          </h2>
          <p className="contact__lead">
            Une question, une envie d&apos;inscription ou besoin d&apos;un
            renseignement sur votre comité d&apos;entreprise&nbsp;?
            Écrivez-nous, on vous répond sous 48&nbsp;heures.
          </p>

          <ul className="contact__infos">
            {infos.map((info) => (
              <li key={info.label} className="contact__info">
                <span className="contact__info-icon">
                  <Icon name={info.icon} size={20} strokeWidth={2} />
                </span>
                <div>
                  <span className="contact__info-label">{info.label}</span>
                  <span className="contact__info-value">{info.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="contact__form-wrap reveal"
          style={{ "--reveal-delay": "120ms" }}
        >
          {sent ? (
            <div className="contact__success" role="status">
              <span className="contact__success-icon">
                <Icon name="check" size={34} strokeWidth={2.4} />
              </span>
              <h3>Message bien reçu&nbsp;!</h3>
              <p>
                Merci {form.name || "à vous"}. Notre équipe vous recontacte très
                vite à l&apos;adresse indiquée pour préparer l&apos;été de votre
                enfant.
              </p>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setSent(false)}
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Nom complet</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update}
                  placeholder="Camille Durand"
                />
              </div>

              <div className="field">
                <label htmlFor="email">Adresse e-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update}
                  placeholder="camille@email.fr"
                />
              </div>

              <div className="field">
                <label htmlFor="role">Vous êtes</label>
                <select
                  id="role"
                  name="role"
                  value={form.role}
                  onChange={update}
                >
                  <option value="parent">Un parent</option>
                  <option value="ce">
                    Un représentant de comité d&apos;entreprise
                  </option>
                  <option value="jeune">Un futur participant</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="child">Âge de l&apos;enfant (facultatif)</label>
                <input
                  id="child"
                  name="child"
                  type="text"
                  value={form.child}
                  onChange={update}
                  placeholder="12 ans"
                />
              </div>

              <div className="field field--full">
                <label htmlFor="message">Votre message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={update}
                  placeholder="Dites-nous tout…"
                />
              </div>

              <button type="submit" className="btn btn-primary contact__submit">
                Envoyer ma demande
                <Icon name="arrow" size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
