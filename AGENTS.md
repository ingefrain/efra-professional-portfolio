<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules

- All site copy (ES and EN) and project data live in `src/content/site.ts`; components read from `CONTENT[lang]` so both languages stay in sync.
- Spanish pages live at `/` and `/proyectos/$slug`, English at `/en` and `/en/projects/$slug`; each route wraps a shared page component from `src/components/site/` with a `lang` prop, so layouts are never duplicated per language.
- Page head tags are built with `buildHead()` in `src/lib/seo.ts` (canonical + hreflang on the public domain), so every route emits consistent SEO metadata.
- `/sitemap.xml` is router-derived (`src/lib/sitemap.ts`); every route declares `staticData.sitemap`, and project URLs come from `PROJECT_SLUGS`.
- Binary media (photo, CV PDF) are CDN assets referenced through `.asset.json` pointers in `src/assets/`, keeping the repo light.
- Project case studies use optional structured sections, links and screenshot entries in the bilingual content module; shared presentation renders only supplied data so missing images never create placeholders.
