import { useEffect, useState } from "react";
import JobCard from "./components/JobCard.tsx";
import styles from "./App.module.css"
import { IJobData } from "./interfaces.ts";
import Filters from "./components/Filters.tsx";
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
    // State
    const [jobs, setJobs] = useState<IJobData[]>([]);
    const [, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true); // State to manage whether there are more items to load

    // Functions
    const fetchJobs = async (offset: number, limit: number) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "limit": limit,
            "offset": offset,
        })

        const requestOptions = {
            method: "POST",
            headers,
            body,
        }

        return await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', requestOptions);
    }

    const handleFetching = () => {
        setLoading(true);
        const offset = jobs.length;

        fetchJobs(offset, 10).then(data => {
            return data.json();
        }).then(data => {
            if (data.jdList.length === 0) {
                setHasMore(false);
            } else {
                setJobs(prevJobs => [...prevJobs, ...data.jdList]);
            }
        }).catch(() => {
            console.error("Some error occurred while fetching data");
        }).finally(() => {
            setLoading(false);
        });
    }

    // Lifecycle functions
    useEffect(() => {
        handleFetching();
    }, []);

    return (
        <div className={styles.container}>
            <Filters />
            <div>
                <InfiniteScroll
                    dataLength={jobs.length}
                    next={handleFetching}
                    hasMore={hasMore}
                    loader={<p>Loading...</p>}
                    endMessage={<p>No more data to load.</p>}
                >
                    <div className={styles.jobsContainer}>
                        {jobs.map((individualJob, index) => (
                            <JobCard key={index} jobData={individualJob}/>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default App;
