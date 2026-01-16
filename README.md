<div align="center">
  <img alt="Webtrotion Cat" src="https://github.com/nerdymomocat-templates/webtrotion-astro-notion-cms-website-blog/assets/125716950/b8206c1e-7c27-46d5-b192-850699117c8b" width="70" />
</div>
<h1 align="center">
  Webtrotion
</h1>

<p align="center">
  <strong>A Notion-powered static site generator built with Astro</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#configuration">Configuration</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#license">License</a>
</p>

---

## About This Fork

This project is a fork of the original [Webtrotion](https://github.com/nerdymomocat-templates/webtrotion-astro-notion-cms-website-blog) created by [nerdymomocat](https://github.com/nerdymomocat-templates). Full credit goes to the original author for creating this excellent Notion-to-website solution.

**Original Repository:** [nerdymomocat-templates/webtrotion-astro-notion-cms-website-blog](https://github.com/nerdymomocat-templates/webtrotion-astro-notion-cms-website-blog)

If you find this project useful, please consider [supporting the original creator](https://ko-fi.com/nerdymomocat).

---

## What is Webtrotion?

Webtrotion transforms your Notion database into a fully-featured static website or blog. Write your content in Notion's familiar WYSIWYG editor, and Webtrotion handles the rest—generating a fast, SEO-friendly static site that can be hosted for free on GitHub Pages, Vercel, or Netlify.

### Why Notion + Astro?

- **Notion as CMS**: No need to learn a new content management system. Use Notion's powerful editor with blocks, databases, and collaboration features you already know.
- **Astro for Performance**: Static site generation means lightning-fast page loads and excellent SEO out of the box.
- **Free Hosting**: Deploy to GitHub Pages with zero cost, or use Vercel/Netlify for more advanced needs.
- **Single Configuration File**: One JSON file controls your entire site—colors, fonts, features, and more.

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
- **Pinned Posts** — Highlight important content at the top
- **Webmentions** — IndieWeb support via webmention.io
- **Wikipedia-style Popovers** — Preview links on hover
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
- `chirpy`: Chirpy comment widget (configured in code)

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

## Configuration

All site configuration lives in `constants-config.json`. Key options include:

| Option | Description |
|--------|-------------|
| `database-id` | Your Notion database ID |
| `author` | Author name for metadata |
| `socials` | Social media links (email, GitHub, Twitter, etc.) |
| `theme` | Light/dark mode color palettes |
| `webmention` | Webmention.io configuration |
| `menu-pages-collection` | Collection name for static pages vs blog posts |
| `number-of-posts-per-page` | Pagination setting |
| `enable-lightbox` | Click-to-expand images |
| `references` | Related content and backlink settings |

---

## Notion Database Properties

| Property | Purpose |
|----------|---------|
| `Page` | Title of the post/page |
| `Tags` | Post categorization |
| `Excerpt` | Description for SEO and RSS |
| `Collection` | Categorize as page or blog post |
| `Published` | Toggle to publish content |
| `FeaturedImage` | Image for Open Graph cards |
| `Specific Slug` | Custom URL slug |
| `Explicit Publish Date` | Override creation date |
| `Rank` | Order pages in navigation |
| `Pinned` | Pin post to top of listings |

> **Note**: Content is only published when `Published` is checked AND the publish date is in the past (or empty).

---

## Deployment

### GitHub Pages (Free)

1. Go to repository **Settings → Pages → Source** and select **GitHub Actions**
2. Add `NOTION_API_SECRET` to **Settings → Secrets → Actions**
3. Push to `main` branch or manually trigger the workflow

Your site will be live at `https://username.github.io/repo-name`

### Vercel

1. Import your repository on [Vercel](https://vercel.com)
2. Add `NOTION_API_SECRET` environment variable
3. Deploy

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

## Acknowledgements

This project builds upon the work of:

- [nerdymomocat](https://github.com/nerdymomocat-templates) — Original Webtrotion creator
- [Astro Cactus](https://github.com/chrismwilliams/astro-theme-cactus) — Theme foundation
- [astro-notion-blog](https://github.com/otoyo/astro-notion-blog) — Notion integration patterns

---

## License

MIT License — See [LICENSE](LICENSE) for details.

---

<p align="center">
  <sub>Built with <a href="https://astro.build/">Astro</a> and <a href="https://notion.so/">Notion</a></sub>
</p>
