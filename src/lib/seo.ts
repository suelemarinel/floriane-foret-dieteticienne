import type { Metadata } from "next";
import { siteConfig } from "./site-config";

type PageSeoInput = {
  title: string;
  description: string;
  path: string; // ex: "/mon-parcours"
  keywords?: string[];
};

/**
 * Construit un objet Metadata Next.js cohérent pour une page :
 * title, description, canonical, Open Graph, Twitter Card.
 * Chaque page DOIT appeler cette fonction avec un titre/une description
 * uniques pour un bon référencement (pas de duplicate content).
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageSeoInput): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "fr_BE",
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: siteConfig.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}/og-image.jpg`],
    },
  };
}