import { supabase } from "$lib/db";

export async function load() {
  const { data } = await supabase.from("nations").select();
  return {
    nations: data ?? [],
  };
}