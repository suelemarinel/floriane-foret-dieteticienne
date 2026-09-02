// Contenu détaillé de chaque bloc de la page /accompagnement.
// Les points ci-dessous sont des repères généraux à valider/adapter avec
// Floriane avant mise en ligne (durée et fréquence des séances, spécificités
// de sa pratique...). Ce qui reste entre crochets [ ] est à compléter.

type AccompagnementSlug = "alimentation-equilibree" | "troubles-digestifs" | "sport";

type AccompagnementDetail = {
  intro: string;
  forWho: string[];
  includes: string[];
};

export const accompagnementDetails: Record<AccompagnementSlug, AccompagnementDetail> = {
  "alimentation-equilibree": {
    intro:
      "Retrouver des repères simples autour de l'assiette, sans liste d'interdits ni calcul de calories — pour manger mieux, durablement.",
    forWho: [
      "Vous voulez rééquilibrer votre alimentation au quotidien.",
      "Vous cherchez des repères simples plutôt qu'un régime strict.",
      "Vous avez déjà essayé plusieurs régimes, sans résultat durable.",
      "Vous voulez réapprendre à cuisiner et à faire vos courses sereinement.",
    ],
    includes: [
      "Un bilan complet de vos habitudes alimentaires et de votre mode de vie.",
      "La méthode de l'assiette équilibrée, adaptée à votre quotidien.",
      "Des outils concrets : organisation des repas, courses, lecture des étiquettes.",
      "[Nombre et fréquence des séances — à compléter]",
    ],
  },
  "troubles-digestifs": {
    intro:
      "Identifier les aliments et habitudes qui pèsent sur votre digestion, pour retrouver un quotidien plus léger.",
    forWho: [
      "Ballonnements, lourdeurs ou inconfort après les repas.",
      "Transit irrégulier au quotidien.",
      "Une sensation de ne plus savoir quoi manger sans risquer une gêne.",
    ],
    includes: [
      "Un bilan digestif et alimentaire détaillé.",
      "Un repérage progressif des aliments ou habitudes en cause.",
      "Des ajustements concrets, sans exclusion inutile ni régime restrictif.",
      "[Collaboration éventuelle avec votre médecin/gastro-entérologue — à confirmer]",
    ],
  },
  sport: {
    intro:
      "Manger juste pour progresser, récupérer et tenir la distance — sans complexifier votre quotidien.",
    forWho: [
      "Vous pratiquez un sport régulièrement et voulez optimiser votre énergie.",
      "Vous manquez d'énergie ou récupérez difficilement entre les séances.",
      "Vous préparez un objectif précis (compétition, reprise, prise de masse...).",
    ],
    includes: [
      "Une analyse de vos apports actuels au regard de votre activité.",
      "Un plan alimentaire adapté aux jours d'entraînement et de repos.",
      "Des conseils pratiques : timing des repas, hydratation, collations.",
      "[Suivi spécifique en période de compétition — à préciser]",
    ],
  },
};