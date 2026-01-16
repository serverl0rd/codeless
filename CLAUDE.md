# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Webtrotion is a Notion-powered static blog/website generator built with Astro and TypeScript. Content is managed in a Notion database and rendered as a static site deployed to Vercel.

## Development Commands

```bash
# Development
pnpm dev                    # Start dev server at localhost:4321
pnpm build                  # Production build to dist/
pnpm build:cached           # Build with Notion API response caching (faster rebuilds)
pnpm preview                # Preview production build locally

# Code Quality
pnpm format                 # Format code with Prettier
pnpm check                  # Run Astro TypeScript checks
```

## Architecture

### Data Flow
1. **Notion API** → Fetches posts/pages from configured database
2. **Block Processing** → Parses 27+ Notion block types into component props
3. **Astro Rendering** → Static HTML generation via layouts and components
4. **Deployment** → Static files to Vercel/GitHub Pages

### Key Directories

- `src/pages/` - Astro route pages including dynamic `[...page].astro` catch-all
- `src/components/notion-blocks/` - Individual renderers for each Notion block type
- `src/lib/notion/` - Notion API client wrapper with caching (`client.ts`)
- `src/lib/blog-helpers.ts` - Core blog utility functions
- `src/utils/slugify.ts` - URL slug generation logic
- `src/integrations/` - Custom Astro plugins (caching, theming, icon downloading)

### Configuration

**`constants-config.json`** is the single source of truth for site configuration:
- Database ID and author info
- Theme colors (light/dark mode mapped to Notion palette)
- Social links, comments (Chirpy), webmentions
- Feature flags (pinned posts, lightbox, related content)

**Environment Variables** (required for build):
- `NOTION_API_SECRET` - Notion integration token
- `DATABASE_ID` - Optional override for Notion database

### TypeScript Paths

Path aliases are configured in `tsconfig.json`:
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/utils` → `src/utils`

### Notion Block Components

Block renderers in `src/components/notion-blocks/` follow the pattern `Block{Type}.astro`. The main orchestrator is `src/components/NotionBlocks.astro` which delegates to specific block components.

## Testing

Test changes using Puppeteer before claiming completion.
