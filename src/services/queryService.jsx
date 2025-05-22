import { supabase } from "../lib/supabaseClient";

export async function fetchProductsByQuery(sqlQuery) {
  if (!sqlQuery) return [];

  const { data, error } = await supabase.rpc("raw", { q: sqlQuery });

  if (error) {
    console.error("Supabase fetch error:", error.message);
    return [];
  }

  const result = data?.[0]?.result;
  return Array.isArray(result) ? result : [];
}