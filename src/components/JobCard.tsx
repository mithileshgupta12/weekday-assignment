import {FC} from "react";
import {IJobData} from "../interfaces.ts";
import styles from "./JobCard.module.css"

interface IProps {
    jobData: IJobData;
}

const JobCard: FC<IProps> = ({jobData}) => {
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
            <p className={styles.genericText}>Estimated
                Salary: {jobData.minJdSalary} {jobData.minJdSalary ? "k" : ""} {(jobData.minJdSalary && jobData.maxJdSalary) ? "-" : ""} {jobData.maxJdSalary} {jobData.maxJdSalary ? "k" : ""} {jobData.salaryCurrencyCode}</p>
            <p className={styles.aboutCompanyText}>About Company</p>
            <p className={styles.aboutUsText}>About us</p>
            <p className={styles.genericText}>{jobData.jobDetailsFromCompany}</p>
            <p className={styles.minimumExperienceHeading}>Minimum Experience</p>
            <p className={styles.minimumExperienceText}>{jobData.minExp ? jobData.minExp : "Not Provided"} {jobData.minExp ? "years" : ""}</p>
            <button className={styles.easyApplyButton}>Easy Apply</button>
            <button className={styles.unlockReferralAsksButton}>Unlock referral asks</button>
        </div>
    );
}

export default JobCard;