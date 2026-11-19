import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SECTION_IDS, type Lang } from "@/content/site";

type Section = keyof (typeof SECTION_IDS)["es"];

/** Link to a section of the home page in the given language. */
export function SectionLink({
  lang,
  section,
  className,
  children,
  onClick,
}: {
  lang: Lang;
  section?: Section | undefined;
  className?: string | undefined;
  children: ReactNode;
  onClick?: (() => void) | undefined;
}) {
  const extra = section ? { hash: SECTION_IDS[lang][section] } : {};
  return lang === "es" ? (
    <Link to="/" {...extra} className={className} onClick={onClick}>
      {children}
    </Link>
  ) : (
    <Link to="/en" {...extra} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export function ProjectLink({
  lang,
  slug,
  className,
  children,
  ...rest
}: {
  lang: Lang;
  slug: string;
  className?: string | undefined;
  children: ReactNode;
  "aria-label"?: string | undefined;
}) {
  return lang === "es" ? (
    <Link to="/proyectos/$slug" params={{ slug }} className={className} {...rest}>
      {children}
    </Link>
  ) : (
    <Link to="/en/projects/$slug" params={{ slug }} className={className} {...rest}>
      {children}
    </Link>
  );
}

export type PageRef = { kind: "home" } | { kind: "project"; slug: string };

/** Links to the same page in Spanish and English. */
export function LangSwitch({ lang, page, inverse = false }: { lang: Lang; page: PageRef; inverse?: boolean }) {
  const base = "px-1.5 py-1 transition-colors";
  const active = inverse ? "text-primary-foreground" : "text-primary";
  const idle = inverse ? "text-inverse-muted hover:text-primary-foreground" : "text-muted-foreground hover:text-primary";
  const es =
    page.kind === "home" ? (
      <Link to="/" hrefLang="es" lang="es" aria-current={lang === "es" ? "true" : undefined} className={`${base} ${lang === "es" ? active : idle}`}>
        ES
      </Link>
    ) : (
      <Link to="/proyectos/$slug" params={{ slug: page.slug }} hrefLang="es" lang="es" aria-current={lang === "es" ? "true" : undefined} className={`${base} ${lang === "es" ? active : idle}`}>
        ES
      </Link>
    );
  const en =
    page.kind === "home" ? (
      <Link to="/en" hrefLang="en" lang="en" aria-current={lang === "en" ? "true" : undefined} className={`${base} ${lang === "en" ? active : idle}`}>
        EN
      </Link>
    ) : (
      <Link to="/en/projects/$slug" params={{ slug: page.slug }} hrefLang="en" lang="en" aria-current={lang === "en" ? "true" : undefined} className={`${base} ${lang === "en" ? active : idle}`}>
        EN
      </Link>
    );
  return (
    <nav aria-label={lang === "es" ? "Idioma" : "Language"} className="flex items-center font-mono text-xs font-medium tracking-[0.12em]">
      {es}
      <span aria-hidden className={inverse ? "text-inverse-border" : "text-border"}>/</span>
      {en}
    </nav>
  );
}
