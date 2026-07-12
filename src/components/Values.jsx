"use client";

import { useEffect, useRef } from "react";
import {
  Compass,
  Handshake,
  Share2,
  Sparkles,
  Map,
  Heart,
  ShieldCheck,
  Users,
  ArrowRight,
} from "lucide-react";
import { values } from "../data/values.js";

import { useScrollReveal } from "../hooks/useScrollReveal.js";

import "./Values.css";

// Correspondance nom d'icone -> composant lucide
const ICONS = {
  compass: Compass,
  handshake: Handshake,
  share: Share2,
  sparkle: Sparkles,
  map: Map,
  heart: Heart,
  shield: ShieldCheck,
  users: Users,
  arrow: ArrowRight,
};

export default function Value() {
  useScrollReveal();
  const gridRef = useRef(null);

  // Reveal progressif au scroll (IntersectionObserver)
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".values__card");
    if (!cards?.length) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      cards.forEach((c) => c.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="valeurs" className="values" aria-labelledby="values-title">
      {/* Bandeau defilant des valeurs */}
      <div className="values__marquee" aria-hidden="true">
        <div className="values__marquee-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="marquee-group">
              {values.map((v, i) => (
                <span key={`${k}-${i}`} className="values__word">
                  {v.title}
                  <span className="values__dot">&bull;</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <header className="values__head">
          <p className="values__eyebrow">Ce qui nous anime</p>
          <h2 id="values-title" className="values__title">
            {"Nos "}
            <em>22 valeurs</em>
            {" qui nous tiennent à 💖"}
          </h2>
          <p className="values__lead">
            De l&apos;aventure au bien-être, chaque valeur guide notre façon
            d&apos;accueillir, d&apos;encadrer et de faire grandir les enfants,
            jour après jour.
          </p>
        </header>

        <ul className="values__grid" ref={gridRef}>
          {values.map((v, i) => {
            const IconComp = ICONS[v.icon] ?? Sparkles;
            const index = String(i + 1).padStart(2, "0");

            return (
              <li
                key={v.id}
                className="values__card"
                data-index={index}
                tabIndex={0}
                style={{
                  "--accent": v.color,
                  "--reveal-delay": `${(i % 4) * 80}ms`,
                }}
              >
                <span className="values__icon" aria-hidden="true">
                  <IconComp strokeWidth={2.2} />
                </span>
                <h3 className="values__name">{v.title}</h3>
                <p className="values__text">{v.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
