# apexdgsolution — marketing site

Marketing site for **apexdgsolution**, built with [Next.js](https://nextjs.org/) 15 (App Router), TypeScript, and Tailwind CSS v4.

Official logo: [`public/logo.png`](public/logo.png) (header, footer, and favicon).

## Features

- Home, About, Services & pricing, Contact
- Legal hub at `/policies` plus Refund, Terms, Privacy, and Delivery & service policy pages
- Central configuration in [`lib/site-config.ts`](lib/site-config.ts) (company name, contact, services, policy date)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deployment

Deploy to [Vercel](https://vercel.com) or any Node host that supports Next.js.
