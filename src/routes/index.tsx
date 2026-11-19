import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { CONTACT, CONTENT, PERSON_NAME, SITE_URL } from "@/content/site";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () =>
    buildHead({
      lang: "es",
      title: CONTENT.es.meta.title,
      description: CONTENT.es.meta.description,
      path: "/",
      altPath: "/en",
      type: "profile",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Person",
        name: PERSON_NAME,
        alternateName: "Efra",
        jobTitle: "Senior Software Engineer",
        url: SITE_URL,
        email: `mailto:${CONTACT.email}`,
        sameAs: [CONTACT.linkedin, CONTACT.github],
        knowsLanguage: ["es", "en", "ru"],
      },
    }),
  component: () => <HomePage lang="es" />,
});
