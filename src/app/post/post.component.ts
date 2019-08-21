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
  title: string;
  content: string;
  loveIts:Number;
  created_at: Date;
}
