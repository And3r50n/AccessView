
import { Resource } from "./Resource";
import { Department } from "./Department";
import { Access } from "./access/Access";

export interface Profile {
    id: number;
    code: string;
    description: string;
    departments: Department[],
    accesses: Access[],
    owners: Resource[];
}