import { siteConfig } from "./site-config";

/**
 * Schema.org "MedicalBusiness / Dietitian" — aide Google à comprendre
 * qu'il s'agit d'un cabinet de diététique local, et alimente le pack local
 * (Google Maps) pour des recherches comme "diététicienne Bruxelles".
 * Injecté une fois dans le layout racine.
 */
export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    additionalType: "https://schema.org/Dietitian",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street || undefined,
      postalCode: siteConfig.address.postalCode || undefined,
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country,
    },
    areaServed: {
      "@type": "City",
      name: "Bruxelles",
    },
    priceRange: "€€",
  };
}

/**
 * Fil d'Ariane structuré (BreadcrumbList), utile pour les pages profondes
 * comme /accompagnement/sport.
 */
export function buildBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}