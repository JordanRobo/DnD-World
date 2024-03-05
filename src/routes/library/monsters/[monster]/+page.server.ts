import { supabase } from "$lib/db";

export async function load({ params }) {
    const { monster } = params;
    const { data, error } = await supabase
        .from('monsters')
        .select('*')
        .eq('url', monster);

    if (error) {
        console.error('Error fetching data:', error);
        return { status: 500, body: error };
    }

    if (!data || data.length === 0) {
        return { status: 404 };
    }

    return {
        status: 200,
        monster: data[0],
    };
}