import { Item } from "../interfaces/item.interface";
import { IPost } from "../interfaces/post.interface";

export class Post implements Item, IPost {
    constructor(
        public userId: number,
        public id: number,
        public title: string,
        public body: string,
    ) { }
}