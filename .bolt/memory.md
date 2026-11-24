# Project memory

## Product intent & audience

- Photographer/artist portfolio website (inferred from project archive name `js-photo-artist-website`).
- Showcases photo artist's work; audience likely includes potential clients, galleries, and visitors.

## Brand personality & voice

- Not yet inferred from content; needs review of restored component copy to confirm tone.

## Visual design & UX direction

- Vite + React SPA; `src/App.tsx` composes 13+ components from `src/components/`.
- Project includes image assets under `public/images/` and data files (content/data-driven).
- Env files present in both `public/` and `src/` directories — content and purpose not yet reviewed.

## Decisions, constraints & rationale

- Project was initially broken: `App.tsx` imported ~13 components from a missing `src/components/` folder; full source was restored from a zip archive in the project root.
- Removed junk/artifacts after extraction: stray `public/images/env` file and the source `.zip` archive (neither belongs in a repo).
- Build verified clean after restoration and cleanup (`vite build` passes with no errors).
- Bolt manages GitHub syncing automatically; git commands cannot be run directly. If sync fails, reauthorize the GitHub App via Bolt homepage → GitHub → Configure.

## Open questions & assumptions

- Env files in `public/` and `src/` — are they needed, correct, or should they be consolidated/removed? Not yet inspected.
- Actual component names, pages, and routes not yet documented — only that ~13+ components exist.
- GitHub sync status unverified; user may need to reauthorize connection.
- No `.bolt/prompt` provided — no explicit global instructions or brand guidelines exist yet.