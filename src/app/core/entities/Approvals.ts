import { SubApplication } from "./access/application/SubApplication";


export interface Approvals {
    id: number;
    name: string;
    applications: SubApplication[];
}