# NORTHARC — studio website

Static, dependency-free website for a founder-led IT services studio.
Three pages: `index.html`, `services.html`, `contact.html`.

## Rename the company

"NORTHARC" is a placeholder. To rename:

1. Find-replace `NORTHARC` and `NORTH<span>ARC</span>` in all three `.html` files
2. Replace `hello@northarc.dev` with the real email (3 files)
3. Update the LinkedIn URL in `contact.html`
4. Update `<title>` and `meta description` tags per page

## Run locally

Open `index.html` in a browser, or:

```bash
python3 -m http.server 8000
```

## Deploy

Any static host works. Fastest paths:

- **GitHub Pages**: push to GitHub → repo Settings → Pages → deploy from `main`
- **Netlify / Vercel**: drag the folder in, or connect the repo

## Notes

- Tech logos load from devicon / simple-icons CDNs (network required)
- Fonts from Google Fonts: Schibsted Grotesk, Instrument Sans, IBM Plex Mono
- No build step, no framework, no tracking
