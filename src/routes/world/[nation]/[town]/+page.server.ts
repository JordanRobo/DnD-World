import { supabase } from '$lib/db';

export async function load({params}) {
    const { town } = params;
    const { data } = await supabase
        .from('towns')
        .select('*, shops(*)')
        .eq('url', town );
        
        return {
            town: data ? data[0] : null,
        };
}