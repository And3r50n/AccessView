
import { Department } from "./Department";
import { Resource } from "./Resource";

export interface Profile {
    id: number;
    code: string;
    description: string;
    departments: Department[];
    owners: Resource[];
}