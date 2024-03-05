import { supabase } from '$lib/db';

export async function load() {
    const { data } = await supabase
    .from('campaign')
    .select('*');
   
        return {
            campaign: data ?? [],
        };
}