# portfolio

A personal site in the "hacker minimalist" style: one narrow column, system monospace, cream or terminal-dark theme, zero client JavaScript. Built with [Astro](https://astro.build).

Design rules live in [`DESIGN.md`](./DESIGN.md). Read it before changing anything visual, and point your AI agent at it too.

## Edit content

- Home page text: `src/data/site.ts` (everything in `[brackets]` is a placeholder).
- Writing: add a `.md` file in `src/pages/writing/`.

## Run

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Deploy (GitHub Pages)

Live at **https://diwakar-bhagat.github.io/Portfolio/** (if the account has a Pages custom domain, GitHub serves it there instead, e.g. `diwakarbhagat.me/Portfolio/`).

1. Merge into `main`. `.github/workflows/deploy.yml` builds and deploys on every push to `main`, once a day at 03:00 UTC (so "recent on github" stays fresh), and on demand from the Actions tab.
2. One-time: repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Internal links must stay base-aware (`import.meta.env.BASE_URL`), because the site lives under `/Portfolio/`.

## Optional later: Cloudflare Pages + diwakarbhagat.com

First follow the "switch to your own domain" comment in `astro.config.mjs` (set `site`, remove `base`). Then:

1. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, pick `diwakar-bhagat/Portfolio`.
2. Production branch: `main` (use `portfolio-site` until that PR is merged).
3. Framework preset **Astro**, build command `npm run build`, output directory `dist`.
4. Environment variable `NODE_VERSION` = `22`. Optional: `GITHUB_TOKEN` (a read-only token) to avoid GitHub API rate limits.
5. Save and deploy. Every push to the production branch redeploys.
6. Daily refresh: create a deploy hook in the Pages project (**Settings → Builds → Deploy hooks**) and call it from a scheduled GitHub workflow (`curl -X POST <hook URL>`, URL stored as a repo secret).
7. Custom domain: in the Pages project open **Custom domains → Set up a custom domain**, enter `diwakarbhagat.com`, then add `www.diwakarbhagat.com` too and redirect it to the apex (**Rules → Redirect Rules**, or a Bulk Redirect `www.diwakarbhagat.com/*` → `https://diwakarbhagat.com/$1`, 301).
   - DNS already on Cloudflare: Cloudflare creates the records for you; it's one click.
   - DNS at another registrar: either move the domain's nameservers to Cloudflare (add the site under **Websites**, then change nameservers at the registrar), or keep the registrar's DNS and add a `CNAME` for `www` pointing to `<project>.pages.dev`. The apex (`diwakarbhagat.com`) needs CNAME flattening or ALIAS support at the registrar; most don't have it, so moving nameservers is the simpler route.
