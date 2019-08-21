import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  Posts = [{title:'Mon premier Post',content:'je suis heureux je suis heueux je suis heureux je suis heureux this life is very good you have just to see the best part and profit of it ',loveIts: 0,created_at:Date.now()},
           {title:'Mon deuxieme Post',content:'je suis triste pas bien parceque je pense que je ne suis pas tranquil this life is very good you have just to see the best part and profit of it',loveIts: 0,created_at:Date.now()},
           {title:'Encore un Post',content:'je suis normal yeah its my live very normal nothing special this life is very good you have just to see the best part and profit of it',loveIts: 0,created_at:Date.now()},
  ]
}
