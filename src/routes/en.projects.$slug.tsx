import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProjectPage } from "@/components/site/ProjectPage";
import { getProject, projectPath } from "@/content/site";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/en/projects/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    if (!getProject("en", params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params, loaderData }) => {
    const project = loaderData ? getProject("en", loaderData.slug) : undefined;
    if (!project) return { meta: [{ title: "Project unavailable — EFRAN" }, { name: "robots", content: "noindex" }] };
    const title = `${project.name}: ${project.kicker} — Efraín González`;
    return buildHead({
      lang: "en",
      title,
      description: project.description,
      path: projectPath("en", params.slug),
      altPath: projectPath("es", params.slug),
      type: "article",
    });
  },
  component: ProjectRoute,
});

function ProjectRoute() {
  const { slug } = Route.useLoaderData();
  return <ProjectPage lang="en" project={getProject("en", slug)!} />;
}
