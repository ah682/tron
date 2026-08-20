# Static shareholder website architecture

## Delivery model

The production artifact is a dependency-free static website: HTML, CSS, JavaScript, fonts, images, and SVGs. It can be served directly by GitHub Pages, a CDN, or any static web server. The current build performs no runtime request to a TRON backend and embeds no credentials, environment variables, private routes, internal hostnames, or source maps.

`data/site-data.json` is the approved public snapshot used to review data shape and values. The visible homepage has equivalent defaults embedded in its HTML and JavaScript, so it continues to work when opened locally and when JSON fetching is unavailable.

## Public data boundary

The optional future integration boundary is documented in `schema/public-api.openapi.yaml`. It describes only the minimum public response fields needed for:

- network totals;
- TRX market presentation;
- the latest block strip;
- published insight cards; and
- public site search.

The contract deliberately omits storage layout, provider topology, signing, administration, access-control implementation, service-to-service communication, logging internals, and deployment configuration. The placeholder server uses the reserved `.invalid` domain and cannot accidentally target infrastructure.

## Browser behavior

- Desktop navigation uses accessible mega-menus.
- Mobile navigation uses collapsible groups and traps page scrolling while open.
- Search runs entirely in the browser against a small approved index.
- Language selection stores only the selected locale in `localStorage`; no personal or analytics data is collected.
- The block strip animation is illustrative and does not claim to be a live feed.
- All external links use `noopener noreferrer` when opened in a new tab.

## Security and privacy

The static build has no forms that transmit data, no authentication, no cookies, no analytics, and no third-party JavaScript. Vendored assets remove runtime dependency on the live TRON asset host. If a backend is integrated later, use a restrictive Content Security Policy at the hosting layer, validate responses against the supplied schema, apply public rate limits, return generic errors, and retain the strict response allowlist in the OpenAPI contract.

## Updating the shareholder snapshot

1. Obtain an approved public-data export.
2. Update `data/site-data.json` and the equivalent visible defaults in `index.html`.
3. Validate the JSON against `schema/site-content.schema.json`.
4. Review every link and media asset for publication approval.
5. Run responsive and keyboard QA before deployment.
