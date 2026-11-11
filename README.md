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

## Deploy

Cloudflare Pages or Vercel, framework preset "Astro", build command `npm run build`, output `dist`. Then set `site` in `astro.config.mjs` to your domain.
