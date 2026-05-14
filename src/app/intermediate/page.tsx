// Create a beautiful intermediate English learning page.
//
// Requirements:
// - Heading: Intermediate English Words
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

const intermediateWordSets: Word[][] = [
  [
    {
      word: "Deadline",
      meaning: "The latest time by which something must be done",
      usage: "Sir gave us a tight deadline to submit the project.",
      example: "The deadline for the report is Friday.",
    },
    {
      word: "Escalate",
      meaning: "To raise an issue to a higher level for action",
      usage: "If the client doesn't reply, we will escalate to the manager.",
      example: "Please escalate this complaint to the supervisor.",
    },
    {
      word: "Flexible",
      meaning: "Able to change or adjust easily",
      usage: "Our office timings are flexible after the pandemic.",
      example: "She has a flexible schedule.",
    },
    {
      word: "Follow up",
      meaning: "To check progress after first contact",
      usage: "I will follow up with HR about the joining date.",
      example: "Please follow up on this email tomorrow.",
    },
    {
      word: "Briefly",
      meaning: "In a short and clear way",
      usage: "Briefly explain the issue before we start the meeting.",
      example: "He spoke briefly about the new policy.",
    },
  ],
  [
    {
      word: "Priority",
      meaning: "Something more important than others",
      usage: "Client delivery is our top priority this week.",
      example: "Family is my first priority.",
    },
    {
      word: "Update",
      meaning: "The latest information about something",
      usage: "Please share the status update by end of day.",
      example: "Give me an update on the task.",
    },
    {
      word: "Approach",
      meaning: "A way of dealing with something",
      usage: "We need a different approach to handle this client.",
      example: "Her approach to studies is very smart.",
    },
    {
      word: "Confident",
      meaning: "Sure about your ability",
      usage: "Speak in English daily and you will feel confident.",
      example: "He is confident about the interview.",
    },
    {
      word: "Reschedule",
      meaning: "To change the time of a planned event",
      usage: "Can we reschedule the meeting to Monday?",
      example: "The flight was rescheduled to evening.",
    },
  ],
];

export default function IntermediatePage() {
  const [setIndex, setSetIndex] = useState(0);
  const words = useMemo(
    () => intermediateWordSets[setIndex % intermediateWordSets.length],
    [setIndex]
  );

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-10 sm:py-14">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:bg-white"
          >
            <span aria-hidden>←</span> Home
          </Link>
          <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-700">
            Level 2
          </span>
        </div>

        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-800 sm:text-5xl">
            Intermediate{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              English Words
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Practical words used in offices, meetings, and professional
            conversations across India.
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
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                  Intermediate
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
            className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-200 transition-transform hover:scale-105 sm:text-base"
          >
            🔄 Load New Words
          </button>
        </div>
      </div>
    </main>
  );
}
