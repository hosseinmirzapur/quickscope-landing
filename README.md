# QUICKSCOPE AI — Landing Page

The official landing page for **QUICKSCOPE AI**, a real-time Solana trading intelligence platform designed for speed, signal clarity, and execution dominance.

This repository powers the **marketing and product front door** hosted at:

👉 https://qsai.fun  

The full application lives separately at:

👉 https://app.qsai.fun

This separation allows independent optimization of conversion, performance, and product velocity.

---

## Purpose

The landing page exists to:

- Establish technical and product credibility instantly
- Communicate speed and real-time dominance visually
- Explain core features without overwhelming users
- Funnel serious users directly into the application
- Act as a trust and authority layer for QUICKSCOPE AI

This is **not** a generic SaaS landing page.  
It is designed for **crypto-native, Solana-native traders**.

---

## Core Sections

The landing page is structured as a single, high-impact experience with the following sections:

1. **Hero**  
   Immediate value proposition with animated backgrounds and direct CTA to launch the app.

2. **Real-Time Speed Advantage**  
   Visual explanation of Pump.fun monitoring and low-latency token discovery.

3. **Safety & Signals**  
   RugCheck integration, authority flags, holder distribution, and risk indicators.

4. **TokenSage AI**  
   AI-powered structured token analysis, alpha scoring, and risk assessment.

5. **Trading Terminal Integrations**  
   One-click access to GMGN, Photon, Alph, and Nova.

6. **Tier System**  
   Clear presentation of FREE, PRO, ALPHA, and WHITELISTED access levels.

7. **Architecture & Trust**  
   Engineering-focused credibility. No fake testimonials.

8. **Final Call To Action**  
   Minimal, high-conviction transition to the app.

---

## Tech Stack

- **Framework** → Next.js 16.1 (App Router)
- **Frontend** → React 19.2
- **Styling** → Tailwind CSS 4
- **UI Components** → shadcn/ui
- **Animations** → Framer Motion 12.23
- **Icons** → Lucide React
- **Language** → TypeScript (full type safety)

No CMS.  
No third-party form builders.  
No marketing bloat.

---

## Project Structure

```

qsai-landing/
├── app/
│   ├── (landing)/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── globals.css
├── components/
│   └── landing/
│       ├── Hero.tsx
│       ├── SpeedSection.tsx
│       ├── SafetySection.tsx
│       ├── TokenSageSection.tsx
│       ├── TiersSection.tsx
│       ├── ArchitectureSection.tsx
│       └── Footer.tsx
├── lib/
│   └── landing/
│       └── motion.ts
├── public/
│   └── assets/
└── README.md

````

Component boundaries are intentional.  
Animations are isolated and reusable.  
Nothing is accidental.

---

## Development

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
````

### Run Locally

```bash
npm run dev
```

Open:

👉 [http://localhost:3000](http://localhost:3000)

---

## Deployment

The landing page is designed for **Vercel** deployment.

Recommended setup:

* `qsai.fun` → this repository
* `app.qsai.fun` → main application repository

### Deploy Steps

1. Push repository to GitHub
2. Connect repo to Vercel
3. Set domain to `qsai.fun`
4. Deploy

No environment variables required.

---

## Design Philosophy

* Dark, Solana-native aesthetic
* Motion used for hierarchy, not decoration
* Speed is communicated visually
* Confidence without exaggeration
* Traders are assumed to be intelligent and impatient

If something feels decorative, it gets removed.

---

## Disclaimer

This landing page is for informational purposes only.

Cryptocurrency trading involves significant risk.
QUICKSCOPE AI does not provide financial advice.
Users are fully responsible for their own decisions.

---

## Related Repositories

* **QUICKSCOPE AI App** → [https://app.qsai.fun](https://app.qsai.fun)

---

## License

MIT License