import { supabase } from "$lib/db";

export async function load({ params }) {
    const { nation } = params;
    const { data, error } = await supabase
        .from('nations')
        .select('* , towns(*)')
        .eq('name', nation);

    if (error) {
        console.error('Error fetching data:', error);
        return { status: 500, body: error };
    }

    if (!data || data.length === 0) {
        return { status: 404 };
    }

    return {
        status: 200,
        nation: data[0],
    };
}