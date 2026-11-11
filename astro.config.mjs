import { defineConfig } from "astro/config";

// Set `site` to your real domain once you have one (e.g. https://yourname.dev).
export default defineConfig({
  site: "https://example.com",
  build: { inlineStylesheets: "always" },
});
