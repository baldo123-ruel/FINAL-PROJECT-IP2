import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HttpClientModule} from '@angular/common/http';

import {ComplainListComponent} from '../components/complain-list/complain-list.component';
import {CreatepostComponent} from '../components/createpost/createpost.component';
import {FooterComponent} from '../components/footer/footer.component';
import {HeaderComponent} from '../components/header/header.component';
import {TextDisplayComponent} from '../components/text-display/text-display.component';

import {ComplainURLComponent} from '../pages/complain-url/complain-url.component';
import {HomeComponent} from '../pages/home/home.component';
import {PostComponent} from '../pages/post/post.component';
import {ClientRoutingModule} from '../client-routing.module';
import {SuggestionsComponent} from '../components/suggestions/suggestions.component';





@NgModule({
  declarations: [
    ComplainListComponent,
    CreatepostComponent,
    FooterComponent,
    HeaderComponent,
    TextDisplayComponent,
    ComplainURLComponent,
    HomeComponent,
    PostComponent,
    SuggestionsComponent
     
  ],
  imports: [
   CommonModule,
   ClientRoutingModule,
   HttpClientModule

  ]
})
export class ClientModule { }
