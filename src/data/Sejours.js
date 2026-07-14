// Données des séjours proposés par Horizons & Loisirs.
//
// ATTENTION : les champs marqués "à ajuster" sont des valeurs provisoires
// (lieu précis, dates, places, transport) posées pour que la page soit
// fonctionnelle tout de suite. À corriger avec les vraies informations
// avant mise en ligne.
//
// Le statut "complet" se pilote directement via full: true/false,
// indépendamment du nombre de places affiché.

export const sejours = [
  {
    id: "barcelone",
    accent: "#ff6b4a",
    saison: "Été", // à ajuster
    nom: "Séjour à Barcelone",
    lieu: "Barcelone, Espagne",
    dateDebut: "2026-07-06", // à ajuster
    dateFin: "2026-07-13", // à ajuster (durée 7 jours)
    ageMin: 14,
    ageMax: 17,
    placesTotal: "16-24 selon encadrement", // à ajuster
    full: false,
    hebergement: "Villa avec piscine",
    transport: "Départ en car depuis Strasbourg", // à ajuster
    pitch:
      "Une semaine entre farniente et découverte de la ville, avec une villa rien que pour le groupe et sa piscine.",
    activites: [
      "Piscine",
      "Visite de la ville",
      "Plage",
      "Sorties culturelles",
    ], // à ajuster
    perks: ["Encadrement diplômé", "Groupe ado 14-17 ans"], // à ajuster
  },
  {
    id: "sports-mecaniques",
    accent: "#00c2cb",
    saison: "Été", // à ajuster
    nom: "Séjour Sports mécaniques",
    lieu: "", // à ajuster
    dateDebut: "2026-07-20", // à ajuster
    dateFin: "2026-07-27", // à ajuster (durée 7 jours)
    ageMin: 7,
    ageMax: 13,
    placesTotal: "16-24 selon encadrement", // à ajuster
    full: false,
    hebergement: "Hébergement à préciser", // à ajuster
    transport: "Transport à préciser", // à ajuster
    pitch:
      "Un séjour pensé pour les passionnés de mécanique et de sensations, entre pilotage encadré et ateliers techniques.",
    activites: [
      "Karting",
      "Initiation pilotage",
      "Buggy",
      "Ateliers mécanique",
    ], // à ajuster
    perks: ["Encadrement diplômé", "Matériel fourni"], // à ajuster
  },
  {
    id: "stage-natation",
    accent: "#4fa8d8",
    saison: "À définir", // à ajuster
    nom: "Stage découverte – Natation",
    lieu: "", // à ajuster
    dateDebut: "2026-02-16", // à ajuster
    dateFin: "2026-02-20", // à ajuster (durée 5 jours)
    ageMin: 7,
    ageMax: 17,
    placesTotal: "16-24 selon encadrement", // à ajuster
    full: false,
    hebergement: "Stage en externat (à confirmer)", // à ajuster
    transport: "Transport à préciser", // à ajuster
    pitch:
      "Cinq jours pour apprendre ou se perfectionner en natation, encadrés par des maîtres-nageurs.",
    activites: ["Cours de natation", "Jeux aquatiques", "Initiation plongée"], // à ajuster
    perks: [
      "Encadrement par des maîtres-nageurs diplômés",
      "Tous niveaux acceptés",
    ], // à ajuster
  },
  {
    id: "stage-equitation",
    accent: "#a97e5b",
    saison: "À définir", // à ajuster
    nom: "Stage découverte – Équitation",
    lieu: "", // à ajuster
    dateDebut: "2026-10-19", // à ajuster
    dateFin: "2026-10-23", // à ajuster (durée 5 jours)
    ageMin: 7,
    ageMax: 10,
    placesTotal: "16-24 selon encadrement", // à ajuster
    full: false,
    hebergement: "Hébergement à préciser", // à ajuster
    transport: "Transport à préciser", // à ajuster
    pitch:
      "Une découverte en douceur du monde du cheval : approche, soins et premières balades à poney.",
    activites: ["Initiation équitation", "Soins aux chevaux", "Balade à poney"], // à ajuster
    perks: ["Encadrement diplômé", "Petits groupes"], // à ajuster
  },
];

// Valeurs mises en avant sous l'en-tête de la page
export const sejoursValues = [
  "L'autonomie et la confiance en soi",
  "Le lien avec la nature",
  "La vie collective et le partage",
  "La découverte de nouveaux territoires",
];

export const sejoursClosing =
  "Chaque séjour est une aventure, chaque enfant en revient grandi.";
