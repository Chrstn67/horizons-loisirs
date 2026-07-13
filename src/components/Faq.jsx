import { useState } from "react";
import { faqItems } from "../data/faq.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import Icon from "./Icon.jsx";
import "./Faq.css";

export default function Faq() {
  useScrollReveal();
  const [open, setOpen] = useState(0);

  const toggle = (i) => setOpen((cur) => (cur === i ? -1 : i));

  return (
    <section className="faq section" id="faq" aria-labelledby="faq-title">
      <div className="container faq__inner">
        <div className="faq__intro">
          <p className="eyebrow reveal">On vous dit tout</p>
          <h2
            id="faq-title"
            className="section-title reveal"
            style={{ "--reveal-delay": "80ms" }}
          >
            Questions fréquentes
          </h2>
          <p className="faq__lead reveal" style={{ "--reveal-delay": "140ms" }}>
            Vous ne trouvez pas votre réponse&nbsp;? Notre équipe est disponible
            par téléphone et par e-mail pour vous accompagner.
          </p>
        </div>

        <ul className="faq__list reveal" style={{ "--reveal-delay": "120ms" }}>
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <li
                key={item.q}
                className={`faq__item ${isOpen ? "is-open" : ""}`}
              >
                <h3>
                  <button
                    type="button"
                    className="faq__question"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-btn-${i}`}
                    onClick={() => toggle(i)}
                  >
                    <span dangerouslySetInnerHTML={{ __html: item.q }} />
                    <span className="faq__icon" aria-hidden="true">
                      <Icon name="plus" size={20} strokeWidth={2.4} />
                    </span>
                  </button>
                </h3>
                <div
                  className="faq__panel"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  hidden={!isOpen}
                >
                  <span dangerouslySetInnerHTML={{ __html: item.a }} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
