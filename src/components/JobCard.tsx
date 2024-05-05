import {FC} from "react";
import {IJobData} from "../interfaces.ts";
import styles from "./JobCard.module.css"

interface IProps {
    jobData: IJobData;
}

const JobCard: FC<IProps> =  ({jobData}) =>  {
    return (
      <div className={styles.jobCardContainer}>
          <p className={styles.postingTime}>Posted 10 days ago</p>
          <div className={styles.companyHighlightsContainer}>
              <img width={50} height={50} className={styles.companyLogo} src={jobData.logoUrl} alt={jobData.logoUrl}/>
              <div className={styles.companyHighlights}>
                  <p>{jobData.companyName}</p>
                  <p>{jobData.jobRole}</p>
                  <p>{jobData.location}</p>
              </div>
          </div>
      </div>
    );
}

export default JobCard;