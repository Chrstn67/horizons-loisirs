import { useEffect } from "react";

/**
 * Ajoute automatiquement la classe "is-visible" a tous les elements
 * portant la classe .reveal / .reveal-scale lorsqu'ils entrent dans
 * le viewport. Fonctionne sans dependance externe grace a IntersectionObserver.
 */
export function useScrollReveal(deps = []) {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal, .reveal-scale");

    // Repli si l'API n'est pas disponible : tout est visible
    if (typeof IntersectionObserver === "undefined") {
      elements.forEach((el) => el.classList.add("is-visible"));
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
      { threshold: 0.01, rootMargin: "0px 0px 0px 0px" },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
