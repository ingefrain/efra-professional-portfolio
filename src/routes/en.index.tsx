import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { CONTACT, CONTENT, PERSON_NAME, SITE_URL } from "@/content/site";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/en/")({
  staticData: { sitemap: true },
  head: () =>
    buildHead({
      lang: "en",
      title: CONTENT.en.meta.title,
      description: CONTENT.en.meta.description,
      path: "/en",
      altPath: "/",
      type: "profile",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Person",
        name: PERSON_NAME,
        alternateName: "Efra",
        jobTitle: "Senior Software Engineer",
        url: `${SITE_URL}/en`,
        email: `mailto:${CONTACT.email}`,
        sameAs: [CONTACT.linkedin, CONTACT.github],
        knowsLanguage: ["es", "en", "ru"],
      },
    }),
  component: () => <HomePage lang="en" />,
});
