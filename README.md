# PPM Chains — B2B Interactive Website Prototype

Interactive, high-fidelity B2B website prototype for **PPM Chains** (AJC Jewel Manufacturers Limited), built with React, Vite, TypeScript, and Tailwind CSS for client UX review and static Netlify deployment.

## Implemented Pages (6 Routes)

1. **Homepage (`/`)** — Hero showcase, Trending/Bestseller/Premium highlights, manufacturing capabilities bar, Two Approaches to Chain Making, searchable/filterable Chain Catalogue preview, 4-step Craft Behind Every Chain, Range showcase, FAQ accordion, CTA banner, and Wholesale Enquiry split section.
2. **Product Listing Page (`/chains`)** — Rounded green hero showcase, interactive catalogue search/filter/sort/load-more grid, Featured Collections bands, From Designs to Finishing showcase, Range showcase, and Wholesale Enquiry section.
3. **Contact Us Page (`/contact`)** — Conversation hero, interactive enquiry topic cards that pre-select the message form type, validated Contact form, and Malappuram Office & Manufacturing Facility details with clickable phone/WhatsApp and map directions.
4. **Enquiry Page (`/enquiry`)** — Primary B2B conversion page with auto-attached product banner (prefilled when arriving from a product card or quick-view), full validation, and simulated submission confirmation.
5. **About Us Page (`/about`)** — Editorial hero, Who We Are showroom section, Kondotty story & milestones, Chain Ranges comparison, second-generation leadership, Our Principles, and CTA banner.
6. **Manufacturing Page (`/manufacturing`)** — Manufacturing hero, 4-pillar bar, Approach 01 (Machine-Made) & Approach 02 (Kerala Handcrafted), interactive 4-stage production process, Assortment link-style cards, and CTA banner.

## Local Development

```bash
npm install
npm run dev
```

## Production Build & Netlify Deployment

```bash
npm run build
```

- Output directory: `dist`
- SPA client-side routing fallback is configured in both `netlify.toml` and `public/_redirects` (`/* /index.html 200`).
- All enquiry and contact submissions are simulated locally in the browser for demonstration purposes; no backend or environment secrets are required.
