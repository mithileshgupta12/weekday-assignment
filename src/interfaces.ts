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

export interface IFilters {
    role: string;
    numEmployees: string;
    experience: string;
    isRemote: string;
    minBasePay: string;
    companyName: string;
}