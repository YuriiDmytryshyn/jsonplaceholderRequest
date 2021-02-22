import { IAddress } from "../interfaces/address.interface";
import { Geo } from "./geo.model";

export class Address implements IAddress {
    constructor(
        public street: string,
        public suite: string,
        public city: string,
        public zipcode: string,
        public geo: Geo,
    ) { }
}