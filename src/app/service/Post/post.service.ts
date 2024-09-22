import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http:HttpClient) { }

  getPosts(){
    return this._http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)
  }

  deletePost(post:Post){
    return this._http.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
  }
}
