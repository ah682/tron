# Release QA report

Verified on 2026-08-19 against the public TRON Network homepage reference.

## Automated browser coverage

The final static build was exercised at 1440×900, 1024×800, 768×900, and 390×844 CSS pixels. The checks confirmed:

- no horizontal document overflow;
- all principal homepage sections are present;
- no broken or unsuccessful local image assets;
- no browser console exceptions, request failures, or HTTP error responses;
- no duplicate element IDs, unnamed controls, or unsafe `target="_blank"` links;
- working desktop mega-menus, local search, protocol carousel controls, ecosystem selector, and partner tabs; and
- working mobile navigation open, accordion, close, and scroll-lock behavior.

## Lighthouse lab result

Local mobile-mode audit:

| Category | Score |
| --- | ---: |
| Performance | 99 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

Key measurements were 1.4 s First Contentful Paint, 2.1 s Largest Contentful Paint, 0 ms Total Blocking Time, and 0 Cumulative Layout Shift. Lab timings can vary by machine; the category results reflect the final checked artifact.

## Data-contract and safety checks

- `data/site-data.json` conforms to `schema/site-content.schema.json`.
- Every local JSON Schema and OpenAPI reference resolves.
- `schema/public-api.openapi.yaml` parses as OpenAPI 3.1 and exposes five public read-only response contracts.
- The only declared server is a reserved `.invalid` placeholder.
- The repository contains no analytics, cookies, API keys, credentials, private endpoints, internal hostnames, or third-party JavaScript.
