import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { CONTENT, CV_URL, PROJECT_SLUGS, alternatePath, cvHref, getProject } from "@/content/site";
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
      expect(router().matchRoutes(`/en/projects/${slug}`).at(-1)?.routeId).toBe(
        "/en/projects/$slug",
      );
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
  it("uses the three professional indicator values", () => {
    for (const lang of ["es", "en"] as const) {
      expect(CONTENT[lang].indicators.map((i) => i.value)).toEqual(["20", "3", "100+"]);
    }
  });

  it("includes all six supplied projects in both languages", () => {
    const slugs = [
      "grupo-talento",
      "usb-stock",
      "acerca",
      "fluxsalud",
      "glop-contadores",
      "colicontjal",
    ];
    expect(CONTENT.es.projects.items.map((p) => p.slug)).toEqual(slugs);
    expect(CONTENT.en.projects.items.map((p) => p.slug)).toEqual(slugs);
  });

  it("preserves the supplied USB Stock demonstration and repository destinations", () => {
    for (const lang of ["es", "en"] as const) {
      expect(getProject(lang, "usb-stock")?.links?.map((l) => l.href)).toEqual([
        "https://usbstock.efra.biz/",
        "https://github.com/ingefrain/usbstock",
      ]);
    }
  });

  it("does not offer the planned FluxSalud demo as an available link", () => {
    for (const lang of ["es", "en"] as const)
      expect(getProject(lang, "fluxsalud")?.links).toEqual([]);
  });

  it("retains the correct Grupo Talento corporate domains", () => {
    const domains = [
      "grupotalento.com.mx",
      "usbstock.mx",
      "usbpromocional.com.mx",
      "usbpromotional.com",
      "usbirdy.com",
      "publimarca.com.mx",
      "fastgate.com.mx",
      "promoestres.com",
    ];
    for (const lang of ["es", "en"] as const) {
      expect(getProject(lang, "grupo-talento")?.links?.map((l) => l.href)).toEqual(
        domains.map((d) => `https://${d}`),
      );
    }
  });

  it("uses the supplied accounting and association project destinations", () => {
    for (const lang of ["es", "en"] as const) {
      expect(getProject(lang, "glop-contadores")?.links?.map((l) => l.href)).toEqual([
        "https://glop.mx/",
      ]);
      expect(getProject(lang, "colicontjal")?.links?.map((l) => l.href)).toEqual([
        "https://colicontjal.org.mx/",
        "https://youtu.be/hYDTpx5ikcI",
      ]);
      expect(getProject(lang, "acerca")?.links?.map((l) => l.href)).toEqual([
        "https://acerca.efra.biz/",
        "https://acerca.mx/",
      ]);
    }
  });

  it("CV buttons download the uploaded PDF", () => {
    expect(CV_URL).toMatch(/\.pdf$/);
    expect(cvHref("es")).toBe(CV_URL);
    expect(cvHref("en")).toBe(CV_URL);
  });
});
