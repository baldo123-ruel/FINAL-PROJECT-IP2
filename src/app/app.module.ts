import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ClientModule} from './Complainmodules/ClientSide/clientmodule/client-module';
import { NgToastModule } from 'ng-angular-popup';


@NgModule({
  declarations: [
    AppComponent,
  
 
   
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
