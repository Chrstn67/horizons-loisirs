import { Link } from "react-router-dom";
import "./LegalPage.css";

export default function Confidentialite() {
  return (
    <main className="legal-page">
      <div className="legal-page__inner">
        <Link to="/" className="legal-page__back">
          ← Retour à l&apos;accueil
        </Link>

        <span className="legal-page__eyebrow">Vie privée</span>
        <h1 className="legal-page__title">Politique de confidentialité</h1>
        <p className="legal-page__updated">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </p>

        <section className="legal-page__section">
          <h2>Données collectées</h2>
          <p>
            Dans le cadre de l&apos;utilisation du site et des inscriptions aux
            séjours, nous pouvons collecter les données suivantes :
          </p>
          <ul>
            <li>Nom, prénom et coordonnées du responsable légal</li>
            <li>Informations relatives à l&apos;enfant inscrit</li>
            <li>Adresse e-mail, via le formulaire de contact</li>
          </ul>
        </section>

        <section className="legal-page__section">
          <h2>Finalité du traitement</h2>
          <p>
            Ces données sont utilisées uniquement pour traiter les demandes
            d&apos;inscription, assurer le suivi administratif des séjours et
            répondre aux demandes de contact. Elles ne sont ni vendues, ni
            partagées à des fins commerciales avec des tiers.
          </p>
        </section>

        <section className="legal-page__section">
          <h2>Durée de conservation</h2>
          <p>
            Les données sont conservées pendant la durée nécessaire au
            traitement des demandes, puis archivées ou supprimées conformément à
            la réglementation en vigueur.
          </p>
        </section>

        <section className="legal-page__section">
          <h2>Vos droits</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification
            et de suppression de vos données. Pour exercer ce droit,
            contactez-nous à{" "}
            <a href="mailto:bonjour@capsoleil.fr">bonjour@capsoleil.fr</a>.
          </p>
        </section>

        <section className="legal-page__section">
          <h2>Cookies</h2>
          <p>
            Le site peut utiliser des cookies techniques nécessaires à son bon
            fonctionnement. Aucun cookie de traçage publicitaire n&apos;est
            utilisé.
          </p>
        </section>
      </div>
    </main>
  );
}
