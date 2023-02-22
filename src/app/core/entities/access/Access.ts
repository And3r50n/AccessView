import { RootApplication } from "./application/RootApplication";
import { BranchApplication } from "./BranchApplication";

export interface Access {
    id: number;
    application: RootApplication;
    branches: BranchApplication[];    
    status: number;
}