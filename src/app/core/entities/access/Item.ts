import { Role, RoleRequest } from "./Role";

export interface Item {
    id: number;
    name: String;
    status: number;
}



export interface ItemProperties {
    id: number;
    name: String;
    environment: String;
    application: String;
    created: Date;
    updated: Date;
    status: number;
    roles: Role[];
}


export interface ItemRequest {
    id: number;
    status: number;
    roles: RoleRequest[];
}

