# LCA Savills — demo website

A static HTML demo site for **LCA Savills**, an independent supply chain and
logistics consultancy for Asia, built on the **Savills Core CSS design system
(v1.44.6)**.

> Demo only — the content, people and figures come from the supplied copy deck,
> the contact form does not send anything, and `[confirm-figure: …]`
> placeholders are reproduced verbatim from that deck.

## Viewing the site

Open `index.html` directly in a browser, or serve the folder:

```bash
cd lca-website
python3 -m http.server 8080
# then open http://localhost:8080
```

All links are relative, so the site works from `file://` or any static host
(GitHub Pages, Vercel, Netlify, S3, …).

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `services.html` | Services overview |
| `warehousing-end-to-end.html` | Built-to-Suit Warehousing, End to End |
| `supply-chain-network-strategy.html` | Supply Chain Network Design |
| `logistics-outsourcing-3pl.html` | 3PL Selection & Logistics Outsourcing |
| `transport-last-mile.html` | Transport & Last-Mile Optimisation |
| `inventory-forecasting-planning.html` | Inventory Optimisation & Forecasting |
| `cost-to-serve-cost-reduction.html` | Cost-to-Serve Analysis & Cost Reduction |
| `operational-excellence.html` | Operational Excellence & Continuous Improvement |
| `mna-investment-support.html` | M&A & Investment Support |
| `results.html` | Results & Case Studies |
| `where-we-work.html` | Where We Work |
| `why-lca.html` | Why LCA |
| `contact.html` | Contact (demo enquiry form) |

## Structure

- `css/savills-core.css` — Savills Core CSS v1.44.6, exactly as supplied
  (unmodified). All component styling — header, nav, buttons, cards, tables,
  quotes, accordions, forms, footer — comes from here.
- `css/demo.css` — a ~30-line glue layer for the handful of things the Savills
  platform normally supplies via templates or JS: hero-artwork sizing, section
  rhythm, the dark CTA band text, and the case-study stat line.
- `js/demo.js` — mobile menu toggle, FAQ accordions and the demo contact form.
- `assets/` — placeholder SVG artwork (hero backgrounds, logo, favicon).

## Notes

- Web fonts (Gotham, Domine) and a few icon sprites are referenced from
  `assets.savills.com` by the core CSS. When offline or blocked, the site
  falls back gracefully to system fonts.
- The Savills CSS drives the responsive behaviour: the navigation collapses to
  a full-screen menu below 1136px, tables restack on mobile, and the grid uses
  the `sv-row` / `sv-block-grid` column system.
