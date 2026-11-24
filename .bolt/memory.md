# JS Photo Artist — project memory

## Product intent
- Responsive portfolio and enquiry website for JS Photo Artist, a photography, videography, album-designing and photo-printing studio in Thiruninravur, Tamil Nadu.
- Primary audience: prospective wedding, event, portrait and print customers.

## Brand and verified business details
- Business name: JS Photo Artist
- Tagline: PHOTO | VIDEO | ALBUM | PRINTING
- Address: No. 212, EB Colony, Lakshmipuram, Thiruninravur, Ambattur, Tiruvallur – 602024, Tamil Nadu, India.
- Phone / WhatsApp: +91 98401 57425
- Email: cgmedia4@gmail.com
- Hours supplied: Opens at 9:00 AM; no closing time or operating days supplied.
- Instagram: https://www.instagram.com/jsphotoartist25/

## Current architecture
- React 18, TypeScript, Vite, Tailwind CSS and lucide-react.
- Single-page composition in src/App.tsx.
- Reusable sections under src/components/.
- Central site content and image configuration in src/data/site.ts.
- Temporary sample images are organized under public/images/.
- Testimonials are intentionally empty until genuine approved reviews are supplied.
- Film cards are intentionally placeholders until real video URLs are supplied.
- Enquiry form supports optional Web3Forms; without a configured key it offers WhatsApp and does not claim submission.

## Known launch blockers / outstanding inputs
- public/images/logo/logo.svg is a text placeholder, not the approved official logo artwork.
- Portfolio, hero, album, printing and Instagram images are sample placeholders and must be replaced with studio-approved assets.
- The verified JS Photo Artist package/rate-card PDF was not located during the November 2026 repository audit. Do not publish package prices or inclusions until the correct source is supplied.
- The final website domain is not yet confirmed; sitemap/canonical domain configuration is therefore deferred.
- VITE_WEB3FORMS_KEY is not configured in the repository.
- Production build has not yet been executed in this audit. GitHub Actions CI has been added; check its run status before claiming build success.
- Vercel deployment is intentionally deferred until the user approves.

## Recent audit change
- Added .github/workflows/ci.yml to run npm ci and npm run build on pushes and pull requests to main.
- Hardened .gitignore for environment files and generated build artifacts.
- Removed the sitemap containing a fake example domain; add a real sitemap after the final domain is known.
