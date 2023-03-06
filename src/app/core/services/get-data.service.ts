import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environment';
import { PostsData } from '../models/post.model';

@Injectable()
export class GetDataService {

  // Service used to get data from given URL
  constructor(private httpClient: HttpClient) { }

  getPostsData(): Observable<PostsData[]> {
    console.log('pegando coisas do backend')
    const url = environment.urls.jsonDataUrl + environment.urls.endpoints.postsUrl;
    return this.httpClient.get<PostsData[]>(url);
  }

}
