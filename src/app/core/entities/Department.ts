import { JobTitle } from "./JobTitle";

export interface Department {
    id: number;
    code: number;
    name: string;
    jobTitles: JobTitle[];
    status: number;
}