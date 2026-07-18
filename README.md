# arv1ndofficial.github.io

Personal site for Aravindan Rameshbabu, served at
[arv1ndofficial.github.io](https://arv1ndofficial.github.io).

- **`/`** — React + Vite + Tailwind v4 + Framer Motion portfolio. Source in
  `src/`; content in `src/data/resume.ts`.
- **`/terminal`** — interactive terminal-style page (vanilla JS, no build
  step) that live-fetches real GitHub contribution data from
  `arv1ndofficial/arv1ndofficial`. Source in `terminal-src/`, built into
  `public/terminal/index.html` (picked up verbatim by the Vite build).

Both are linked to each other — the portfolio nav/footer link to `/terminal`,
and the terminal's footer links back to `/`.

## Development

```
npm install
npm run dev
```

## Build

```
npm run build   # outputs to dist/, including dist/terminal/
npm run preview
```

## Regenerating the terminal page

After changing `terminal-src/index.template.html` or pulling fresh
contribution data into `../arv1ndofficial/data/contributions.json`:

```
cd terminal-src
python build.py
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages via `actions/deploy-pages`.
