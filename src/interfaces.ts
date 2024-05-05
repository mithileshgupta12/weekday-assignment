export interface IJobData {
    jdUid: string;
    logoUrl: string;
    companyName: string;
    jobRole: string;
    location: string;
    minJdSalary: number | null;
    maxJdSalary: number | null;
    salaryCurrencyCode: string;
    jobDetailsFromCompany: string;
    minExp: number | null;
    maxExp: number | null;
    jdLink: string;
}