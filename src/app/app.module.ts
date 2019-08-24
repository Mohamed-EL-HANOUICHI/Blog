import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostItemComponent } from './post-item/post-item.component';
import {PostService} from './services/post.service';
import {NewpostComponent } from './newpost/newpost.component';
import {RouterModule,Routes} from '@angular/router';
import { ListpostComponent } from './listpost/listpost.component';
import {FormsModule} from '@angular/forms';

const routes:Routes =[
  { path:'posts', component:ListpostComponent},
  { path:'new',component:NewpostComponent},
  { path:'',redirectTo:'posts',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostItemComponent,
    NewpostComponent,
    ListpostComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),FormsModule
  ],
  providers: [
      PostService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
