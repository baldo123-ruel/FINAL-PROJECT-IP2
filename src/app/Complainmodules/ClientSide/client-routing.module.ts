import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {ComplainURLComponent} from './pages/complain-url/complain-url.component';
import {PostComponent} from './pages/post/post.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { AuthenticationRouteGuard } from './services/authentication-route.guard';


const routes: Routes = [

   { path: 'Home', component: HomeComponent, canActivate:[AuthenticationRouteGuard] },
   { path:'complain/:postid' ,component:ComplainURLComponent , canActivate:[AuthenticationRouteGuard]},
   { path: '', component: LoginSignupComponent },
   { path:'complain' ,component:ComplainURLComponent , canActivate:[AuthenticationRouteGuard]},
   { path:'post' ,component:PostComponent , canActivate:[AuthenticationRouteGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    
  ]
})
export class  ClientRoutingModule { }