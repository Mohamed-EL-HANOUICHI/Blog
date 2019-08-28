import { Component, OnInit } from '@angular/core';
import { PostComponent,Post } from './../post/post.component';
import {PostService} from './../services/post.service';
import { Subscription } from 'rxjs/Subscription';
import {Router} from "@angular/router";

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {
  newpost : Post = new Post();

  constructor(private postService: PostService, private route: Router) { }
  ngOnInit() {
  }
 souvgarder(){
  this.postService.postSubject.subscribe(
     (Posts:any[]) => {
       this.newpost.id = Posts.length;
        Posts.push(this.newpost);
     });
     this.route.navigate(['/posts']);

}
}
