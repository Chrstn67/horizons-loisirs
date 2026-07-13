import { useScrollReveal } from "../hooks/useScrollReveal.js";
import Icon from "./Icon.jsx";
import "./Contact.css";

const contacts = [
  {
    icon: "phone",
    label: "Téléphone",
    value: "07 68 65 87 88",
    href: "tel:+33768658788",
    cta: "Appeler",
  },
  {
    icon: "mail",
    label: "E-mail",
    value: "bonjour@capsoleil.fr",
    href: "mailto:bonjour@capsoleil.fr",
    cta: "Écrire",
  },
];

const socials = [
  {
    icon: "instagram",
    label: "Instagram",
    href: "https://instagram.com/capsoleil",
  },
  {
    icon: "facebook",
    label: "Facebook",
    href: "https://facebook.com/capsoleil",
  },
];

export default function Contact() {
  useScrollReveal();

  return (
    <section
      className="contact section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container contact__inner">
        <header className="contact__head reveal">
          <p className="eyebrow">On est là</p>
          <h2 id="contact-title" className="section-title">
            Une question ? <i>Écrivez-nous.</i>
          </h2>
          <p className="contact__lead">
            Une vraie équipe qui prend le temps de vous lire, de vous écouter et
            de vous répondre sous&nbsp;48&nbsp;h.
          </p>
        </header>

        <ul
          className="contact__cards reveal"
          style={{ "--reveal-delay": "80ms" }}
        >
          {contacts.map((c) => (
            <li key={c.label} className="contact__card">
              <span className="contact__card-icon">
                <Icon name={c.icon} size={24} strokeWidth={2} />
              </span>
              <div className="contact__card-body">
                <span className="contact__card-label">{c.label}</span>
                <span className="contact__card-value">{c.value}</span>
              </div>
              <a href={c.href} className="btn btn-primary contact__card-cta">
                {c.cta} <Icon name="arrow" size={16} />
              </a>
            </li>
          ))}
        </ul>

        <div
          className="contact__socials-wrap reveal"
          style={{ "--reveal-delay": "160ms" }}
        >
          <p className="contact__socials-label">Suivez nos aventures</p>
          <div className="contact__socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social"
                aria-label={s.label}
              >
                <Icon name={s.icon} size={20} strokeWidth={1.8} />
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
