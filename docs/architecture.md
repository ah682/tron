# Site structure

## Static files

The site consists of HTML, CSS, JavaScript, fonts and images. It can be served by
GitHub Pages, a CDN or any static web server without a build step.

`index.html` contains the homepage sections and network figures. `app.js` adds
navigation, search, carousels and selectors. Images and fonts are in `assets/`.

[data/site-data.json](../data/site-data.json) records a content snapshot for the
[JSON Schema](../schema/site-content.schema.json). The visible page uses values
embedded in HTML and JavaScript rather than fetching that file.

## Browser behaviour

- Desktop navigation uses mega-menus; mobile navigation uses collapsible groups.
- Search runs against an embedded index.
- Language selection saves the chosen locale in `localStorage`.
- The animated block strip illustrates the snapshot data.
- External links opened in a new tab use `noopener noreferrer`.

The page has no API calls, form submissions, authentication, analytics or
third-party JavaScript.

## Example API

[schema/public-api.openapi.yaml](../schema/public-api.openapi.yaml) describes
possible responses for network totals, market figures, latest blocks, insight
cards and search. It uses a placeholder `.invalid` server address.

A future integration would need a real data source, response validation, rate
limits and error handling. A Content Security Policy at the host can restrict
which services the page may contact.

## Update the content

1. Update the snapshot in `data/site-data.json` and the matching values in
   `index.html` or `app.js`.
2. Check the snapshot against `schema/site-content.schema.json`.
3. Check links, images, keyboard navigation and the mobile layout before publishing.
