# Website Generation Prompt — People Care Events (Exact Video + Reference Hybrid)

Build a modern, luxury, editorial, and smoothly animated website for **People Care Events**, a full-service event management, custom decoration, and catering company based in Davanagere, Karnataka (`@people_care_events`).

**Core Design Mandate:**
1. **Replicate the exact visual design, color palette, typography, section flow, and signature animations from the reference video** (*The Utsav House* layout).
2. **Integrate the structured service breadth, custom-pricing transparency, stress-free end-to-end process, and `"Start Planning with Us"` inquiry experience from `etherielplanner.com`**, adapted specifically for **People Care Events**.

---

## 1. Brand & Business Context
- **Brand Name:** People Care Events
- **Subtitle / Tagline:** *Thoughtfully Planned. Unforgettably Celebrated.* (displayed subtly under logo / hero)
- **Location:** Near Stadium, Hadadi Road, Davanagere, Karnataka
- **Reputation & Proof Points:** 5.0-rated event & catering specialists trusted for punctual execution, bespoke stage & floral styling, polite & cooperative team, and large-scale catering (handling 1,000+ guest capacities).
- **Contact Placeholders (replace with exact business details):**
  - Phone / WhatsApp: `[+91 XXXXX XXXXX]`
  - Email: `[contact@peoplecareevents.com]`
  - Instagram: `https://www.instagram.com/people_care_events/`

---

## 2. Exact Visual System (Replicated from Reference Video)
- **Color Palette:**
  - Primary Deep Olive-Sage (Navbar, Pre-Footer, Footer, Primary Pill Buttons): `#556442` / `#4E5D3C`
  - Warm Cream / Ivory Canvas (Page Background): `#F7F4ED`
  - Crisp Warm White (Cards, Light Pill CTAs): `#FFFFFF` / `#FAF8F3`
  - Charcoal Espresso (Primary Headings): `#1F241B`
  - Muted Olive-Gray (Body & Captions): `#5A6054`
  - Soft Champagne Gold (Micro-accents & 5-star badges): `#C8A96A`
- **Typography:**
  - **Headings / Display:** High-contrast editorial serif (*Cormorant Garamond* or *Playfair Display*) with clean proportions and refined spacing.
  - **Body / Navigation / Buttons:** Clean geometric sans-serif (*Plus Jakarta Sans* or *Inter*).
- **Animation & Motion Feel:**
  - Smooth scrolling (`Lenis`), gentle scroll-triggered fades (`Framer Motion`), spring-animated horizontal accordion expansion, smooth image zoom on hover, and a centered lightbox modal transition.

---

## 3. Exact Section-by-Section Layout (Video Structure + Reference Site Features)

### Section 1: Solid Olive-Green Sticky Navbar (Exact Video Replica)
- Background: Deep olive-green (`#556442`) across the full top bar.
- **Left:** Circular cream/white botanical emblem + **People Care Events** + subtle tagline underneath.
- **Center Navigation Links:** `About`, `Services`, `Gallery`, `Contact` (smooth-scroll or route links in crisp white text).
- **Right CTAs:**
  - White/cream pill button: `Book Consultation ->` (scrolls to `"Start Planning with Us"` or opens booking modal)
  - Outlined/subtle pill button with phone icon: `Call` (direct `tel:` link)
- Responsive slide-out drawer on mobile.

### Section 2: Full-Bleed Hero Banner (`"Events for every story"`)
- Full-bleed scenic outdoor/mandap celebration backdrop image (or subtle looping reel) with a soft dark gradient overlay for legibility.
- Centered editorial serif display headline: **`Events for every story`**
- Concise subtext highlighting People Care Events' end-to-end decor, catering, and stress-free coordination.
- Clean CTA pill buttons (`Explore Celebrations`, `Start Planning ->`).

### Section 3: `"A world of celebrations"` — 4-Card Showcase (Exact Video Replica)
- Warm cream `#F7F4ED` background.
- Centered uppercase eyebrow (`CELEBRATIONS WE CRAFT`), large serif heading **`A world of celebrations`**, and a short 1-line subtitle.
- **4-Column Editorial Card Grid** with soft rounded corners, subtle hover zoom, and centered serif labels below each image:
  1. **Wedding Decor**
  2. **Birthday Decor**
  3. **Traditional Celebrations**
  4. **House Celebrations**
- *(Enhanced with `etherielplanner.com` event breadth)* Clicking or hovering reveals/links to the full range of occasions handled: **Weddings & Pre-Weddings, Birthday Parties, Baby Showers, Housewarming Ceremonies (Griha Pravesh), Anniversaries, Festive & Private Parties, Farewell Parties, and Corporate Events**.

### Section 4: Editorial Split About Section (`"Rooted in tradition. Designed around you."`)
- **Left Column:** Dual side-by-side / staggered vertical photography frames (traditional mandap decor + outdoor venue styling) with subtle scroll parallax.
- **Right Column:**
  - Uppercase eyebrow: `OUR PHILOSOPHY`
  - Large serif heading: **`Rooted in tradition. Designed around you.`**
  - Story copy blending cultural warmth with `etherielplanner.com`'s stress-free promise: handling timelines, vendor coordination, custom themes, and 1,000+ guest catering so hosts enjoy every moment tension-free.
  - Solid olive-green pill CTA: `Our Story ->`

### Section 5: `"Wedding Decor"` — Interactive Expanding Vertical Strip Accordion (Exact Video Replica)
- Warm cream `#F7F4ED` background.
- Centered serif title: **`Wedding Decor`** + short subtitle (`Complete wedding celebrations and mandaps`).
- **Interactive Horizontal Strip Gallery:**
  - A centered row of tall vertical panels side-by-side. By default, one panel is expanded wide horizontally while the rest remain sleek narrow vertical strips displaying rotated/vertical titles.
  - Clicking or hovering any strip smoothly animates its width open with spring physics to reveal the full photograph, ritual title, brief overlay description, and arrow indicator.
  - **Panels to Include:**
    1. `Engagement`
    2. `Haldi` (or `Pellikoduku & Haldi`)
    3. `Mehendi`
    4. `Sangeet & DJ`
    5. `Wedding Stage / Mandap`
    6. `Grand Reception`
  - Adapts cleanly to vertical expandable cards on mobile screens.

### Section 6: End-to-End Services & `"How We Work"` (Replicated from `etherielplanner.com`)
- Seamless cream-toned editorial section bridging the video's visual rhythm with `etherielplanner.com`'s full-service capabilities:
  - **6 Core Service Pillars (clean 3x2 grid with minimal icons & expandable details):**
    1. **Venue Selection & Setup** — Scouting, layout planning, and complete on-ground setup & teardown.
    2. **Custom Event Decor & Theme Styling** — Personalized floral stages, balloon/theme setups, chandeliers, and ambient lighting (never cookie-cutter).
    3. **Catering & Curated Menus** — Experienced culinary team delivering multi-cuisine & regional menus tailored to dietary preferences for intimate or 1,000+ guest gatherings.
    4. **Photography & Videography** — Candid & traditional media coordination to capture every milestone.
    5. **Entertainment, Music & Invitations** — DJ setups, live artists, party elements, and custom guest invitations.
    6. **End-to-End Coordination & Hospitality** — Timeline control, vendor synchronization, and guest management from concept to completion.
  - **Transparent Custom Pricing Callout (from `etherielplanner.com`):** A sleek card explaining that pricing is customized (not rigid fixed templates) based on event type, guest count, venue, decor scale, and catering preferences.

### Section 7: `"REAL MOMENTS"` — Full-Width Mosaic Collage + Lightbox Modal (Exact Video Replica)
- Full-bleed, dense multi-photo mosaic grid showcasing real delivered events from `@people_care_events`.
- Bold centered serif typography **`REAL MOMENTS`** overlaid across the center of the collage.
- Subtle category filter pills above (`All`, `Weddings`, `Receptions`, `Haldi & Mehendi`, `Birthdays`, `Catering`).
- **Interactive Lightbox Modal (Exact Video Replica):** Clicking any photo smoothly opens a centered dark-overlay modal displaying the full landscape image with a clean caption bar beneath it (e.g., *"An outdoor floral wedding reception stage with crystal chandeliers and layered lighting"*) + next/prev arrows & close button.
- Bottom link strip: `Explore more setups & reels on @people_care_events ->`.

### Section 8: `"Love, in their words"` — Testimonials (Exact Video Replica)
- Centered serif heading: **`Love, in their words`**
- Horizontal row / 3-column grid of minimal bordered warm-cream cards with 5-star gold indicators, authentic client quotes highlighting punctuality, decor matching vision, catering taste, and cooperative staff, plus client name & event type.

### Section 9: `"Start Planning with Us"` Consultation Form (Replicated from `etherielplanner.com`)
- Clean, calm 2-column inquiry section before the footer:
  - **Left:** Reassuring copy (*"Share your celebration details — whether planned months ahead or a quick turnaround, we coordinate every detail effortlessly."*), Hadadi Road Davanagere office address, phone numbers, and instant WhatsApp button.
  - **Right:** Interactive Form with fields:
    - Name & Phone / WhatsApp Number
    - Event Type (`Wedding / Reception`, `Birthday Party`, `Baby Shower`, `Housewarming`, `Anniversary`, `Corporate / Farewell`, `Catering Only`)
    - Event Date & Estimated Guest Count (`< 100`, `100–300`, `300–600`, `600–1000+`)
    - Services Needed (multi-select chips: `Decor & Styling`, `Catering`, `Full Planning`, `Photography & DJ`)
    - Vision / Notes -> Submits with confirmation toast + optional `Send Details on WhatsApp` pre-filled link.

### Section 10: Deep Olive-Green Pre-Footer & Footer (Exact Video Replica)
- **Pre-Footer Block (`#556442` background):**
  - Centered circular emblem at the top
  - Large warm-cream serif headline: **`Your next chapter, thoughtfully celebrated.`**
  - Centered white pill CTA button: `Request a Quote ->`
- **Subtle horizontal rule divider**
- **3/4-Column Olive-Green Footer:**
  - **Brand Column:** Circular emblem + **People Care Events** + short tagline + Phone, `@people_care_events` Instagram link, Email, and Hadadi Road, Davanagere address.
  - **Explore Column:** `About`, `Services`, `Gallery`, `Testimonials`, `Contact`
  - **Celebrations Column:** `Wedding Decor`, `Birthday Decor`, `Traditional Celebrations`, `House Celebrations`, `Corporate & Catering`

---

## 4. Technical Stack & Asset Guidelines
- **Tech Stack:** Next.js (App Router) or React + Vite + TypeScript, Tailwind CSS, Framer Motion, Lucide React.
- **Centralized Data Config:** Store all gallery photos, accordion panels, testimonials, and service packages inside `/src/data/` (`portfolio.ts`, `services.ts`, `testimonials.ts`) with clear image placeholders (`[IMAGE: ...]`) so real photos from `@people_care_events` can be swapped in directly without modifying UI components.
- **Accessibility & Performance:** Respect `prefers-reduced-motion`, lazy-load gallery assets, keep aspect ratios locked to prevent layout shift, and ensure smooth responsive behavior across desktop, tablet, and mobile.

