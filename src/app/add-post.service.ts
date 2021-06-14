import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostPayload} from "./post-payload";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(protected httpClient:HttpClient) { }

  addPost(postPayload: PostPayload){
    return this.httpClient.post("http://localhost:8080/api/posts", postPayload);
  }
  getAllPosts(): Observable<Array<PostPayload>>{
    return this.httpClient.get<Array<PostPayload>>("http://localhost:8080/api/posts/all")
  }

  getPost(paramLink: Number): Observable<PostPayload>{
    return this.httpClient.get<PostPayload>("http://localhost:8080/api/posts/get")
  }
}
