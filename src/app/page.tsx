// Create a modern homepage for "MysticVeda SpeakSmart".
// This is an English learning platform for Indian users.
//
// Requirements:
// - Modern premium UI
// - Tailwind CSS
// - Mobile responsive
// - Gradient background
// - Show brand name "MysticVeda SpeakSmart"
// - Add heading "Improve Your English Daily"
// - Add subtitle:
//   "Learn practical English words used in offices, interviews, and daily conversations in India."
//
// Add 3 beautiful level cards:
// 1. Beginner
// 2. Intermediate
// 3. Advanced
//
// Each card should have:
// - icon
// - short description
// - start learning button
//
// Add soft spiritual premium design feeling.
// Use rounded cards and clean spacing.

import Image from "next/image";
import Link from "next/link";

const levels = [
  {
    title: "Beginner",
    href: "/beginner",
    icon: "🌱",
    description:
      "Start with everyday words and simple sentences used in real Indian conversations.",
    gradient: "from-emerald-100 via-teal-50 to-white",
    ring: "ring-emerald-200/60",
    button:
      "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600",
  },
  {
    title: "Intermediate",
    href: "/intermediate",
    icon: "✨",
    description:
      "Speak smartly in offices and meetings with professional phrases and clear pronunciation.",
    gradient: "from-amber-100 via-orange-50 to-white",
    ring: "ring-amber-200/60",
    button:
      "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600",
  },
  {
    title: "Advanced",
    href: "/advanced",
    icon: "🪔",
    description:
      "Master interviews, presentations, and refined vocabulary used by confident speakers.",
    gradient: "from-violet-100 via-fuchsia-50 to-white",
    ring: "ring-violet-200/60",
    button:
      "bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-violet-100">
      {/* Soft spiritual glow accents */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-32 h-96 w-96 rounded-full bg-violet-300/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-12 sm:py-16 md:py-20">
        {/* Brand */}
        <div className="mb-10 flex items-center gap-3 rounded-full border border-white/60 bg-white/50 px-4 py-2 shadow-sm backdrop-blur-md">
          <Image
            src="/logo.png"
            alt="MysticVeda SpeakSmart logo"
            width={40}
            height={40}
            priority
            className="h-10 w-10 rounded-full object-contain"
          />
          <span className="bg-gradient-to-r from-amber-600 via-rose-600 to-violet-600 bg-clip-text text-sm font-semibold tracking-wide text-transparent sm:text-base">
            MysticVeda SpeakSmart
          </span>
        </div>

        {/* Hero */}
        <h1 className="text-center text-4xl font-extrabold leading-tight tracking-tight text-slate-800 sm:text-5xl md:text-6xl">
          Improve Your{" "}
          <span className="bg-gradient-to-r from-amber-500 via-rose-500 to-violet-600 bg-clip-text text-transparent">
            English
          </span>{" "}
          Daily
        </h1>

        <p className="mt-6 max-w-2xl text-center text-base leading-relaxed text-slate-600 sm:text-lg">
          Learn practical English words used in offices, interviews, and daily
          conversations in India.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/beginner"
            className="rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-violet-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-200 transition-transform hover:scale-105 sm:text-base"
          >
            Start Learning
          </Link>
          <Link
            href="#levels"
            className="rounded-full border border-slate-200 bg-white/70 px-7 py-3 text-sm font-semibold text-slate-700 backdrop-blur transition-colors hover:bg-white sm:text-base"
          >
            Explore Levels
          </Link>
        </div>

        {/* Level Cards */}
        <section
          id="levels"
          className="mt-16 grid w-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3"
        >
          {levels.map((level) => (
            <article
              key={level.title}
              className={`group relative flex flex-col rounded-3xl bg-gradient-to-br ${level.gradient} p-7 shadow-xl ring-1 ${level.ring} backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-3xl shadow-inner">
                {level.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-800">
                {level.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                {level.description}
              </p>

              <Link
                href={level.href}
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full ${level.button} px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform group-hover:scale-105`}
              >
                Start Learning
                <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </section>

        {/* Footer note */}
        <p className="mt-16 text-center text-xs text-slate-500 sm:text-sm">
          🪷 Crafted with calm focus · Speak with confidence, every day.
        </p>
      </div>
    </main>
  );
}
