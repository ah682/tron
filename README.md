# TRON homepage recreation

An independent frontend portfolio recreation of the TRON Network homepage, built
with HTML, CSS and vanilla JavaScript. It includes desktop mega-menus, mobile
accordions, local search, carousel controls and ecosystem/partner selectors.
It is not an official TRON site, wallet, exchange or blockchain application.

## Run locally

No Node dependencies or build step are required. From this directory:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://localhost:8000`. The deliverable is `index.html`, `styles.css`, `app.js`
and local `assets/`; any static web server can serve them. Links to public TRON
and ecosystem sites leave this demo.

## Boundaries and maintenance

Network totals and the animated block strip are presentation snapshots/illustrations,
not live feeds. Search uses an embedded index; language selection uses localStorage.
There is no wallet connection, transaction signing or production backend. JSON/schema
files describe public presentation data and possible future integration, rather than
an operational API. See [architecture](docs/architecture.md) and the dated
[QA report](docs/qa-report.md); historical lab scores are not current production evidence.

For changes, run `node --check app.js` and check keyboard menus, mobile navigation,
local search and affected assets in a browser. No automated test command is configured.

TRON and ecosystem names, logos, photos, icons and font assets retain their respective
owners' rights. This implementation is a recreation; no affiliation, original brand
design authorship or asset redistribution permission is claimed. Check upstream
terms before reuse. This README adds no licence grant.
