import Link from "next/link";

export const metadata = {
  title: "Page Not Found — MysticVeda SpeakSmart",
  description:
    "The page you are looking for doesn't exist. Continue your English learning journey from the homepage.",
};

export default function NotFound() {
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-amber-50 px-6 py-20">
      {/* Decorative gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-200/60 to-purple-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-amber-200/60 to-rose-200/40 blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white/70 px-4 py-1.5 text-xs font-medium tracking-wide text-indigo-700 ring-1 ring-indigo-200/60 backdrop-blur">
          ✨ MysticVeda SpeakSmart
        </div>

        <h1 className="bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-500 bg-clip-text text-7xl font-bold tracking-tight text-transparent sm:text-8xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-slate-800 sm:text-3xl">
          This page took a meditation break 🧘
        </h2>

        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          The page you are looking for doesn&apos;t exist or may have moved.
          Don&apos;t worry — your English learning journey continues from the
          homepage.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:from-indigo-700 hover:to-purple-700 sm:w-auto"
          >
            ← Back to Home
          </Link>
          <Link
            href="/beginner"
            className="inline-flex w-full items-center justify-center rounded-full bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 backdrop-blur transition hover:bg-white sm:w-auto"
          >
            Start with Beginner →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Link
            href="/beginner"
            className="group rounded-2xl bg-white/70 p-4 ring-1 ring-emerald-200/60 backdrop-blur transition hover:bg-white"
          >
            <div className="text-2xl">🌱</div>
            <div className="mt-1 text-sm font-semibold text-slate-800">
              Beginner
            </div>
          </Link>
          <Link
            href="/intermediate"
            className="group rounded-2xl bg-white/70 p-4 ring-1 ring-amber-200/60 backdrop-blur transition hover:bg-white"
          >
            <div className="text-2xl">✨</div>
            <div className="mt-1 text-sm font-semibold text-slate-800">
              Intermediate
            </div>
          </Link>
          <Link
            href="/advanced"
            className="group rounded-2xl bg-white/70 p-4 ring-1 ring-purple-200/60 backdrop-blur transition hover:bg-white"
          >
            <div className="text-2xl">🔮</div>
            <div className="mt-1 text-sm font-semibold text-slate-800">
              Advanced
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
