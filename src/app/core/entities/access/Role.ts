
export interface Role {
    id: number;
    code:number,
    name: String;
    attribute: String;
    status: number;
}


export interface RoleProperties {
    id: number;
    code:number;
    name: String;
    attribute: String;
    created: Date;
    updated: Date;
    status: number;
}

export interface RoleRequest {
    id: number;
    code:number;
    status: number;
}