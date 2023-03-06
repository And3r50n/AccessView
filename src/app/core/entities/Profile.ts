
import { Resource } from "./Resource";
import { Department } from "./Department";

export interface Profile {
    id: number;
    code: string;
    description: string;
    departments: Department[],
    owners: Resource[];
}