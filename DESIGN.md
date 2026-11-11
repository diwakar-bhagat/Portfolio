# DESIGN.md

The design rules for this site. Any AI agent or human editing this repo reads this file first and follows it. If a change needs to break a rule, change the rule here first.

## 1. Intent

A builder's notebook, not a landing page. It should read like a clean README or an executive memo: who I am, what I'm building, what I've shipped, what I think. A visitor gets the whole picture in 15 seconds without clicking anything.

Not allowed: gradients, glassmorphism, hero illustrations, stock photos, animated headers, skill bars, "tech stack" logo walls, testimonials carousels, emoji as decoration.

## 2. Color

Two themes, chosen by the visitor's system setting. Never more colors than these.

| Token        | Light (cream)  | Dark (terminal) | Use                                  |
|--------------|----------------|-----------------|--------------------------------------|
| `--bg`       | `#F6F6EF`      | `#0C0D0E`       | Page background                      |
| `--fg`       | `#1A1A17`      | `#E6E6E1`       | Body text, headings                  |
| `--muted`    | `#6B6B63`      | `#8C8C86`       | Dates, metadata, secondary text      |
| `--rule`     | `#DCDCD2`      | `#24262A`       | Hairlines and dividers               |
| `--accent`   | `#C2410C`      | `#F28C4B`       | Links on hover, the status dot, one highlight per section at most |

Links are `--fg` with an underline in `--rule`; on hover the underline and text go `--accent`.

## 3. Typography

- One family: the system monospace stack. No web fonts are downloaded, which keeps the page instant.
  `ui-monospace, "SF Mono", "JetBrains Mono", "Geist Mono", Menlo, Consolas, "Liberation Mono", monospace`
- Sizes: body `15px`, small/meta `13px`, name `15px` bold. Headings are not bigger than body; hierarchy comes from weight, color and spacing, not size.
- Line height `1.65` for body, `1.4` for lists of metadata.
- Section labels are lowercase and muted, prefixed with `#` like a comment: `# shipped`.

## 4. Layout and spacing

- Single centered column, `max-width: 680px`, `padding: 0 20px`.
- Top padding `72px` on desktop, `40px` on phones.
- Spacing scale: `4, 8, 12, 16, 24, 40, 64` px. Sections are separated by `64px`.
- No sidebars, no grids of cards, no sticky nav. The page is one scroll.

## 5. Components

- **Header**: name, one-sentence current focus, a row of plain-text links (`github`, `x`, `email`, `cv`), separated by ` / `.
- **Now building**: one block. Project name, a status dot (`--accent`), one sentence on the problem, live link, stack written as plain text (`astro · cloudflare · postgres`).
- **Shipped list**: numbered `01`, `02`, `03` in `--muted`. Each row: name (link), one line on what it does, and one hard metric or proof (stars, users, MRR, PR merged). If there is no metric, show the raw URL instead. Never a vague adjective.
- **Writing list**: date (`YYYY-MM-DD`, muted) then title. Newest first.
- **Footer**: one muted line. Last updated date and where the site is hosted.
- **Article page**: same column, title, date, body. Code blocks use `--rule` background tint, no syntax-theme rainbow.

## 6. Motion

None, except link color transitions of `120ms`. Respect `prefers-reduced-motion` anyway.

## 7. Performance budget

- Total page weight under 100 KB, zero client JavaScript by default.
- CSS is inlined. No images above the fold. Any image must be under 80 KB and have width and height set.

## 8. Voice

First person, short sentences, concrete. Every claim points at an artifact: a URL, a repo, a PR, a number. "Built X in a weekend, 300 people use it" beats "passionate full-stack developer".

## 9. Accessibility

Contrast at least 4.5:1 for all text in both themes. Visible focus ring (`2px solid var(--accent)`). Semantic HTML: one `h1`, sections with `h2`, lists as `ol`/`ul`.
