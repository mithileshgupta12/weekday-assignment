import {useEffect} from "react";

function App() {
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
    fetchJobs().then(jobs => {
      return jobs.json();
    }).then(jobs => {
      console.log(jobs);
    });
  }, []);

  return (
    <>
    </>
  )
}

export default App
