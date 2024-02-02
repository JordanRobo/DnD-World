import { supabase } from "$lib/db";

export async function load() {
    const { data: monsters, error } = await supabase
    .from('monsters')
    .select('*');
    
    return { 
        monsters: monsters ?? [],
        error
    }
}
