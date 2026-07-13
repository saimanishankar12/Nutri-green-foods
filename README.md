# NGF (Nutri Green Foods)

A single-page marketing website for **Nutri Green Foods**, a small-batch producer of natural, dehydrated fruit and vegetable powders (Moringa, ABC, Beetroot, Carrot, Apple, and more).

<img width="1920" height="6003" alt="image" src="https://github.com/user-attachments/assets/6c436ed3-7fc7-4c23-8439-6445b7fc78e5" />




---

## About

Nutri Green Foods sun-dries and stone-grinds moringa, amla, beetroot, carrot, and other produce into single-ingredient powders — no additives, no preservatives, no artificial flavour. This site tells that story and showcases the full product range with pricing.

**Live sections:**
- **Hero** : brand intro with background imagery and CTAs
- **Our Story** : origin, promise, and who's behind the brand
- **The Full Range** : all 9 products with tiered pricing (100g / 200g / 500g / 1kg)
- **How It's Made** : a 6-step process walkthrough (harvest → pack)
- **Certification** : FSSAI license details and compliance messaging
- **Footer** : contact details, quick links, and social

---

## Tech Stack

- **HTML5** : semantic single-page structure
- **CSS3** : custom properties (CSS variables) for theming, CSS Grid/Flexbox for layout, keyframe animations for the scrolling logo marquee
- **Vanilla JavaScript** —:scroll-reveal animations via `IntersectionObserver`, no frameworks or build step required

No dependencies, no bundler — open `index.html` in a browser and it runs.

---

## Project Structure

```
├── index.html
├── index.css
├── images/
│   ├── logo-2-Photoroom.png
│   ├── white-logo.png
│   ├── moringa-powder.png
│   ├── beetroot-powder.png
│   ├── ...product images
│   ├── h1.png – h6.png        # process step icons
│   ├── icon1.png – icon4.png  # trust/certification icons
│   ├── fssai-logo.png
│   ├── whatsapp-icon.png
│   └── hero-bg.jpg / range-bg.jpg / process-bg.jpg
└── README.md
```

---

## Design System

Colors are defined as CSS custom properties in `:root`, so the whole palette can be updated from one place:

```css
:root{
  --forest:#1B5E3A;   /* primary brand green */
  --cream:#F8F4E9;    /* background */
  --leaf:#7CB342;     /* secondary green accent */
  --beet:#8E1B3D;     /* maroon accent */
  --gold:#C9A227;     /* accent / highlights */
  --ink:#241C12;      /* body text */
  --paper:#FBF8F1;    /* card/section background */
  --line: rgba(36,28,18,0.14);
}
```

Typography pairs a serif display face (**Fraunces**) for headings with a clean sans (**Manrope**) for body copy, plus **Space Mono** for labels and eyebrow text.

---

## Key Features

- 🎠 **Auto-advancing testimonials carousel** with swipe support on mobile
- 🔁 **Infinite scrolling logo marquee** across the hero divider strip
- 💬 **Sticky WhatsApp button** for instant order inquiries
- 📱 **Fully responsive** — grid layouts collapse gracefully from 4 → 3 → 2 → 1 columns
- ✅ **FSSAI certification section** for trust and compliance transparency
- 🌿 **Scroll-reveal animations** on all major sections

---

## Getting Started

1. Clone the repo
   ```bash
   git clone https://github.com/<your-username>/ngf-website.git
   cd ngf-website
   ```
2. Open `index.html` directly in a browser, or serve it locally:
   ```bash
   npx serve .
   ```
3. Update product images, pricing, and contact details in `index.html` as needed.

---

## Contact

**Nutri Green Foods**
📍 8-250, Anjaneyanagar, Chelluru, Rayavaram Mandal, Dr. B.R. Ambedkar Konaseema District, AP, 533261
📞 +91 81218 87779
✉️ nutrigreenfoods786@gmail.com
📸 [@nutrigreenfoods](https://instagram.com/nutrigreenfoods)

FSSAI Licence No: **20126082000074**

---

## License

© 2026 Nutri Green Foods. All rights reserved.
