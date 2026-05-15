import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

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
  const { data, error } = await supabase
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
