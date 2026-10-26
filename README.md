# TRON homepage recreation

A static recreation of the TRON Network homepage, built with HTML, CSS and vanilla
JavaScript. It includes desktop menus, mobile navigation, local search, a carousel
and ecosystem and partner selectors.

## Run locally

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://localhost:8000`. There are no dependencies or build steps. Serve
`index.html`, `styles.css`, `app.js` and `assets/` together. Links to TRON and
ecosystem sites open those public websites.

## How it works

The network totals and block strip use snapshot data. Search runs against an
embedded index, and the selected language is saved in `localStorage`.

The [architecture notes](docs/architecture.md) explain the page structure and
example data contracts. The [browser check notes](docs/qa-report.md) record the
August 2026 layout and performance measurements.

After changing JavaScript, run `node --check app.js`, then check the menus, mobile
navigation, search and any affected images in a browser.

TRON and ecosystem branding, photographs, icons and fonts belong to their respective
owners.
