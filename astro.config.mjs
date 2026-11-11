import { defineConfig } from "astro/config";

// Hosted on GitHub Pages as a project site: https://diwakar-bhagat.github.io/Portfolio/
// (the account's Pages custom domain, if any, applies too, e.g. diwakarbhagat.me/Portfolio/).
//
// To move to your own domain later (e.g. diwakarbhagat.com):
//   1. set `site` to "https://diwakarbhagat.com"
//   2. delete the `base` line
//   3. add a file public/CNAME containing just: diwakarbhagat.com
//   4. point the domain's DNS at GitHub Pages (or Cloudflare Pages, see README)
export default defineConfig({
  site: "https://diwakar-bhagat.github.io",
  base: "/Portfolio",
  build: { inlineStylesheets: "always" },
});
