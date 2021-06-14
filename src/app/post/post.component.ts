import { Component, OnInit } from '@angular/core';
import {AddPostService} from "../add-post.service";
import {ActivatedRoute} from "@angular/router";
import {PostPayload} from "../post-payload";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // @ts-ignore
  paramLink: Number;
  // @ts-ignore
   post: PostPayload;
  constructor(private postService: AddPostService, private router:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.router.params.subscribe(params =>{
      this.paramLink=params['id']
    });

    this.postService.getPost(this.paramLink).subscribe((data: PostPayload) =>{

      this.post = data;

    },
      (error: any) =>{
      console.log("failure response")
      }
      )
  }


}
