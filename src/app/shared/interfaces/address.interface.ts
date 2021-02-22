import { Geo } from "../classes/geo.model";

export interface IAddress{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}