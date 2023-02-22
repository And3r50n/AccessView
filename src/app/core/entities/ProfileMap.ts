
import { Division } from "./Division";
import { Resource } from "./Resource";

export interface ProfileMap {
    id: number;
    code: string;
    description: string;
    divisions: Division[];
    owners: Resource[];
}