import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import { PROJECT_SLUGS, SITE_URL } from "@/content/site";
import {
  isSitemapRouteIncluded,
  sitemapPathForLocation,
  sitemapStaticPaths,
  sitemapXML,
  type SitemapEntry,
} from "@/lib/sitemap";

const BASE_URL = SITE_URL;

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path }));

        // Project detail pages come from the local project list, in both languages.
        const projectRoutes = [
          { routeId: "/proyectos/$slug", to: "/proyectos/$slug" },
          { routeId: "/en/projects/$slug", to: "/en/projects/$slug" },
        ] as const;
        for (const { routeId, to } of projectRoutes) {
          if (!isSitemapRouteIncluded(router.routesById[routeId])) continue;
          for (const slug of PROJECT_SLUGS) {
            const location = router.buildLocation({ to, params: { slug }, search: () => ({}), hash: "" });
            const path = sitemapPathForLocation(router, location, routeId);
            if (path) entries.push({ path });
          }
        }

        if (entries.length === 0) {
          return new Response("No pages are included in this sitemap.", {
            status: 404,
            headers: { "Cache-Control": "no-store" },
          });
        }
        return new Response(sitemapXML(BASE_URL, entries), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
