import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { FormsModule } from '@angular/forms';
import { TestService } from './service/et.service';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClient,
    FormsModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
