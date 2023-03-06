

import { Item } from "./Item";

export interface Access {
    id: number;
    applicationId: number;
    name: String;
    itens: Item[];
    accesses?: Access[];
    status: number;    
}