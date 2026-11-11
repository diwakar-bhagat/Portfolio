// All the content of the home page lives here. Edit this file, not the page.
// Filled from the LinkedIn profile export (2026-11-11).

export const site = {
  name: "Diwakar Bhagat",
  focus:
    "AI engineer at ZenZebra. I build the layer between systems: the ERP, payment and automation plumbing that keeps a retail business running in real time.",
  githubUser: "diwakar-bhagat", // feeds the "# recent on github" section
  links: [
    { label: "github", href: "https://github.com/diwakar-bhagat" },
    { label: "linkedin", href: "https://www.linkedin.com/in/diwakarbhagat" },
    { label: "email", href: "mailto:diwakarkumarstudent@gmail.com" },
  ],
  updated: "2026-11-12",
};

export const building = {
  name: "ZenZebra retail stack",
  status: "live", // or "building"
  problem:
    "Four lifestyle stores inside offices, coworking floors and clubs across Noida and Gurugram, where every bill, payment and stock movement has to land in the right place the moment it happens. I own the layer that connects it all and lead a three-person team.",
  url: "https://www.zenzebra.in/",
  sites: [
    { label: "zenzebra.in", href: "https://www.zenzebra.in/" },
    { label: "shop.zenzebra.in", href: "https://shop.zenzebra.in/" },
  ],
  stack: ["odoo 19", "next.js", "neon postgres", "pine labs", "whatsapp webhooks"],
  side: {
    name: "Insee",
    text: "a trust-first platform helping visually impaired students in India find verified exam scribes.",
  },
};

export const shipped: { name: string; url?: string; what: string; proof: string }[] = [
  {
    name: "HireOX.AI",
    url: "https://hireox.in",
    what: "AI mock interviews that plan from your resume and JD, adapt to your answers, and score clarity, depth and tradeoffs.",
    proof: "~10 paying users · solo build, end to end",
  },
  {
    name: "Pine Labs × Odoo POS",
    url: "https://github.com/diwakar-bhagat/pinelabs",
    what: "Card and dynamic-QR payments at ZenZebra counters, with results written back into Odoo POS.",
    proof: "live in production",
  },
  {
    name: "Retail Operating Intelligence",
    what: "Founder dashboard on Odoo 19 data: revenue, AOV and units by store, brand, category and SKU.",
    proof: "built for ZenZebra's founders",
  },
  {
    name: "TA Apparels order tracker",
    // ctaapparels.vercel.app returned 404 on 2026-11-11; linking the repo until it's back.
    url: "https://github.com/diwakar-bhagat/CRM-FOR-APPAREL",
    what: "Order tracking and production coordination for an apparel manufacturer, with role-based access per ops team.",
    proof: "github.com/diwakar-bhagat/CRM-FOR-APPAREL",
  },
  {
    name: "Sync under load",
    what: "Reworked store-to-ERP sync around rate limits after shared API keys started hitting HTTP 429s mid-billing.",
    proof: "fixed in production",
  },
];
