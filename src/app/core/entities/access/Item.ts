import { Role } from "./Role";

export interface Item {
    id: number;
    name: String;
    roles: Role[];
    status: number;    
}