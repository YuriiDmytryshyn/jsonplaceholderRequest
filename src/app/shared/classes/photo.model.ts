import { Item } from "../interfaces/item.interface";
import { IPhoto } from "../interfaces/photo.inerface";

export class Photo implements Item, IPhoto {
    constructor(
        public albumId: number,
        public id: number,
        public title: string,
        public url: string,
        public thumbnailUrl: string,
    ) { }
}