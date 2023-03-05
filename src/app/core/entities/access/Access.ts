

import { Item } from "./Item";

export interface Access {
    id: number;
    code: number;
    name: String;
    itens: Item[];
    status: number;    
}