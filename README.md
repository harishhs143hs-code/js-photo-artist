# JS Photo Artist — Website

React + TypeScript + Vite + Tailwind CSS. The site is currently a static frontend; the enquiry form optionally uses Web3Forms.

## Run locally

```bash
npm ci
npm run dev
npm run build
npm run preview
```

## Current launch checklist

- [ ] Replace `public/images/logo/logo.svg` with the approved original JS Photo Artist logo. The current file is a text placeholder, not the supplied brand artwork.
- [ ] Replace temporary sample photography in `public/images/` with the studio's own approved images. All image paths are centralised in `src/data/site.ts`.
- [ ] Supply the approved JS Photo Artist package catalogue before publishing prices or package inclusions. No verified JS Photo Artist package/rate-card source was present in this repository or the files I could retrieve for this audit, so no prices have been invented.
- [ ] Add real film URLs in `src/data/site.ts` (MP4/WebM or YouTube/Vimeo embed URLs).
- [ ] Add only genuine, approved testimonials to `testimonials` in `src/data/site.ts`.
- [ ] Configure `VITE_WEB3FORMS_KEY` if online enquiry submission is required.
- [ ] Confirm the final website domain, then update canonical/social URLs, sitemap and robots.txt.
- [ ] Test the production build and the deployed website before launch.

## Image replacement guide

Overwrite a file while keeping its name, or update its path in `src/data/site.ts`.

| Section | Folder | Suggested aspect ratio |
|---|---|---|
| Hero desktop | `public/images/hero/` | 16:9 |
| Hero mobile | `public/images/hero/*-mobile.webp` | 2:3 |
| Weddings | `public/images/weddings/` | 3:4 or 3:2 |
| Couples | `public/images/couples/` | 3:4 or 3:2 |
| Events | `public/images/events/` | 3:2 or 4:5 |
| Baby & kids | `public/images/baby-kids/` | 4:5 or 3:2 |
| Albums | `public/images/albums/` | Match the photographed album layout |
| Printing | `public/images/printing/` | 1:1 or 4:5 |
| Films | `public/images/films/` | 16:9 |
| Instagram samples | `public/images/instagram/` | 1:1 |

Use compressed WebP/AVIF where practical. Keep images sharp enough for their display size and set `pos` in `src/data/site.ts` to adjust individual crops.

## Contact form setup

The form validates fields. Without a key it does not claim to send; it offers a WhatsApp hand-off instead.

1. Obtain an access key from Web3Forms.
2. Copy `.env.example` to `.env.local` and set `VITE_WEB3FORMS_KEY`.
3. In Vercel, add `VITE_WEB3FORMS_KEY` as an Environment Variable and redeploy after the site is ready.

Do not commit `.env.local` or any private credentials.

## Verified business details currently used

- JS Photo Artist
- No. 212, EB Colony, Lakshmipuram, Thiruninravur, Ambattur, Tiruvallur – 602024, Tamil Nadu, India
- +91 98401 57425
- cgmedia4@gmail.com
- Opens at 9:00 AM (no closing time or operating days supplied)
- https://www.instagram.com/jsphotoartist25/

The old `cgmedia.ptml.in` address must not be added to this website.

## CI

GitHub Actions runs `npm ci` and `npm run build` on pushes and pull requests to `main`. A green workflow run is required before treating a change as build-verified.

## Deployment

Deployment is intentionally not performed as part of this audit. Once approved, import this repository into Vercel. Vite's production output directory is `dist`.
