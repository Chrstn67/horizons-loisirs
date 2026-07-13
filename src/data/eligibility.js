const MIN_AGE = 7;
const MAX_AGE = 17;

const currentYear = new Date().getFullYear();
const youngestBirthYear = currentYear - MIN_AGE;
const oldestBirthYear = currentYear - MAX_AGE;

// Critères d'éligibilité
export const criteria = [
  {
    id: "age",
    title: `Avoir entre ${MIN_AGE} et ${MAX_AGE} ans`,
    text: `Le séjour concerne les enfants et adolescents nés entre ${oldestBirthYear} et ${youngestBirthYear}. Chaque jeune rejoint un groupe adapté à sa tranche d'âge.`,
    icon: "cake",
  },
  {
    id: "ce",
    title: "Parent affilié à un comité d'entreprise partenaire",
    text: "Le centre accueille en priorité les enfants dont au moins un parent est affilié à l'un de nos comités d'entreprise partenaires.",
    icon: "briefcase",
  },
  {
    id: "sante",
    title: "Fiche sanitaire à jour",
    text: "Une fiche sanitaire de liaison ainsi que les vaccinations obligatoires sont demandées afin de garantir la sécurité de tous.",
    icon: "heart",
  },
  {
    id: "autonomie",
    title: "Autonomie de base",
    text: "Le jeune doit être autonome pour les gestes du quotidien (repas, hygiène, sommeil) afin de profiter pleinement de son séjour.",
    icon: "compass",
  },
];

// Étapes d'inscription

export const steps = [
  {
    n: "01",
    title: "Vérifier son éligibilité",
    text: "Confirmez l'affiliation à un CE partenaire ainsi que l'âge de votre enfant.",
    icon: "check",
  },
  {
    n: "02",
    title: "Choisir sa formule",
    text: "Sélectionnez le séjour et la période qui conviennent le mieux.",
    icon: "calendar",
  },

  {
    n: "03",
    title: "Contacter notre équipe",
    text: "Nous sommes disponibles pour répondre à vos questions et vous accompagner dans votre démarche.",
    icon: "phone",
  },
  {
    n: "04",
    title: "Constituer le dossier",
    text: "Fiche sanitaire, autorisations et justificatif d'affiliation au CE.",
    icon: "file",
  },

  {
    n: "05",
    title: "Confirmer l'inscription",
    text: "Notre équipe valide votre dossier et vous envoie la liste du trousseau.",
    icon: "thumbs-up",
  },
];
