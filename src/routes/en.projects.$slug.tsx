import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProjectPage } from "@/components/site/ProjectPage";
import { CONTENT, getProject, projectPath } from "@/content/site";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/en/projects/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    if (!getProject("en", params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params, loaderData }) => {
    const project = loaderData ? getProject("en", loaderData.slug) : undefined;
    if (!project)
      return {
        meta: [
          { title: CONTENT.en.errors.projectUnavailable },
          { name: "robots", content: "noindex" },
        ],
      };
    const title = `${project.name}: ${project.kicker} — EFRA`;
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
  const project = getProject("en", slug);
  if (!project) throw notFound();
  return <ProjectPage lang="en" project={project} />;
}
