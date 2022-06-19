import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ClientModule} from './Complainmodules/ClientSide/clientmodule/client-module';
import { NgToastModule } from 'ng-angular-popup';
import { LoginSignupComponent } from './Complainmodules/ClientSide/pages/login-signup/login-signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    
  
 
   
  ],
  imports: [
   ClientModule,
    BrowserModule,
    AppRoutingModule,
    NgToastModule,
    BrowserAnimationsModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
