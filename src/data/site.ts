// All the content of the home page lives here. Edit this file, not the page.

export const site = {
  name: "Diwakar Bhagat",
  description:
    "AI Engineer at ZenZebra. Diwakar Bhagat took Pine Labs payments live on Odoo 19 POS, built a Pine Labs MCP, and founded HireOX.AI, an AI mock interview platform.",
  focus:
    "AI Engineer at ZenZebra. I build AI native systems that keep D2C retail running, and I took Pine Labs payments live in production on Odoo 19 POS.",
  links: [
    { label: "github", href: "https://github.com/diwakar-bhagat" },
    { label: "linkedin", href: "https://www.linkedin.com/in/diwakarbhagat" },
    { label: "email", href: "mailto:diwakarbhagat.pro@gmail.com" },
  ],
  updated: "2026-11-12",
};

export const building = {
  name: "HireOX.AI",
  status: "live", // or "building"
  problem:
    "People prepare for interviews alone and freeze when it counts. HireOX gives them AI mock interviews with structured scoring on every answer, so practice feels like the real thing.",
  url: "https://hireox.in",
  stack: ["react", "node.js", "postgres", "openrouter"],
};

export const shipped: { name: string; url: string; what: string; proof: string }[] = [
  {
    name: "ZenZebra payments",
    url: "https://zenzebra.in",
    what: "Pine Labs payments on Odoo 19 POS: terminal and dynamic QR flows, with results written straight back into the POS.",
    proof: "live in production stores",
  },
  {
    name: "Pine Labs MCP",
    url: "https://github.com/diwakar-bhagat",
    what: "An MCP server that brings Pine Labs payment workflows to AI agents.",
    proof: "built and in use",
  },
  {
    name: "ZenZebra D2C shop",
    url: "https://shop.zenzebra.in",
    what: "The direct to consumer storefront for ZenZebra, built and run end to end alongside a retail intelligence dashboard on live Odoo data.",
    proof: "live",
  },
];
