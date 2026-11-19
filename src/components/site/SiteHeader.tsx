import { Menu, X } from "lucide-react";
import { useState } from "react";
import { CONTENT, type Lang } from "@/content/site";
import { Container } from "./Container";
import { CvButton } from "./CvButton";
import { LangSwitch, SectionLink, type PageRef } from "./links";
import { Logo } from "./Logo";

const ITEMS = [
  { key: "home", section: undefined },
  { key: "projects", section: "projects" },
  { key: "experience", section: "experience" },
  { key: "technologies", section: "technologies" },
  { key: "about", section: "about" },
  { key: "contact", section: "contact" },
] as const;

export function SiteHeader({ lang, page }: { lang: Lang; page: PageRef }) {
  const t = CONTENT[lang];
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        {t.ui.skip}
      </a>
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <SectionLink lang={lang} className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring" onClick={() => setOpen(false)}>
          <Logo />
          <span className="sr-only"> — {t.nav.home}</span>
        </SectionLink>

        <nav aria-label={lang === "es" ? "Principal" : "Main"} className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[0.88rem] font-medium text-foreground/75">
            {ITEMS.map((item) => (
              <li key={item.key}>
                <SectionLink lang={lang} section={item.section} className="transition-colors hover:text-primary">
                  {t.nav[item.key]}
                </SectionLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <LangSwitch lang={lang} page={page} />
          <CvButton lang={lang} variant="ghost" />
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LangSwitch lang={lang} page={page} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.ui.close : t.ui.menu}
            className="inline-flex size-10 items-center justify-center rounded-md border border-border text-primary"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background lg:hidden">
          <Container className="py-6">
            <ul className="flex flex-col">
              {ITEMS.map((item) => (
                <li key={item.key} className="border-b border-border/70 last:border-0">
                  <SectionLink
                    lang={lang}
                    section={item.section}
                    onClick={() => setOpen(false)}
                    className="block py-3.5 text-lg font-semibold text-primary"
                  >
                    {t.nav[item.key]}
                  </SectionLink>
                </li>
              ))}
            </ul>
            <CvButton lang={lang} className="mt-5 w-full" />
          </Container>
        </div>
      )}
    </header>
  );
}
