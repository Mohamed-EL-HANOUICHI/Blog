import { Component, OnInit } from '@angular/core';
import {PostService} from './../services/post.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-listpost',
  templateUrl: './listpost.component.html',
  styleUrls: ['./listpost.component.scss']
})
export class ListpostComponent implements OnInit {
  Posts : any [];
  postSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (Posts : any []) => {
        this.Posts = Posts;
      }
    );
    this.postService.emitPostSubject();
  }

}
