import { Application } from "./Application";

export interface SubApplication extends Application {
    rootApplicationId:number;
    environment: string;
    url: string;
	ip: string;
	domain: string;
}