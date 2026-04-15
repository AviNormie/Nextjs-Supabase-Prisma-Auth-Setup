## Next.js + Supabase Auth + Prisma

App Router starter using:
- Supabase Auth (SSR) with `@supabase/supabase-js` + `@supabase/ssr`
- Cookie-based session refresh via `src/middleware.ts`
- Prisma ORM configured for Supabase Postgres (pooling + direct URL)

## Setup

### Environment variables

The project includes `.env.local` with your Supabase URL/key and Prisma connection strings.

- **Important**: Replace `[YOUR-PASSWORD]` inside `DATABASE_URL` and `DIRECT_URL` with your Supabase DB password.

### Install and run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Supabase Auth flow

- Visit `/login` and enter your email.
- Supabase sends a magic link.
- The link redirects to `/auth/callback`, which exchanges the auth code for a session.
- `/account` is a protected page (redirects to `/login` if signed out).

## Prisma

Schema: `prisma/schema.prisma`

Generate client:

```bash
npx prisma generate
```

Run migrations (after setting DB password):

```bash
npx prisma migrate dev
```

## Notes

- This project pins Prisma to v6 because Prisma v7+ changed datasource URL handling.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
