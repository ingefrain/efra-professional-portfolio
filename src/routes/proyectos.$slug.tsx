import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProjectPage } from "@/components/site/ProjectPage";
import { CONTENT, getProject, projectPath } from "@/content/site";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/proyectos/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    if (!getProject("es", params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params, loaderData }) => {
    const project = loaderData ? getProject("es", loaderData.slug) : undefined;
    if (!project)
      return {
        meta: [
          { title: CONTENT.es.errors.projectUnavailable },
          { name: "robots", content: "noindex" },
        ],
      };
    const title = `${project.name}: ${project.kicker} — EFRA`;
    return buildHead({
      lang: "es",
      title,
      description: project.description,
      path: projectPath("es", params.slug),
      altPath: projectPath("en", params.slug),
      type: "article",
    });
  },
  component: ProjectRoute,
});

function ProjectRoute() {
  const { slug } = Route.useLoaderData();
  const project = getProject("es", slug);
  if (!project) throw notFound();
  return <ProjectPage lang="es" project={project} />;
}
