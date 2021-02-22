import { Item } from "../interfaces/item.interface";
import { IUser } from "../interfaces/user.interface";
import { Address } from "./address.model";
import { Company } from "./company.model";

export class User implements Item, IUser {
    constructor(
        public id: number,
        public name: string,
        public username: string,
        public email: string,
        public address: Address,
        public phone: string,
        public website: string,
        public company: Company,
    ) { }
}