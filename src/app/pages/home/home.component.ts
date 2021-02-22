import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { forkJoin, Observable } from 'rxjs';
import { ActivatedService } from 'src/app/shared/services/activated.service';
import { Item } from 'src/app/shared/interfaces/item.interface';
import { IPhoto } from 'src/app/shared/interfaces/photo.inerface';
import { IPost } from 'src/app/shared/interfaces/post.interface';
import { IUser } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data$: Observable<{ photos: IPhoto[], posts: IPost[], users: IUser[] }>;

  constructor(
    private apiService: ApiService,
    private activatedService: ActivatedService
  ) { }

  ngOnInit(): void {
    this.data$ = forkJoin({
      photos: this.apiService.getPhotos(),
      posts: this.apiService.getPosts(),
      users: this.apiService.getUsers(),
    });
  }

  isActivated(item: Item): boolean {
    return this.activatedService.includesItem(item);
  }

  addToActivated(item: Item): void {
    this.activatedService.addItem(item);
  }

  removeFromActivated(item: Item): void {
    this.activatedService.removeItem(item);
  }
}
