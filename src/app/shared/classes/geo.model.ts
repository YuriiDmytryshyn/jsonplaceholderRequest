import { IGeo } from "../interfaces/geo.interface";

export class Geo implements IGeo {
    constructor(
        public lat: string,
        public lng: string,
    ) { }
}