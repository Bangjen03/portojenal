# PORTO JENAL — Personal Portfolio

Personal portfolio website for Jaenal Arifin, built with Next.js App Router.

## Requirements
- Node.js 18.18+ (recommended Node.js 20 LTS or newer)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Production build
```bash
npm run build
npm start
```

## Customize
- Project data: `src/data/projects.js`
- Main profile and sections: `src/app/page.js`
- Contact email: update the `mailto:` link in `src/app/page.js`
- Project images: `public/images/projects/`
- Styling: `src/app/globals.css`

The four supplied project images are included in `public/images/projects/`.

## Certificates
- Original PDF certificates are stored in `public/certificates/`.
- Preview images are stored in `public/images/certificates/`.
- Certificate metadata is maintained in `src/data/certificates.js`.
- The Certificates section is rendered by `src/components/Certificates.jsx`.
