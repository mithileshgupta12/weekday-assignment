import {FC} from "react";
import {IJobData} from "../interfaces.ts";
import styles from "./JobCard.module.css"
import zapIcon from "../assets/lightning.png"
import manIcon from "../assets/man.png"
import userIcon from "../assets/user.png"
import sandClockIcon from "../assets/sand-clock.png"

interface IProps {
    jobData: IJobData;
}

const JobCard: FC<IProps> = ({jobData}) => {
    // Functions
    const openJobLink = (url: string) => {
        window.open(url, "_blank")
    }

    return (
        <div className={styles.jobCardContainer}>
            <p className={styles.postingTime}><span><img className={styles.sandClockIcon} width={10} src={sandClockIcon} alt="sand clock icon"/></span>Posted 10 days ago</p>
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
            <button onClick={() => {
                openJobLink(jobData.jdLink)
            }} className={styles.easyApplyButton}><span><img className={styles.zapIcon} width={15} src={zapIcon}
                                                             alt="zap icon"/></span>Easy Apply
            </button>
            <button className={styles.unlockReferralAsksButton}><span>
                <img className={styles.manIcon} width={15} src={manIcon} alt="man icon"/>
                <img className={styles.userIcon} width={15} src={userIcon} alt="user icon"/>
            </span>Unlock
                referral asks
            </button>
        </div>
    );
}

export default JobCard;