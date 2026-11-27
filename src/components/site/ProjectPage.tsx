import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTENT, type Lang, type Project } from "@/content/site";
import { ContactSection } from "./ContactSection";
import { Container, SectionLabel } from "./Container";
import { ProjectLink, SectionLink } from "./links";
import { SiteHeader } from "./SiteHeader";

const pad = (n: number) => String(n).padStart(2, "0");

export function ProjectPage({ lang, project }: { lang: Lang; project: Project }) {
  const t = CONTENT[lang];
  const items = t.projects.items;
  const index = items.findIndex((p) => p.slug === project.slug);
  const prev = items[(index - 1 + items.length) % items.length];
  const next = items[(index + 1) % items.length];
  if (!prev || !next) return null;
  const page = { kind: "project", slug: project.slug } as const;
  const tags = project.stack ?? project.areas ?? [];

  return (
    <>
      <SiteHeader lang={lang} page={page} />
      <main id="main">
        <article>
          <header className="border-b border-border">
            <Container className="pb-16 pt-12 lg:pb-24 lg:pt-16">
              <SectionLink
                lang={lang}
                section="projects"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-accent-strong hover:text-primary"
              >
                <ArrowLeft
                  aria-hidden
                  className="size-4 transition-transform group-hover:-translate-x-0.5"
                />
                {t.ui.allProjects}
              </SectionLink>

              <div className="mt-14 grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <p className="rise font-mono text-xs uppercase tracking-[0.18em] text-accent-strong">
                    {pad(index + 1)} / {pad(items.length)} — {project.kicker}
                  </p>
                  <h1
                    className="rise mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-primary sm:text-7xl lg:text-[6.5rem]"
                    style={{ ["--d" as string]: "80ms" }}
                  >
                    {project.name}
                  </h1>
                  <p
                    className="rise mt-8 max-w-2xl text-lg leading-relaxed text-foreground sm:text-[1.3rem]"
                    style={{ ["--d" as string]: "160ms" }}
                  >
                    {project.description}
                  </p>
                  {project.links && project.links.length > 0 && (
                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <Button
                          key={link.href}
                          asChild
                          variant="outline"
                          className="h-auto max-w-full whitespace-normal py-3 text-accent-strong"
                        >
                          <a href={link.href} target="_blank" rel="noopener noreferrer">
                            <span className="break-all">{link.label}</span>
                            <ArrowUpRight aria-hidden />
                          </a>
                        </Button>
                      ))}
                    </div>
                  )}
                </div>

                <dl className="rise self-end lg:col-span-4" style={{ ["--d" as string]: "240ms" }}>
                  {project.highlight && (
                    <div className="border-t border-primary py-5">
                      <dd className="text-5xl font-semibold leading-none tracking-[-0.04em] text-accent">
                        {project.highlight.value}
                      </dd>
                      <dt className="mt-2 text-sm text-muted-foreground">
                        {project.highlight.label}
                      </dt>
                    </div>
                  )}
                  {tags.length > 0 && (
                    <div className="border-t border-border py-5">
                      <dt className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                        {project.stack ? t.ui.technologies : t.ui.areas}
                      </dt>
                      <dd className="mt-2 text-lg font-semibold text-primary">
                        {tags.join(" / ")}
                      </dd>
                    </div>
                  )}
                  {project.status && (
                    <div className="border-t border-border py-5">
                      <dt className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                        {t.ui.status}
                      </dt>
                      <dd className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-primary">
                        <span aria-hidden className="size-2 rounded-full bg-accent" />
                        {project.status}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </Container>
          </header>

          <section aria-labelledby="scope-title" className="py-20 lg:py-28">
            <Container className="grid gap-12 lg:grid-cols-12">
              <div className="reveal lg:col-span-4">
                <SectionLabel>{t.ui.scope}</SectionLabel>
                <h2 id="scope-title" className="sr-only">
                  {t.ui.scope}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <ol className="grid gap-x-10 sm:grid-cols-2">
                  {project.scope.map((s, i) => (
                    <li key={s} className="reveal flex gap-5 border-t border-border py-6">
                      <span className="font-mono text-sm text-accent-strong">{pad(i + 1)}</span>
                      <span className="text-lg font-semibold tracking-[-0.01em] text-primary">
                        {s}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Container>
          </section>
          {project.sections?.map((section, i) => (
            <section
              key={section.title}
              aria-labelledby={`detail-${i}`}
              className="border-t border-border py-14 lg:py-20"
            >
              <Container className="grid gap-8 lg:grid-cols-12">
                <h2
                  id={`detail-${i}`}
                  className="reveal text-2xl font-semibold leading-snug text-primary sm:text-3xl lg:col-span-4"
                >
                  {section.title}
                </h2>
                <div className="lg:col-span-8">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="reveal mb-5 max-w-3xl text-lg leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Container>
            </section>
          ))}
          {project.screenshots && project.screenshots.length > 0 && (
            <section
              aria-labelledby="screenshots-title"
              className="border-t border-border py-14 lg:py-20"
            >
              <Container>
                <h2 id="screenshots-title" className="text-2xl font-semibold text-primary">
                  {t.ui.screenshotLabel}
                </h2>
                <div className="mt-8 grid gap-10">
                  {project.screenshots.map((image) => (
                    <figure key={image.url}>
                      <img
                        src={image.url}
                        alt={image.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-auto w-full object-contain"
                      />
                      {image.caption && (
                        <figcaption className="mt-3 text-sm text-muted-foreground">
                          {image.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </Container>
            </section>
          )}
        </article>

        <nav aria-label={t.projects.label} className="border-t border-border bg-surface">
          <Container className="grid sm:grid-cols-2">
            <ProjectLink
              lang={lang}
              slug={prev.slug}
              className="group border-border py-10 sm:border-r sm:pr-10"
            >
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                <ArrowLeft aria-hidden className="size-3.5" />
                {t.ui.previous}
              </span>
              <span className="mt-3 block text-3xl font-semibold tracking-[-0.03em] text-primary transition-colors group-hover:text-accent-strong">
                {prev.name}
              </span>
            </ProjectLink>
            <ProjectLink
              lang={lang}
              slug={next.slug}
              className="group border-t border-border py-10 sm:border-t-0 sm:pl-10 sm:text-right"
            >
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {t.ui.next}
                <ArrowRight aria-hidden className="size-3.5" />
              </span>
              <span className="mt-3 block text-3xl font-semibold tracking-[-0.03em] text-primary transition-colors group-hover:text-accent-strong">
                {next.name}
              </span>
            </ProjectLink>
          </Container>
        </nav>
      </main>
      <ContactSection lang={lang} page={page} />
    </>
  );
}
