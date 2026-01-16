<div align="center">
  <img alt="Codeless Logo" src="https://codelessblog.vercel.app/notion/62855f68-a53e-4ff1-ae33-2011b5a41035/Big_Logo-removebg-preview.png" width="150" />
</div>
<h1 align="center">
  Codeless
</h1>

<p align="center">
  <strong>Your go-to resource for no-code tools, platforms, and technologies</strong>
</p>

<p align="center">
  <a href="https://codelessblog.vercel.app/">Live Site</a> •
  <a href="https://codelessblog.vercel.app/about-us">About</a> •
  <a href="#features">Features</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#license">License</a>
</p>

---

## About Codeless

**Codeless** is a comprehensive resource dedicated to no-code tools, platforms, and technologies. We aim to empower individuals and businesses by demystifying the rapidly growing field of no-code development.

We believe that **anyone can create, innovate, and bring their ideas to life—no coding experience required.**

### What We Offer

- In-depth reviews of no-code tools and platforms
- Comprehensive guides and tutorials
- Latest news and updates in the no-code ecosystem
- Step-by-step instructions for building, automating, and innovating without code

**Built by [@serverl0rd](https://serverlord.in) ([Atharva Kulkarni](https://atharvakulkarni.link))**

---

## Tech Stack

This site is powered by [Webtrotion](https://github.com/nerdymomocat-templates/webtrotion-astro-notion-cms-website-blog) — a Notion-powered static site generator built with Astro. Content is managed in Notion and automatically rendered as a fast, SEO-friendly static site.

### Why Notion + Astro?

- **Notion as CMS**: Use Notion's powerful WYSIWYG editor with blocks, databases, and collaboration features
- **Astro for Performance**: Static site generation means lightning-fast page loads and excellent SEO
- **Free Hosting**: Deployed on Vercel with zero cost
- **Single Configuration File**: One JSON file controls the entire site

---

## Features

- **Full Notion Block Support** — 27+ block types including headings, lists, images, code blocks, callouts, tables, toggles, embeds, and more
- **Blog & Pages** — Create both blog posts and static pages from the same Notion database
- **Dark/Light Mode** — Automatic theme switching with customizable color palettes
- **Static Search** — Built-in search powered by [Pagefind](https://pagefind.app/)
- **SEO Optimized** — Auto-generated sitemaps, RSS feeds, and Open Graph images
- **Comments** — [Chirpy](https://chirpy.dev/) comment widget integration
- **Syntax Highlighting** — Code blocks with Shiki transformers
- **Math & Diagrams** — KaTeX for equations, Mermaid for diagrams
- **Related Content** — Automatic backlinks and related posts
- **Responsive Design** — Mobile-first with TailwindCSS

---

## Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- A Notion account

### 1. Notion Setup

1. Duplicate the [Webtrotion database template](https://nerdymomocat.notion.site/169b6e632b7448529120599281265ac5?v=2281c7ec6d3b4ac0961770ae696d4141) to your Notion workspace
2. Create a [Notion integration](https://developers.notion.com/docs/create-a-notion-integration#create-your-integration-in-notion) and copy your API secret
3. Share the duplicated database with your integration
4. Copy your database ID from the URL (the 32-character string after your workspace name)

### 2. Repository Setup

1. Fork or clone this repository
2. Copy your Notion API secret and database ID
3. Create a `.env` file (for local development):
   ```bash
   NOTION_API_SECRET=your_secret_here
   DATABASE_ID=your_database_id_here
   ```

### 3. Configuration

Edit `constants-config.json` to customize your site:
- `database-id`: Your Notion database ID
- `author`: Your name (used in metadata and OG images)
- `socials`: Your social media links
- `theme`: Light and dark mode colors

### 4. Local Development

```bash
# Install dependencies
pnpm install

# Build once (downloads icons and assets)
pnpm build

# Start development server
pnpm dev
```

Your site will be available at `http://localhost:4321`

---

## Deployment

### Vercel (Recommended)

1. Import your repository on [Vercel](https://vercel.com)
2. Add `NOTION_API_SECRET` environment variable
3. Deploy

### GitHub Pages

1. Go to repository **Settings → Pages → Source** and select **GitHub Actions**
2. Add `NOTION_API_SECRET` to **Settings → Secrets → Actions**
3. Push to `main` branch or manually trigger the workflow

### Netlify

1. Import your repository on [Netlify](https://netlify.com)
2. Add `NOTION_API_SECRET` environment variable
3. Set build command to `pnpm build`
4. Deploy

---

## Development Commands

```bash
pnpm dev          # Start dev server (localhost:4321)
pnpm build        # Production build
pnpm build:cached # Build with API caching (faster rebuilds)
pnpm preview      # Preview production build
pnpm format       # Format code with Prettier
pnpm check        # TypeScript type checking
```

---

## License

MIT License — See [LICENSE](LICENSE) for details.

---

<p align="center">
  <sub>
    Powered by <a href="https://github.com/nerdymomocat-templates/webtrotion-astro-notion-cms-website-blog">Webtrotion</a>
    · Created by <a href="https://github.com/nerdymomocat-templates">nerdymomocat</a>
    · Built with <a href="https://astro.build/">Astro</a> and <a href="https://notion.so/">Notion</a>
  </sub>
</p>
<p align="center">
  <sub>
    <a href="https://ko-fi.com/nerdymomocat">Support the original Webtrotion creator</a>
  </sub>
</p>
