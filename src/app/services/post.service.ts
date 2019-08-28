import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import { PostComponent,Post} from './../post/post.component';

@Injectable()
export class PostService{

  constructor(private http: HttpClient, private route: Router) { }


 postSubject = new Subject<any[]>();

  private Posts  = [
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

  savePostsToServer() {
    this.http
      .put('https://blog-15def.firebaseio.com/Posts.json', this.Posts)
      .subscribe(
        () => {

          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
  afficherPostsFromServer() {
  this.http
    .get<any[]>('https://blog-15def.firebaseio.com/Posts.json')
    .subscribe(
      (response) => {
        this.Posts=response;
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );



}

}
