---
name: jhy-web-design-portfolio
description: Maintain and publish the JHY Advanced Web Design course portfolio static site. Use when editing its HTML/CSS/JS pages, fixing asset links, or deploying the repository to GitHub Pages.
---

# JHY Web Design Portfolio

## Project layout

- `index.html` is the single entry page and must remain at the repository root.
- `index.css` contains the primary layout and visual styles.
- `img/`, `导引课/`, `booking-nav/`, and `c语言/` contain referenced course assets and materials.
- `404.html` is the custom not-found page.

## Maintenance rules

1. Keep all asset references relative so the site works under `/jhy/` on GitHub Pages.
2. Preserve the existing Chinese filenames and directory names; do not rename them unless every reference is updated.
3. Do not introduce a build step. This is a plain static site deployed directly from the repository root.
4. Verify `index.html`, `404.html`, and the navigation links after any edit.
5. Keep generated archives and OS metadata out of commits; see `.gitignore`.

## Local preview

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## GitHub Pages

Publish from the `main` branch and the repository root (`/`). The expected public URL is:

`https://withoutcilantro.github.io/jhy/`
