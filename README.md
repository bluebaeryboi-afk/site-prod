# RobloxDev Coach — Landing Page

A Next.js 14 landing page for Roblox game dev coaching. All bookings go through a Tally form.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** — dark gaming aesthetic
- **Tally** — booking form (external link)
- **TypeScript** throughout

## Setup

### 1. Install

```bash
npm install && npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 2. Environment variables

```bash
cp .env.local.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SESSION_PRICE_DISPLAY` | Price shown on the page, e.g. `$75` |
| `NEXT_PUBLIC_APP_URL` | Your domain |

## Customise

- **Price**: `NEXT_PUBLIC_SESSION_PRICE_DISPLAY` in `.env.local`
- **Tally form URL**: search `tally.so/r/kd0A2Z` and replace with your form URL
- **Your photo**: replace placeholder in `components/About.tsx`
- **Testimonials**: edit array in `components/Testimonials.tsx`
- **Brand name**: search `DevCoach` and replace

## Deploy

Push to GitHub → import on [Vercel](https://vercel.com). Add env vars in Vercel dashboard.
