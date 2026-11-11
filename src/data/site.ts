// All the content of the home page lives here. Edit this file, not the page.
// Anything in [brackets] is a placeholder waiting for real details.

export const site = {
  name: "Diwakar Bhagat",
  focus: "[One sentence on what you're building right now and for whom.]",
  githubUser: "diwakar-bhagat", // feeds the "# recent on github" section
  links: [
    { label: "github", href: "https://github.com/diwakar-bhagat" },
    { label: "x", href: "https://x.com/[handle]" },
    { label: "email", href: "mailto:[you@example.com]" },
  ],
  updated: "2026-11-11",
};

export const building = {
  name: "[Flagship project]",
  status: "live", // or "building"
  problem: "[One sentence: the problem it solves and who has it.]",
  url: "https://[project-url]",
  stack: ["[astro]", "[cloudflare]", "[postgres]"],
};

export const shipped: { name: string; url: string; what: string; proof: string }[] = [
  {
    name: "[Project one]",
    url: "https://[url]",
    what: "[What it does in one line.]",
    proof: "[a number: users / stars / MRR / merged PR]",
  },
  {
    name: "[Project two]",
    url: "https://[url]",
    what: "[What it does in one line.]",
    proof: "[a number or the raw URL]",
  },
  {
    name: "[Project three]",
    url: "https://[url]",
    what: "[What it does in one line.]",
    proof: "[a number or the raw URL]",
  },
];
