import { defineConfig } from "astro/config";

// Canonical domain (used for absolute URLs, sitemap, og tags).
export default defineConfig({
  site: "https://diwakarbhagat.com",
  build: { inlineStylesheets: "always" },
});
