# My Website

## Introduction

Welcome to `nathandarker.it` - my personal website and central profile, hosted on Cloudflare Pages.

This site serves as a simple, fast hub for my digital footprint. It provides a direct route to my blog, GitHub, and professional work - linking everything I do into one maintainable home.

## Purpose

This website exists to:

- Introduce who I am and what I work on.
- Provide a central route to my blog, projects, and professional links.
- Present my background in a clear, structured way.
- Keep my public web presence simple, fast, and easy to maintain.
- Act as the front door for future personal tools, writing, and project showcases.

The focus is on clarity, usefulness, and a lightweight experience rather than unnecessary complexity.

## Stack

- Next.js 14 with App Router
- React 18
- TypeScript
- Tailwind CSS
- Cloudflare Pages

## Test Locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the local site:

   ```text
   http://127.0.0.1:3000
   ```

4. Build the static production output:

   ```bash
   npm run build
   ```

5. Run linting:

   ```bash
   npm run lint
   ```

Manual checks:

- Check `/` and `/about` on desktop and mobile widths.
- Verify internal navigation works.
- Verify external links open the correct destinations.

## Deployment

This site is deployed as a static Next.js export on Cloudflare Pages.

Use these Cloudflare Pages settings:

- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npm run build`
- Build output directory: `out`
- Deploy command: leave blank
- Root directory: repository root

Do not use `npx wrangler deploy` for this project. That command deploys through the Workers flow and expects Cloudflare to auto-configure a server-rendered Next.js Worker from `.next`. This site exports static files to `out`, so Cloudflare Pages should deploy the `out` directory directly.

After the first successful deployment, connect `nathandarker.it` as a custom domain in Cloudflare Pages. Because the domain DNS is already managed in Cloudflare, Cloudflare can create or update the required DNS records from the Pages custom domain flow.

If future features need secrets or deployment-specific values, store them as Cloudflare Pages environment variables rather than committing them to the repository.

## AI-Assisted Development

My website was built with AI-assisted development. This repository includes an [`AGENTS.md`](./AGENTS.md) file, which provides structured instructions and context for AI coding agents. It defines expectations, constraints, and project-specific guidance to help keep contributions consistent and reliable.

## Contributions

Contributions, ideas, and suggestions are welcome.

If you have improvements, feature ideas, or bug fixes, feel free to open an issue or submit a pull request. All contributions are appreciated and help improve the project.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
