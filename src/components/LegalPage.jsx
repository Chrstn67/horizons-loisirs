import { Link } from "react-router-dom";
import "./LegalPage.css";

const lastUpdate = new Date().toLocaleDateString("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function LegalPage() {
  return (
    <main className="legal-page">
      <div className="legal-page__inner">
        <Link to="/" className="legal-page__back">
          ← Retour à l&apos;accueil
        </Link>

        <span className="legal-page__eyebrow">Informations légales</span>
        <h1 className="legal-page__title">
          Mentions légales & Politique de confidentialité
        </h1>
        <p className="legal-page__updated">
          Dernière mise à jour : {lastUpdate}
        </p>

        <nav className="legal-page__toc" aria-label="Sommaire">
          <a href="#mentions-legales">1. Mentions légales</a>
          <a href="#confidentialite">2. Politique de confidentialité</a>
        </nav>

        {/* ============================================
            PARTIE 1 — MENTIONS LÉGALES
           ============================================ */}
        <h2 id="mentions-legales" className="legal-page__part-title">
          1. Mentions légales
        </h2>

        <section className="legal-page__section">
          <h3>1.1 Éditeur du site</h3>
          <p>
            Le présent site est édité par <strong>Horizons & Loisirs</strong>,
            [forme juridique, ex. association loi 1901], dont le siège social
            est situé au [adresse complète], 68100 Mulhouse.
          </p>
          <ul>
            <li>SIRET : [numéro SIRET]</li>
            <li>Numéro RNA (association) : [numéro RNA]</li>
            <li>Numéro d&apos;agrément Jeunesse et Sports : [numéro]</li>
            <li>Directeur de la publication : Riad Mendi</li>
            <li>
              Téléphone : <a href="tel:+33768658788">07 68 65 87 88</a>
            </li>
            <li>
              E-mail :{" "}
              <a href="mailto:bonjour@capsoleil.fr">bonjour@capsoleil.fr</a>
            </li>
          </ul>
        </section>

        <section className="legal-page__section">
          <h3>1.2 Hébergement du site</h3>
          <p>
            Le site est hébergé par <strong>OVHcloud</strong>, dont le siège
            social est situé au 2 rue Kellermann, 59100 Roubaix, France. Contact
            hébergeur : +33 (0)9 72 10 10 07.
          </p>
        </section>

        <section className="legal-page__section">
          <h3>1.3 Conception et développement</h3>
          <p>
            Le site a été conçu et développé par Christian HUMBERT, développeur
            web et web mobile, et également animateur.
          </p>
        </section>

        <section className="legal-page__section">
          <h3>1.4 Propriété intellectuelle</h3>
          <p>
            L&apos;ensemble des éléments présents sur ce site (textes,
            photographies, logos, graphismes, icônes, mise en page) est protégé
            par le droit de la propriété intellectuelle et reste la propriété
            exclusive de <i>Horizons & Loisirs</i>, sauf mention contraire.
            Toute reproduction, représentation, modification ou adaptation,
            totale ou partielle, par quelque procédé que ce soit, sans
            autorisation écrite préalable, est interdite et constitue une
            contrefaçon sanctionnée par les articles L.335-2 et suivants du Code
            de la propriété intellectuelle.
          </p>
        </section>

        <section className="legal-page__section">
          <h3>1.5 Liens hypertextes</h3>
          <p>
            Le site peut contenir des liens vers d&apos;autres sites.{" "}
            <i>Horizons & Loisirs</i> n&apos;exerce aucun contrôle sur ces sites
            tiers et décline toute responsabilité quant à leur contenu, leurs
            pratiques ou leur politique de confidentialité.
          </p>
        </section>

        <section className="legal-page__section">
          <h3>1.6 Limitation de responsabilité</h3>
          <p>
            <i>Horizons & Loisirs</i> s&apos;efforce d&apos;assurer
            l&apos;exactitude et la mise à jour des informations diffusées sur
            ce site, mais ne peut garantir l&apos;absence d&apos;erreur ou
            d&apos;omission. L&apos;utilisateur reconnaît utiliser ces
            informations sous sa propre responsabilité. Le site peut être
            temporairement inaccessible pour des raisons de maintenance ou de
            force majeure, sans que cela n&apos;engage la responsabilité de
            l&apos;éditeur.
          </p>
        </section>

        <section className="legal-page__section">
          <h3>1.7 Accessibilité</h3>
          <p>
            Nous portons une attention particulière à l&apos;accessibilité de ce
            site. Si vous rencontrez une difficulté pour accéder à un contenu,
            merci de nous en informer à{" "}
            <a href="mailto:bonjour@capsoleil.fr">bonjour@capsoleil.fr</a> afin
            que nous puissions y remédier.
          </p>
        </section>

        <section className="legal-page__section">
          <h3>1.8 Droit applicable</h3>
          <p>
            Les présentes mentions légales sont soumises au droit français. En
            cas de litige et à défaut de résolution amiable, les tribunaux
            français seront seuls compétents.
          </p>
        </section>

        <div className="legal-page__divider" />

        {/* ============================================
            PARTIE 2 — CONFIDENTIALITÉ / RGPD
           ============================================ */}
        <h2 id="confidentialite" className="legal-page__part-title">
          2. Politique de confidentialité
        </h2>

        <section className="legal-page__section">
          <h3>2.1 Responsable du traitement</h3>
          <p>
            Le responsable du traitement des données à caractère personnel
            collectées sur ce site est <strong>Riad MENDI</strong>, joignable à{" "}
            <a href="mailto:bonjour@capsoleil.fr">bonjour@capsoleil.fr</a>.
          </p>
        </section>

        <section className="legal-page__section">
          <h3>2.2 Données collectées</h3>
          <p>
            Le site ne collecte ni ne stocke directement de données personnelles
            via un formulaire ou un espace utilisateur. Les informations que
            vous choisissez de nous transmettre sont uniquement contenues dans
            les échanges par e-mail avec notre équipe.
          </p>
          <p>
            Selon la nature de votre demande, ces échanges peuvent contenir :
          </p>
          <ul>
            <li>
              <strong>Données du responsable légal</strong> : nom, prénom,
              coordonnées (adresse, téléphone, e-mail) et toute information
              nécessaire au traitement de votre demande.
            </li>
            <li>
              <strong>Données relatives à l&apos;enfant</strong> : nom, prénom,
              âge, informations utiles à la préparation d&apos;un séjour
              (besoins spécifiques, allergies ou autres informations
              communiquées volontairement par la famille).
            </li>
            <li>
              <strong>Informations contenues dans vos messages</strong> : toute
              donnée que vous choisissez de nous transmettre dans le cadre de
              vos échanges avec notre équipe.
            </li>
          </ul>
          <p>
            Ces informations sont utilisées uniquement afin de répondre à vos
            demandes, vous accompagner dans vos démarches d&apos;inscription et
            préparer votre séjour.
          </p>
        </section>

        <section className="legal-page__section">
          <h3>2.3 Finalités du traitement</h3>
          <p>Ces données sont collectées et traitées pour :</p>
          <ul>
            <li>
              Gérer les inscriptions et le suivi administratif des séjours
            </li>
            <li>
              Assurer la sécurité et le suivi médical des enfants accueillis
            </li>
            <li>Répondre aux demandes d&apos;information et de contact</li>
            <li>
              Respecter nos obligations légales et réglementaires (Jeunesse et
              Sports)
            </li>
            <li>Améliorer le fonctionnement et la sécurité du site</li>
          </ul>
          <p>
            Ces données ne sont en aucun cas vendues, louées ou cédées à des
            fins commerciales à des tiers.
          </p>
        </section>

        <section className="legal-page__section">
          <h3>2.4 Base légale du traitement</h3>
          <p>
            Le traitement de vos données repose selon le cas sur
            l&apos;exécution du contrat (inscription au séjour), le respect
            d&apos;une obligation légale (encadrement des accueils collectifs de
            mineurs), votre consentement (formulaire de contact) ou
            l&apos;intérêt légitime de l&apos;association (bon fonctionnement du
            site).
          </p>
        </section>

        <section className="legal-page__section">
          <h3>2.5 Destinataires des données</h3>
          <p>
            Les données sont accessibles uniquement à l&apos;équipe
            d&apos;encadrement et de direction du centre, et le cas échéant aux
            organismes de contrôle habilités (services de l&apos;État,
            assurance). Aucune donnée n&apos;est transférée hors de l&apos;Union
            européenne.
          </p>
        </section>

        <section className="legal-page__section">
          <h3>2.6 Durée de conservation</h3>
          <ul>
            <li>
              Dossiers d&apos;inscription : durée du séjour + le temps
              nécessaires à des fins administratives et légales
            </li>
            <li>
              Données médicales : conservées de façon sécurisée, supprimées à
              l&apos;issue du séjour sauf obligation contraire
            </li>
            <li>Messages de contact : 3 mois maximum</li>
          </ul>
        </section>

        <section className="legal-page__section">
          <h3>2.7 Sécurité des données</h3>
          <p>
            Nous mettons en œuvre les mesures techniques et organisationnelles
            appropriées (accès restreint, hébergement sécurisé) pour protéger
            vos données contre toute perte, altération ou accès non autorisé.
          </p>
        </section>

        <section className="legal-page__section">
          <h3>2.8 Données concernant les mineurs</h3>
          <p>
            Les informations relatives aux enfants inscrits sont exclusivement
            communiquées par le responsable légal, dans le cadre de
            l&apos;inscription au séjour. Elles ne sont utilisées qu&apos;à des
            fins d&apos;encadrement, de sécurité et de suivi médical, et ne font
            l&apos;objet d&apos;aucune exploitation commerciale.
          </p>
        </section>

        <section className="legal-page__section">
          <h3>2.9 Vos droits</h3>
          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un
            droit d&apos;accès, de rectification, d&apos;effacement, de
            limitation, d&apos;opposition et de portabilité de vos données.
          </p>
          <p>
            Pour exercer ces droits, contactez-nous à{" "}
            <a href="mailto:bonjour@capsoleil.fr">bonjour@capsoleil.fr</a>, en
            précisant votre identité. Une réponse vous sera apportée dans un
            délai maximum d&apos;un mois.
          </p>
          <p>
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez
            introduire une réclamation auprès de la CNIL :{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.cnil.fr
            </a>
            .
          </p>
        </section>

        <section className="legal-page__section">
          <h3>2.10 Cookies</h3>
          <p>
            Ce site n'utilise aucun cookie ni aucun outil de suivi ou de mesure
            d'audience.
          </p>
          <p>
            Aucune donnée de navigation n'est collectée à des fins statistiques,
            publicitaires ou commerciales. Votre visite sur le site ne fait donc
            l'objet d'aucun suivi par des services tiers.
          </p>
        </section>

        <section className="legal-page__section">
          <h3>2.11 Modification de la politique de confidentialité</h3>
          <p>
            Cette politique peut être mise à jour à tout moment, notamment pour
            se conformer à une évolution réglementaire. La date de dernière mise
            à jour figure en haut de cette page.
          </p>
        </section>
      </div>
    </main>
  );
}
