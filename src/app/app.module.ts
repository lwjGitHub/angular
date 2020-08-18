import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { LUpperCasePipe } from './filter/l-upper-case.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    LUpperCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
