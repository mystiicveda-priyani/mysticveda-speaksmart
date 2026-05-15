import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Lazily create the Supabase client.
 * This avoids throwing at module-load / build time when env vars
 * are not present (e.g. during `next build` static analysis).
 */
let _supabase: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (_supabase) return _supabase;
  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Supabase environment variables are missing. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local."
    );
  }
  _supabase = createClient(supabaseUrl, supabaseKey);
  return _supabase;
}

// Backwards-compatible named export.
// Using a Proxy so any property access lazily initializes the client.
export const supabase: SupabaseClient = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    const client = getSupabase();
    const value = (client as unknown as Record<string | symbol, unknown>)[
      prop as string
    ];
    return typeof value === "function" ? value.bind(client) : value;
  },
});

export type WordRow = {
  id: number | string;
  word: string;
  meaning: string;
  usage: string;
  example: string;
  level: "beginner" | "intermediate" | "advanced";
};

/**
 * Fetch words for a given level from the Supabase "words" table,
 * then return up to `count` randomly-selected items.
 */
export async function fetchRandomWords(
  level: WordRow["level"],
  count = 5
): Promise<WordRow[]> {
  const client = getSupabase();
  const { data, error } = await client
    .from("words")
    .select("*")
    .eq("level", level);

  if (error) {
    throw new Error(error.message);
  }

  const rows = (data ?? []) as WordRow[];
  // Fisher–Yates shuffle, then take `count`
  const shuffled = [...rows];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}
