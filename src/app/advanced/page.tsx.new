// Fetch advanced words from Supabase table named "words".
// Only fetch rows where level = "advanced".
// Show 5 random words.
// Use useEffect and useState. Loading state + "Load New Words" button.

"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { fetchRandomWords, type WordRow } from "@/lib/supabase";

export default function AdvancedPage() {
  const [words, setWords] = useState<WordRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadWords = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchRandomWords("advanced", 5);
      setWords(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load words.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadWords();
  }, [loadWords]);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-violet-50 via-fuchsia-50 to-indigo-50">
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-200/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-10 sm:py-14">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:bg-white"
          >
            <span aria-hidden>←</span> Home
          </Link>
          <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-700">
            Level 3
          </span>
        </div>

        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-800 sm:text-5xl">
            Advanced{" "}
            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              English Words
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Refined vocabulary used by confident speakers in interviews,
            presentations, and leadership.
          </p>
        </header>

        {error && (
          <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-rose-200 bg-rose-50/80 p-5 text-center text-sm text-rose-700 shadow-sm">
            ⚠️ {error}
          </div>
        )}

        {loading && !error ? (
          <section className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-64 animate-pulse rounded-3xl border border-white/60 bg-white/50 p-6 shadow-lg backdrop-blur-md"
              >
                <div className="h-6 w-24 rounded-full bg-violet-100" />
                <div className="mt-4 h-4 w-32 rounded bg-slate-200" />
                <div className="mt-2 h-4 w-full rounded bg-slate-200" />
                <div className="mt-6 h-4 w-3/4 rounded bg-slate-200" />
                <div className="mt-2 h-4 w-2/3 rounded bg-slate-200" />
              </div>
            ))}
          </section>
        ) : (
          !error &&
          words.length === 0 && (
            <p className="mt-12 text-center text-slate-500">
              No advanced words found in the database yet.
            </p>
          )
        )}

        {!loading && !error && words.length > 0 && (
          <section className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {words.map((w) => (
              <article
                key={w.id}
                className="group flex flex-col rounded-3xl border border-white/60 bg-white/70 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-800">
                    {w.word}
                  </h2>
                  <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                    Advanced
                  </span>
                </div>

                <p className="mt-3 text-sm font-medium text-slate-500">
                  Meaning
                </p>
                <p className="text-base text-slate-700">{w.meaning}</p>

                <p className="mt-4 text-sm font-medium text-slate-500">
                  Indian Usage
                </p>
                <p className="text-base italic text-slate-700">“{w.usage}”</p>

                <p className="mt-4 text-sm font-medium text-slate-500">
                  Example
                </p>
                <p className="text-base text-slate-700">{w.example}</p>
              </article>
            ))}
          </section>
        )}

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={loadWords}
            disabled={loading}
            className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
          >
            {loading ? "Loading..." : "🔄 Load New Words"}
          </button>
        </div>
      </div>
    </main>
  );
}
