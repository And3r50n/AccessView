

import { Section } from "./Section";

export interface Department {
    id: number;
    name: string;
    sections: Section[],
}