import { ICompany } from "../interfaces/company.interface";

export class Company implements ICompany {
    constructor(
        public name: string,
        public catchPhrase: string,
        public bs: string,
    ) { }
}