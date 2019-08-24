import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService{


 postSubject = new Subject<any[]>();

  private Posts = [
    {
     id:0,
     title:'Mon premier Post',
     content:'je suis heureux je suis heueux je suis heureux je suis heureux this life is very good you have just to see the best part and profit of it ',
     loveIts: 0,
     created_at:Date.now()
    },
   {
     id:1,
    title:'Mon deuxieme Post',
    content:'je suis triste pas bien parceque je pense que je ne suis pas tranquil this life is very good you have just to see the best part and profit of it',
    loveIts: 0,
    created_at:Date.now()
  },
   {
     id:2,
    title:'Encore un Post',
    content:'je suis normal yeah its my live very normal nothing special this life is very good you have just to see the best part and profit of it',
    loveIts: 0,
    created_at:Date.now()
   },
  ];

  emitPostSubject() {
    this.postSubject.next(this.Posts.slice());
  }



}
