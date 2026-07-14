export const siteContent = {
  name: "Nathan Darker",
  avatar: {
    src: "/images/ndweb.png",
    alt: "Portrait avatar for Nathan Darker"
  },
  homeIntro:
    "👋🏻 Hi, I’m Nathan, a UK-based technical professional working in DevOps environments, with a focus on cloud-native systems, Linux, Docker, Kubernetes and AI.",
  links: [
    {
      label: "Projects",
      href: "/projects",
      ariaLabel: "View Nathan Darker's agentic coding projects",
      icon: "projects"
    },
    {
      label: "Blog",
      href: "https://blog.nathandarker.it",
      ariaLabel: "Visit Nathan Darker's blog",
      icon: "rss"
    },
    {
      label: "GitHub",
      href: "https://github.com/aut0nate",
      ariaLabel: "Visit Nathan Darker's GitHub profile",
      icon: "github"
    },
    {
      label: "X",
      href: "https://x.com/aut0nate",
      ariaLabel: "Visit Nathan Darker's X profile",
      icon: "x"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nathandarker/",
      ariaLabel: "Visit Nathan Darker's LinkedIn profile",
      icon: "linkedin"
    }
  ],
  about: {
    paragraphs: [
      "👋🏻 Hi, I’m Nathan, a UK-based technical professional working in DevOps environments, supporting development and operations teams with a practical, systems-focused approach.",
      "My work focuses on how systems are built, configured, and run in practice, with an emphasis on reliability, simplicity, and maintainability. I am particularly comfortable working in Linux environments and prefer operating at the command line to configure systems, troubleshoot issues, and build reusable workflows.",
      "My cloud experience is centred on Microsoft Azure, where I have managed and supported infrastructure, identity management, and application environments. I also work with Docker and Kubernetes to package, deploy, and operate containerised applications.",
      "I have a strong interest in AI, particularly how large language models work and how they can be applied in real-world workflows. I keep up to date with developments in the field and explore how these technologies can support practical problem-solving, productivity, and learning.",
      "I actively use agentic AI tools to learn new skills, develop as a DevOps engineer, and turn ideas into practical applications for both personal and professional use. For me, their value goes beyond generating answers. I see AI as a thought partner rather than a replacement for human thought. I use it to plan, experiment, troubleshoot, and build a deeper understanding of the concepts I am working with. I enjoy learning, and AI makes that process more focused and efficient.",
      "I place strong emphasis on documentation and knowledge management, creating clear, structured resources that are practical, reusable, and useful to others.",
      "Outside of technology, I have a strong interest in football, photography, history, and travel."
    ],
    interests: []
  },
  projects: {
    intro:
      "A showcase of apps and tools I have built using agentic coding tools, self hosted on my VPS via Docker.",
    items: [
      {
        name: "Prompt Vault",
        description:
          "A practical prompt library for saving, organising, and reusing AI prompts.",
        siteUrl: "https://prompts.autonate.dev/",
        githubUrl: "https://github.com/aut0nate/Prompt-Vault"
      },
      {
        name: "AI Art Hub",
        description:
          "A gallery and workspace for AI-generated images and visual experiments.",
        siteUrl: "https://images.autonate.dev/",
        githubUrl: "https://github.com/aut0nate/AI-Art-Hub"
      },
      {
        name: "The Collection",
        description:
          "A curated collection of useful links, resources, and references.",
        siteUrl: "https://collection.autonate.dev/",
        githubUrl: "https://github.com/aut0nate/The-Collection"
      }
    ]
  },
  footer: "© nathandarker.it. All rights reserved."
} as const;
