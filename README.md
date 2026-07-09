# LuxePeak Advisory — Website (Astro)

Single-page, bilingual (EN/ES) landing site for LuxePeak Advisory / Vicky Pérez, built with Astro + Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev       # http://localhost:4321
```

## Build for production

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Structure

- `src/data/content.ts` — all site copy, EN and ES, in one typed object. Edit text here.
- `src/components/` — one component per section (Hero, About, Services, Results, Speaking, Resources, Contact, Nav, Footer).
- `src/pages/index.astro` — English route (`/`)
- `src/pages/es/index.astro` — Spanish route (`/es/`)
- `public/images/` — logo, Vicky's photo, Maxwell badge (pulled from the approved brand assets).

## Known placeholders — resolve before launch

1. **Testimonials.** Not included on the live site — her public LinkedIn Recommendations were empty at the time of research. See `testimonials-case-studies-draft.md` in the project folder for a placeholder draft and next steps (ask 2–3 former colleagues for a real LinkedIn recommendation, or feature the Hervé Humler/Ritz-Carlton recognition letter as a credential).
2. **Newsletter form.** The "Subscribe" form in the Resources section is not wired to a real provider yet (Mailchimp/ConvertKit/etc.) — it just shows an alert. Needs an embed or API integration.
3. **Contact routing.** Email/phone links go to the real published contact info (vickyperez@luxepeakadvisory.com, +1 512-893-9379) from the brand board. Confirm these are still current.
4. **Hero photo.** Cropped from the LinkedIn banner asset — a dedicated high-res headshot would look sharper; swap `public/images/vicky-hero.jpg` when available.
5. **Domain/deploy.** Not yet deployed. Works out of the box on Vercel, Netlify, or Cloudflare Pages (static output, zero config needed beyond connecting the repo).

## Case study sourcing

Results section content is pulled directly from Vicky Perez's public LinkedIn experience (linkedin.com/in/vickyperezaruba/details/experience/) — real roles, real metrics as she has published them. Re-verify before publishing in case her profile has since changed.
