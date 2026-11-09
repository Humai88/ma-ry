# ma-ry.uk

A fan site for Moon Lovers: Scarlet Heart Ryeo. Built with React and Vite, hosted on Cloudflare. The videos are stored in R2.

## Change the videos
Edit **`src/videos.js`**:
- `VIDEO_BASE`: your R2 bucket's public address (e.g. `https://videos.ma-ry.uk`)
- one entry per video: `file` (the exact name in R2), `title`, `episode`, and optionally `thumb` and `description`

## Run it on your computer
```bash
npm install
npm run dev
```

## Publish
```bash
git add .
git commit -m "Update site"
git push
```
Cloudflare rebuilds the site automatically.

## Files
- `public/`: background image, logo and favicons
- `src/App.css`: all styles (colours are at the top)
- `src/components/`: Header, Hero, VideoCard, VideoModal, About, Footer
- `src/components/Footer.jsx`: contact email (`CONTACT_EMAIL`)
