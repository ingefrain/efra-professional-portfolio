import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { CONTENT, CV_URL, PROJECT_SLUGS, alternatePath, cvHref } from "@/content/site";
import { routeTree } from "@/routeTree.gen";

const router = () => createRouter({ routeTree, context: { queryClient: new QueryClient() } });

describe("bilingual routes", () => {
  it("serves Spanish at / and English at /en", () => {
    expect(router().matchRoutes("/").at(-1)?.routeId).toBe("/");
    expect(router().matchRoutes("/en").at(-1)?.routeId).toBe("/en/");
  });

  it("has a detail page for each project in both languages", () => {
    for (const slug of PROJECT_SLUGS) {
      expect(router().matchRoutes(`/proyectos/${slug}`).at(-1)?.routeId).toBe("/proyectos/$slug");
      expect(router().matchRoutes(`/en/projects/${slug}`).at(-1)?.routeId).toBe("/en/projects/$slug");
    }
  });

  it("language switch maps each page to its counterpart", () => {
    expect(alternatePath("/")).toBe("/en");
    expect(alternatePath("/en/")).toBe("/");
    expect(alternatePath("/proyectos/acerca")).toBe("/en/projects/acerca");
    expect(alternatePath("/en/projects/fluxsalud")).toBe("/proyectos/fluxsalud");
  });
});

describe("content rules", () => {
  it("shows the four experience indicators", () => {
    for (const lang of ["es", "en"] as const) {
      expect(CONTENT[lang].indicators.map((i) => i.value)).toEqual(["20", "100+", "3,100+", "ERP · SaaS"]);
    }
  });

  it("lists the five featured projects in order in both languages", () => {
    const names = ["Grupo Talento", "ACERCA", "GLOP Contadores", "FluxSalud", "USB Stock"];
    expect(CONTENT.es.projects.items.map((p) => p.name)).toEqual(names);
    expect(CONTENT.en.projects.items.map((p) => p.name)).toEqual(names);
  });

  it("CV buttons download the uploaded PDF", () => {
    expect(CV_URL).toMatch(/\.pdf$/);
    expect(cvHref("es")).toBe(CV_URL);
    expect(cvHref("en")).toBe(CV_URL);
  });
});
