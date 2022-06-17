import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ClientModule} from './Complainmodules/ClientSide/clientmodule/client-module';



@NgModule({
  declarations: [
    AppComponent,
  
 
   
  ],
  imports: [
   ClientModule,
    BrowserModule,
    AppRoutingModule,
 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
