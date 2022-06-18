import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {ComplainURLComponent} from './pages/complain-url/complain-url.component';
import {PostComponent} from './pages/post/post.component';



const routes: Routes = [
   { path: '', component: HomeComponent },
   { path:'complain/:postid' ,component:ComplainURLComponent},
   { path:'post' ,component:PostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    
  ]
})
export class  ClientRoutingModule { }