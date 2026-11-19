import { SITE_URL, type Lang } from "@/content/site";

type HeadInput = {
  lang: Lang;
  title: string;
  description: string;
  path: string;
  altPath: string;
  type?: "website" | "article" | "profile";
  jsonLd?: Record<string, unknown>;
};

const abs = (path: string) => `${SITE_URL}${path === "/" ? "/" : path}`;

export function buildHead({ lang, title, description, path, altPath, type = "website", jsonLd }: HeadInput) {
  const esPath = lang === "es" ? path : altPath;
  const enPath = lang === "en" ? path : altPath;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: abs(path) },
      { property: "og:locale", content: lang === "es" ? "es_MX" : "en_US" },
      { property: "og:locale:alternate", content: lang === "es" ? "en_US" : "es_MX" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "canonical", href: abs(path) },
      { rel: "alternate", hrefLang: "es", href: abs(esPath) },
      { rel: "alternate", hrefLang: "en", href: abs(enPath) },
      { rel: "alternate", hrefLang: "x-default", href: abs(esPath) },
    ],
    scripts: jsonLd ? [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }] : [],
  };
}
