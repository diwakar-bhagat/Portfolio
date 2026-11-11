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

## Deploy (Cloudflare Pages)

1. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, pick `diwakar-bhagat/Portfolio`.
2. Production branch: `main` (use `portfolio-site` until that PR is merged).
3. Framework preset **Astro**, build command `npm run build`, output directory `dist`.
4. Environment variable `NODE_VERSION` = `22`. Optional: `GITHUB_TOKEN` (a read-only token) to avoid GitHub API rate limits.
5. Save and deploy. Every push to the production branch redeploys.
6. Daily refresh of the "recent on github" section: in the Pages project go to **Settings → Builds → Deploy hooks**, create a hook, copy its URL, and add it to the GitHub repo as secret `CLOUDFLARE_DEPLOY_HOOK` (**Settings → Secrets and variables → Actions → New repository secret**). `.github/workflows/daily-rebuild.yml` calls it every day at 03:00 UTC; you can also run it by hand from the Actions tab.
7. Custom domain (`site` in `astro.config.mjs` is already `https://diwakarbhagat.com`): in the Pages project open **Custom domains → Set up a custom domain**, enter `diwakarbhagat.com`, then add `www.diwakarbhagat.com` too and redirect it to the apex (**Rules → Redirect Rules**, or a Bulk Redirect `www.diwakarbhagat.com/*` → `https://diwakarbhagat.com/$1`, 301).
   - DNS already on Cloudflare: Cloudflare creates the records for you; it's one click.
   - DNS at another registrar: either move the domain's nameservers to Cloudflare (add the site under **Websites**, then change nameservers at the registrar), or keep the registrar's DNS and add a `CNAME` for `www` pointing to `<project>.pages.dev`. The apex (`diwakarbhagat.com`) needs CNAME flattening or ALIAS support at the registrar; most don't have it, so moving nameservers is the simpler route.
