// Create a beautiful beginner English learning page.
//
// Requirements:
// - Heading: Beginner English Words
// - Show 5 word cards
// - Each card should contain:
//   - English word
//   - Meaning
//   - Indian usage sentence
//   - Simple example sentence
//
// Add a "Load New Words" button.
//
// Use dummy data for now.
//
// Use Tailwind CSS.
// Modern clean UI.
// Mobile responsive.
// Soft premium design.

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Word = {
  word: string;
  meaning: string;
  usage: string;
  example: string;
};

const beginnerWordSets: Word[][] = [
  [
    {
      word: "Happy",
      meaning: "Feeling good or pleased",
      usage: "I am happy after getting my first salary.",
      example: "She looks happy today.",
    },
    {
      word: "Busy",
      meaning: "Having a lot of work to do",
      usage: "Mumbai roads are very busy in the morning.",
      example: "He is busy with his studies.",
    },
    {
      word: "Hungry",
      meaning: "Wanting to eat food",
      usage: "After class, I feel very hungry.",
      example: "The baby is hungry.",
    },
    {
      word: "Late",
      meaning: "After the expected time",
      usage: "Sorry, I am late because of traffic.",
      example: "Please don't be late.",
    },
    {
      word: "Help",
      meaning: "To do something useful for someone",
      usage: "Can you help me with my homework, bhaiya?",
      example: "I want to help you.",
    },
  ],
  [
    {
      word: "Tired",
      meaning: "Feeling the need to rest",
      usage: "I am very tired after the long train journey.",
      example: "She is tired after work.",
    },
    {
      word: "Friend",
      meaning: "A person you like and trust",
      usage: "My school friend is coming to Delhi this weekend.",
      example: "He is my best friend.",
    },
    {
      word: "Office",
      meaning: "A place where people work",
      usage: "I go to office by metro every day.",
      example: "Her office is near the park.",
    },
    {
      word: "Cheap",
      meaning: "Low in price",
      usage: "Vegetables are cheap in the local market.",
      example: "This shirt is very cheap.",
    },
    {
      word: "Sweet",
      meaning: "Having a sugary taste; very kind",
      usage: "Aunty made sweet kheer for the festival.",
      example: "The mango is sweet.",
    },
  ],
];

export default function BeginnerPage() {
  const [setIndex, setSetIndex] = useState(0);
  const words = useMemo(
    () => beginnerWordSets[setIndex % beginnerWordSets.length],
    [setIndex]
  );

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-amber-50">
      {/* Soft glow accents */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-200/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-10 sm:py-14">
        {/* Top nav */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:bg-white"
          >
            <span aria-hidden>←</span> Home
          </Link>
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
            Level 1
          </span>
        </div>

        {/* Heading */}
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-800 sm:text-5xl">
            Beginner{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              English Words
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Start with everyday words used in real Indian conversations — at
            home, school, and outside.
          </p>
        </header>

        {/* Word cards */}
        <section className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {words.map((w) => (
            <article
              key={w.word}
              className="group flex flex-col rounded-3xl border border-white/60 bg-white/70 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-800">{w.word}</h2>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Beginner
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

        {/* Load new words */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setSetIndex((i) => i + 1)}
            className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition-transform hover:scale-105 sm:text-base"
          >
            🔄 Load New Words
          </button>
        </div>
      </div>
    </main>
  );
}
