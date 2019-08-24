import { Component, OnInit,Input } from '@angular/core';
import {PostService} from './../services/post.service';
import { PostComponent,Post } from './../post/post.component';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() list : any;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }
  Onlike(){
    this.list.loveIts++;
  }
  Ondislike(){
    this.list.loveIts--;

  }
  Onsuppremer(){
    this.postService.postSubject.subscribe(
       (Posts:any[]) => {
          Posts.splice(Posts.indexOf(this.list),1);
       })

  }
}
