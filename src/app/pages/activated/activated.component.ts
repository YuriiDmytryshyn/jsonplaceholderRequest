import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Photo } from 'src/app/shared/classes/photo.model';
import { Post } from 'src/app/shared/classes/post.model';
import { User } from 'src/app/shared/classes/user.model';
import { Item } from 'src/app/shared/interfaces/item.interface';
import { ActivatedService } from 'src/app/shared/services/activated.service';

@Component({
  selector: 'app-activated',
  templateUrl: './activated.component.html',
  styleUrls: ['./activated.component.scss']
})
export class ActivatedComponent implements OnInit {

  activeCard: Array<Item> = [];
  pageSlice: Array<Item> = [];

  constructor(
    private activatedService: ActivatedService
  ) { }

  ngOnInit(): void {
    this.activeCard = this.activatedService.ACTIVATED_ITEMS;
  }

  onPageChange(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.activeCard.length) {
      endIndex = this.activeCard.length;
    }
    this.pageSlice = this.activeCard.slice(startIndex, endIndex);
  }

  isPhoto(item: Item): boolean {
    return (item as Photo).thumbnailUrl != undefined;
  }

  isPost(item: Item): boolean {
    return (item as Post).userId != undefined;
  }

  isUser(item: Item): boolean {
    return (item as User).address != undefined;
  }
}
