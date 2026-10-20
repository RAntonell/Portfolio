# Portfolio

Source for [rogerantonell.com](https://www.rogerantonell.com), my personal site.

Built with [Astro](https://astro.build). Every page is rendered to static HTML at build time. It ships no JavaScript and one self-hosted font file, and follows the system light or dark theme.

## Development

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

| Command           | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Type-check, then build the site to `dist/` |
| `npm run preview` | Serve the production build locally       |
| `npm run check`   | Type-check Astro and TypeScript files    |

## Structure

```
public/            Static files copied as-is (favicon, social image, CNAME)
src/
  assets/fonts/    Geist font files for the social preview images
  assets/work/     Case study images, optimized at build time
  components/      Page sections and reusable pieces
  content/work/    Case studies, one Markdown or MDX file each
  data/resume.ts   Résumé content, typed
  layouts/         HTML shell and metadata
  lib/             Small helpers
  pages/           Routes
  styles/          Design tokens and base styles
```

To update the résumé, edit `src/data/resume.ts`.

## Case studies

Each `.md` or `.mdx` file in `src/content/work/` becomes a page at `/work/<file name>/` and an entry in the Work section of the home page and in the `/work/` index, which is only built when at least one case study is published. The frontmatter takes `title`, `description`, `company`, `role`, `period`, `glance` (the label and value pairs shown under the title), `order` and `draft`.

Entries with `draft: true` show up in `npm run dev` only. Production builds leave out their pages, their home page entries and their images. To publish one, set `draft: false`.

MDX files can import the flow, timeline and before and after comparison diagrams in `src/components/diagrams/`. They render to plain HTML and CSS, so the site still ships no JavaScript.

Screenshots go through `src/components/Screens.astro`: one or more images in a row with a caption under them. It sets responsive `sizes` for the layout, and `priority` loads the first one early when it sits at the top of the page.

Each published case study also gets its own social preview image, drawn at build time by `src/lib/og.ts` with the Geist font files in `src/assets/fonts/` (SIL Open Font License, see `OFL.txt`).

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages through `.github/workflows/deploy.yml`.

## License

The code is available under the [MIT License](LICENSE). The content of the page (text and personal information) is not covered by it.
