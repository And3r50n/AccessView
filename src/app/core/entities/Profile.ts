
import { Resource } from "./Resource";
import { Section } from "./Section";

export interface Profile {
    id: number;
    code: string;
    description: string;
    sections: Section[],
    owners: Resource[];
}