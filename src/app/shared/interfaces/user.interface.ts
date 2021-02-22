
import { Address } from "../classes/address.model";
import { Company } from "../classes/company.model";

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}