# How to Add People Care Events' Real Photos & Videos

The website is built so you can swap in **People Care Events'** own event photos and Instagram reels without changing any layout or animation code.

---

## 1. Where to Put Your Files
1. **Photos (`.jpg`, `.png`, `.webp`):**
   Put your real event photos inside:
   `public/images/`
   *(You can replace the existing filenames directly, or add new filenames like `mandap-davanagere.jpg`.)*

2. **Videos / Instagram Reels (`.mp4`):**
   Create or place your `.mp4` videos inside:
   `public/videos/`
   Example:
   - `public/videos/hero-reel.mp4` (ambient hero background reel)
   - `public/videos/wedding-reel.mp4`
   - `public/videos/haldi-reel.mp4`
   - `public/videos/reception-reel.mp4`

---

## 2. Which Files to Update

### A. Phone, WhatsApp, Email & Hero Video
Open [src/data/siteConfig.ts](src/data/siteConfig.ts):
- Update `phoneDisplay`, `phoneHref`, `whatsappNumber`, and `email`.
- To play a real event reel in the top hero banner, set:
  ```ts
  heroMedia: {
    imageSrc: '/images/hero-mandap.jpg',
    videoSrc: '/videos/hero-reel.mp4',
  }
  ```

### B. Delivered Reels & "REAL MOMENTS" Mosaic Gallery
Open [src/data/portfolio.ts](src/data/portfolio.ts):
- **`deliveredReels`**: Update `poster`, `videoSrc: '/videos/your-reel.mp4'`, `title`, `location`, and `instagramUrl` for each vertical reel card.
- **`realMoments`**: Add or edit photo/video tiles in the `REAL MOMENTS` collage:
  - For a photo tile: `mediaType: 'image'`, `image: '/images/your-photo.jpg'`
  - For a video tile: `mediaType: 'video'`, `image: '/images/thumbnail.jpg'`, `videoSrc: '/videos/your-video.mp4'`

### C. "A World of Celebrations" & "Wedding Decor" Accordion
Open [src/data/celebrations.ts](src/data/celebrations.ts) to point `worldOfCelebrations` and `weddingDecorAccordion` items to your real photos.

---

## Quick Shortcut
If you simply drop your real photos and `.mp4` videos into `c:\Users\ujwalrv\Downloads\People care\public\images\` and `public\videos\` (or right into the root folder) and tell me what each event is, I will wire every single photo and video into the website for you automatically.
