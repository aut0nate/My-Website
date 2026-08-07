export type PortfolioApp = {
  name: string;
  kind: "iOS" | "Web";
  label: string;
  description: string;
  siteUrl: string;
  appStoreUrl?: string;
  githubUrl?: string;
  artwork: "yestera" | "prompts" | "gallery" | "collection";
  featured?: boolean;
};

export const yesteraAppStoreURL =
  "https://apps.apple.com/gb/app/yestera/id6794884597";

export const appsContent = {
  eyebrow: "Apps by Nathan Darker",
  title: "Apps",
  intro:
    "A collection of iOS and web apps I have designed and built, turning useful ideas into thoughtful, practical software.",
  items: [
    {
      name: "Yestera",
      kind: "iOS",
      label: "Private photo companion for iPhone",
      description:
        "Rediscover photographs and videos from this day across the years, in a calm experience built around your Photos library.",
      siteUrl: "/yestera/",
      appStoreUrl: yesteraAppStoreURL,
      artwork: "yestera",
      featured: true
    },
    {
      name: "Prompt Vault",
      kind: "Web",
      label: "Prompt library",
      description:
        "Save, organise and return to useful AI prompts without losing the context that made them work.",
      siteUrl: "https://prompts.autonate.dev/",
      githubUrl: "https://github.com/aut0nate/Prompt-Vault",
      artwork: "prompts"
    },
    {
      name: "AI Image Hub",
      kind: "Web",
      label: "Visual workspace",
      description:
        "A focused gallery and workspace for collecting AI-generated images and visual experiments.",
      siteUrl: "https://images.autonate.dev/",
      githubUrl: "https://github.com/aut0nate/AI-Art-Hub",
      artwork: "gallery"
    },
    {
      name: "The Collection",
      kind: "Web",
      label: "Curated directory",
      description:
        "A considered collection of useful links, resources and references, organised for easy discovery.",
      siteUrl: "https://collection.autonate.dev/",
      githubUrl: "https://github.com/aut0nate/The-Collection",
      artwork: "collection"
    }
  ] satisfies PortfolioApp[]
} as const;
