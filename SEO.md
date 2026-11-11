# SEO.md

How this site stays findable. Any agent or human changing the site reads this
file together with DESIGN.md. The checks below were researched against Google
Search Central documentation and applied on 2026-11-12.

## Why Google showed a globe icon and the old text

Two separate causes, both fixed at the source:

1. Google Search does not support SVG favicons. Its supported favicon formats
   are ICO, PNG, JPEG, GIF, BMP and TIFF. An SVG only favicon looks fine in a
   browser tab but Google falls back to the generic globe. The site now serves
   a raster favicon set generated from the LinkedIn profile photo.
2. Google had crawled the old Hostinger page and cached its title, snippet and
   icon. Until Google recrawls, search results keep showing the old text (the
   email address and phone number title came from the old page). A recrawl can
   be requested in Google Search Console, see Manual steps.

## Favicon rules (Google)

- Square, at least 8x8 px, and larger than 48x48 px recommended.
- Format must be one Google supports: ICO, PNG, JPEG, GIF, BMP, TIFF. Not SVG.
- Both the favicon file and the home page must be crawlable. Do not block them
  in robots.txt.
- The favicon URL must be stable. Do not rename the files casually.
- One favicon per hostname. www shares the apex icon set through the same head.

Files: `public/favicon.ico` (16 to 64 px), `public/favicon-192.png`,
`public/apple-touch-icon.png` (180x180), and `public/favicon.svg` kept for
browsers that prefer SVG. All are generated from the LinkedIn profile photo.

## What is implemented

- Unique title on the home page: name plus role, under 60 characters.
- A real meta description in `src/data/site.ts` (the `description` field),
  around 160 characters, used for search, Open Graph and Twitter cards.
- Canonical URL on every page, self referencing, built from `site` in
  `astro.config.mjs`. Keep that value set to https://diwakarbhagat.com.
- `robots` meta set to index, follow. `public/robots.txt` allows everything
  and points at the sitemap.
- `public/sitemap.xml` lists every indexable URL. Add new pages here when
  they ship, and update `lastmod`.
- Open Graph and Twitter card tags with a dedicated share image,
  `public/og.jpg` at 1200x630, generated from the profile photo and the site
  palette. LinkedIn and other platforms use it when the link is shared.
- JSON-LD structured data in the head: a Person entity (job title, employer,
  sameAs links to LinkedIn, GitHub and HireOX.AI) plus a WebSite entity.
- One h1 per page, semantic sections, descriptive link text, fast static
  HTML with no client JavaScript. These came with the template; keep them.

## Rules for future changes

- Titles: unique per page, 50 to 60 characters, the important words first.
- Descriptions: unique per page, 150 to 160 characters, written for a human
  scanning results, never a keyword list.
- Every new page gets a canonical, a description and an entry in the sitemap.
- Writing posts: fill the front matter title and description with real text,
  never the bracket placeholders, and add a BlogPosting JSON-LD block if the
  post layout grows one.
- Images: alt text that describes the image, width and height set, under
  80 KB unless it is the share image.
- Never block crawlers in robots.txt to fix a content problem. Fix the page.

## Manual steps only the site owner can do

- Verify the domain in Google Search Console (DNS TXT record on Cloudflare),
  then submit the sitemap and use URL Inspection to request indexing of the
  home page. This is the fastest way to get the new title, snippet and
  favicon picked up. Without it, Google recrawls on its own schedule and the
  old result can linger for days to weeks.
- After sharing the site on LinkedIn, the share image comes from og.jpg. If
  LinkedIn shows a stale preview later, its Post Inspector forces a rescrape.

## Generated assets note

`favicon.ico`, `favicon-192.png`, `apple-touch-icon.png` and `og.jpg` are
binary files generated from the LinkedIn profile photo. They live in
`public/` and must be committed with a normal git client, because API based
pushes to this repo only carry text files. The photo source itself is the
base64 image embedded in `public/favicon.svg`.
