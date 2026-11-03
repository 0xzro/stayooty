# StayOoty – Gokul Groups website starter

A free-to-start Next.js website starter for a premium hotel brand. Built with Next.js, React, TypeScript and plain CSS.

## Included
- Responsive premium homepage
- Mobile navigation
- Date and guest selector
- Room showcase cards
- Sample room selection interaction
- Contact and footer sections
- SEO metadata

## Important before going live
This is a **front-end starter / visual MVP**, not yet a live reservation system. The date selector currently validates the search in the browser only. It does not check hotel inventory, create a reservation, collect payment, send WhatsApp messages, or store guest data. The room prices and some imagery are illustrative placeholders. Replace them with approved hotel content and actual rates.

To turn this into a production booking platform, add:
1. A database and server-side booking API (for example Supabase).
2. Room inventory and date-overlap checks in database transactions to prevent double bookings.
3. Admin authentication and roles.
4. Payment gateway integration (Razorpay account and merchant approval required).
5. Email / WhatsApp notification provider.
6. Privacy policy, terms, cancellation and refund rules.

## Run locally
Install Node.js LTS, then:

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Publish with GitHub + Vercel
1. Create a new GitHub repository, e.g. `stayooty-website`.
2. Extract this ZIP and upload all project files to the repository root.
3. Sign in to Vercel with GitHub.
4. Select **Add New → Project**, import `stayooty-website`.
5. Keep the detected Next.js settings and select **Deploy**.
6. Every push to the connected branch will trigger a new deployment.

No environment variables are required for this starter.

## Free-tier notes
GitHub public repositories and Vercel Hobby can be used to start a personal/non-commercial prototype. Check the current Vercel plan terms before using Hobby for a hotel business or commercial production site. A real booking product may need paid database, email, WhatsApp, payment or hosting services as usage grows.
