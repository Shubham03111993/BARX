import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import {HttpClientModule} from '@angular/common/http';
import {FetchService} from './fetch.service';

@NgModule({
  declarations: [
    AppComponent,
    FetchDataComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
