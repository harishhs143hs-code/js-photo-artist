# JS Photo Artist – Website

React + TypeScript + Vite + Tailwind CSS. No backend; deploys as a static site.

## Run locally
```bash
npm install
npm run dev        # development
npm run build      # production build into /dist
```

## Before launch – things you must supply
1. **Official logo** – the supplied logo file was not available when this was built, so `public/images/logo/logo.svg` is a plain text placeholder. Replace it with the real logo (keep proportions), or change `logo` in `src/data/site.ts` if the filename/extension differs. The header and footer show it on a light plate, so it is never recoloured.
2. **Real photographs** – every image is a generated sample stamped "SAMPLE IMAGE".
3. **Domain** – `public/sitemap.xml` and `public/robots.txt` contain `https://YOUR-DOMAIN.example`. Replace with the real domain once known.
4. **Enquiry form** – see "Form setup" below.

## Image replacement guide
Overwrite a file keeping the same name, or edit its path in `src/data/site.ts` (all image paths live there). Use WebP/JPG, ideally under ~300 KB each.

| Section | Files (in `public/images/`) | Recommended ratio |
|---|---|---|
| Hero slideshow (desktop) | `hero/hero-01.webp` … `hero-05.webp` | 16:9 (1920×1080) – keep faces/subjects on the right; headline sits bottom-left |
| Hero slideshow (mobile) | `hero/hero-01-mobile.webp` … `hero-05-mobile.webp` | 2:3 portrait (900×1350) |
| About / intro | `weddings/wedding-01.webp` (portrait), `couples/couple-02.webp` (landscape) | 3:4 and 3:2 |
| Services (6 groups) | `weddings/wedding-03`, `couples/couple-02`, `events/event-02`, `baby-kids/kids-02`, `albums/album-01`, `cinematic/cinematic-01` | alternating 4:5 portrait / 3:2 landscape |
| Portfolio (18 images) | `weddings/`, `couples/`, `baby-kids/`, `events/`, `cinematic/` | mixed: portrait 3:4 or 4:5, landscape 3:2 or 16:9. Set the true `w`/`h` and categories in `src/data/site.ts` |
| Films thumbnails | `films/film-01.webp` … `film-03.webp` | 16:9 |
| Albums & printing | `albums/album-01…04`, `printing/print-01…02` | see sizes in `albumShowcase` |
| Instagram tiles | `instagram/insta-01…06` | 1:1 |

Use `pos` (object-position, e.g. `'50% 30%'`) in `site.ts` to control cropping per image.

### Films
In `src/data/site.ts`, set `src` for each film to an `.mp4` in `public/videos/` or a YouTube/Vimeo **embed** URL (e.g. `https://www.youtube.com/embed/VIDEO_ID`). Empty `src` shows a placeholder message.

### Testimonials
Add genuine, approved reviews to `testimonials` in `site.ts`. The section is hidden while the list is empty.

## Form setup (Web3Forms or similar)
The form validates input. Without a key it does **not** pretend to send: it offers to send the same details through WhatsApp.
1. Get a free access key at https://web3forms.com.
2. Locally: copy `.env.example` to `.env.local` and set `VITE_WEB3FORMS_KEY`.
3. On Vercel: Project → Settings → Environment Variables → add `VITE_WEB3FORMS_KEY`, then redeploy.
(Web3Forms keys are designed to be public, but keeping them out of source control is still tidier.)

## Upload to GitHub and deploy on Vercel
1. Extract the ZIP.
2. On github.com create a new empty repository.
3. Upload the extracted files (or `git init`, `git add .`, `git commit`, `git remote add origin …`, `git push`). Do not upload `node_modules`.
4. On vercel.com choose **Add New → Project**, import the repository. Vercel detects Vite automatically (build command `npm run build`, output `dist`).
5. Add `VITE_WEB3FORMS_KEY` if using the form, then **Deploy**.
6. When the domain is ready, add it under Project → Settings → Domains and update `sitemap.xml` / `robots.txt`.

## Notes
- Fonts (Cormorant Garamond + Manrope) load from Google Fonts with system fallbacks.
- Maps: embedded Google Maps search for the supplied address plus a "Get Directions" link. No coordinates are hard-coded.
- Contact details and the LocalBusiness data use only the verified details supplied.
