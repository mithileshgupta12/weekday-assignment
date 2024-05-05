import {useCallback, useEffect, useState} from "react";
import JobCard from "./components/JobCard.tsx";
import styles from "./App.module.css"
import {IFilters, IJobData} from "./interfaces.ts";
import Filters from "./components/Filters.tsx";
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
    // State
    const [jobs, setJobs] = useState<IJobData[]>([]);
    const [filteredJobs, setFilteredJobs] = useState<IJobData[]>([]);
    const [appFilters, setAppFilters] = useState<IFilters>({
        role: "",
        companyName: "",
        experience: "",
        isRemote: "",
        minBasePay: "",
        numEmployees: ""
    });

    // Functions
    const setFilters = (filters: IFilters) => {
        setAppFilters({
            role: filters.role,
            companyName: filters.companyName,
            experience: filters.experience,
            isRemote: filters.isRemote,
            minBasePay: filters.minBasePay,
            numEmployees: filters.numEmployees,
        });
    }

    const handleFilters = useCallback(() => {
        let filteredJobsCopy = [...jobs];

        if (appFilters.role) {
            filteredJobsCopy = filteredJobsCopy.filter(job => job.jobRole === appFilters.role);
        }

        if (appFilters.isRemote === "yes") {
            filteredJobsCopy = filteredJobsCopy.filter(job => job.location === "remote");
        } else if (appFilters.isRemote === "no") {
            filteredJobsCopy = filteredJobsCopy.filter(job => job.location !== "remote");
        }

        if (appFilters.companyName) {
            filteredJobsCopy = filteredJobsCopy.filter(job => job.companyName.toLowerCase() === appFilters.companyName.toLowerCase());
        }

        if (appFilters.minBasePay === "1") {
            filteredJobsCopy = filteredJobsCopy.filter(job => job.minJdSalary != null && job.minJdSalary >= 0 && job.minJdSalary <= 50);
        }

        if (appFilters.minBasePay === "2") {
            filteredJobsCopy = filteredJobsCopy.filter(job => job.minJdSalary != null && job.minJdSalary >= 50 && job.minJdSalary <= 100);
        }

        if (appFilters.minBasePay === "3") {
            filteredJobsCopy = filteredJobsCopy.filter(job => job.minJdSalary != null && job.minJdSalary >= 100);
        }

        if (appFilters.experience) {
            if (appFilters.experience === "1") {
                filteredJobsCopy = filteredJobsCopy.filter(job => job.minExp != null && job.minExp >= 0 && job.minExp <= 3);
            }
            if (appFilters.experience === "2") {
                filteredJobsCopy = filteredJobsCopy.filter(job => job.minExp != null && job.minExp >= 3 && job.minExp <= 5);
            }
            if (appFilters.experience === "3") {
                filteredJobsCopy = filteredJobsCopy.filter(job => job.minExp != null && job.minExp > 5);
            }
        }

        setFilteredJobs(filteredJobsCopy);
    }, [appFilters, jobs]);


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

        const response =  await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', requestOptions);
        const data = await response.json();
        setJobs((prevJobs) => {
            return [...prevJobs, ...data.jdList];
        });
    }

    // Lifecycle functions
    useEffect(() => {
        fetchJobs(0, 10);
    }, []);

    useEffect(() => {
       handleFilters();
    }, [jobs]);

    useEffect(() => {
        handleFilters();
    }, [appFilters]);

    return (
        <div className={styles.container}>
            <Filters getFilters={setFilters}/>
            <div>
                <InfiniteScroll
                    dataLength={jobs.length}
                    next={() => {
                        fetchJobs(0, 10)
                    }}
                    hasMore={true}
                    loader={<p>Loading...</p>}
                    endMessage={<p>No more data to load.</p>}
                >
                    <div className={styles.jobsContainer}>
                        {filteredJobs.map((individualJob, index) => (
                            <JobCard key={index} jobData={individualJob}/>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default App;
