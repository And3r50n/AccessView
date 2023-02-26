import { JobTitle } from "./JobTitle";

export interface Section {
    id: number;
    code: number;
    name: string;
    jobTitles: JobTitle[];
    status: number;
}