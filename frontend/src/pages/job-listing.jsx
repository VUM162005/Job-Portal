import { getJobs } from "@/api/apiJobs"
import useFetch from "@/hooks/use-fetch";
import { useEffect } from "react"

const JobListing = () => {
    const {
        fn: fnJobs,
        data: dataJobs,
        loading: loadingJobs,
        error: errorJobs
    } = useFetch(getJobs, {});

    console.log(dataJobs);

    useEffect(() => {
        fnJobs();
    }, [])

    return (
        <div>
            <h1>JobListing</h1>
        </div>
    )
}
export default JobListing