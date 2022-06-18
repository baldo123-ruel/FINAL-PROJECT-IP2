import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ClientModule} from './Complainmodules/ClientSide/clientmodule/client-module';
import { NgToastModule } from 'ng-angular-popup';
import { LoginSignupComponent } from './Complainmodules/ClientSide/pages/login-signup/login-signup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
  
 
   
  ],
  imports: [
   ClientModule,
    BrowserModule,
    AppRoutingModule,
    NgToastModule
 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
