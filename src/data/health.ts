// Live checks, run once at build time (no client JavaScript).
// Each shipped URL is requested during the build; the result is printed next to
// the claim, so "live" on the page is something the build actually verified.
// The daily rebuild keeps the check date fresh. A failed or slow check never
// breaks the build: the row simply shows no check.

export type Check = { ok: boolean; status: number; ms: number; host: string };

const cache = new Map<string, Promise<Check | null>>();

async function run(url: string): Promise<Check | null> {
  const started = Date.now();
  try {
    const res = await fetch(url, {
      method: "GET",
      redirect: "follow",
      headers: { "User-Agent": "portfolio-build-healthcheck" },
      signal: AbortSignal.timeout(8000),
    });
    return {
      ok: res.ok,
      status: res.status,
      ms: Date.now() - started,
      host: new URL(url).host,
    };
  } catch (err) {
    console.warn(`[health] no check for ${url}: ${(err as Error).message}`);
    return null;
  }
}

export function check(url: string): Promise<Check | null> {
  if (!cache.has(url)) cache.set(url, run(url));
  return cache.get(url)!;
}

// Only sites I run get checked. A GitHub profile being up proves nothing.
export const checkable = (url?: string) =>
  !!url && !/^https:\/\/(www\.)?github\.com\//.test(url);

export const checkedOn = new Date().toISOString().slice(0, 10);
