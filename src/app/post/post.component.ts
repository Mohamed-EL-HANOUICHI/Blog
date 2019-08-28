import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

@Input() postlist : Post[];

  constructor() { }

  ngOnInit() {
  }
}
export class Post {
  id:Number;
  title: string;
  content: string;
  loveIts:Number = 0 ;
  created_at: Date;

}
