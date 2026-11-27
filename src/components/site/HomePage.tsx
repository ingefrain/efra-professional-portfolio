import { ArrowRight, ArrowUpRight } from "lucide-react";
import portrait from "@/assets/efrain-gonzalez-portrait.webp.asset.json";
import { CONTENT, SECTION_IDS, type Lang } from "@/content/site";
import { cn } from "@/lib/utils";
import { ContactSection } from "./ContactSection";
import { Container, SectionLabel } from "./Container";
import { CvButton } from "./CvButton";
import { ProjectLink, SectionLink } from "./links";
import { SiteHeader } from "./SiteHeader";

const pad = (n: number) => String(n).padStart(2, "0");

export function HomePage({ lang }: { lang: Lang }) {
  const page = { kind: "home" } as const;
  return (
    <>
      <SiteHeader lang={lang} page={page} />
      <main id="main">
        <Hero lang={lang} />
        <Specialties lang={lang} />
        <Projects lang={lang} />
        <Process lang={lang} />
        <Experience lang={lang} />
        <Technologies lang={lang} />
        <About lang={lang} />
      </main>
      <ContactSection lang={lang} page={page} index="07" />
    </>
  );
}

function Hero({ lang }: { lang: Lang }) {
  const t = CONTENT[lang];
  return (
    <section aria-labelledby="hero-title" className="relative">
      <Container>
        <div className="grid lg:grid-cols-12 lg:gap-x-12">
          <div className="flex flex-col justify-center pb-12 pt-12 sm:pt-16 lg:col-span-7 lg:pb-10 lg:pt-10">
            <p className="rise font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] text-accent-strong">
              {t.hero.role}
            </p>
            <h1
              id="hero-title"
              className="rise mt-5 text-[2.9rem] font-semibold leading-[0.98] tracking-[-0.04em] text-primary sm:text-6xl lg:text-[4rem] xl:text-[4.35rem]"
              style={{ ["--d" as string]: "80ms" }}
            >
              <span className="block">
                {t.hero.titleA} <span className="text-accent">{t.hero.titleNum}</span>
              </span>
              <span className="block">{t.hero.titleB}</span>
            </h1>
            <p
              className="rise mt-6 max-w-2xl text-xl font-semibold leading-snug tracking-[-0.01em] text-foreground sm:text-[1.35rem]"
              style={{ ["--d" as string]: "160ms" }}
            >
              {t.hero.subtitle}
            </p>
            <p
              className="rise mt-4 max-w-[38rem] text-base leading-relaxed text-muted-foreground sm:text-[1.02rem]"
              style={{ ["--d" as string]: "220ms" }}
            >
              {t.hero.description}
            </p>
            <div className="rise mt-8 flex flex-wrap gap-3" style={{ ["--d" as string]: "280ms" }}>
              <SectionLink
                lang={lang}
                section="projects"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {t.hero.explore}
                <ArrowRight
                  aria-hidden
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                />
              </SectionLink>
              <CvButton lang={lang} />
            </div>
          </div>

          <figure
            className="rise relative -mx-6 sm:-mx-8 lg:col-span-5 lg:mx-0"
            style={{ ["--d" as string]: "120ms" }}
          >
            <div className="relative h-[400px] overflow-hidden bg-surface sm:h-[500px] lg:h-full lg:min-h-[520px]">
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-border/60 to-transparent"
              />
              <img
                src={portrait.url}
                alt={t.hero.photoAlt}
                width={340}
                height={761}
                fetchPriority="high"
                decoding="async"
                className="absolute bottom-0 left-1/2 h-[94%] w-auto max-w-none -translate-x-1/2 object-contain"
              />
              <figcaption className="absolute left-6 top-6 sm:left-8 lg:left-7 lg:top-7">
                <span className="block text-sm font-semibold text-primary">{t.hero.caption}</span>
                <span className="mt-1 block font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                  efra.biz
                </span>
              </figcaption>
            </div>
          </figure>
        </div>
      </Container>
      <Indicators lang={lang} />
    </section>
  );
}

function Indicators({ lang }: { lang: Lang }) {
  const t = CONTENT[lang];
  return (
    <div className="border-y border-border">
      <Container>
        <dl className="grid sm:grid-cols-3">
          {t.indicators.map((ind, i) => (
            <div
              key={ind.value}
              className={cn(
                "rise flex flex-col py-6",
                "border-t border-border first:border-t-0 sm:border-t-0",
                i > 0 && "sm:border-l sm:pl-8",
                "pr-4",
              )}
              style={{ ["--d" as string]: `${340 + i * 70}ms` }}
            >
              <dt className="order-2 mt-2.5 max-w-[26ch] text-[0.82rem] leading-snug text-muted-foreground">
                {ind.label}
              </dt>
              <dd className="order-1 flex items-baseline gap-1.5 text-primary">
                <span className="text-[2rem] font-semibold leading-none tracking-[-0.03em] sm:text-[2.4rem]">
                  {ind.value}
                </span>
                {ind.unit && (
                  <span className="text-base font-semibold text-accent-strong sm:text-lg">
                    {ind.unit}
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
      <Container>
        <p className="border-t border-border/60 py-3 font-mono text-[0.68rem] tracking-[0.04em] text-muted-foreground">
          {t.indicatorsNote}
        </p>
      </Container>
    </div>
  );
}

function Specialties({ lang }: { lang: Lang }) {
  const t = CONTENT[lang].specialties;
  return (
    <section
      id={SECTION_IDS[lang].specialties}
      aria-labelledby="spec-title"
      className="py-24 lg:py-32"
    >
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="reveal lg:col-span-4">
          <SectionLabel index="01">{t.label}</SectionLabel>
          <h2
            id="spec-title"
            className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.03em] text-primary sm:text-4xl"
          >
            {t.title}
          </h2>
        </div>
        <ol className="lg:col-span-8">
          {t.items.map((item, i) => (
            <li
              key={item.title}
              className="reveal grid gap-3 border-t border-border py-9 first:border-t-primary sm:grid-cols-[3rem_1fr] lg:grid-cols-[3rem_minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-8"
            >
              <span className="font-mono text-sm text-accent-strong">{pad(i + 1)}</span>
              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-primary sm:text-[1.7rem]">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground sm:col-start-2 lg:col-start-auto">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
      <Container className="mt-20 border-t border-border pt-16">
        <div className="reveal max-w-3xl">
          <h3 className="text-3xl font-semibold leading-tight text-primary sm:text-4xl">
            {CONTENT[lang].infrastructure.title}
          </h3>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {CONTENT[lang].infrastructure.intro}
          </p>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {CONTENT[lang].infrastructure.groups.map((group) => (
            <div key={group.title} className="reveal border-t border-border pt-6">
              <h4 className="text-xl font-semibold text-primary">{group.title}</h4>
              <ul className="mt-5 space-y-3 text-base leading-relaxed text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="reveal mt-12 max-w-3xl border-l-2 border-accent pl-6 text-lg font-medium leading-relaxed text-primary">
          {CONTENT[lang].infrastructure.conclusion}
        </p>
      </Container>
    </section>
  );
}

function Projects({ lang }: { lang: Lang }) {
  const t = CONTENT[lang];
  const [featured, ...rest] = t.projects.items;
  if (!featured) return null;
  return (
    <section
      id={SECTION_IDS[lang].projects}
      aria-labelledby="projects-title"
      className="bg-primary py-24 text-primary-foreground lg:py-32"
    >
      <Container>
        <div className="reveal grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="02" inverse>
              {t.projects.label}
            </SectionLabel>
            <h2
              id="projects-title"
              className="mt-6 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl"
            >
              {t.projects.title}
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-inverse-muted lg:col-span-5">
            {t.projects.intro}
          </p>
        </div>

        {/* Featured project */}
        <ProjectLink
          lang={lang}
          slug={featured.slug}
          className="reveal group mt-16 grid gap-10 border-t border-inverse-border pt-10 lg:grid-cols-12 lg:pt-14"
        >
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-soft">
              01 — {featured.kicker}
            </p>
            <h3 className="mt-5 text-5xl font-semibold tracking-[-0.04em] transition-colors group-hover:text-accent-soft sm:text-6xl lg:text-7xl">
              {featured.name}
            </h3>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-inverse-muted">
              {featured.summary}
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground">
              {t.ui.viewProject}
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform group-hover:translate-x-1"
              />
            </span>
          </div>
          {(featured.highlight || featured.areas) && (
            <div className="flex flex-col justify-end border-l border-inverse-border pl-8 lg:col-span-4 lg:col-start-9">
              {featured.highlight && (
                <>
                  <span className="text-6xl font-semibold leading-none tracking-[-0.04em] text-accent-soft sm:text-7xl lg:text-8xl">
                    {featured.highlight.value}
                  </span>
                  <span className="mt-4 max-w-[18ch] text-base text-inverse-muted">
                    {featured.highlight.label}
                  </span>
                </>
              )}
              {featured.areas && (
                <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-inverse-muted">
                  {featured.areas.join("  ·  ")}
                </p>
              )}
            </div>
          )}
        </ProjectLink>

        {/* Remaining projects */}
        <ol className="mt-20 border-b border-inverse-border">
          {rest.map((p, i) => (
            <li key={p.slug} className="reveal border-t border-inverse-border">
              <ProjectLink
                lang={lang}
                slug={p.slug}
                className="group grid gap-4 py-9 sm:grid-cols-[3.5rem_1fr_auto] lg:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1fr)_2rem] lg:items-center lg:gap-10"
              >
                <span className="font-mono text-sm text-accent-soft">{pad(i + 2)}</span>
                <div>
                  <h3 className="flex flex-wrap items-center gap-3 text-3xl font-semibold tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-1.5 sm:text-4xl">
                    {p.name}
                    {p.status && (
                      <span className="rounded-full border border-accent-soft/50 px-2.5 py-0.5 font-mono text-[0.65rem] font-medium uppercase tracking-[0.14em] text-accent-soft">
                        {p.status}
                      </span>
                    )}
                  </h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-inverse-muted">
                    {p.kicker}
                  </p>
                </div>
                <div className="sm:col-start-2 lg:col-start-3 lg:row-start-1">
                  <p className="text-base leading-relaxed text-inverse-muted">{p.summary}</p>
                  {p.stack && (
                    <p className="mt-3 font-mono text-xs text-primary-foreground/80">
                      {p.stack.join(" / ")}
                    </p>
                  )}
                </div>
                <ArrowUpRight
                  aria-hidden
                  className="hidden size-6 justify-self-end text-accent-soft transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:col-start-3 sm:row-start-1 sm:block lg:col-start-4"
                />
                <span className="sr-only">{t.ui.viewProject}</span>
              </ProjectLink>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Process({ lang }: { lang: Lang }) {
  const t = CONTENT[lang].process;
  return (
    <section
      id={SECTION_IDS[lang].process}
      aria-labelledby="process-title"
      className="bg-surface py-24 lg:py-28"
    >
      <Container>
        <div className="reveal max-w-2xl">
          <SectionLabel index="03">{t.label}</SectionLabel>
          <h2
            id="process-title"
            className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.03em] text-primary sm:text-4xl"
          >
            {t.title}
          </h2>
        </div>
        <ol className="mt-16 grid gap-0 lg:grid-cols-5">
          {t.steps.map((step, i) => (
            <li
              key={step}
              className="reveal relative border-l border-primary/20 pb-10 pl-8 last:pb-0 lg:border-l-0 lg:border-t lg:pb-0 lg:pl-0 lg:pr-8 lg:pt-10"
            >
              <span
                aria-hidden
                className="absolute -left-[5px] top-1 size-[9px] rounded-full bg-accent lg:-top-[5px] lg:left-0"
              />
              <span className="font-mono text-sm text-accent-strong">{pad(i + 1)}</span>
              <p className="mt-3 text-lg font-semibold leading-snug tracking-[-0.01em] text-primary">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Experience({ lang }: { lang: Lang }) {
  const t = CONTENT[lang].experience;
  return (
    <section
      id={SECTION_IDS[lang].experience}
      aria-labelledby="exp-title"
      className="py-24 lg:py-32"
    >
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="reveal lg:col-span-4">
          <SectionLabel index="04">{t.label}</SectionLabel>
          <h2
            id="exp-title"
            className="mt-6 text-4xl font-semibold tracking-[-0.035em] text-primary sm:text-5xl"
          >
            {t.title}
          </h2>
        </div>
        <ol className="lg:col-span-8">
          {t.items.map((item) => (
            <li
              key={item.company}
              className="reveal grid gap-3 border-t border-border py-10 first:border-t-primary sm:grid-cols-[11rem_1fr] sm:gap-8"
            >
              <p className="font-mono text-sm text-accent-strong">{item.period ?? ""}</p>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-primary sm:text-[1.75rem]">
                  {item.company}
                </h3>
                {item.role && (
                  <p className="mt-2 text-base font-semibold text-foreground">{item.role}</p>
                )}
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
                {item.details?.map((detail) => (
                  <div key={detail.title} className="mt-7">
                    <h4 className="text-base font-semibold text-primary">{detail.title}</h4>
                    <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                      {detail.items.map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {item.links && (
                  <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-accent-strong">
                    {item.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="break-all underline underline-offset-4"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Technologies({ lang }: { lang: Lang }) {
  const t = CONTENT[lang].technologies;
  return (
    <section
      id={SECTION_IDS[lang].technologies}
      aria-labelledby="tech-title"
      className="border-t border-border py-24 lg:py-28"
    >
      <Container>
        <div className="reveal flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <SectionLabel index="05">{t.label}</SectionLabel>
            <h2
              id="tech-title"
              className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-primary sm:text-4xl"
            >
              {t.title}
            </h2>
          </div>
        </div>
        <p className="reveal mt-7 max-w-3xl text-base leading-relaxed text-muted-foreground">
          {t.intro}
        </p>
        <dl className="mt-14">
          {t.groups.map((g) => (
            <div
              key={g.name}
              className="reveal grid gap-3 border-t border-border py-7 last:border-b sm:grid-cols-[13rem_1fr] sm:items-baseline sm:gap-8"
            >
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {g.name}
              </dt>
              <dd className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xl font-semibold tracking-[-0.015em] text-primary sm:text-2xl">
                {g.items.map((item, i) => (
                  <span key={item} className="inline-flex items-baseline gap-3">
                    {item}
                    {i < g.items.length - 1 && (
                      <span aria-hidden className="font-normal text-accent/70">
                        /
                      </span>
                    )}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function About({ lang }: { lang: Lang }) {
  const t = CONTENT[lang].about;
  return (
    <section
      id={SECTION_IDS[lang].about}
      aria-labelledby="about-title"
      className="bg-surface py-24 lg:py-32"
    >
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="reveal lg:col-span-5">
          <SectionLabel index="06">{t.label}</SectionLabel>
          <h2
            id="about-title"
            className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.03em] text-primary sm:text-4xl"
          >
            {t.title}
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">{t.text}</p>
          <p className="mt-4 text-sm font-semibold text-accent-strong">{t.location}</p>
          {t.summary.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="lg:col-span-7">
          <h3 className="reveal font-mono text-xs uppercase tracking-[0.18em] text-accent-strong">
            {t.educationTitle}
          </h3>
          <ul className="mt-5">
            {t.education.map((e) => (
              <li key={e.title} className="reveal border-t border-primary/15 py-7">
                <p className="text-xl font-semibold leading-snug tracking-[-0.015em] text-primary sm:text-2xl">
                  {e.title}
                </p>
                <p className="mt-2 text-base font-medium text-foreground">{e.school}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{e.detail}</p>
              </li>
            ))}
          </ul>
          <h3 className="reveal mt-10 font-mono text-xs uppercase tracking-[0.18em] text-accent-strong">
            {t.languagesTitle}
          </h3>
          <dl className="reveal mt-5 grid grid-cols-3 border-t border-primary/15">
            {t.languages.map((l, i) => (
              <div
                key={l.name}
                className={cn("py-6", i > 0 && "border-l border-primary/15 pl-5 sm:pl-8")}
              >
                <dt className="text-sm text-muted-foreground">{l.name}</dt>
                <dd className="mt-1 text-2xl font-semibold tracking-[-0.02em] text-primary sm:text-3xl">
                  {l.level}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
      <Container className="mt-16 border-t border-border pt-12">
        <div className="reveal grid gap-8 lg:grid-cols-12">
          <h3 className="text-2xl font-semibold leading-snug text-primary sm:text-3xl lg:col-span-5">
            {t.focus.title}
          </h3>
          <div className="lg:col-span-7">
            {t.focus.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mb-5 text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-accent-strong">
              {t.focus.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
