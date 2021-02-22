import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPhoto } from '../interfaces/photo.inerface';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { IPost } from '../interfaces/post.interface';

const BASE_URL = "https://jsonplaceholder.typicode.com/";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<IPhoto[]> {
    return this.getData<IPhoto[]>("photos")
  }

  getUsers(): Observable<IUser[]> {
    return this.getData<IUser[]>("users")
  }

  getPosts(): Observable<IPost[]> {
    return this.getData<IPost[]>("posts")
  }

  private getData<T>(path: String): Observable<T> {
    return this.http.get<T>(BASE_URL + path)
  }
}
