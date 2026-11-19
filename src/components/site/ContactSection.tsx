import { ArrowUpRight } from "lucide-react";
import { CONTACT, CONTENT, PERSON_NAME, SECTION_IDS, type Lang } from "@/content/site";
import { Container, SectionLabel } from "./Container";
import { CvButton } from "./CvButton";
import { LangSwitch, type PageRef } from "./links";
import { Logo } from "./Logo";

export function ContactSection({ lang, page, index }: { lang: Lang; page: PageRef; index?: string | undefined }) {
  const t = CONTENT[lang];
  const links = [
    { label: "LinkedIn", href: CONTACT.linkedin, text: "in/efra-gonzalez" },
    { label: "GitHub", href: CONTACT.github, text: "github.com/ingefrain" },
    { label: lang === "es" ? "Sitio" : "Website", href: CONTACT.site, text: "efra.biz" },
  ];
  return (
    <section id={SECTION_IDS[lang].contact} aria-labelledby="contact-title" className="bg-primary text-primary-foreground">
      <Container className="pb-10 pt-24 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-7">
            <SectionLabel index={index} inverse>
              {t.contact.label}
            </SectionLabel>
            <h2 id="contact-title" className="mt-6 text-5xl font-semibold tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              {t.contact.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-inverse-muted">{t.contact.message}</p>
            <div className="mt-12">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-inverse-muted">{t.contact.emailLabel}</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="group mt-3 inline-flex items-baseline gap-3 text-3xl font-semibold tracking-[-0.02em] text-primary-foreground sm:text-5xl"
              >
                <span className="border-b-2 border-accent-soft/50 pb-1 transition-colors group-hover:border-accent-soft">{CONTACT.email}</span>
                <ArrowUpRight aria-hidden className="size-7 text-accent-soft transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div className="reveal flex flex-col justify-end lg:col-span-4 lg:col-start-9">
            <ul className="border-t border-inverse-border">
              {links.map((l) => (
                <li key={l.label} className="border-b border-inverse-border">
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <span>
                      <span className="block font-mono text-[0.7rem] uppercase tracking-[0.18em] text-inverse-muted">{l.label}</span>
                      <span className="mt-1 block text-lg font-semibold">{l.text}</span>
                    </span>
                    <ArrowUpRight aria-hidden className="size-5 text-accent-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
            <CvButton lang={lang} variant="inverse" className="mt-8 self-start" />
          </div>
        </div>

        <footer className="mt-24 flex flex-col gap-6 border-t border-inverse-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <Logo inverse className="text-lg" />
            <p className="text-sm text-inverse-muted">
              © {new Date().getFullYear()} {PERSON_NAME}. {t.footer.rights}
            </p>
          </div>
          <LangSwitch lang={lang} page={page} inverse />
        </footer>
      </Container>
    </section>
  );
}
