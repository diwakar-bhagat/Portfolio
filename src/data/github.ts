// Recent public repos, fetched once at build time (no client JavaScript).
// The daily rebuild in .github/workflows/daily-rebuild.yml keeps this fresh.
// Any error returns [] so a GitHub outage never breaks the build.
import { site } from "./site";

export type Repo = {
  name: string;
  url: string;
  description: string | null;
  stars: number;
  pushed: string; // YYYY-MM-DD
};

export async function recentRepos(limit = 6): Promise<Repo[]> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "portfolio-build",
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const res = await fetch(
      `https://api.github.com/users/${site.githubUser}/repos?sort=pushed&per_page=${limit + 10}`,
      { headers },
    );
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const data: any[] = await res.json();
    return data
      .filter((r) => !r.fork && !r.archived)
      .slice(0, limit)
      .map((r) => ({
        name: r.name,
        url: r.html_url,
        description: r.description,
        stars: r.stargazers_count ?? 0,
        pushed: String(r.pushed_at).slice(0, 10),
      }));
  } catch (err) {
    console.warn(`[github] skipping recent repos: ${(err as Error).message}`);
    return [];
  }
}
