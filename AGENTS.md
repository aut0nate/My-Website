# Nathan Darker Personal Site

## Project overview
- Personal website for `nathandarker.it`
- Built as a fast, lightweight Next.js site with a landing page and an About page
- Designed for local development first, then static deployment to Cloudflare Pages

## Tools, languages, and frameworks
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Cloudflare Pages for hosting

## Local development commands
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run lint`

## Project structure
- `app/` route files and global styles
- `components/` reusable UI sections
- `content/site-content.ts` editable copy and link data
- `public/` static assets

## Code style guidelines
- Use TypeScript throughout
- Keep components small and composable
- Store editable site text in `content/site-content.ts`
- Use British English for user-facing copy, comments, and documentation
- Prefer simple, readable solutions over abstraction-heavy patterns

## Testing instructions
- Run `npm run lint`
- Run `npm run build`
- Check both `/` and `/about` locally in desktop and mobile sizes
- Verify internal navigation and external links

## Security considerations
- Never commit secrets
- Use environment variables for deployment settings
- Keep `.env` files out of version control
- Do not hardcode credentials, tokens, or private keys

## Deployment notes
- Local development uses the Next.js dev server
- Production uses a static Next.js export generated in `out/`
- Cloudflare Pages should use `npm run build` as the build command
- Cloudflare Pages should use `out` as the build output directory
- Manage `nathandarker.it` through Cloudflare DNS and the Cloudflare Pages custom domain settings

## Constraints and project rules
- Keep the UI fast and visually restrained
- Maintain the dark glass-inspired design language
- Do not add a backend or contact form unless requested
- Treat blog and social destinations as external links in v1
