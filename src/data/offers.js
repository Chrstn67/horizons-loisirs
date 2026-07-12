// Formules d'accueil : mercredis, vacances scolaires et sejours
export const offers = [
  {
    id: "escale-mercredi",
    name: "L'Escale du Mercredi",
    tagline: "Le rendez-vous hebdo",
    schedule: "Le mercredi, de 7h30 à 18h30",
    accent: "var(--lagoon)",
    featured: false,
    includesFrom: null,
    pitch: "Un accueil bienveillant, au rythme et aux envies de chaque enfant.",
    activities: [
      "Activités créatives et ludiques",
      "Jeux sportifs et coopératifs",
      "Ateliers d'expression",
      "Découvertes et partage",
    ],
    perks: [
      "Inscription a la journée ou au mois",
      "Equipe diplomée",
      "Groupes par âge",
    ],
  },
  {
    id: "mercredis-vacances",
    name: "Mercredis & Vacances",
    tagline: "Le combo toute l'année",
    schedule: "Mercredis + vacances scolaires, mêmes horaires",
    accent: "var(--coral)",
    featured: true,
    includesFrom: "escale-mercredi",
    pitch:
      "Des vacances rythmées par la découverte, construites avec les enfants.",
    activities: [
      "Sorties culturelles et de loisirs",
      "Grands jeux et journées à thème",
      "Ateliers thématiques",
      "Programme co-construit chaque vacances",
    ],
    perks: [
      "Priorité sur les places vacances",
      "Accueil des les vacances scolaires",
    ],
  },
  {
    id: "grand-voyage",
    name: "Le Grand Voyage",
    tagline: "L'aventure sans limite",
    schedule: "Mercredis + vacances + séjours, horaires variables",
    accent: "var(--sun)",
    featured: false,
    includesFrom: "mercredis-vacances",
    pitch:
      "Des séjours en France et à l'étranger, pour vivre une vraie aventure humaine.",
    activities: [
      "Séjours en France et à l'étranger",
      "Vie quotidienne et grands jeux",
      "Rencontres et découvertes culturelles",
      "Encadrement renforcé",
    ],
    perks: [
      "Réunion d'information avant départ",
      "Equipe dédiée aux séjours",
      "Horaires adaptés au programme",
    ],
  },
];

// Ce que developpent nos sejours, mis en avant en clôture de la section
export const sejourValues = [
  "L'autonomie",
  "La confiance en soi",
  "L'esprit d'équipe",
  "L'ouverture culturelle",
  "Le respect et le vivre-ensemble",
];
export const sejourClosing = "Parce que voyager, c'est grandir.";
