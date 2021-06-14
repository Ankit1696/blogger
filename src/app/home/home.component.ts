import { Component, OnInit } from '@angular/core';
import {AddPostService} from "../add-post.service";
import {Observable} from "rxjs";
import {PostPayload} from "../post-payload";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  // @ts-ignore
  posts: Observable<Array<PostPayload>>
  constructor(private postService:AddPostService) { }

  ngOnInit(): void {
    this.posts=this.postService.getAllPosts();
  }

}
