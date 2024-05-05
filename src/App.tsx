import {useEffect, useState} from "react";
import JobCard from "./components/JobCard.tsx";
import styles from "./App.module.css"
import {IJobData} from "./interfaces.ts";
import Filters from "./components/Filters.tsx";

function App() {
    // State
    const [jobs, setJobs] = useState<IJobData[]>([]);
    const [loading, setLoading] = useState(false);

    // Functions
    const fetchJobs = async () => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "limit": 10,
            "offset": 0,
        })

        const requestOptions = {
            method: "POST",
            headers,
            body,
        }

        return await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', requestOptions);
    }

    // Lifecycle functions
    useEffect(() => {
        setLoading(true);

        fetchJobs().then(data => {
            return data.json();
        }).then(data => {
            setJobs(data.jdList);
        }).catch(() => {
            console.error("Some error occurred while fetching data");
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        <div className={styles.container}>
            <Filters />
            <div className={styles.jobsContainer}>
                {/*<pre>{JSON.stringify(jobs, null, 4)}</pre>*/}
                {loading ? "Loading..." : jobs.map((individualJob) => {
                    return <JobCard key={individualJob.jdUid} jobData={individualJob}/>
                })}
            </div>
        </div>
    )
}

export default App
