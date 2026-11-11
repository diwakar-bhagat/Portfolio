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
7. Once you have a domain, set `site` in `astro.config.mjs`.
