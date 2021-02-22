import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ActivatedService {

  ACTIVATED_ITEMS: Array<Item>;

  constructor() {
    this.ACTIVATED_ITEMS = [];
  }

  includesItem(item: Item): boolean {
    return this.ACTIVATED_ITEMS.some(e => JSON.stringify(e) === JSON.stringify(item));
  }

  addItem(item: Item): void {
    this.ACTIVATED_ITEMS.push(item);
  }

  removeItem(item: Item): void {
    let index = this.ACTIVATED_ITEMS.findIndex(e => JSON.stringify(e) === JSON.stringify(item));
    this.ACTIVATED_ITEMS.splice(index, 1);
  }
}