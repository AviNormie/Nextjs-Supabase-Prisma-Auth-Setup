export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-10 dark:border-white/10 dark:bg-zinc-950">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Next.js + Supabase Auth + Prisma
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
          App Router project wired to Supabase Auth (SSR + middleware session
          refresh) and Prisma configured for Supabase Postgres.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            href="/login"
          >
            Sign in
          </a>
          <a
            className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 px-6 text-sm font-medium text-zinc-950 hover:bg-zinc-50 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
            href="/account"
          >
            Account (protected)
          </a>
        </div>
      </div>
    </div>
  );
}
