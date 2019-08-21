import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() list : any;

  constructor() { }

  ngOnInit() {
  }
  Onlike(){
    this.list.loveIts++;
  }
  Ondislike(){
    this.list.loveIts--;

  }

}
