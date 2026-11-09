// ─────────────────────────────────────────────────────────────
//  YOUR VIDEOS — edit this file to change what's on the site.
// ─────────────────────────────────────────────────────────────
//
// VIDEO_BASE is the public address of your R2 bucket.
//   • If you connected a custom domain to the bucket:  'https://videos.ma-ry.uk'
//   • Otherwise use the R2 public dev URL, e.g.       'https://pub-xxxxxxxx.r2.dev'
//     (R2 → your bucket → Settings → Public access)
//
// For each video:
//   file     – the exact file name in R2 (case-sensitive, e.g. 'ep01-first-meeting.mp4')
//   title    – what visitors see
//   episode  – optional, e.g. 'Episode 1'
//   thumb    – optional image file name in R2 (e.g. 'ep01.jpg').
//              Leave it as null and the site shows a frame from the video instead.
//   description – optional, shown in the player

export const VIDEO_BASE = 'https://videos.ma-ry.uk'

export const videos = [
  { file: 'sorry-for-leaving-you.mp4', thumb: 'sorry-for-leaving-you.webp', title: "Wang So & Hae Soo · I'm Sorry For Leaving You Alone" },
  { file: 'wang-eun-soon-deok.mp4',    thumb: 'wang-eun-soon-deok.webp',    title: 'Wang Eun & Soon Deok · I Can Not Let Her Go Alone' },
  { file: 'october-and-april.mp4',     thumb: 'october-and-april.webp',     title: 'Wang So & Hae Soo · October & April' },
  { file: 'shot-in-the-dark.mp4',      thumb: 'shot-in-the-dark.webp',      title: 'Wang So · Shot In The Dark' },
  { file: 'always-love-you.mp4',       thumb: 'always-love-you.webp',       title: 'Always Love You' },
  { file: '4th-prince-wang-so.mp4',    thumb: '4th-prince-wang-so.webp',    title: '4th Prince Wang So (Lee Jun Ki)' },
  { file: 'hae-soo-sad-moments.mp4',   thumb: 'hae-soo-sad-moments.webp',   title: "Hae Soo's Sad Moments" },
]

export const url = (name) => `${VIDEO_BASE.replace(/\/$/, '')}/${encodeURI(name)}`
