// Toutes les informations "métier" du site sont centralisées ici.
// Objectif : un seul endroit à modifier quand une info change
// (téléphone, adresse, mots-clés SEO, réseaux sociaux, etc.)

export const siteConfig = {
  name: "Floriane Foret",
  title: "Floriane Foret — Diététicienne-nutritionniste à Bruxelles",
  role: "Diététicienne-nutritionniste",
  // ⚠️ URL à remplacer par le vrai nom de domaine une fois acheté/branché.
  url: "https://www.florianeforet.be",
  phone: "+32 471 77 32 63",
  phoneDisplay: "0471 77 32 63",
  email: "floriane.foret@outlook.com",
  city: "Bruxelles",
  // Adresse complète à compléter par la cliente (utilisée pour le schema.org LocalBusiness + Google Maps).
  address: {
    street: "", // ex: "Rue de la Santé 12"
    postalCode: "", // ex: "1000"
    city: "Bruxelles",
    country: "BE",
  },
  socials: {
    instagram: "", // à compléter
    doctoranytime: "", // lien profil avis
    linkedin: "",
  },
  bookingUrl: "/contact",
  description:
    "Floriane Foret, diététicienne-nutritionniste à Bruxelles, vous accompagne avec bienveillance vers une alimentation équilibrée, durable et sans culpabilité : sport, troubles digestifs, rééquilibrage alimentaire.",
} as const;

// Mots-clés SEO de base. La cliente doit communiquer une liste complémentaire
// (spécialités, quartiers, pathologies ciblées...) — à ajouter ici, et à
// répartir naturellement dans les textes des pages concernées, jamais en liste brute.
export const seoKeywords = [
  "diététicienne Bruxelles",
  "nutritionniste Bruxelles",
  "diététicienne-nutritionniste",
  "rééquilibrage alimentaire Bruxelles",
  "diététicienne sport",
  "diététicienne troubles digestifs",
  "consultation diététique Bruxelles",
  // TODO: compléter avec la liste de mots-clés fournie par la cliente
];

export const mainNav = [
  { label: "Accueil", href: "/" },
  { label: "Mon parcours", href: "/mon-parcours" },
  { label: "Accompagnement", href: "/accompagnement" },
  { label: "Contact", href: "/contact" },
];

export const accompagnements = [
  {
    slug: "alimentation-equilibree",
    label: "Alimentation équilibrée",
    href: "/accompagnement/alimentation-equilibree",
    tagline: "Retrouver des repères simples, sans régime ni culpabilité.",
  },
  {
    slug: "troubles-digestifs",
    label: "Troubles digestifs",
    href: "/accompagnement/troubles-digestifs",
    tagline: "Apaiser une digestion capricieuse au quotidien.",
  },
  {
    slug: "sport",
    label: "Nutrition sportive",
    href: "/accompagnement/sport",
    tagline: "Manger juste pour progresser et récupérer.",
  },
] as const;