// /llms.txt: the same content as the home page, as plain markdown for AI agents.
// Generated from src/data/site.ts so it can never drift from the page.
import type { APIRoute } from "astro";
import { site, building, shipped } from "../data/site";
import { check, checkable, checkedOn } from "../data/health";

export const GET: APIRoute = async ({ site: origin }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const home = origin ? new URL(base + "/", origin).href : base + "/";

  const live = async (url?: string) => {
    if (!checkable(url)) return "";
    const c = await check(url!);
    return c ? ` (checked ${checkedOn}: HTTP ${c.status})` : "";
  };

  const posts = Object.values(import.meta.glob("./writing/*.md", { eager: true }))
    .map((p: any) => ({ ...p.frontmatter, url: p.url }))
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.focus}`,
    "",
    `Site: ${home}`,
    `Last updated: ${site.updated}`,
    "",
    "## Now building",
    "",
    `- [${building.name}](${building.url}) (${building.status})${await live(building.url)}: ${building.problem} Stack: ${building.stack.join(", ")}.`,
    "",
    "## Shipped",
    "",
    ...(await Promise.all(
      shipped.map(
        async (p) =>
          `- ${p.url ? `[${p.name}](${p.url})` : p.name}: ${p.what} Proof: ${p.proof}${await live(p.url)}.`,
      ),
    )),
    "",
    ...(posts.length
      ? ["## Writing", "", ...posts.map((p) => `- [${p.title}](${new URL(p.url, home).href}) (${p.date})`), ""]
      : []),
    "## Contact",
    "",
    ...site.links.map(
      (l) =>
        `- ${l.label}: ${l.href.startsWith("mailto:") ? l.href.slice(7) : l.href.startsWith("/") && origin ? new URL(l.href, origin).href : l.href}`,
    ),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
