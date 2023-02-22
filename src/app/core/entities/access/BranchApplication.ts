
import { BranchRole } from "./application/BranchRole";
import { SubApplication } from "./application/SubApplication";

export interface BranchApplication {
    id: number;
    application: SubApplication;
    branches: BranchRole[];
    created: string;
    updated: string;
    status: number;
}