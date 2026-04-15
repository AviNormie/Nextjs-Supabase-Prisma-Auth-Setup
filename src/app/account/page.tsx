import { createSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    redirect("/login");
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-10 dark:border-white/10 dark:bg-zinc-950">
        <h1 className="text-2xl font-semibold tracking-tight">Account</h1>
        <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
          You are signed in.
        </p>

        <div className="mt-8 rounded-2xl border border-black/10 bg-zinc-50 p-6 text-sm dark:border-white/10 dark:bg-black/40">
          <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-[110px_1fr]">
            <div className="text-zinc-500 dark:text-zinc-400">User ID</div>
            <div className="font-mono text-xs break-all">{data.user.id}</div>
            <div className="text-zinc-500 dark:text-zinc-400">Email</div>
            <div>{data.user.email ?? "—"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

