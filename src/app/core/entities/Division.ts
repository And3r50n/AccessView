
import { BrancheSections } from "./Branches";

export interface Division {
    id: number;
    name: string;
    status: number;
    branches: BrancheSections[],
}