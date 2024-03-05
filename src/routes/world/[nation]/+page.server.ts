import { supabase } from '$lib/db';

export async function load({params}) {
    const { nation } = params;
    const { data } = await supabase
        .from('nations')
        .select('* , towns(*)')
        .eq('url', nation);
   
        return {
            nation: data ? data[0] : null,
        };
}