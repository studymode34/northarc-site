# WAKEUPANDWORK — studio website

Static, dependency-free website for a founder-led IT services studio.
Three pages: `index.html`, `services.html`, `contact.html`.

## Current setup

The site is now branded as `WAKEUPANDWORK` and uses these local assets:

1. Shared brand markup uses `WAKEUP<span>&amp;WORK</span>`
2. Contact links point to `hello@wakeupandwork.dev`
3. Favicon, social preview, and the dbt logo live in `assets/`
4. The contact page includes a static brief form that opens the user's email app with a prefilled message

If you want to swap to a real production domain or inbox later, update the email address and page metadata in the three HTML files plus `js/main.js`.

## Run locally

Open `index.html` in a browser, or:

```bash
python3 -m http.server 4173
```

## Deploy

Any static host works. Fastest paths:

- **GitHub Pages**: push to GitHub → repo Settings → Pages → deploy from `main`
- **Netlify / Vercel**: drag the folder in, or connect the repo

## Notes

- Tech logos load from devicon / simple-icons CDNs (network required)
- Fonts from Google Fonts: Schibsted Grotesk, Instrument Sans, IBM Plex Mono
- No build step, no framework, no tracking
