// Create a beautiful advanced English learning page.
//
// Requirements:
// - Heading: Advanced English Words
// - Show 5 word cards
// - Each card should contain:
//   - English word
//   - Meaning
//   - Indian usage sentence
//   - Simple example sentence
//
// Add a "Load New Words" button.
// Tailwind CSS, modern clean UI, mobile responsive, soft premium design.

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Word = {
  word: string;
  meaning: string;
  usage: string;
  example: string;
};

const advancedWordSets: Word[][] = [
  [
    {
      word: "Collaboration",
      meaning: "Working together to achieve a common goal",
      usage:
        "Our success depends on collaboration between the Delhi and Bangalore teams.",
      example: "The project was a collaboration between two companies.",
    },
    {
      word: "Strategic",
      meaning: "Carefully planned for long-term advantage",
      usage: "We took a strategic decision to enter the South Indian market.",
      example: "She made a strategic move in her career.",
    },
    {
      word: "Negotiation",
      meaning: "A discussion to reach an agreement",
      usage: "Salary negotiation went well in my interview with the MNC.",
      example: "The negotiation ended in a deal.",
    },
    {
      word: "Articulate",
      meaning: "To express thoughts clearly and effectively",
      usage: "He can articulate complex ideas easily in client meetings.",
      example: "She is very articulate while presenting.",
    },
    {
      word: "Leverage",
      meaning: "To use something to maximum advantage",
      usage: "We can leverage our experience to win bigger projects.",
      example: "He leveraged his network to find a new job.",
    },
  ],
  [
    {
      word: "Initiative",
      meaning: "The ability to act without being told",
      usage: "Taking initiative at work helped her get a promotion.",
      example: "He showed great initiative in the project.",
    },
    {
      word: "Mitigate",
      meaning: "To make something less severe",
      usage: "We must mitigate the risks before launching in tier-2 cities.",
      example: "The new policy will mitigate the issue.",
    },
    {
      word: "Comprehensive",
      meaning: "Complete and including everything",
      usage:
        "HR shared a comprehensive guide for new joiners across all locations.",
      example: "The report is very comprehensive.",
    },
    {
      word: "Articulation",
      meaning: "The clear expression of ideas in speech",
      usage: "Good articulation creates a strong impression in interviews.",
      example: "Her articulation during the speech was perfect.",
    },
    {
      word: "Pragmatic",
      meaning: "Practical and realistic, not idealistic",
      usage:
        "We need a pragmatic approach to handle the tight project timelines.",
      example: "She has a pragmatic view of life.",
    },
  ],
];

export default function AdvancedPage() {
  const [setIndex, setSetIndex] = useState(0);
  const words = useMemo(
    () => advancedWordSets[setIndex % advancedWordSets.length],
    [setIndex]
  );

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

        <section className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {words.map((w) => (
            <article
              key={w.word}
              className="group flex flex-col rounded-3xl border border-white/60 bg-white/70 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-800">{w.word}</h2>
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                  Advanced
                </span>
              </div>

              <p className="mt-3 text-sm font-medium text-slate-500">Meaning</p>
              <p className="text-base text-slate-700">{w.meaning}</p>

              <p className="mt-4 text-sm font-medium text-slate-500">
                Indian Usage
              </p>
              <p className="text-base italic text-slate-700">“{w.usage}”</p>

              <p className="mt-4 text-sm font-medium text-slate-500">Example</p>
              <p className="text-base text-slate-700">{w.example}</p>
            </article>
          ))}
        </section>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setSetIndex((i) => i + 1)}
            className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition-transform hover:scale-105 sm:text-base"
          >
            🔄 Load New Words
          </button>
        </div>
      </div>
    </main>
  );
}
