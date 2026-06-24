import supabaseClient from "../../utils/supabase";

export async function getJobs(token) {
    const supabase = await supabaseClient(token);
    const res = await supabase.from("jobs").select("*");

    const { data, error } = await res;

    if (error) {
        console.error('error fetching jobs:', error);
        return null;
    }

    return data;
}
export default getJobs;