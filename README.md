# Portfolio

Source for [rogerantonell.com](https://www.rogerantonell.com), my personal site.

Built with [Astro](https://astro.build). The page is rendered to static HTML at build time and ships a few lines of JavaScript for the pointer highlight.

## Development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

| Command           | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Build the site to `dist/`                |
| `npm run preview` | Serve the production build locally       |
| `npm run check`   | Type-check Astro and TypeScript files    |

## Structure

```
public/            Static files copied as-is (favicon, social image, CNAME)
src/
  components/      Page sections and reusable pieces
  data/resume.ts   All page content, typed
  layouts/         HTML shell, metadata, pointer highlight script
  lib/             Small helpers
  pages/           Routes
  styles/          Design tokens and base styles
```

To update the content, edit `src/data/resume.ts`.

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages through `.github/workflows/deploy.yml`.

## License

The code is available under the [MIT License](LICENSE). The content of the page (text and personal information) is not covered by it.
