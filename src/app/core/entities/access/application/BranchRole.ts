import { RoleApplication } from "./role/RoleApplication";

export interface BranchRole {
    id: number;
    role: RoleApplication;
    created: string;
    update: string;
    status: number;
}